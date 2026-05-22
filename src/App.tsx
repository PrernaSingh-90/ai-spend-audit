import SpendForm from './components/SpendForm';

function App() {
  return (
    // Background color aur font setup
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100">
      
      {/* 1. Header (Branding matters for Credex!) */}
      <header className="max-w-5xl mx-auto pt-16 pb-8 px-6 text-center">
        <div className="inline-block px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-4 shadow-lg shadow-blue-200">
          Credex Assignment • Round 1
        </div>
        <h1 className="text-5xl font-black text-slate-900 tracking-tighter mb-4">
          AI Spend <span className="text-blue-600">Audit</span>
        </h1>
        <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
          Stop overpaying for AI. Audit your monthly subscriptions and find cost-saving alternatives in seconds.
        </p>
      </header>

      {/* 2. Main Content (SpendForm Yahan Dikhega) */}
      <main className="pb-24 px-6">
        <SpendForm />
      </main>

      {/* 3. Simple Footer */}
      <footer className="border-t border-slate-200 py-12 text-center bg-white">
        <p className="text-sm text-slate-400 font-bold uppercase tracking-widest">
          Built for Product-Led Growth • 2026
        </p>
      </footer>

    </div>
  );
}

export default App;