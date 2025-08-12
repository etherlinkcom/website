import { parseISO, addMonths, isAfter, isValid } from 'date-fns'

/**
 * Returns true if publishedAt is within the last `months` calendar months (default: 1).
 * Safe for invalid/empty dates.
 */
export function isNewByPublishedAt(
  publishedAt?: string,
  months = 1,
  now: Date = new Date()
): boolean {
  if (!publishedAt) return false
  const d = parseISO(publishedAt)
  if (!isValid(d)) return false
  return isAfter(addMonths(d, months), now)
}
