import { accessGasApi } from "./access_gas_api.js";

export async function fetchDateShiftFromGasApi(env, dateStr) {
	const payload = {
		function: 'DateShift',
		parameters: [dateStr],
	};
	try { return await accessGasApi(env, payload); }
	catch (e) { console.error(e) }
}

export async function fetchIndividualShiftFromGasApi(env, intraName) {
	const payload = {
		function: 'IndividualShift',
		parameters: [intraName],
	};
	try { return await accessGasApi(env, payload); }
	catch (e) { console.error(e) }
}

export async function fetchShiftReportFromGasApi(env) {
	const payload = {
		function: 'ShiftReport',
		parameters: [],
	};
	try { return await accessGasApi(env, payload); }
	catch (e) { console.error(e) }
}
