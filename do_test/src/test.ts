// Durable object, one for each live chat, manages everything for that livechat. Has two websockets
// one from the customer and one from the agent. Also manages this livechat forever. So the
// transcript, etc.

/**
 * This is the class that represents a live chat from a single email address, its ID is the email
 * address.
 */
export class DOTest {
	constructor(state: DurableObjectState) {}

	async fetch(request: Request) {
		return new Response('Hello World From DO!');
	}
}
