export function parseDate(date) {
  const weekday = "QUA"
  return `${weekday} ${date.time.join(" - ")}`
}
