# Project Reflection

**1. The Hardest Bug:**
On Day 4, I hit a JSON parsing error when retrieving data from LocalStorage. My hypothesis was that I was storing an object where an array was expected. After debugging the `useEffect` hook, I realized I needed a "Lazy Initializer" in `useState` to safely parse the stringified JSON.

**2. Decision Reversed:**
Mid-week, I initially planned to use simple string URLs for pricing data. However, I reversed this and spent 3 hours manually verifying 404 links to ensure every savings recommendation was "defensible" and traced back to a working official page.

**3. Week 2 Roadmap:**
If I had another week, I would build a "Historical Spend Tracker" using Supabase, allowing teams to upload their last 3 months of CSV invoices for a more accurate 90-day forecast.

**4. AI Tool Usage:**
I used ChatGPT-4 for drafting complex Tailwind UI layouts and Claude 3.5 for refining the `AuditEngine` logic. I didn't trust them with current pricing (as they often hallucinate). One specific time, AI gave me a broken Google One link; I caught it and replaced it with the verified direct URL.

**5. Self-Rating (1-10):**
- Discipline: 10/10 (Consistent commits across 6 days).
- Code Quality: 8/10 (Clean TypeScript interfaces used).
- Design Sense: 8/10 (Dark mode dashboard for visual impact).
- Problem Solving: 9/10 (Handled broken links and database sync issues).
- Entrepreneurial Thinking: 9/10 (Conducted real-world LinkedIn research).