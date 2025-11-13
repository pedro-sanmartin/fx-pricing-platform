/**
 * Format currency rate with locale-specific formatting
 * @param {number} rate - The exchange rate
 * @param {string} locale - Locale string (default: 'es-CL')
 * @returns {string} Formatted rate string
 */
export function formatRate(rate, locale = 'es-CL') {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(rate)
}

/**
 * Format date from ISO string to readable format
 * @param {string} isoDate - ISO date string
 * @param {string} locale - Locale string (default: 'es-CL')
 * @returns {string} Formatted date string
 */
export function formatDate(isoDate, locale = 'es-CL') {
  const date = new Date(isoDate)
  const weekday = date.toLocaleDateString(locale, {
    weekday: 'long',
    timeZone: 'UTC'
  })
  const day = date.getUTCDate()
  const month = date.toLocaleDateString(locale, {
    month: 'long',
    timeZone: 'UTC'
  })
  const hours = String(date.getUTCHours()).padStart(2, '0')
  const minutes = String(date.getUTCMinutes()).padStart(2, '0')
  return `${weekday} ${day} de ${month} a las ${hours}:${minutes}`
}
