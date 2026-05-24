import SpendForm from "./components/SpendForm";
import ResultsDashboard from "./components/ResultsDashboard";
import { runAudit, type AuditResult } from "./utils/AuditEngine";
import { useState } from "react";

function App() {
  const [results, setResults] = useState<AuditResult[] | null>(null);

  const handleRunAudit = () => {
    const savedData = localStorage.getItem("credex_audit_form");

    if (savedData) {
      const { entries, teamSize } = JSON.parse(savedData);
      const auditOutput = runAudit(entries, teamSize);
      setResults(auditOutput);
    } else {
      alert("Please add at least one tool first!");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100">
      {/* 1. Header  */}
      <header className="max-w-5xl mx-auto pt-16 pb-8 px-6 text-center">
        <div className="inline-block px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-4 shadow-lg shadow-blue-200">
          Credex Assignment • Round 1
        </div>
        <h1 className="text-5xl font-black text-slate-900 tracking-tighter mb-4">
          AI Spend <span className="text-blue-600">Audit</span>
        </h1>
        <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
          Stop overpaying for AI. Audit your monthly subscriptions and find
          cost-saving alternatives in seconds.
        </p>
      </header>

      {/* 2. Main Content  */}
      <main className="pb-24 px-6">
        <SpendForm />

        {/* Audit Button */}
        <div className="max-w-5xl mx-auto mt-8 text-center">
          <button
            onClick={handleRunAudit}
            className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black
          uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 active:scale-95"
          >
            Generate Audit Report
          </button>
        </div>

        {/* Result Dashboard  */}
        {results && (
          <div className="animate-in fade-in slide-in-from-bottom-10 duration-700">
            <ResultsDashboard results={results} />
          </div>
        )}
      </main>


      <footer className="border-t border-slate-200 py-12 text-center bg-white">
        <p className="text-sm text-slate-400 font-bold uppercase tracking-widest">
          Built for Product-Led Growth • 2026
        </p>
      </footer>
    </div>
  );
}

export default App;
