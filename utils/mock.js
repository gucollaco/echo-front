export function randomDate(start, end) {
  if (start === undefined) {
    start = new Date()
    start.setDate(start.getDate() - 60)
  }

  if (end === undefined) {
    end = new Date()
    // end.setDate(end.getDate() + 30)
  }

  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  )
}
