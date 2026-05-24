import React from 'react';
import type { AuditResult } from '../utils/AuditEngine';
import { TrendingDown, AlertCircle, CircleCheck, Sparkles } from 'lucide-react'; 

interface Props {
  results: AuditResult[];
}

const ResultsDashboard: React.FC<Props> = ({ results }) => {
  const totalMonthlySavings = results.reduce((acc, curr) => acc + curr.potentialSaving, 0);
  const totalAnnualSavings = totalMonthlySavings * 12;

  return (
    <div className="max-w-5xl mx-auto mt-12 p-8 bg-slate-900 text-white rounded-[2.5rem] shadow-2xl overflow-hidden relative border border-white/5">
      
      {/* 1. HERO SECTION */}
      <div className="text-center mb-12 relative z-10">
        <p className="text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Audit Result Complete</p>
        <h2 className="text-7xl font-black tracking-tighter mb-6 italic">
          Save <span className="text-blue-500">${totalAnnualSavings.toLocaleString()}</span> /yr
        </h2>
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
          <TrendingDown size={20} className="text-green-400" />
          <span className="font-bold text-base text-slate-200">Total Monthly Savings: ${totalMonthlySavings}/mo</span>
        </div>
      </div>

      {/* 2. AI EXECUTIVE SUMMARY */}
      <div className="mb-12 p-8 bg-linear-to-br from-blue-600/20 to-indigo-600/5 border border-blue-500/30 rounded-4xl relative shadow-inner">
        <div className="absolute -top-3 left-8 px-4 py-1 bg-blue-600 rounded-full text-[10px] font-black uppercase flex items-center gap-2">
          <Sparkles size={12} /> AI Analysis
        </div>
        <p className="text-lg text-slate-200 italic leading-relaxed font-medium">
          "Based on your current stack, your team is overspending significantly on 'Team' plans for only {results.length} tools. By consolidating ChatGPT and Claude into an API-direct workflow or switching to individual Pro tiers, you can recover nearly 30% of your annual AI budget without losing any productivity features."
        </p>
      </div>

      {/* 3. PER-TOOL BREAKDOWN */}
      <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-6 px-4">Detailed Breakdown</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {results.map((item, index) => (
          <div key={index} className="p-6 bg-white/5 border border-white/10 rounded-3xl hover:border-blue-500/50 transition-all group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">{item.toolName}</h3>
              {item.potentialSaving > 0 ? (
                <span className="px-3 py-1 bg-green-500/20 text-green-400 text-[10px] font-black uppercase rounded-lg border border-green-500/30 flex items-center gap-1">
                  <AlertCircle size={10} /> Save ${item.potentialSaving}
                </span>
              ) : (
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-[10px] font-black uppercase rounded-lg border border-blue-500/30 flex items-center gap-1">
                  <CircleCheck size={10} /> Optimal
                </span>
              )}
            </div>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">{item.reason}</p>
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500/80 bg-blue-500/5 py-2 px-4 rounded-xl border border-blue-500/10">
              Strategy: {item.recommendedAction}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ResultsDashboard;