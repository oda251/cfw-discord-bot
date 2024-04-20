import {
	fetchDateShiftFromGasApi,
	fetchIndividualShiftFromGasApi,
	fetchShiftReportFromGasApi,
} from "./gas/fetch_shift.js";
import { fetchDiscordUserIdFromName } from "./discord/fetch_userid.js";

export async function fetchDateShiftName(env, dateStr) {
	const json = await fetchDateShiftFromGasApi(env, dateStr);
	return JSON.parse(json);
}

export async function fetchDateShiftId(env, dateStr) {
	const json = await fetchDateShiftFromGasApi(env, dateStr);
	let data = JSON.parse(json);
	if (data.error !== null) {
		return data;
	} else {
		data.result = data.result.map(intraName => fetchDiscordUserIdFromName(env, intraName));
		data.result = await Promise.all(data.result);
		return data;
	}
}

export async function fetchIndividualShift(env, intraName) {
	const json = await fetchIndividualShiftFromGasApi(env, intraName);
	return JSON.parse(json);
}

export async function fetchShiftReport(env) {
	const json = await fetchShiftReportFromGasApi(env);
	const data = JSON.parse(json);
	let result = {
		tommorow: null,
		week_after: null,
	}
	if (data.tommorow.error === null) {
		result.tommorow = data.tommorow.result.map(intraName => fetchDiscordUserIdFromName(env, intraName));
		result.tommorow = await Promise.all(result.tommorow);
	} else {
		result.tommorow = data.tommorow.error;
	}
	if (data.week_after.error === null) {
		result.week_after = data.week_after.result.map(intraName => fetchDiscordUserIdFromName(env, intraName));
		result.week_after = await Promise.all(result.week_after);
	} else {
		result.week_after = data.week_after.error;
	}
	return result;
}
