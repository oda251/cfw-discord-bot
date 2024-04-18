import { InteractionType, InteractionResponseType } from "discord-interactions";
import { verifyDiscordInteraction } from "./middleware";
import { Hono } from "hono";

const app = new Hono();
app.use('/', verifyDiscordInteraction);
app.post('/', async (c) => {
	const body = await c.req.json();
	if (body.type === InteractionType.APPLICATION_COMMAND) {
		return c.json({
			type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
			data: {
				content: "Hello, World!",
			},
		});
	}
});

export default app;