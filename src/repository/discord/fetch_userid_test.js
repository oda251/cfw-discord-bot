import test from "node:test";
import { MOCK_ENV } from "../../testhelper.js";
import { fetchDiscordUserIdFromName } from "./fetch_userid.js";

test('fetchDiscordUserIdFromName', async () => {
	console.log(await fetchDiscordUserIdFromName(MOCK_ENV, 'aa'));
})
