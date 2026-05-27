# Test Suites

## Audit Engine Logic Tests
1. **Case: Minimalist Setup**
   - Input: Cursor Pro ($20), 1 Seat.
   - Expected Result: "Optimal" status, $0 savings.
2. **Case: Tool Redundancy**
   - Input: ChatGPT Plus ($20) + Claude Pro ($20).
   - Expected Result: "Consolidate tools" action, $20/mo savings.
3. **Case: Over-scaled Team Plan**
   - Input: Anthropic Team Plan ($30/seat), 2 Seats.
   - Expected Result: "Downgrade to Pro" action, $20/mo savings.
4. **Case: High Spend / API Shift**
   - Input: Monthly Spend > $200, Team Size 2.
   - Expected Result: "Switch to API-direct" recommendation.
5. **Edge Case: Zero Team Size**
   - Input: Team size 0.
   - Expected Result: Validation error or default to 1 user for calculation.