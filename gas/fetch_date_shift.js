function fetchDateShift(date) {
  try {
    const sheetName = String(date.getFullYear()) + "-" + String(date.getMonth() + 1)
    const spreadSheet = getSpreadSheet()
    if (spreadSheet === null) {
      return new Error("spreadsheet not found. please tell it to developer.")
    }
    const sheet = spreadSheet.getSheetByName(sheetName)
    if (sheet === null) {
      return []
    }
    const range = sheet.getRange(date.getDate(), 2, date.getDate(), 12)
    let members = []
    for (let i = 1; i <= range.getNumColumns(); i++) {
      const value = range.getCell(1, i).getValue()
      if (value === "") {
        break
      }
      members.push(value)
    }
    return members
  } catch (e) {
    return e
  }
}
