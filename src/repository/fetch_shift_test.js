import test from "node:test";
import {
	fetchDateShiftName,
	fetchIndividualShift,
	fetchShiftReport,
} from "./fetch_shift.js";
import { MOCK_ENV } from "../testhelper.js";

test('fetchDateShiftName', async () => {
	console.log(await fetchDateShiftName(MOCK_ENV, '2024/04/20'));
})

test('fetchIndividualShift', async () => {
	console.log(await fetchIndividualShift(MOCK_ENV, 'aa'));
})

test('fetchShiftReport', async () => {
	console.log(await fetchShiftReport(MOCK_ENV));
})
