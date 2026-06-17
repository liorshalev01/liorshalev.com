const dateFormat = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

/** Format a date as e.g. "Jun 17, 2026". */
export function formatDate(date: Date): string {
  return dateFormat.format(date);
}
