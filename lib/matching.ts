import type { Project, Profile } from './types'

/**
 * Category to interests mapping
 * Maps project categories to common investor interests
 */
const CATEGORY_TO_INTERESTS: Record<string, string[]> = {
  fintech: ['التكنولوجيا المالية', 'fintech'],
  ai: ['الذكاء الاصطناعي', 'AI', 'artificial intelligence'],
  realestate: ['العقارات', 'real estate'],
  health: ['الصحة الرقمية', 'digital health', 'healthcare'],
  energy: ['الطاقة المستدامة', 'sustainable energy'],
  cybersecurity: ['الأمن السيبراني', 'cybersecurity'],
  ecommerce: ['التجارة الإلكترونية', 'e-commerce'],
  logistics: ['سلاسل الإمداد', 'logistics', 'supply chain'],
}

/**
 * Calculate match score between an investor profile and a project
 * Score ranges from 0-100 based on:
 * - Category/interests match (40 points)
 * - Project verification status (20 points)
 * - Funding progress ratio (20 points)
 * - Profile quality signals (20 points)
 */
export function calculateMatchScore(project: Project, profile: Profile): number {
  let score = 0

  // Factor 1: Category match with investor interests (max 40 points)
  const projectInterests = CATEGORY_TO_INTERESTS[project.category ?? ''] ?? []
  const investorInterests = profile.interests ?? []

  const hasMatch = projectInterests.some(pi =>
    investorInterests.some(ii => ii.toLowerCase().includes(pi.toLowerCase()) || pi.toLowerCase().includes(ii.toLowerCase()))
  )

  if (hasMatch) {
    score += 40
  } else if (investorInterests.length > 0) {
    score += 10 // partial credit for having interests even if no match
  }

  // Factor 2: Project verification status (max 20 points)
  if (project.verified) {
    score += 20
  } else {
    score += 5
  }

  // Factor 3: Funding completeness (max 20 points)
  // Projects with progress indicate investor confidence
  const fundingRatio = project.amount_raised / Math.max(project.funding_goal, 1)
  if (fundingRatio >= 0.75) {
    score += 20
  } else if (fundingRatio >= 0.5) {
    score += 15
  } else if (fundingRatio >= 0.25) {
    score += 10
  } else if (fundingRatio > 0) {
    score += 5
  }

  // Factor 4: Profile quality signals (max 20 points)
  // KYC verified investors get higher scores
  if (profile.kyc_status === 'verified') {
    score += 10
  }
  // Tier reflects commitment level
  if (profile.tier === 'premium') {
    score += 5
  } else if (profile.tier === 'enterprise') {
    score += 10
  }
  // Project quality indicators
  if (project.description && project.description.length > 50) {
    score += 5
  }

  return Math.min(100, score)
}

/**
 * Sort projects by match score relative to an investor profile
 * Returns projects with computed match scores, sorted descending
 */
export function sortProjectsByMatch(
  projects: Project[],
  profile: Profile
): Array<Project & { matchScore: number }> {
  return projects
    .map(p => ({
      ...p,
      matchScore: calculateMatchScore(p, profile),
    }))
    .sort((a, b) => b.matchScore - a.matchScore)
}
