import { Env } from "hono";
import { app } from "./server";

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext) {
		return app.fetch(request, env, ctx);
	}
}
