import React, { useState, useEffect } from 'react';

interface ToolEntry {
  id: string;
  toolName: string;
  plan: string;
  monthlySpend: number;
  seats: number;
}

interface FormState {
  teamSize: number;
  primaryUseCase: string;
  entries: ToolEntry[];
}

const AI_TOOLS = {
  'Cursor': ['Hobby', 'Pro', 'Business', 'Enterprise'],
  'GitHub Copilot': ['Individual', 'Business', 'Enterprise'],
  'Claude': ['Free', 'Pro', 'Max', 'Team', 'Enterprise', 'API Direct'],
  'ChatGPT': ['Plus', 'Team', 'Enterprise', 'API Direct'],
  'Anthropic API': ['Direct Usage'],
  'OpenAI API': ['Direct Usage'],
  'Gemini': ['Pro', 'Ultra', 'API'],
  'Windsurf': ['Pro', 'Team', 'Enterprise']
};

const USE_CASES = ['Coding', 'Writing', 'Data', 'Research', 'Mixed'];

const SpendForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>(() => {
    const saved = localStorage.getItem('credex_audit_form');
    return saved ? JSON.parse(saved) : { teamSize: 1, primaryUseCase: 'Coding', entries: [] };
  });

  const [currentTool, setCurrentTool] = useState('Cursor');
  const [currentPlan, setCurrentPlan] = useState('Pro');
  const [currentSpend, setCurrentSpend] = useState(20);
  const [currentSeats, setCurrentSeats] = useState(1); // Ab ye niche use hoga

  useEffect(() => {
    localStorage.setItem('credex_audit_form', JSON.stringify(formData));
  }, [formData]);

  const handleAddTool = () => {
    const newEntry: ToolEntry = {
      id: Date.now().toString(),
      toolName: currentTool,
      plan: currentPlan,
      monthlySpend: currentSpend,
      seats: currentSeats,
    };
    setFormData({ ...formData, entries: [...formData.entries, newEntry] });
  };

  const removeTool = (id: string) => {
    setFormData({ ...formData, entries: formData.entries.filter(e => e.id !== id) });
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-xl rounded-2xl border border-gray-100 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 underline decoration-blue-400">1. Audit Your AI Stack</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 p-6 bg-blue-50 rounded-2xl">
        <div>
          <label className="block text-sm font-bold text-gray-600 mb-2">Startup Team Size</label>
          <input 
            type="number" 
            className="w-full p-2.5 rounded-xl border-none shadow-inner outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.teamSize}
            onChange={(e) => setFormData({...formData, teamSize: parseInt(e.target.value)})}
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-600 mb-2">Primary Use Case</label>
          <select 
            className="w-full p-2.5 rounded-xl border-none shadow-inner outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.primaryUseCase}
            onChange={(e) => setFormData({...formData, primaryUseCase: e.target.value})}
          >
      
            {USE_CASES.map(uc => <option key={uc} value={uc}>{uc}</option>)}
          </select>
        </div>
      </div>

      <div className="border-t border-gray-100 pt-6">
        <h3 className="text-lg font-bold mb-4 text-gray-700">Add Your Subscriptions:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end bg-gray-50 p-6 rounded-2xl border border-gray-200">
          <div>
            <label className="text-[10px] font-black text-gray-400 uppercase">Tool</label>
            <select 
              className="w-full p-2 mt-1 rounded-lg border bg-white text-sm"
              value={currentTool}
              onChange={(e) => {
                setCurrentTool(e.target.value);
                setCurrentPlan(AI_TOOLS[e.target.value as keyof typeof AI_TOOLS][0]);
              }}
            >
              {Object.keys(AI_TOOLS).map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label className="text-[10px] font-black text-gray-400 uppercase">Plan</label>
            <select 
              className="w-full p-2 mt-1 rounded-lg border bg-white text-sm"
              value={currentPlan}
              onChange={(e) => setCurrentPlan(e.target.value)}
            >
              {AI_TOOLS[currentTool as keyof typeof AI_TOOLS].map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
         
          <div>
            <label className="text-[10px] font-black text-gray-400 uppercase">Seats</label>
            <input 
              type="number" 
              className="w-full p-2 mt-1 rounded-lg border bg-white text-sm"
              value={currentSeats}
              onChange={(e) => setCurrentSeats(parseInt(e.target.value))}
            />
          </div>
          <div>
            <label className="text-[10px] font-black text-gray-400 uppercase">Spend ($)</label>
            <input 
              type="number" 
              className="w-full p-2 mt-1 rounded-lg border bg-white text-sm"
              value={currentSpend}
              onChange={(e) => setCurrentSpend(parseFloat(e.target.value))}
            />
          </div>
          <button 
            onClick={handleAddTool}
            className="bg-blue-600 text-white p-2.5 rounded-lg hover:bg-blue-700 transition-all font-bold shadow-md shadow-blue-200"
          >
            Add
          </button>
        </div>
      </div>

      <div className="mt-8 space-y-3">
        {formData.entries.map((entry) => (
          <div key={entry.id} className="flex justify-between items-center p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all">
            <div>
              <p className="font-black text-gray-800">{entry.toolName}</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest">{entry.plan} • {entry.seats} Seats</p>
            </div>
            <div className="flex items-center gap-6">
              <span className="font-mono font-black text-blue-600 tracking-tighter">${entry.monthlySpend}/mo</span>
              <button onClick={() => removeTool(entry.id)} className="text-red-300 hover:text-red-500 font-bold text-xs uppercase">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpendForm;