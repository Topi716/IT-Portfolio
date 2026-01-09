import React, { useState, useRef, useEffect } from 'react';
// HINWEIS: Analytics ist standardmäßig auskommentiert.
// import { Analytics } from '@vercel/analytics/react'; 

import { 
  Github, ExternalLink, Plus, Trash2, Code, Mail, Linkedin, User, Briefcase, X, 
  Phone, MapPin, Camera, Brain, Terminal, Database, ArrowRight, Moon, Sun, 
  CheckCircle, Send, Search, PenTool, Zap, Clock, AlertCircle, Cpu, ShieldCheck, 
  Microscope, Flame, Blocks, Wrench, GitBranch, Users, ClipboardList, BookOpen, 
  Lightbulb, Target, Lock, Server, Table, Key, Hammer, MessageCircle, FileText, 
  CheckSquare, Globe, Wifi, Layers, Monitor, Network, FileCheck, Menu, ArrowDown,
  Megaphone, Laptop, Award, Coffee
} from 'lucide-react';

// ==========================================
// GLOBAL STYLES
// ==========================================
const styles = `
  @keyframes blob {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
  }
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes pulse-slow {
    0%, 100% { opacity: 0.4; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.05); }
  }
  
  .animate-blob { animation: blob 15s infinite alternate; }
  .animate-spin-slow { animation: spin-slow 8s linear infinite; }
  .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
  .animation-delay-2000 { animation-delay: 2s; }
  .animation-delay-4000 { animation-delay: 4s; }
  
  /* Glass Panel Logic - OPTIMIZED FOR CLEAN WHITE */
  .glass-panel-dark {
    background: rgba(10, 10, 10, 0.75);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(34, 211, 238, 0.2);
    transition: all 0.3s ease;
  }
  
  .glass-panel-light {
    background: rgba(255, 255, 255, 0.85); /* Mehr Deckkraft für weißeren Look */
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(0, 0, 0, 0.04); /* Sehr dezenter Border */
    box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.05); /* Softer Shadow statt grauem Border */
    transition: all 0.3s ease;
  }
  
  .glass-panel-dark:hover {
    border-color: rgba(6, 182, 212, 0.6);
    transform: translateY(-2px);
  }

  .glass-panel-light:hover {
    border-color: rgba(0, 0, 0, 0.08);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }
  
  @keyframes dash { to { stroke-dashoffset: 0; } }
  .path-animation { stroke-dasharray: 10; animation: dash 1s linear infinite; }
  
  @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
  .animate-marquee { animation: marquee 25s linear infinite; }
  
  @keyframes blink { 50% { opacity: 0; } }
  .animate-cursor { animation: blink 1s step-end infinite; }
  
  .no-scrollbar::-webkit-scrollbar { display: none; }
  .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
`;

// ==========================================
// SUB-COMPONENTS (DEFINED OUTSIDE APP FOR STABILITY)
// ==========================================

const WaveBackground = ({ darkMode }) => (
  <div className={`fixed inset-0 w-full h-full -z-10 overflow-hidden transition-colors duration-500 ${darkMode ? 'bg-black' : 'bg-white'}`}>
    {/* Grid Overlay - Reduzierte Opazität im Lightmode für reineres Weiß */}
    <div className={`absolute inset-0 bg-[size:40px_40px] ${darkMode 
      ? 'opacity-20 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]' 
      : 'opacity-[0.03] bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)]'
    }`}></div>

    {/* Blobs */}
    <div className={`hidden md:block absolute top-0 -left-20 w-[500px] h-[500px] rounded-full mix-blend-screen filter blur-[80px] animate-blob opacity-30 ${darkMode ? 'bg-cyan-900' : 'bg-cyan-100'}`}></div>
    <div className={`hidden md:block absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full mix-blend-screen filter blur-[80px] animate-blob animation-delay-2000 opacity-30 ${darkMode ? 'bg-blue-900' : 'bg-blue-100'}`}></div>
    
    {/* Mobile Gradient */}
    <div className={`md:hidden absolute inset-0 bg-gradient-to-b ${darkMode ? 'from-black via-slate-900 to-black' : 'from-white via-slate-50 to-white'} opacity-80`}></div>
  </div>
);

const Navigation = ({ activeTab, setActiveTab, setLegalView, darkMode, setDarkMode, handleLogoClick }) => {
  const textMain = darkMode ? "text-white" : "text-slate-900";
  
  return (
    <>
      {/* Desktop Nav */}
      <nav className={`fixed top-0 left-0 right-0 z-40 px-6 py-4 hidden md:flex justify-between items-center transition-all duration-300 ${darkMode ? 'bg-black/80 border-cyan-900/30' : 'bg-white/90 border-slate-100'} backdrop-blur-md border-b`}>
        <div className="max-w-6xl mx-auto w-full flex justify-between items-center">
          <div onClick={handleLogoClick} className={`text-2xl font-bold tracking-widest uppercase flex items-center gap-2 cursor-pointer select-none ${textMain}`}>
            <Terminal size={24} className="text-cyan-500" />
            PD<span className="text-cyan-500">.DEV</span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex gap-8">
              {['Portfolio', 'Profil', 'Kontakt'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => { setActiveTab(item === 'Profil' ? 'about' : item.toLowerCase()); setLegalView(null); }} 
                  className={`text-sm font-bold uppercase tracking-widest transition-all ${activeTab === (item === 'Profil' ? 'about' : item.toLowerCase()) && !activeTab.includes('legal') ? 'text-cyan-500' : 'text-slate-500 hover:text-cyan-400'}`}
                >
                  {item}
                </button>
              ))}
            </div>
            <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-full border transition-colors ${darkMode ? 'bg-black border-cyan-500 text-cyan-400' : 'bg-white border-slate-200 text-yellow-500 hover:border-yellow-400'}`}>
              {darkMode ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Top Bar */}
      <div className={`md:hidden fixed top-0 left-0 right-0 z-40 px-4 py-3 flex justify-between items-center ${darkMode ? 'bg-black/90 border-slate-800' : 'bg-white/95 border-slate-100'} backdrop-blur border-b transition-colors duration-300`}>
         <div onClick={handleLogoClick} className={`font-bold tracking-widest uppercase flex items-center gap-2 ${textMain}`}>
            <Terminal size={20} className="text-cyan-500" />
            PD.DEV
         </div>
         <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-full transition-colors ${darkMode ? 'text-cyan-400 bg-slate-900' : 'text-yellow-500 bg-slate-50'}`}>
            {darkMode ? <Moon size={20} /> : <Sun size={20} />}
         </button>
      </div>

      {/* Mobile Bottom Nav */}
      <div className={`md:hidden fixed bottom-6 left-4 right-4 z-[100] p-3 rounded-2xl flex justify-around items-center border shadow-2xl transition-all duration-300 ${darkMode ? 'bg-slate-900/95 border-slate-700 text-slate-400' : 'bg-white/95 border-slate-200 text-slate-500'} backdrop-blur-md`}>
          {['Portfolio', 'Profil', 'Kontakt'].map((item) => (
              <button key={item} onClick={() => { setActiveTab(item === 'Profil' ? 'about' : item.toLowerCase()); setLegalView(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className={`flex flex-col items-center gap-1 text-[10px] font-bold uppercase tracking-widest transition-all ${activeTab === (item === 'Profil' ? 'about' : item.toLowerCase()) && !activeTab.includes('legal') ? 'text-cyan-500 scale-105' : ''}`}>
                {item === 'Portfolio' && <Code size={20} />}
                {item === 'Profil' && <User size={20} />}
                {item === 'Kontakt' && <Mail size={20} />}
                {item}
              </button>
          ))}
      </div>
    </>
  );
};

const SectionTitle = ({ icon: Icon, title, darkMode }) => (
  <h2 className={`text-xl md:text-2xl font-bold mb-6 flex items-center gap-3 uppercase tracking-wider ${darkMode ? 'text-white' : 'text-slate-900'}`}>
    {Icon && <Icon className="text-cyan-500" size={24} />} 
    {title}
  </h2>
);

const Typewriter = ({ words, darkMode }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === words.length) return;
    if ( subIndex === words[index].length + 1 && !reverse ) { setReverse(true); return; }
    if (subIndex === 0 && reverse) { setReverse(false); setIndex((prev) => (prev + 1) % words.length); return; }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 350)));
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <div className={`text-sm md:text-xl font-medium mb-8 flex items-center justify-center gap-2 h-8`}>
      <span className="text-cyan-500"><Wrench size={18} className="inline mr-2"/>Ich bin </span>
      <span className={`${darkMode ? 'text-white' : 'text-slate-900'}`}>
        {words[index].substring(0, subIndex)}
        <span className="animate-cursor">|</span>
      </span>
    </div>
  );
};

const TechStackTicker = ({ darkMode }) => {
  const stack = [
    { name: "React", icon: <Code size={20}/> },
    { name: "JavaScript", icon: <Terminal size={20}/> },
    { name: "Python", icon: <Code size={20}/> },
    { name: "SQL", icon: <Database size={20}/> },
    { name: "Git", icon: <GitBranch size={20}/> },
    { name: "Node.js", icon: <Server size={20}/> },
    { name: "Linux", icon: <Terminal size={20}/> },
    { name: "Problemlösung", icon: <Wrench size={20}/> },
    { name: "Debugging", icon: <Microscope size={20}/> },
  ];
  const items = [...stack, ...stack, ...stack];

  return (
    <div className="w-full overflow-hidden py-8 relative">
      <div className={`absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r ${darkMode ? 'from-black to-transparent' : 'from-white to-transparent'}`}></div>
      <div className={`absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l ${darkMode ? 'from-black to-transparent' : 'from-white to-transparent'}`}></div>
      <div className="flex animate-marquee w-max gap-8">
        {items.map((item, i) => (
          <div key={i} className={`flex items-center gap-2 px-4 py-2 rounded-full border ${darkMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-600 shadow-sm'}`}>
            <span className="text-cyan-500">{item.icon}</span>
            <span className="text-sm font-bold uppercase tracking-wider">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project, onClick, cardStyle, textMain, textSub, isAdmin, onDelete }) => (
  <div className={`group flex flex-col rounded-2xl overflow-hidden ${cardStyle} hover:scale-[1.02] transition-transform duration-300`}>
    <div className="relative h-40 overflow-hidden bg-black">
      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
    </div>
    <div className="p-5 flex-1 flex flex-col">
      <div className="flex justify-between items-start mb-2">
        <h3 className={`text-lg font-bold ${textMain}`}>{project.title}</h3>
        {isAdmin && <button onClick={() => onDelete(project.id)} className="text-red-500"><Trash2 size={16} /></button>}
      </div>
      <p className={`mb-4 text-xs leading-relaxed flex-1 ${textSub}`}>{project.description}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.map((tag, idx) => (
          <span key={idx} className="px-2 py-1 text-[10px] uppercase font-bold border border-cyan-500/30 text-cyan-600 bg-cyan-500/10 rounded">{tag}</span>
        ))}
      </div>
      <button onClick={onClick} className={`w-full py-2.5 font-bold uppercase tracking-widest text-xs border rounded-lg transition-all flex items-center justify-center gap-2 border-cyan-500 text-cyan-500 hover:bg-cyan-600 hover:text-white`}>
         {project.viewType === 'docs' ? <BookOpen size={14} /> : project.viewType === 'database' ? <Database size={14} /> : <ExternalLink size={14} />} Demo
      </button>
    </div>
  </div>
);

// --- PROJECTS ---
// Copywriting Project
const CopywritingLandingProject = ({ onBack }) => {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [isAfterMode, setIsAfterMode] = useState(false);
  const [formStatus, setFormStatus] = useState('idle');

  const industries = [
    { id: 0, name: "Dachdecker", before: { url: "www.mueller-bedachungen-1990.de", headline: "Willkommen bei Bedachungen Müller", sub: "Wir sind Ihr kompetenter Partner für alle Fragen rund ums Dach seit 1990.", cta: "Kontakt aufnehmen", bgClass: "bg-slate-200", textClass: "text-slate-600" }, after: { url: "www.dach-notdienst-express.de", headline: "Ihr Dach ist undicht? Wir reagieren sofort.", sub: "Priorisierter Notdienst bei Sturmschäden. Faire Festpreise statt versteckter Kosten.", cta: "Notdienst anfordern (24h)", bgClass: "bg-slate-900", textClass: "text-white" } },
    { id: 1, name: "Zahnarzt", before: { url: "www.praxis-dr-stein.de/startseite", headline: "Zahnarztpraxis Dr. Stein", sub: "Unser Leistungsspektrum umfasst Prophylaxe, Füllungen und Implantologie.", cta: "Terminvereinbarung", bgClass: "bg-blue-50", textClass: "text-blue-900" }, after: { url: "www.angstfrei-zum-zahnarzt.de", headline: "Endlich wieder schmerzfrei essen.", sub: "Spezialisiert auf Angstpatienten: Sanfte Betäubung & entspannte Atmosphäre.", cta: "Online Termin buchen", bgClass: "bg-teal-950", textClass: "text-teal-50" } }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans overflow-y-auto relative z-50">
       <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3 flex justify-between items-center bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
           <div onClick={onBack} className="text-lg font-extrabold tracking-tight uppercase cursor-pointer hover:opacity-80 truncate mr-4">PD<span className="text-orange-500">.COPY</span></div>
           <button onClick={onBack} className="border border-slate-200 text-slate-500 hover:bg-slate-100 p-2 rounded-full transition-all"><X size={20} /></button>
        </nav>
        <section className="pt-28 pb-10 px-4 text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight leading-tight">Worte. Wirkung. <span className="text-orange-500">Umsatz.</span></h1>
            <p className="text-base md:text-xl text-slate-500 max-w-xl mx-auto mb-8">Premium Copywriting & SEO. Ich verwandle Besucher in Kunden. Ohne Meetings, rein schriftlich.</p>
            <a href="#audit" className="bg-orange-500 text-white px-6 py-3 rounded-full font-bold text-sm md:text-base hover:bg-orange-600 transition shadow-lg inline-flex items-center gap-2">Kostenlose Analyse <ArrowRight size={18} /></a>
        </section>
        {/* Simplified for brevity - Imagine Browser Slider here from previous code */}
        <section className="px-4 pb-16 text-center text-slate-400 text-sm">-- Interaktiver Slider (Siehe vorherigen Code) --</section>
        <section id="audit" className="py-16 px-4 bg-slate-50"><div className="max-w-md mx-auto text-center"><h3 className="text-2xl font-bold">Interesse geweckt?</h3><p className="text-slate-500">Lassen Sie uns Ihre Website analysieren.</p></div></section>
    </div>
  );
}

// Copywriting Docs
const CopywritingDocsView = ({ onBack, darkMode }) => {
  const cardClass = darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200 shadow-sm";
  const textMain = darkMode ? "text-white" : "text-slate-900";
  const textSub = darkMode ? "text-slate-400" : "text-slate-600";

  return (
    <div className={`min-h-screen p-4 md:p-8 overflow-y-auto relative z-50 ${darkMode ? 'bg-black text-slate-200' : 'bg-white text-slate-800'} pb-24`}>
      <div className="max-w-3xl mx-auto">
        <nav className="flex justify-between items-center mb-8 sticky top-0 z-10 py-2 bg-inherit/90 backdrop-blur-md">
           <div className={`text-lg md:text-xl font-bold cursor-pointer hover:opacity-80 flex items-center gap-2 ${textMain}`} onClick={onBack}><Brain size={20} className="text-purple-500" /><span>Copy.Docs</span></div>
           <button onClick={onBack} className={`p-2 rounded-full border transition-all ${darkMode ? 'bg-slate-800 border-slate-700 hover:bg-slate-700' : 'bg-white border-slate-200 hover:bg-slate-100'}`}><X size={18} /></button>
        </nav>
        <header className="mb-10 text-center"><h1 className={`text-2xl md:text-4xl font-bold mb-3 ${textMain}`}>Cheat Sheet</h1><p className="text-sm md:text-base opacity-60">Psychologie & Struktur für bessere Texte.</p></header>
        <div className="space-y-6">
          <section className={`p-6 rounded-2xl border ${cardClass}`}><h2 className="text-lg font-bold mb-2 text-purple-500">1. Der "Na und?"-Test</h2><p className={`text-xs ${textSub}`}>Features sind Fakten. Benefits sind Gefühle.</p></section>
          {/* ... more content ... */}
        </div>
      </div>
    </div>
  );
};

// Network Project
const NetworkProjectView = ({ onBack, darkMode }) => {
  const [step, setStep] = useState(0); 
  const [logs, setLogs] = useState([]);
  const cardClass = darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200 shadow-sm";

  const runSimulation = () => {
    if (step > 0 && step < 5) return; 
    setStep(1); setLogs(["Initialisiere Anfrage..."]);
    setTimeout(() => { setLogs(prev => [...prev, "🔍 DNS Lookup: 'api.shop.de'"]); }, 800);
    setTimeout(() => { setLogs(prev => [...prev, "✅ IP gefunden: 192.168.178.45"]); setStep(2); }, 2000);
    setTimeout(() => { setLogs(prev => [...prev, "🔄 Handshake mit Server..."]); setStep(3); }, 3500);
    setTimeout(() => { setLogs(prev => [...prev, "📨 GET Request /products"]); setStep(4); }, 5000);
    setTimeout(() => { setLogs(prev => [...prev, "📥 200 OK (JSON Data)"]); setStep(5); }, 6500);
  };

  const resetSimulation = () => { setStep(0); setLogs([]); };

  return (
    <div className={`min-h-screen p-4 overflow-y-auto relative z-50 ${darkMode ? 'bg-black text-slate-200' : 'bg-white text-slate-800'} pb-24`}>
      <div className="max-w-4xl mx-auto">
        <nav className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3 cursor-pointer" onClick={onBack}><div className="p-2 bg-cyan-500/10 text-cyan-500 rounded-lg"><Network size={20}/></div><div><h1 className="text-lg font-bold">Web & Network</h1><p className="opacity-60 text-[10px] uppercase">IP, Hosting & API</p></div></div>
            <button onClick={onBack} className={`p-2 rounded-full border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}><X size={18} /></button>
        </nav>
        <section className={`p-5 rounded-2xl border flex flex-col mb-6 ${cardClass}`}>
             <div className="flex justify-between items-center mb-4"><h2 className="text-base font-bold flex items-center gap-2"><Monitor className="text-cyan-500" size={18}/> Simulator</h2><div className="text-[10px] px-2 py-1 rounded bg-slate-800 border border-slate-700 font-mono text-slate-300">Status: {step === 0 ? 'IDLE' : step === 5 ? 'DONE' : 'RUN'}</div></div>
             <div className="relative w-full h-[360px] md:h-[400px] bg-slate-900/50 rounded-2xl border border-slate-700/50 overflow-hidden flex items-center justify-center mb-6">
                <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                    <line x1="20%" y1="80%" x2="50%" y2="20%" stroke={step >= 1 ? "#22d3ee" : "#334155"} strokeWidth={step === 1 ? "3" : "2"} strokeDasharray={step === 1 ? "5,5" : "0"} className={`transition-colors duration-700 ${step === 1 ? "animate-pulse" : ""}`}/>
                    <line x1="50%" y1="20%" x2="80%" y2="80%" stroke={step >= 2 ? "#a855f7" : "#334155"} strokeWidth={step >= 2 ? "2" : "1"} strokeDasharray={step === 2 ? "5,5" : "4,4"} strokeOpacity={step >= 2 ? "1" : "0.3"} className={`transition-colors duration-700 ${step === 2 ? "animate-pulse" : ""}`}/>
                    <line x1="20%" y1="80%" x2="80%" y2="80%" stroke={step >= 3 ? "#10b981" : "#334155"} strokeWidth={step >= 3 ? "3" : "2"} strokeDasharray={step === 4 ? "5,5" : "0"} className={`transition-colors duration-700 ${step >= 3 ? "" : ""}`}/>
                </svg>
                {/* Nodes simplified */}
                <div className={`absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-10 ${step >= 1 ? 'scale-110' : 'opacity-60 grayscale'}`}><div className={`p-3 rounded-full border-2 ${step >= 1 ? 'bg-purple-500/20 border-purple-500 text-purple-400' : 'bg-slate-800 border-slate-700 text-slate-500'}`}><Globe size={24}/></div><span className="text-[10px] font-bold bg-black/60 px-2 py-1 rounded text-slate-300">DNS</span></div>
                <div className={`absolute bottom-[20%] left-[20%] -translate-x-1/2 translate-y-1/2 flex flex-col items-center gap-2 z-10 ${step >= 0 ? 'scale-110' : 'opacity-60'}`}><div className={`p-3 rounded-full border-2 ${step >= 0 ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400' : 'bg-slate-800 border-slate-700 text-slate-500'}`}><Monitor size={24}/></div><span className="text-[10px] font-bold bg-black/60 px-2 py-1 rounded text-slate-300">User</span></div>
                <div className={`absolute bottom-[20%] right-[20%] translate-x-1/2 translate-y-1/2 flex flex-col items-center gap-2 z-10 ${step >= 2 ? 'scale-110' : 'opacity-60 grayscale'}`}><div className={`p-3 rounded-full border-2 ${step >= 2 ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' : 'bg-slate-800 border-slate-700 text-slate-500'}`}><Server size={24}/></div><span className="text-[10px] font-bold bg-black/60 px-2 py-1 rounded text-slate-300">Server</span></div>
             </div>
             <div className="grid grid-cols-2 gap-4"><button onClick={runSimulation} disabled={step > 0 && step < 5} className={`py-3 rounded-xl font-bold flex items-center justify-center gap-2 text-sm transition-all ${step > 0 && step < 5 ? 'bg-slate-800 text-slate-500' : 'bg-cyan-600 text-white'}`}>{step === 5 ? 'Neustart' : 'Start'}</button>{step === 5 && <button onClick={resetSimulation} className="py-3 rounded-xl bg-slate-800 text-white"><Trash2 size={16}/></button>}</div>
        </section>
      </div>
    </div>
  );
};

const DatabaseProjectView = ({ onBack, darkMode }) => {
  return <div className="p-10 text-center"><h1 className={darkMode ? 'text-white' : 'text-slate-900'}>Database Demo</h1><button onClick={onBack}>Zurück</button></div>;
};

// ==========================================
// MAIN APP COMPONENT
// ==========================================
export default function App() {
  // --- STATE ---
  const [projects, setProjects] = useState([
    { id: "network-basics", title: "Web-Infrastruktur & APIs", description: "Interaktive Simulation von DNS, Server-Hosting und API-Requests.", tags: ["Network", "API", "DNS"], image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800", viewType: 'network', isInternal: true },
    { id: "database-project", title: "E-Commerce Database", description: "Entwurf eines relationalen Datenbankschemas. SQL-Abfragen & JOINs.", tags: ["SQL", "Database", "Backend"], image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800", viewType: 'database', isInternal: true },
    { id: "copywriting-docs", title: "Conversion Copywriting", description: "Dokumentation zu Verkaufspsychologie und AIDA-Formel.", tags: ["SEO", "Psychology", "Docs"], image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800", viewType: 'docs', isInternal: true },
    { id: "landing-page-project", title: "High-End Landing Page", description: "Interaktive Landingpage mit Vorher/Nachher-Slider.", tags: ["React", "UI/UX"], image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800", viewType: 'landing', isInternal: true }
  ]);
  
  const [activeTab, setActiveTab] = useState('portfolio'); 
  const [currentView, setCurrentView] = useState('portfolio');
  const [legalView, setLegalView] = useState(null);
  const [darkMode, setDarkMode] = useState(true); 
  const [isAdmin, setIsAdmin] = useState(false); 
  const [adminClicks, setAdminClicks] = useState(0); 
  const [profileImage, setProfileImage] = useState("/9404.png"); 
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => { const file = e.target.files[0]; if (file) setProfileImage(URL.createObjectURL(file)); };
  const handleAdminTrigger = () => { const newClicks = adminClicks + 1; setAdminClicks(newClicks); if (newClicks === 5) { setIsAdmin(true); alert("Admin Modus aktiviert!"); } };
  const handleDeleteProject = (id) => { setProjects(projects.filter(p => p.id !== id)); };
  const handleLogoClick = () => { setActiveTab('portfolio'); setCurrentView('portfolio'); setLegalView(null); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  const textMain = darkMode ? "text-white" : "text-slate-900";
  const textSub = darkMode ? "text-slate-400" : "text-slate-600";
  const cardStyle = darkMode ? "glass-panel-dark" : "glass-panel-light";

  // --- ROUTING ---
  if (currentView === 'network') return <NetworkProjectView onBack={() => setCurrentView('portfolio')} darkMode={darkMode} />;
  if (currentView === 'landing') return <CopywritingLandingProject onBack={() => setCurrentView('portfolio')} />;
  if (currentView === 'docs') return <CopywritingDocsView onBack={() => setCurrentView('portfolio')} darkMode={darkMode} />;
  if (currentView === 'database') return <DatabaseProjectView onBack={() => setCurrentView('portfolio')} darkMode={darkMode} />;

  // --- MAIN RENDER ---
  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 ${darkMode ? 'bg-black' : 'bg-white'}`}>
      <style>{styles}</style>
      <WaveBackground darkMode={darkMode} />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} setLegalView={setLegalView} darkMode={darkMode} setDarkMode={setDarkMode} handleLogoClick={handleLogoClick} />

      <main className="max-w-6xl mx-auto px-4 pb-32 pt-20 relative z-10">
        {/* PORTFOLIO CONTENT */}
        {activeTab === 'portfolio' && (
          <div className="pt-10 md:pt-20 text-center">
             <div className="mb-8 relative inline-block">
                 <div className={`absolute -inset-1 rounded-full opacity-60 blur-lg animate-pulse-slow bg-gradient-to-r from-cyan-400 to-purple-600`}></div>
                 <div className={`relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-2 shadow-2xl mx-auto flex items-center justify-center bg-black border-cyan-500`}>
                   {profileImage ? <img src={profileImage} alt="Profilbild" className="w-full h-full object-cover" /> : <User size={64} className="text-slate-500" />}
                 </div>
                 {isAdmin && (
                   <><button onClick={() => fileInputRef.current.click()} className="absolute bottom-2 right-2 p-2 bg-black border border-cyan-500 rounded-full text-cyan-500 z-20"><Camera size={16} /></button><input type="file" ref={fileInputRef} onChange={handleImageUpload} className="hidden" accept="image/*" /></>
                 )}
             </div>

             <h1 onClick={handleAdminTrigger} className={`text-3xl md:text-7xl font-bold mb-3 cursor-default select-none ${textMain}`}>
               Pennueng Daenchai
               {isAdmin && <span className="text-xs align-top text-red-500 ml-2 animate-pulse">[ADMIN]</span>}
             </h1>
             
             <Typewriter words={["Problemlöser.", "Praktiker.", "Lösungs-Finder.", "Macher."]} darkMode={darkMode} />
             <div className="mb-16"><TechStackTicker darkMode={darkMode} /></div>
             
             <div className="flex justify-center gap-4 mb-16">
               <button onClick={() => setActiveTab('about')} className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold uppercase tracking-widest border transition-all text-xs md:text-sm border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white`}>
                 <User size={18} /> Meine Story
               </button>
             </div>
            
             <div className="text-left mb-8 pt-8 border-t border-slate-800/50">
               <SectionTitle icon={Code} title="Projekte" darkMode={darkMode} />
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {projects.map((project) => (
                 <ProjectCard 
                    key={project.id} 
                    project={project} 
                    onClick={() => setCurrentView(project.viewType)} 
                    cardStyle={cardStyle} 
                    textMain={textMain} 
                    textSub={textSub} 
                    isAdmin={isAdmin} 
                    onDelete={handleDeleteProject}
                 />
               ))}
             </div>
          </div>
        )}

        {/* ABOUT CONTENT */}
        {activeTab === 'about' && (
          <div className="pt-6 md:pt-10 max-w-3xl mx-auto">
             <div className={`p-6 rounded-2xl mb-10 ${cardStyle}`}>
               <h2 className={`text-2xl font-bold mb-4 ${textMain}`}>Der pragmatische Ansatz</h2>
               <div className={`space-y-4 text-sm md:text-base leading-relaxed ${textSub}`}>
                  <p>Ich bin ehrlich: Wenn Sie reine Theorie suchen, bin ich der Falsche. Wenn Sie jemanden suchen, der ein <strong>Problem sieht und es behebt</strong>, dann bin ich Ihr Mann.</p>
                  <p>Vom Handwerk über die Logistik bis zur IT: Ich habe gelernt, genau hinzusehen. Ich nutze KI und moderne Frameworks als Werkzeuge, um effiziente Lösungen zu bauen.</p>
                  <p>Die IT-Landschaft ist riesig. Niemand kennt 100% aller Systeme. Aber das ist auch nicht mein Anspruch. Mein Talent ist es, mich tief in neue Themen hineinzufuchsen und pragmatische Lösungen zu finden. Dabei nutze ich KI als Hebel, um schneller und effizienter Ergebnisse zu liefern, statt das Rad neu zu erfinden.</p>
                  <p className="p-3 border-l-4 border-cyan-500 bg-cyan-500/10 text-cyan-600 font-medium italic rounded-r">"Deutschland muss wieder effizienter werden. KI und Automation sind keine Bedrohung, sondern der Schlüssel dazu."</p>
               </div>
             </div>

             <SectionTitle icon={Briefcase} title="Werdegang" darkMode={darkMode} />
             <div className={`relative border-l-2 ml-3 space-y-8 pb-8 ${darkMode ? 'border-slate-800' : 'border-slate-300'}`}>
               {[
                 { year: "Aktuell", title: "Technical Builder", company: "Eigenständige Entwicklung", desc: "Intensive Projektarbeit: Ich baue funktionierende Software-Lösungen, indem ich moderne Tools und KI als Werkzeuge nutze. Fokus auf Umsetzung und Fehlerbehebung.", icon: <Blocks size={16} /> },
                 { year: "2024 - 2025", title: "QA & Operations", company: "Sixt Autovermietung", desc: "Operative Problemlösung in Echtzeit. Systematische Qualitätskontrollen und Prozess-Optimierung in einem stressigen Umfeld.", icon: <ShieldCheck size={16} /> },
                 { year: "2022 - 2024", title: "Software-Entwicklung", company: "Umschulung / e.solutions", desc: "Die Umschulung war mein Startblock. Ich habe dort gelernt, was man für den Einstieg braucht. Aber in einer Welt, die zu sehr auf Zertifikate fixiert ist, habe ich verstanden: Echtes IT-Wissen lernt man am besten selbst durch Tun.", icon: <Terminal size={16} /> },
                 { year: "2018 - 2022", title: "Logistik", company: "Aldi SÜD", desc: "Effiziente Kommissionierung und Prozess-Optimierung. Arbeit in einem High-Performance-Umfeld mit strikten Zeitvorgaben. Hier habe ich gelernt, auch unter Druck präzise zu liefern.", icon: <Database size={16} /> },
                 { year: "2016 - 2017", title: "Service & Präzision", company: "Mister Minit", desc: "Direkter Kundenkontakt und lösungsorientierte Handarbeit. Sofortige Problemlösung für Kundenanliegen – eine Fähigkeit, die ich heute in den IT-Support übertrage.", icon: <User size={16} /> },
                 { year: "2012 - 2016", title: "Handwerk", company: "Dachdeckerei Moran", desc: "Ausbildung und Gesellenzeit. Harte körperliche Arbeit, Teamwork in der Höhe und absolute Verlässlichkeit. Wer ein Dach decken kann, hat keine Angst vor komplexen Herausforderungen.", icon: <Hammer size={16} /> }
               ].map((item, idx) => (
                 <div key={idx} className="relative pl-8">
                   <div className={`absolute -left-[7px] top-1 w-3.5 h-3.5 rounded-full border-2 bg-black border-cyan-500`}></div>
                   <div className={`p-4 rounded-xl ${cardStyle}`}>
                     <span className="text-[10px] font-bold uppercase text-cyan-600 mb-1 block">{item.year}</span>
                     <h4 className={`font-bold ${textMain}`}>{item.title}</h4>
                     <div className={`text-xs font-bold mb-2 opacity-70 ${textMain}`}>{item.company}</div>
                     <p className={`text-xs leading-relaxed ${textSub}`}>{item.desc}</p>
                   </div>
                 </div>
               ))}
             </div>

             <SectionTitle icon={Brain} title="Kompetenzen" darkMode={darkMode} />
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
               {[
                 {title: "Fehleranalyse", icon: <Microscope className="text-emerald-500" size={20}/>, desc: "Ich finde Bugs und Probleme, bevor sie kritisch werden.", tags: ["Debugging", "Quality Checks", "System-Tests", "Troubleshooting"], color: "emerald"},
                 {title: "Tech Stack", icon: <Terminal className="text-blue-500" size={20}/>, desc: "Stabiles Fundament durch Umschulung & Eigenstudium.", tags: ["Java", "C#", "Python", "React", "AI Prompting", "Linux"], color: "blue"},
                 {title: "Workflow", icon: <GitBranch className="text-orange-500" size={20}/>, desc: "Ich weiß, wie professionelle Teams arbeiten.", tags: ["Git & Bitbucket", "Scrum / Agile", "Jira / Tickets", "Support"], color: "orange"}
               ].map((skill, i) => (
                 <div key={i} className={`p-6 rounded-xl ${cardStyle}`}>
                   <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 ${textMain}`}>{skill.icon} {skill.title}</h3>
                   <p className={`text-sm mb-4 ${textSub}`}>{skill.desc}</p>
                   <div className="flex flex-wrap gap-2">{skill.tags.map(t => <span key={t} className={`px-3 py-1 rounded text-xs border bg-${skill.color}-500/10 text-${skill.color}-500 border-${skill.color}-500/30`}>{t}</span>)}</div>
                 </div>
               ))}
             </div>
          </div>
        )}

        {/* CONTACT CONTENT */}
        {activeTab === 'contact' && (
          <div className="pt-10 max-w-md mx-auto pb-10">
            <div className={`p-6 md:p-10 rounded-2xl text-center ${cardStyle}`}>
               <h2 className={`text-2xl font-bold mb-4 ${textMain}`}>Kontakt</h2>
               <p className={`mb-8 text-sm ${textSub}`}>Lassen Sie uns sprechen.</p>
               <div className="space-y-3 mb-8 text-left">
                  {[{ icon: User, label: "Name", val: "Pennueng Daenchai" }, { icon: Mail, label: "Email", val: "Penjidaenchai@gmail.com" }, { icon: Phone, label: "Telefon", val: "0160 98720811" }, { icon: MapPin, label: "Ort", val: "Lappacher Weg 19, 91315 Höchstadt a.d. Aisch" }].map((c, i) => (
                    <div key={i} className={`flex items-center gap-4 p-3 rounded-xl border ${darkMode ? 'border-slate-800 bg-black/40' : 'border-slate-100 bg-white/60'}`}>
                       <div className="w-10 h-10 rounded-full flex items-center justify-center bg-cyan-500/10 text-cyan-500 shrink-0"><c.icon size={18}/></div>
                       <div className="overflow-hidden"><div className="text-[10px] uppercase font-bold opacity-50">{c.label}</div><div className={`text-sm font-medium ${textMain} break-words whitespace-normal`}>{c.val}</div></div>
                    </div>
                  ))}
               </div>
               <a href="https://wa.me/4916098720811" target="_blank" rel="noopener noreferrer" className="w-full py-3.5 font-bold uppercase tracking-widest border border-green-500 bg-green-600 text-white rounded-xl flex items-center justify-center gap-2 shadow-lg hover:bg-green-500 transition-all text-sm"><MessageCircle size={20} /> WhatsApp</a>
            </div>
          </div>
        )}
      </main>

      <footer className={`py-12 border-t px-4 relative z-10 text-center ${darkMode ? 'border-slate-800 bg-black/80' : 'border-slate-200 bg-white/80'} text-xs text-slate-500 pb-28 md:pb-12`}>
         <div className="max-w-6xl mx-auto flex flex-col items-center">
             <div className={`flex flex-col md:flex-row items-center gap-4 md:gap-6 px-6 py-3 rounded-full border transition-all mb-8 ${darkMode ? 'bg-slate-900/50 border-slate-700' : 'bg-white/50 border-slate-200'} hover:border-cyan-500/50`}>
                 <span className={`font-bold ${textMain}`}>Pennueng Daenchai</span><span className="hidden md:inline opacity-30">•</span><span className={textSub}>Penjidaenchai@gmail.com</span><span className="hidden md:inline opacity-30">•</span>
                 <a href="https://wa.me/4916098720811" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-3 py-1.5 rounded-full transition-all shadow-lg shadow-green-900/20 hover:scale-105 font-bold tracking-wide text-[10px] md:text-xs"><MessageCircle size={14} /> WhatsApp</a>
             </div>
             <div className="flex gap-6 mb-4 opacity-70"><button onClick={() => setLegalView('imprint')} className="hover:text-cyan-500 transition-colors">Impressum</button><span>|</span><button onClick={() => setLegalView('privacy')} className="hover:text-cyan-500 transition-colors">Datenschutz</button></div>
             <div className="opacity-50">© {new Date().getFullYear()} Pennueng Daenchai</div>
         </div>
      </footer>

      {legalView && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in" onClick={() => setLegalView(null)}>
             <div className={`w-full max-w-lg p-6 rounded-2xl border shadow-2xl relative overflow-y-auto max-h-[85vh] ${darkMode ? 'bg-slate-900 border-slate-700 text-slate-200' : 'bg-white border-slate-200 text-slate-800'}`} onClick={e => e.stopPropagation()}>
                <button onClick={() => setLegalView(null)} className="absolute top-4 right-4 p-2 rounded-full hover:bg-red-500 hover:text-white transition-colors"><X size={20}/></button>
                <h2 className="text-2xl font-bold mb-4 border-b pb-4 border-cyan-500/30">{legalView === 'imprint' ? 'Impressum' : 'Datenschutz'}</h2>
                <div className="text-sm space-y-4 leading-relaxed opacity-90">
                   {legalView === 'imprint' ? (
                     <div className="space-y-4"><div><h3 className="font-bold text-base mb-2">Angaben gemäß § 5 TMG</h3><p>Pennueng Daenchai</p><p>Lappacher Weg 19</p><p>91315 Höchstadt a.d. Aisch</p></div><div><h3 className="font-bold text-base mb-2">Kontakt</h3><p>Telefon: 0160 98720811</p><p>E-Mail: Penjidaenchai@gmail.com</p></div><div className="text-xs opacity-60 mt-8 p-4 bg-black/20 rounded">Hinweis: Dies ist ein Portfolio zur Bewerbung. Es werden keine kostenpflichtigen Dienstleistungen direkt über diese Seite abgewickelt.</div></div>
                   ) : (
                     <div className="space-y-4"><p>Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist: <strong>Pennueng Daenchai (siehe Impressum)</strong></p><h3 className="font-bold text-cyan-500 mt-4">1. Datenschutz auf einen Blick</h3><p><strong>Allgemeine Hinweise:</strong> Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p><h3 className="font-bold text-cyan-500 mt-4">2. Hosting</h3><p>Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.</p><h3 className="font-bold text-cyan-500 mt-4">3. Datenerfassung auf dieser Website</h3><p><strong>Vercel Web Analytics:</strong> Diese Website nutzt 'Vercel Analytics' zur statistischen Auswertung. Die Erfassung erfolgt anonymisiert.</p><h3 className="font-bold text-cyan-500 mt-4">4. Ihre Rechte</h3><p>Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten.</p></div>
                   )}
                </div>
             </div>
          </div>
      )}
    </div>
  );
}