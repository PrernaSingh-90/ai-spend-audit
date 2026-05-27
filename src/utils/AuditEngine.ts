export interface ToolEntry {
    id: string;
    toolName: string;
    plan: string;
    monthlySpend: number;
    seats: number;
}

export interface AuditResult {
    toolName: string;
    currentSpend: number;
    recommendedAction: string;
    potentialSaving: number;
    reason: string;
}

export const runAudit = (entries: ToolEntry[], teamSize: number): AuditResult[] => {
    return entries.map(entry => {
        let savings = 0;
        let action = "Keep current plan";
        let reason = "Your current plan is optimal for your team size.";

        // Logic 1: Team Plan for small teams
        if(entry.plan.toLowerCase().includes('team') && entry.seats < 3) {
            savings = entry.monthlySpend - 20;
            action = "Downgrade to Pro plan";
            reason = `Using a team plan for only ${entry.seats} users is overkill. Switch to individual Pro.`;
        }

        // Logic 2: Multiple redundant tools
        if(entry.toolName === 'ChatGPT' && entries.some(e => e.toolName.includes('Claude') || e.toolName.includes('Anthropic'))) {
            savings = entry.monthlySpend;
            action = "Consolidate tools";
            reason = "You are paying for both ChatGPT and Claude. Consider using Cursor or Windsurf to access both models via a single subscription.";
        }

        // Logic 3: Retail vs API
         if(entry.monthlySpend >= 100 && teamSize < 5) {
            savings = entry.monthlySpend * 0.4; 
            action = "Switch to API-direct usage";
            reason = "Your spend is high for a small team. Switching to an API-direct model via a client like TypingMind could save you up to 40% based on token usage.";
        }

        return {
            toolName: entry.toolName,
            currentSpend: entry.monthlySpend,
            recommendedAction: action,
            potentialSaving: savings > 0 ? Math.round(savings) : 0,
            reason: reason
        };
    });
};