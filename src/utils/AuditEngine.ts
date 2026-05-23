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
            savings = entry.monthlySpend - 30;
            action = "Downgrade to Pro plan";
            reason = `Using a team plan for only ${entry.seats} users is overkill. Switch to individual Pro.`;
        }

        // Login 2: Multiple redundant tools
        if(entry.toolName === 'ChatGPT' && entries.some(e => e.toolName === 'Claude')) {
            savings = entry.monthlySpend;
            action = "Consolidate tools";
            reason = "Your are paying for both ChatGPT and Claude. Consider using Cursor or Windsurf to access both via one subscription.";
        }

        // Logic 3: Retail vs API
        if(entry.monthlySpend > 100 && teamSize < 5) {
            action = "Switch to API-direct usage";
            reason = "Your Spend is high for a small team. Using API-per-token via TypingMind could save costs.";
        }

        return {
            toolName: entry.toolName,
            currentSpend: entry.monthlySpend,
            recommendedAction: action,
            potentialSaving: savings > 0 ? savings : 0,
            reason: reason
        };
    });
};