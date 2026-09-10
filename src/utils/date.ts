/** ISO `YYYY-MM-DD`. Locale-neutral, fits the monospace layout. */
export function formatDate(input: string | Date): string {
  const date = typeof input === "string" ? new Date(input) : input;
  if (Number.isNaN(date.getTime())) return String(input);
  return date.toISOString().slice(0, 10);
}

export function yearOf(input: string | Date): number {
  return new Date(input).getUTCFullYear();
}
