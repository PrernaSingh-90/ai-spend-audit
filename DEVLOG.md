## Day 1 — 2026-05-22
**Hours worked:** 3
**What I did:** 
- Initialized the project using Vite with React and TypeScript.
- Set up the project architecture and created mandatory documentation files (DEVLOG, ARCHITECTURE, PRICING_DATA, PROMPTS).
- Researched AI tool pricing and limitations (Claude Pro vs API).
- **Developed the core "Spend Input Form" component with TypeScript interfaces.**
- **Implemented State Persistence using LocalStorage to ensure data remains across page reloads.**
- Reached out to 3 potential users (Atul, Meet, Vineeth) on LinkedIn for user interviews.
**What I learned:** 
- Learned about the "5-hour usage window" in Claude Pro and the benefits of API-per-token models for developers.
**Blockers / what I'm stuck on:** 
- Waiting for user interview responses to refine the audit reasoning.
**Plan for tomorrow:** 
- Develop the core `AuditEngine.ts` logic to calculate potential savings and provide defensible financial reasoning.
- Finalize the `PRICING_DATA.md` with official URLs for all mandatory tools.

## Day 2 — 2026-05-23
**Hours worked:** 3
**What I did:** 
- Conducted deep research on pricing for Gemini, OpenAI API, Anthropic API, Windsurf, and v0.
- Completed `PRICING_DATA.md` with verified URLs as of submission week.
- Developed the `AuditEngine.ts` logic to evaluate plan-fit and tool consolidation opportunities.
- Refined TypeScript types to remove any "any" types and ensure 100% type safety in logic.
- Followed up with user interview contacts; Meet confirmed participation.
**What I learned:** 
- Learned that "Team" plans are often suboptimal for startups with fewer than 5 seats compared to individual Pro tiers.
**Blockers / what I'm stuck on:** 
- Deciding on the most intuitive way to visualize the "Savings Hero" section on the results page.
**Plan for tomorrow:** 
- Build the "Audit Results Page" dashboard and start integrating the AI-generated personalized summary.

## Day 3 — 2026-05-24
**Hours worked:** 4
**What I did:** 
- Built the "Audit Results Dashboard" with a high-impact Hero section showing annual savings.
- Implemented the per-tool breakdown UI with conditional color coding (Optimal vs. Savings).
- Designed the "Credex Prominent Surface" for users saving >$500/mo.
- Drafted the AI prompt strategy in `PROMPTS.md`.
**What I learned:** 
- Visual hierarchy is key for "sharable" audits. Using a dark-themed dashboard makes the green "Savings" numbers pop.
**Blockers / what I'm stuck on:** 
- Handling Anthropic API rate limits for the free tier credits.
**Plan for tomorrow:** 
- Set up Lead Capture with Supabase/Firebase and implement the transactional email confirmation.

## Day 4 — 2026-05-25
**Hours worked:** 4
**What I did:** 
- Set up Supabase as a real backend for lead capture and audit storage.
- Developed the `LeadCapture.tsx` component with an email gate to monetize value before sharing.
- Implemented unique URL generation using UUIDs from the database.
- Added basic abuse protection logic for the form submission.
**What I learned:** 
- Learned how to handle JSONB data types in PostgreSQL via Supabase for storing complex audit results.
**Blockers / what I'm stuck on:** 
- Configuring Open Graph (OG) tags dynamically for individual shareable URLs.
**Plan for tomorrow:** 
- Complete the 3 user interviews and fill `USER_INTERVIEWS.md`.
- Finalize the `ARCHITECTURE.md` with system diagrams.

## Day 5 — 2026-05-26
**Hours worked:** 3
**What I did:** 
- Finalized `ARCHITECTURE.md` with system diagrams and scalability plans.
- Drafted the `GTM.md` strategy based on real-world insights from LinkedIn power users.
- Reached out to Ishaan (Founder) and provided a live demo link for feedback.
- Completed Interview 1 documentation.
**What I learned:** 
- Realized the importance of "Calculators as Content" for B2B lead generation.
**Blockers:** Still waiting for 2nd and 3rd formal interview responses.
**Plan for tomorrow:** Finalize all remaining markdown files and perform Lighthouse performance checks.

## Day 6 — 2026-05-27
**Hours worked:** 5
**What I did:**
- Optimized the application for Accessibility, achieving a Lighthouse score of 90+.
- Completed all mandatory documentation (ECONOMICS, GTM, REFLECTION, TESTS).
- Integrated User Interview insights into the design strategy.
- Set up a GitHub Actions CI workflow for linting and testing.
- Prepared and organized project screenshots for the final README.
**What I learned:**
- Learned that providing 'Defensible Logic' in documentation is as critical as the code itself for stakeholder buy-in.
**Plan for today:**
- Record the final demo video and submit the Round 1 assignment form.