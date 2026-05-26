# System Architecture - AI Spend Audit

## Technical Stack
- **Frontend:** React.js (vite) with TypeScript for type-safe state management.
- **Styling:** Tailwind CSS for a modern, responsive mobile-first UI.
- **Backend:** Supabase (PostgreSQL) for lead capture and audit storage.
- **AI Integration:** Integrated prompts logic for Anthropic Claude 3.5.

## System Data Flow
The Following diagram illustrates how user input becomes a defensible audit result:

```mermaid
graph TD
    A[User Input: Tool + Plan + Spend] --> B{Audit Engine}
    B --> C[Compare with PRICING_DATA.md]
    B --> D[Apply Optimization Rules]
    C & D --> E[Results Dashboard]
    E --> F[AI Summary Generation]
    F --> G[Lead Capture - Email Gate]
    G --> H[(Supabase Database)]
    H --> I[Unique Shareable URL]