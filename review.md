# Code Review -- Champions Choice Roofing

## Verdict: PASS WITH NOTES

## Summary
Well-structured Next.js 16 marketing site with clean component architecture, proper SEO foundations, and solid Tailwind/shadcn usage. No security issues, no critical bugs. The build passes cleanly with zero TypeScript errors. A handful of accessibility gaps and minor code quality items worth fixing before going live.

## Automated Check Results
- Secrets scan: CLEAN
- Dangerous patterns: 1 finding (dangerouslySetInnerHTML -- safe usage, see notes)
- TODO/FIXME: CLEAN
- Build: PASS (all 10 pages statically generated)
- ESLint: 1 warning (unused import)
- Dependency audit: CLEAN (0 vulnerabilities)
- TypeScript strict mode: Enabled

---

## Issues

### [Low] Unused import in footer
- **File:** `src/components/footer.tsx:2`
- **Description:** `ExternalLink` is imported from lucide-react but never used. ESLint flagged this.
- **Suggested fix:** Remove `ExternalLink` from the import.

### [Medium] Missing `aria-label` on mobile menu trigger
- **File:** `src/components/navbar.tsx:99-103`
- **Description:** The `SheetTrigger` hamburger menu button has no `aria-label`. Screen readers will announce it as an unlabeled button.
- **Suggested fix:** Add `aria-label="Open menu"` to the `SheetTrigger`.

### [Medium] Missing `aria-label` on mobile phone button
- **File:** `src/components/navbar.tsx:93-97`
- **Description:** The phone icon button in the mobile nav has no accessible label. A screen reader user won't know what it does.
- **Suggested fix:** Add `aria-label="Call (502) 434-8253"` to the wrapping `<a>` tag or the `Button`.

### [Medium] Contact form Select has no associated label `for`/`id`
- **File:** `src/components/contact-form.tsx:108`
- **Description:** The "Service Needed" `<Label>` has no `htmlFor` attribute and the `Select` has no `id`. This breaks the label-input association for accessibility.
- **Suggested fix:** Add `htmlFor="service"` to the Label and pass `id="service"` to the SelectTrigger (or wrap differently depending on shadcn's Select implementation).

### [Low] `StarRating` component missing accessible text
- **File:** `src/components/star-rating.tsx:3-14`
- **Description:** The star icons are purely visual. Screen readers will either skip them or announce "star star star star star" with no context.
- **Suggested fix:** Add `aria-label={`${rating} out of 5 stars`}` to the container `div` and `role="img"`, then add `aria-hidden="true"` to each `Star` icon.

### [Low] Footer `new Date().getFullYear()` renders dynamically on server
- **File:** `src/components/footer.tsx:141`
- **Description:** The footer is a Server Component but calls `new Date().getFullYear()`. Since all pages are statically generated, this value is baked in at build time, which is correct for a yearly copyright. But if you ever switch to ISR/SSR, this would show the build-time year, not the current year. Not a bug today, just worth noting.
- **Suggested fix:** No action needed for a static site. If you move to ISR, make this a client component or use a revalidation strategy.

### [Low] Team data duplicated between home and about pages
- **File:** `src/components/home/team-preview.tsx:10-37` and `src/components/about-content.tsx:11-38`
- **Description:** The team member array is defined in two places with slightly different bio text. If you add a team member or change info, you need to update both files.
- **Suggested fix:** Extract the team data to a shared `src/data/team.ts` file. Use the short bios for the home preview and full bios for the about page by adding both fields to the data structure.

### [Low] Blog cards are not interactive but have hover styling
- **File:** `src/app/blog/page.tsx:58-84`
- **Description:** The blog cards have `group` hover effects (title changes color on hover) but are not wrapped in links or buttons. This creates a misleading affordance -- users will try to click them and nothing happens.
- **Suggested fix:** Either remove the hover styling since posts are "Coming Soon", or wrap each card in a div with `cursor-default` and add a "Coming Soon" overlay/badge to make the non-clickable state clearer.

### [Low] `dangerouslySetInnerHTML` for JSON-LD
- **File:** `src/app/layout.tsx:79`
- **Description:** Using `dangerouslySetInnerHTML` for the JSON-LD schema. This is the standard Next.js pattern and the data is a static object (no user input), so there is no XSS risk. No action needed -- just documenting.

### [Low] No `sizes` prop on team card images
- **File:** `src/components/team-card.tsx:25-30`
- **Description:** The `Image` component uses `fill` but does not have a `sizes` prop. Without it, Next.js defaults to `100vw` which means the browser may download larger images than needed on smaller screens.
- **Suggested fix:** Add `sizes="(max-width: 768px) 100vw, 33vw"` to match the `md:grid-cols-3` layout.

---

## Strengths

- **Clean architecture**: Good separation between page routes and components. Server Components used by default with `"use client"` only where needed (scroll detection, animations, form state).
- **SEO well-handled**: Per-page metadata with OpenGraph, JSON-LD structured data with correct `RoofingContractor` schema, robots.txt, and sitemap.xml all present and correct.
- **Form implementation is solid**: Formspree integration is clean. Proper loading/success/error states. No XSS vectors since form data is submitted via FormData (not interpolated into HTML). The `catch` block correctly handles network failures.
- **Animation system**: The `AnimatedSection` / `StaggerContainer` / `StaggerItem` pattern is well-abstracted and reusable. Good use of `viewport: { once: true }` to prevent re-triggering.
- **Responsive design**: Consistent use of responsive breakpoints (sm/md/lg). Mobile sheet menu, responsive grids, and text scaling all look correct.
- **Type safety**: TypeScript strict mode is on. Component props are typed with interfaces. Good use of `as const` for union type literals.
- **Zero dependency vulnerabilities**: Clean audit.
- **Static generation**: All pages are statically generated, which is optimal for a marketing site.

## Recommendations

1. **Add a favicon and OpenGraph image**: The metadata is missing an `openGraph.images` array. For a client site, having a proper OG image is important for social sharing. Add one to the root metadata in `layout.tsx`.

2. **Consider `priority` on hero images**: If you add a hero background image later, use Next.js `priority` prop to prevent layout shift and improve LCP.

3. **Add a 404 page**: Next.js has a default but a branded `not-found.tsx` would be more professional for a client site.

4. **Consider `prefers-reduced-motion`**: The framer-motion animations are tasteful but some users have motion sensitivities. Framer Motion supports `useReducedMotion()` -- wrapping animations with this would be a nice accessibility touch.

5. **Phone number formatting**: Consider using `tel:+1-502-434-8253` format (with country code and hyphens) in `href` attributes for better international compatibility, matching the JSON-LD `telephone` format.
