import {
	fetchIndividualShift,
	fetchDateShiftName,
	fetchShiftReport,
} from "../repository/fetch_shift.js";

export async function getIndividualShiftReport(env, intraName) {
	const data = await fetchIndividualShift(env, intraName);
	if (data.error !== null) {
		return "エラー: " + data.error + "\n";
	} else {
		let report = `${intraName}さんは\n`;
		if (data.result === null) {
			report += "２か月間シフトがありません\n";
		} else {
			report += `> ${data.result}\nが直近のシフトです\n`;
		}
		return report;
	}
}

export async function getDateShiftReport(env, dateStr) {
	const regex = /^\d{4}\/\d{1,2}\/\d{1,2}$/;
	const isValidDate = regex.test(dateStr);
	if (!isValidDate) {
		return "日付は YYYY/MM/DD の形式で入力してください";
	} else {
		const data = await fetchDateShiftName(env, dateStr);
		if (data.error !== null) {
			return "エラー: " + data.error + "\n";
		}
		let report = `${dateStr}のシフトは\n`;
		if (data.result.length === 0) {
			report += "登録されていません\n";
		} else {
			for (const user of data.result) {
				report += `${user} `;
			}
			report += "です\n";
		}
		return report;
	}
}

export async function getDailyShiftReport(env) {
	const data = await fetchShiftReport(env);
	const convert = async (arr) => {
		let report = "";
		if (!Array.isArray(arr)) {
			report += "エラー: " + arr + "\n";
		} else if (arr.length === 0) {
			report += "シフトがありません\n";
		} else {
			for (const user of arr) {
				if (/^\d+$/.test(user)) {
					report +=  `<@${user}> `;
				} else {
					report += `${user} `;
				}
			}
			report += "\n";
		}
		return report;
	}
	let report = "明日のシフトは\n> ";
	report += await convert(data.tommorow);
	report += "１週間後は\n> ";
	report += await convert(data.week_after);
	report += "以上です\n";
	return report;
}
