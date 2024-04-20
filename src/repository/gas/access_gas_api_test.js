import { accessGasApi } from "./access_gas_api.js";
import { MOCK_ENV } from "../../testhelper.js";

const MOCK_ENV = {
	GAPI_CLIENT_ID: process.env.GAPI_CLIENT_ID,
	GAPI_CLIENT_SECRET: process.env.GAPI_CLIENT_SECRET,
	GAPI_REFRESH_TOKEN: process.env.GAPI_REFRESH_TOKEN,
	GAS_URL: process.env.GAS_URL,
};

async function testGasApi(env) {
	// test function: return 'hello'
	const payload = {
		function: 'test',
		parameters: [" world!"],
	};
	try { console.log(await accessGasApi(env, payload)); }
	catch (e) { console.error(e); }
}

await testGasApi(MOCK_ENV);