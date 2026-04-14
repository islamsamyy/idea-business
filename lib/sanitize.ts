/**
 * Input sanitization utilities for user-generated content
 * Prevents XSS and stores reasonable text sizes
 */

/**
 * Sanitize longer text fields (project descriptions, bios)
 * Removes HTML characters, trims whitespace, limits to 1000 chars
 */
export function sanitizeText(input: string): string {
  if (!input || typeof input !== 'string') return ''
  return input
    .trim()
    .replace(/[<>]/g, '') // remove HTML-like chars
    .slice(0, 1000)
}

/**
 * Sanitize shorter text fields (names, titles, emails)
 * Removes HTML characters, trims whitespace, limits to 255 chars
 */
export function sanitizeShortText(input: string): string {
  if (!input || typeof input !== 'string') return ''
  return input
    .trim()
    .replace(/[<>]/g, '')
    .slice(0, 255)
}

/**
 * Validate email format (basic)
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate phone number (basic - just checks digits and min length)
 */
export function isValidPhone(phone: string): boolean {
  const cleaned = phone.replace(/\D/g, '')
  return cleaned.length >= 7 // minimum reasonable phone length
}
