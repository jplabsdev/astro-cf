export async function ALL(ctx) {
	const DOTest = ctx.locals.runtime.env.DOTest;

	const id = DOTest.idFromName("1234");
	const stub = DOTest.get(id);

	return await stub.fetch("https://www.example.com/");
}
