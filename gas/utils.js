function makeResult(v) {
  let result = {
    "result": null,
    "error": null,
  }
  if (v instanceof Error) {
    result.error = v.message
  } else {
    result.result = v
  }
  return result
}

function getDayStr(dayNumber) {
  switch (dayNumber) {
    case 0:
      return ("Sun");
    case 1:
      return ("Mon");
    case 2:
      return ("Tue");
    case 3:
      return ("Wed");
    case 4:
      return ("Thu");
    case 5:
      return ("Fri");
    case 6:
      return ("Sat");
    default:
      return ("");
  }
}

function convertDateToStr(date) {
  return String(date.getFullYear()) + "/" + String(date.getMonth() + 1) + "/" + String(date.getDate()) + "(" + getDayStr(date.getDay()) + ")"
}

function convertStrToDate(str) {
  const date = new Date(str)
  if (isNaN(date.getFullYear())
    || isNaN(date.getMonth())
    || isNaN(date.getDate())
  ) {
    return new Error('invalid date input')
  }
  return date
}
