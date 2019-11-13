export function parseDate(date) {
  const weekday = "QUA"
  return `${weekday} ${date.time.join(" - ")}`
}

export function parseTime(date) {
  return date.time.join(" - ")
}
