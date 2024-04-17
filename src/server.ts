import { Hono } from 'hono'
import { verifyKeyMiddleware } from './middleware'
import {
	InteractionResponseType,
	InteractionType,
} from 'discord-interactions'
import {} from './commands.json'

const app = new Hono()

app.use(verifyKeyMiddleware())

app.get('/', async (c) => {
	const message = await c.req.json()
	if (message.type === InteractionType.PING) {
		return c.json({
			type: InteractionResponseType.PONG
		});
	};
	if (message.type === InteractionType.APPLICATION_COMMAND) {
		return c.json({
			type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
			data: {
				content: 'Hello, World!'
			}
		});
	};
	return c.json({error: 'Invalid interaction type'}, {status: 400});
});

export { app };