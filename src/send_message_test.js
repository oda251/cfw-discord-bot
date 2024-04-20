import test from "node:test";
import { MOCK_ENV } from "./testhelper.js";
import { sendMessageToChannel } from "./send_message.js"

test("sendMessageToChannel", async () => {
	await sendMessageToChannel(MOCK_ENV, "test");
})
