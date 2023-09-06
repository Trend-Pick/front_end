export default function getWeekNumber() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();
  const firstDayOfWeek = new Date(year, month, 1).getDay();
  const firstWeekStart = 1 + (7 - firstDayOfWeek);

  let weekNumber = Math.ceil((date - firstWeekStart + 1) / 7);

  if (month === 0 && weekNumber === 0) {
    const lastDayOfPreviousYear = new Date(year - 1, 11, 31);
    const lastDayOfWeek = lastDayOfPreviousYear.getDay();
    const lastWeekStart = 1 + (7 - lastDayOfWeek);
    weekNumber = Math.ceil((date + lastWeekStart) / 7);
  }
  return weekNumber;
}
