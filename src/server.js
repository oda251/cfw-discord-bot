import { InteractionType, InteractionResponseType } from "discord-interactions";
import { verifyDiscordInteraction } from "./middleware.js";
import { getIndividualShiftReport, getDateShiftReport } from "./usecase/usecase.js";
import { shiftDate, shiftName } from "./commands.js";
import { Hono } from "hono";

const app = new Hono();
app.use('/', verifyDiscordInteraction);
app.post('/', async (c) => {
	const body = await c.req.json();
	if (body.type === InteractionType.APPLICATION_COMMAND) {
		if (body.data.name === shiftName.name) {
			return c.json({
				type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
				data: {
					content: await getIndividualShiftReport(c.env, body.data.options[0].value),
					flags: 1<<6,
				},
			});
		}
		if (body.data.name === shiftDate.name) {
			return c.json({
				type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
				data: {
					content: await getDateShiftReport(c.env, body.data.options[0].value),
					flags: 1<<6,
				},
			});
		}
	}
});

export default app;
