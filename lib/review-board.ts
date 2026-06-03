/**
 * Review-board data model — built DARK (rendered nowhere).
 *
 * OWNER DECISION (v3, locked): recruit named, credentialed reviewers BEFORE
 * publishing any "Reviewed by" byline. Until real reviewers are signed:
 *   - REVIEWERS is empty,
 *   - REVIEW_BYLINES_ENABLED is false,
 *   - and NOTHING renders a byline or an "independent review in progress" state.
 * Authority rests on citations + methodology transparency in the meantime.
 *
 * A build-time content invariant (scripts/content-invariants.mjs) asserts that
 * no "Reviewed by" / "review in progress" string ships while this flag is off.
 * When reviewers sign: populate REVIEWERS, flip the flag, and build the
 * <ReviewedBy> renderer — that is the ONLY moment bylines may appear.
 */

export type ReviewerCredential = "clinical" | "legal" | "survivor-advocate" | "research";

export type Reviewer = {
  /** URL-safe id, e.g. "jane-doe-phd". */
  slug: string;
  name: string;
  /** Post-nominals / role, e.g. "PhD, Clinical Psychology". */
  title: string;
  credentials: ReviewerCredential[];
  /** Optional authoritative profile (institution page, ORCID). */
  profileUrl?: string;
  /** Disclosed conflicts of interest, or "None declared". */
  conflicts: string;
};

export type Review = {
  reviewerSlug: string;
  /** ISO date the review was completed, e.g. "2026-07-01". */
  reviewedOn: string;
  /** When this page is next due for review, e.g. "2027-07-01". */
  nextReviewDue?: string;
};

/**
 * MASTER SWITCH. Stays false until credentialed reviewers are signed.
 * Flipping this is a deliberate, owner-gated act — never a default.
 */
export const REVIEW_BYLINES_ENABLED = false;

/** Empty until reviewers are recruited. Do not add placeholder/fake entries. */
export const REVIEWERS: readonly Reviewer[] = [];

/** Page-path → reviews. Empty until reviewers are recruited. */
export const REVIEWS: Readonly<Record<string, Review[]>> = {};

/**
 * Resolve the reviews to display for a page. Returns [] whenever bylines are
 * disabled OR no reviewer is signed — so callers render nothing by default.
 */
export function reviewsForPage(path: string): Review[] {
  if (!REVIEW_BYLINES_ENABLED) return [];
  return REVIEWS[path] ?? [];
}

/** Look up a signed reviewer by slug; undefined while the registry is empty. */
export function reviewerBySlug(slug: string): Reviewer | undefined {
  return REVIEWERS.find((r) => r.slug === slug);
}
