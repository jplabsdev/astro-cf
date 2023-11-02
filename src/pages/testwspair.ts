export function ALL(context) {
	if (context.request.headers.get("Upgrade") === "websocket") {
		console.log(context.request.method);

		// Create a websocket server and client pair.
		const [client, server] = Object.values(new WebSocketPair());

		// Accept the websocket connection.
		server.accept();

		// Send a hello world message to the client.
		server.send(JSON.stringify({ message: "Hello World" }));

		// Return the websocket connection to the client which would be client
		// side JS like `new WebSocket(url_of_this_service)`.
		return new Response(null, { status: 101, webSocket: client });
	}

	return new Response(null, { status: 426 });
}
