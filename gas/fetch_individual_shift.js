function fetchIndividualShift(intraName) {
  const date = new Date()
  const spreadSheet = getSpreadSheet()
  for (let i=1; i<=3; i++) {
    const sheetName = String(date.getFullYear()) + "-" + String(date.getMonth() + i)
    const sheet = spreadSheet.getSheetByName(sheetName)
    if (sheet === null) {
      break
    }
    const start = i !== 1 ? 1 : date.getDate()
    const result = fetchIndividualShiftFromSheet(sheet, intraName, start)
    if (result !== null) {
      return result
    }
  }
  return result
}

function fetchIndividualShiftFromSheet(sheet, intraName, start) {
  try {
    const range = sheet.getRange(start, 1, 31, 12)
    for (let row=1; row<=range.getNumRows(); row++) {
      for (let col=2; col<=range.getNumColumns(); col++) {
        const value = range.getCell(row, col).getValue()
        if (value === intraName) {
          return convertDateToStr(range.getCell(row, 1).getValue())
        } else if (value === "") {
          break
        }
      }
    }
    return null
  } catch (e) {
    return e
  }
}