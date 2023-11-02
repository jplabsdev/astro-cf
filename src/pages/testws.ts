export function ALL(ctx) {
	const ws = new WebSocket("wss://ws.postman-echo.com/raw");

	ws.send("Hello World!");

	ws.onmessage = (event) => {
		console.log(event.data);
	};

	ws.close();

	return new Response(JSON.stringify({ status: "ok" }));
}
