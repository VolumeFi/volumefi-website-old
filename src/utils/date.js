export const convertDateString = dateStr => {
  const stamp = Date.parse(dateStr)
  const date = new Date(stamp)
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }

  return date.toLocaleDateString("en-US", options)
}

export const parseDate = str => {
  const dateStr = str.split(" ")[0]
  const timeStr = str.split(" ")[1]

  const year = Number(dateStr.split("-")[0])
  const month = Number(dateStr.split("-")[1]) - 1
  const day = Number(dateStr.split("-")[2])

  const hour = Number(timeStr.split(":")[0])
  const minute = Number(timeStr.split(":")[1])

  return new Date(year, month, day, hour, minute)
}

export const getHourOffsetLocalTimezone = () => {
  var date = new Date()
  const offset = date.getTimezoneOffset() / 60

  return offset // offset Hours: if value is 4, it means UTC-4
}

export const convertUTCtoLocalTime = utcTime => {
  return utcTime - getHourOffsetLocalTimezone() * 3600 * 1000
}

const dateOptions = {
  // year: "numeric",
  day: "numeric",
  month: "long",
  weekday: "short",
  hour12: true,
  hour: "2-digit",
  minute: "2-digit",
};

export const convertTimeString = (dateStr, toLocal = false) => {
  const stamp = toLocal
    ? convertUTCtoLocalTime(parseDate(dateStr).getTime())
    : parseDate(dateStr).getTime();

  const date = new Date(stamp);

  if (date === null) {
    return "";
  } else {
    return date.toLocaleDateString("en-US", dateOptions);
  }
};
