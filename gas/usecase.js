function testUsecase() {
  console.log("testing DateShift")
  let param = "2024/04/20"
  let result = DateShift(param)
  console.log(result)

  console.log("testing IndividualShift")
  param = "aa"
  result = IndividualShift(param)
  console.log(result)

  console.log("testing ShiftReport")
  result = ShiftReport()
  console.log(result)
}

function DateShift(param) {
  const date = convertStrToDate(param)
  if (date instanceof Error) {
    return JSON.stringify(makeResult(date))
  }
  const members = fetchDateShift(date)
  return JSON.stringify(makeResult(members))
}

function IndividualShift(param) {
  const shift = fetchIndividualShift(param)
  return JSON.stringify(makeResult(shift))
}

function ShiftReport() {
  const today = new Date()
  const tommorow = new Date(today.setDate(today.getDate() + 1))
  const weekAfter = new Date(today.setDate(today.getDate() + 7))
  const membersTommorow = makeResult(fetchDateShift(tommorow))
  const membersWeekAfter = makeResult(fetchDateShift(weekAfter))
  const report = {
    "tommorow": membersTommorow,
    "week_after": membersWeekAfter,
  }
  return JSON.stringify(report)
}
