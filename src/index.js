import app from "./server.js";
import { getDailyShiftReport } from "./usecase/usecase.js";
import { sendMessageToChannel } from "./send_message.js";

export default {
	fetch: app.fetch,
	scheduled: async function (event, env, ctx) {
		const report = await getDailyShiftReport(env);
		await sendMessageToChannel(env, report);
	}
}
