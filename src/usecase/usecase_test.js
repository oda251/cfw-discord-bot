import { getDailyShiftReport } from "./usecase.js";
import { test } from "node:test";
import { MOCK_ENV } from "../testhelper.js";

test("getDailyShiftReport", async () => {
	const report = await getDailyShiftReport(MOCK_ENV);
	console.log(report);
});