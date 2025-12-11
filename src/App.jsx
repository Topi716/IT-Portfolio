import React, { useState, useRef, useEffect } from 'react';
// SCHRITT FÜR ANALYTICS 1: Entferne die zwei Schrägstriche am Anfang der nächsten Zeile, wenn du es lokal nutzt:
import { Analytics } from '@vercel/analytics/react'; 

import { 
  Github, ExternalLink, Plus, Trash2, Code, Mail, Linkedin, User, Briefcase, X, 
  Phone, MapPin, Camera, Brain, Terminal, Database, ArrowRight, Moon, Sun, 
  CheckCircle, Send, Search, PenTool, Zap, Clock, AlertCircle, Cpu, ShieldCheck, Microscope, Flame, Blocks, Wrench, GitBranch, Users, ClipboardList, BookOpen, Lightbulb, Target, Lock, Server, Table, Key, Hammer, MessageCircle, FileText, CheckSquare, Globe, Wifi, Layers, Monitor, Network, FileCheck, Menu, ArrowDown
} from 'lucide-react';

// ==========================================
// CSS STYLES FÜR NEON & ANIMATIONEN
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
  
  .animate-blob {
    animation: blob 15s infinite alternate;
  }
  .animate-spin-slow {
    animation: spin-slow 8s linear infinite;
  }
  .animate-pulse-slow {
    animation: pulse-slow 6s ease-in-out infinite;
  }
  
  .animation-delay-2000 { animation-delay: 2s; }
  .animation-delay-4000 { animation-delay: 4s; }
  
  /* Glass Panel Logic */
  .glass-panel-dark {
    background: rgba(10, 10, 10, 0.6);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(6, 182, 212, 0.3);
    transition: all 0.5s ease;
  }
  .glass-panel-light {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(6, 182, 212, 0.4); 
    transition: all 0.5s ease;
  }
  
  .glass-panel-dark:hover, .glass-panel-light:hover {
    border-color: rgba(239, 68, 68, 0.6);
    box-shadow: 0 0 20px rgba(239, 68, 68, 0.3);
  }
  
  /* Simulation Lines Animation */
  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
  .path-animation {
    stroke-dasharray: 10;
    animation: dash 1s linear infinite;
  }
`;

// ==========================================
// TEIL 1: DEIN PROJEKT (Copywriting Landingpage) - MOBILE OPTIMIZED
// ==========================================

const CopywritingLandingProject = ({ onBack }) => {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [isAfterMode, setIsAfterMode] = useState(false);
  const [formStatus, setFormStatus] = useState('idle');

  const industries = [
    {
      id: 0,
      name: "Dachdecker",
      before: {
        url: "www.mueller-bedachungen-1990.de",
        headline: "Willkommen bei Bedachungen Müller",
        sub: "Wir sind Ihr kompetenter Partner für alle Fragen rund ums Dach seit 1990. Rufen Sie uns gerne an für einen Termin.",
        cta: "Kontakt aufnehmen",
        bgClass: "bg-slate-200", 
        textClass: "text-slate-600"
      },
      after: {
        url: "www.dach-notdienst-express.de",
        headline: "Ihr Dach ist undicht? Wir reagieren sofort.",
        sub: "Priorisierter Notdienst bei Sturmschäden. Faire Festpreise statt versteckter Kosten. Wir verhindern teure Folgeschäden an Ihrem Haus.",
        cta: "Notdienst anfordern (24h)",
        bgClass: "bg-slate-900", 
        textClass: "text-white"
      }
    },
    {
      id: 1,
      name: "Zahnarzt",
      before: {
        url: "www.praxis-dr-stein.de/startseite",
        headline: "Zahnarztpraxis Dr. Stein",
        sub: "Unser Leistungsspektrum umfasst Prophylaxe, Füllungen und Implantologie. Unsere Sprechzeiten sind Mo-Fr 8-12 Uhr.",
        cta: "Terminvereinbarung",
        bgClass: "bg-blue-50", 
        textClass: "text-blue-900"
      },
      after: {
        url: "www.angstfrei-zum-zahnarzt.de",
        headline: "Endlich wieder schmerzfrei essen.",
        sub: "Spezialisiert auf Angstpatienten: Sanfte Betäubung & entspannte Atmosphäre. Ihre Zahngesundheit beginnt mit einem Lächeln.",
        cta: "Online Termin buchen",
        bgClass: "bg-teal-950", 
        textClass: "text-teal-50"
      }
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans overflow-y-auto relative z-50">
        
        {/* Navigation Bar im Projekt-Modus */}
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-white/90 backdrop-blur-md border-b border-slate-200">
           <div 
             onClick={onBack} 
             className="text-lg md:text-2xl font-extrabold tracking-tight uppercase cursor-pointer hover:opacity-80 transition-opacity truncate mr-4"
             title="Zurück zum Portfolio"
           >
              PD<span className="text-orange-500">.COPY</span>
           </div>
           
           <button onClick={onBack} className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-full font-bold uppercase tracking-widest flex items-center gap-2 transition-all shadow-lg text-xs md:text-sm whitespace-nowrap">
             <X size={16} /> <span className="hidden md:inline">Schließen</span>
           </button>
        </nav>

        {/* HERO - Padding Top erhöht wegen fester Nav */}
        <section className="pt-32 pb-10 px-6 text-center max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-7xl font-extrabold mb-6 tracking-tight">Worte. Wirkung. <span className="text-orange-500 block md:inline">Umsatz.</span></h1>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10">Premium Copywriting & SEO. Ich verwandle Besucher in Kunden. Ohne Meetings, rein schriftlich.</p>
            <a href="#audit" className="bg-orange-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-orange-600 transition shadow-xl inline-flex items-center gap-2">
               Kostenlose Analyse <ArrowRight />
            </a>
        </section>

        {/* BROWSER SLIDER - MOBILE OPTIMIZED */}
        <section className="px-4 md:px-6 pb-20 md:pb-32">
          {/* Change aspect ratio based on screen size: flexible height on mobile, fixed 16/9 on desktop */}
          <div className="max-w-5xl mx-auto border-4 border-slate-200 rounded-xl overflow-hidden shadow-2xl bg-white relative">
             <div className="h-8 md:h-10 bg-slate-100 border-b flex items-center px-4 gap-2">
                <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-400"></div><div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div><div className="w-2.5 h-2.5 rounded-full bg-green-400"></div></div>
                <div className="flex-1 bg-white mx-4 rounded text-[10px] md:text-xs text-center py-1 text-gray-500 font-mono truncate">
                  {isAfterMode ? industries[activeIndustry].after.url : industries[activeIndustry].before.url}
                </div>
             </div>
             
             {/* Use 'min-h' instead of aspect ratio on mobile to fit content */}
             <div className="relative min-h-[450px] md:aspect-[16/9] group">
                <div className={`absolute inset-0 flex flex-col items-center justify-center text-center p-8 md:p-12 transition-all duration-500 ${isAfterMode ? industries[activeIndustry].after.bgClass : industries[activeIndustry].before.bgClass} ${isAfterMode ? industries[activeIndustry].after.textClass : industries[activeIndustry].before.textClass}`}>
                   <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">{isAfterMode ? industries[activeIndustry].after.headline : industries[activeIndustry].before.headline}</h2>
                   <p className="text-base md:text-lg mb-8 max-w-xl mx-auto opacity-90 leading-relaxed">{isAfterMode ? industries[activeIndustry].after.sub : industries[activeIndustry].before.sub}</p>
                   <button className={`px-6 py-3 md:px-8 md:py-3 font-bold rounded text-sm md:text-base ${isAfterMode ? 'bg-orange-500 text-white shadow-lg transform scale-105' : 'border-2 border-current'}`}>
                      {isAfterMode ? industries[activeIndustry].after.cta : industries[activeIndustry].before.cta}
                   </button>
                </div>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur text-white px-1 py-1 rounded-full flex gap-1 cursor-pointer border border-white/20 shadow-xl" onClick={() => setIsAfterMode(!isAfterMode)}>
                   <div className={`px-4 py-2 rounded-full transition-all text-xs md:text-sm font-bold ${!isAfterMode ? 'bg-slate-700' : 'hover:bg-white/10'}`}>Vorher</div>
                   <div className={`px-4 py-2 rounded-full transition-all text-xs md:text-sm font-bold ${isAfterMode ? 'bg-orange-500' : 'hover:bg-white/10'}`}>Nachher</div>
                </div>
             </div>
          </div>
          <div className="flex justify-center gap-3 mt-6 flex-wrap">
             {industries.map((ind) => (
                <button key={ind.id} onClick={() => { setActiveIndustry(ind.id); setIsAfterMode(false); }} className={`px-4 py-2 rounded-full text-xs md:text-sm font-bold border transition ${activeIndustry === ind.id ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-slate-500 border-slate-300'}`}>
                   {ind.name}
                </button>
             ))}
          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-slate-50 py-20 md:py-32 px-6">
           <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 md:mb-16">
                 <h2 className="text-orange-500 font-bold tracking-widest uppercase mb-2">Expertise</h2>
                 <h3 className="text-3xl md:text-4xl font-extrabold">Was ich liefere</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                 <div className="p-8 md:p-10 bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-xl transition-all">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-100 text-orange-500 rounded-2xl flex items-center justify-center mb-6"><Search size={28} /></div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4">SEO Audit</h3>
                    <p className="text-slate-500 leading-relaxed mb-6 text-sm md:text-base">Analyse Ihrer Struktur und Keywords. Ich sorge dafür, dass Sie von genau den Kunden gefunden werden, die Sie suchen.</p>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs md:text-sm">
                       <div className="flex gap-2 text-red-400 mb-2"><X size={16}/> Titel: "Willkommen"</div>
                       <div className="flex gap-2 text-green-600 font-bold"><CheckCircle size={16}/> Titel: "Anwalt für Arbeitsrecht"</div>
                    </div>
                 </div>
                 <div className="p-8 md:p-10 bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-xl transition-all">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-100 text-blue-500 rounded-2xl flex items-center justify-center mb-6"><PenTool size={28} /></div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4">Sales Copy</h3>
                    <p className="text-slate-500 leading-relaxed mb-6 text-sm md:text-base">Verkaufstexte, die den Wert Ihres Angebots auf den Punkt bringen, statt mit leeren Floskeln zu langweilen.</p>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs md:text-sm">
                       <div className="flex gap-2 text-red-400 mb-2"><X size={16}/> "Wir sind kompetent."</div>
                       <div className="flex gap-2 text-green-600 font-bold"><CheckCircle size={16}/> "Stoppen Sie Systemausfälle sofort."</div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* PAKETE */}
        <section id="pakete" className="py-20 md:py-32 px-6">
           <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 md:mb-20">Pakete</h2>
              <div className="grid md:grid-cols-2 gap-10 items-start">
                 <div className="p-8 md:p-10 bg-slate-50 rounded-3xl border border-slate-200">
                    <h3 className="text-2xl font-bold mb-2">Der Check</h3>
                    <div className="text-4xl font-extrabold text-orange-500 mb-6">0€</div>
                    <ul className="space-y-4 mb-8 text-slate-600 font-medium">
                       <li className="flex items-center gap-3"><CheckCircle className="text-orange-500" size={20}/> Analyse des Ist-Zustands</li>
                       <li className="flex items-center gap-3"><CheckCircle className="text-orange-500" size={20}/> Umsatz-Killer finden</li>
                       <li className="flex items-center gap-3"><CheckCircle className="text-orange-500" size={20}/> Erstgespräch inklusive</li>
                    </ul>
                    <a href="#audit" className="block w-full py-4 text-center border-2 border-slate-900 rounded-full font-bold hover:bg-slate-900 hover:text-white transition">Jetzt anfragen</a>
                 </div>
                 <div className="p-8 md:p-10 bg-slate-900 text-white rounded-3xl shadow-2xl relative transform md:-translate-y-4">
                    <div className="absolute top-0 right-6 md:right-10 -translate-y-1/2 bg-orange-500 text-white px-3 py-1 rounded-full text-xs md:text-sm font-bold uppercase tracking-wide">Empfohlen</div>
                    <h3 className="text-2xl font-bold mb-2">Website Refresh</h3>
                    <div className="text-4xl font-extrabold text-orange-500 mb-6">ab 890€</div>
                    <ul className="space-y-4 mb-8 font-medium">
                       <li className="flex items-center gap-3"><CheckCircle className="text-orange-500" size={20}/> Komplette Texterstellung</li>
                       <li className="flex items-center gap-3"><CheckCircle className="text-orange-500" size={20}/> SEO Optimierung</li>
                       <li className="flex items-center gap-3"><CheckCircle className="text-orange-500" size={20}/> 2 Korrekturschleifen</li>
                       <li className="flex items-center gap-3"><CheckCircle className="text-orange-500" size={20}/> Conversion Beratung</li>
                    </ul>
                    <a href="#audit" className="block w-full py-4 text-center bg-orange-500 rounded-full font-bold hover:bg-orange-600 transition">Jetzt starten</a>
                    <div className="mt-6 flex items-center justify-center gap-2 text-xs opacity-60 uppercase tracking-wide font-bold">
                       <Clock size={14}/> Antwort in 24h
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* AUDIT FORM */}
        <section id="audit" className="py-20 md:py-32 px-6 bg-slate-50 mb-20 md:mb-0">
          <div className="max-w-xl mx-auto bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100">
             <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">Interesse geweckt?</h3>
             <p className="text-slate-500 mb-8 text-center">Lassen Sie uns Ihre Website analysieren.</p>
             {formStatus === 'success' ? (
                <div className="p-8 bg-green-50 text-green-600 rounded-xl text-center font-bold flex flex-col items-center gap-4">
                   <CheckCircle size={48} />
                   Anfrage erfolgreich gesendet!
                   <button onClick={() => setFormStatus('idle')} className="text-sm underline opacity-70">Neue Anfrage</button>
                </div>
             ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                   <div>
                      <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Name</label>
                      <input required type="text" className="w-full p-4 bg-slate-50 rounded-xl border-2 border-transparent focus:border-orange-500 focus:bg-white transition outline-none font-medium" placeholder="Ihr Name" />
                   </div>
                   <div>
                      <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Email</label>
                      <input required type="email" className="w-full p-4 bg-slate-50 rounded-xl border-2 border-transparent focus:border-orange-500 focus:bg-white transition outline-none font-medium" placeholder="ihre@email.de" />
                   </div>
                   <div>
                      <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Website (Optional)</label>
                      <input type="text" className="w-full p-4 bg-slate-50 rounded-xl border-2 border-transparent focus:border-orange-500 focus:bg-white transition outline-none font-medium" placeholder="www.ihre-seite.de" />
                   </div>
                   <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-all w-full flex items-center justify-center gap-2">
                      Analyse anfordern <Send size={20} />
                   </button>
                </form>
             )}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-12 border-t border-slate-200 px-6">
           <div className="max-w-6xl mx-auto text-center text-slate-500 text-sm font-medium">
             <div>© {new Date().getFullYear()} PD.Copywriter</div>
           </div>
        </footer>
    </div>
  );
}

// ==========================================
// TEIL 2: COPYWRITING DOKUMENTATION - VOLLSTÄNDIG (AIDA, PAS, 4Us, Checkliste)
// ==========================================

const CopywritingDocsView = ({ onBack, darkMode }) => {
  const cardClass = darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200";
  const textMain = darkMode ? "text-white" : "text-slate-900";
  const textSub = darkMode ? "text-slate-400" : "text-slate-600";

  return (
    <div className={`min-h-screen p-4 md:p-12 overflow-y-auto relative z-50 ${darkMode ? 'bg-black text-slate-200' : 'bg-slate-50 text-slate-800'} pb-32 md:pb-12`}>
      <div className="max-w-4xl mx-auto">
        <nav className="flex justify-between items-center mb-8 md:mb-12">
           <div className={`text-xl md:text-2xl font-bold cursor-pointer hover:opacity-80 flex items-center gap-2 ${textMain}`} onClick={onBack}>
              <Brain size={24} className="text-purple-500" />
              <span className="truncate">Copy<span className="hidden md:inline">writing</span>.Docs</span>
           </div>
           <button onClick={onBack} className={`p-2 md:p-3 rounded-full shadow-xl border transition-all ${darkMode ? 'bg-slate-800 border-slate-700 hover:bg-slate-700' : 'bg-white border-slate-200 hover:bg-slate-100'}`}><X size={20} /></button>
        </nav>

        <header className="mb-8 md:mb-12 text-center">
          <h1 className={`text-3xl md:text-6xl font-bold mb-4 ${textMain}`}>Copywriting Cheat Sheet</h1>
          <p className="text-lg md:text-xl opacity-60">Die wichtigsten Techniken für Einsteiger – kurz & knapp.</p>
        </header>

        <div className="space-y-6 md:space-y-8">
          
          {/* 1. Feature vs Benefit */}
          <section className={`p-6 md:p-8 rounded-2xl border ${cardClass}`}>
            <h2 className="text-xl md:text-2xl font-bold mb-2 text-purple-500">1. Die Goldene Regel: Feature vs. Benefit</h2>
            <p className={`mb-6 text-sm md:text-base ${textSub}`}>Kunden kaufen keine Produkteigenschaften, sondern ein besseres Leben.</p>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                <strong className="text-red-500 block mb-2">❌ Feature (Merkmal)</strong>
                "256 GB Speicherplatz."
              </div>
              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                <strong className="text-green-500 block mb-2">✅ Benefit (Nutzen)</strong>
                "Platz für 50.000 Fotos deiner Familie, damit du keine Erinnerung löschen musst."
              </div>
            </div>
            <div className="mt-4 p-4 bg-purple-500/5 rounded-xl border border-purple-500/10 flex items-start md:items-center gap-3">
               <Lightbulb className="text-purple-500 shrink-0 mt-1 md:mt-0" />
               <p className="text-xs md:text-sm"><strong>Der Trick:</strong> Frage nach jedem Merkmal: "Na und?" Die Antwort darauf ist der Benefit.</p>
            </div>
          </section>

          {/* 2. Struktur Formeln (AIDA & PAS) */}
          <section className={`p-6 md:p-8 rounded-2xl border ${cardClass}`}>
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-purple-500">2. Die wichtigsten Struktur-Formeln</h2>
            
            <div className="mb-8">
               <h3 className={`text-lg md:text-xl font-bold mb-4 ${textMain}`}>A. I. D. A. (Für fast alles)</h3>
               <ul className="space-y-4">
                 <li className="flex gap-4"><span className="font-bold text-xl md:text-2xl w-8 text-purple-400 shrink-0">A</span><div><strong className={textMain}>Attention:</strong> Die Headline muss den Leser stoppen.</div></li>
                 <li className="flex gap-4"><span className="font-bold text-xl md:text-2xl w-8 text-purple-400 shrink-0">I</span><div><strong className={textMain}>Interest:</strong> Mache ihn neugierig.</div></li>
                 <li className="flex gap-4"><span className="font-bold text-xl md:text-2xl w-8 text-purple-400 shrink-0">D</span><div><strong className={textMain}>Desire:</strong> Zeige, wie gut sein Leben mit dem Produkt wäre.</div></li>
                 <li className="flex gap-4"><span className="font-bold text-xl md:text-2xl w-8 text-purple-400 shrink-0">A</span><div><strong className={textMain}>Action:</strong> Sag ihm genau, was er klicken/tun soll.</div></li>
               </ul>
            </div>

            <div>
               <h3 className={`text-lg md:text-xl font-bold mb-4 ${textMain}`}>P. A. S. (Für Problemlösungen)</h3>
               <ul className="space-y-4">
                 <li className="flex gap-4"><span className="font-bold text-xl md:text-2xl w-8 text-blue-400 shrink-0">P</span><div><strong className={textMain}>Problem:</strong> Benenne das Problem des Kunden klar.</div></li>
                 <li className="flex gap-4"><span className="font-bold text-xl md:text-2xl w-8 text-blue-400 shrink-0">A</span><div><strong className={textMain}>Agitation (Aufwühlen):</strong> Mache das Problem schmerzhaft (emotional).</div></li>
                 <li className="flex gap-4"><span className="font-bold text-xl md:text-2xl w-8 text-blue-400 shrink-0">S</span><div><strong className={textMain}>Solution:</strong> Dein Produkt ist die Erlösung.</div></li>
               </ul>
            </div>
          </section>

          {/* 3. Die 4 U's */}
          <section className={`p-6 md:p-8 rounded-2xl border ${cardClass}`}>
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-purple-500">3. Die 4 U's für starke Headlines</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
               <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-100'}`}>
                  <div className="text-lg md:text-xl font-bold mb-1 text-purple-400">Urgent</div>
                  <div className="text-xs opacity-70">Warum jetzt lesen?</div>
               </div>
               <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-100'}`}>
                  <div className="text-lg md:text-xl font-bold mb-1 text-purple-400">Unique</div>
                  <div className="text-xs opacity-70">Was ist neu/anders?</div>
               </div>
               <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-100'}`}>
                  <div className="text-lg md:text-xl font-bold mb-1 text-purple-400">Ultra-specific</div>
                  <div className="text-xs opacity-70">"5.420 €" statt "Viel Geld"</div>
               </div>
               <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-100'}`}>
                  <div className="text-lg md:text-xl font-bold mb-1 text-purple-400">Useful</div>
                  <div className="text-xs opacity-70">Welcher Mehrwert sofort?</div>
               </div>
            </div>
          </section>

          {/* 4. Psychologische Trigger */}
          <section className={`p-6 md:p-8 rounded-2xl border ${cardClass}`}>
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-purple-500">4. Psychologische Trigger</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               <div className="p-4 bg-slate-500/5 rounded-lg border border-slate-500/10"><strong>Social Proof</strong><br/><span className="text-sm opacity-70">"Bereits 5.000 Kunden"</span></div>
               <div className="p-4 bg-slate-500/5 rounded-lg border border-slate-500/10"><strong>Scarcity</strong><br/><span className="text-sm opacity-70">"Nur noch 3 Stück"</span></div>
               <div className="p-4 bg-slate-500/5 rounded-lg border border-slate-500/10"><strong>Risiko-Umkehr</strong><br/><span className="text-sm opacity-70">"30 Tage Geld zurück"</span></div>
            </div>
          </section>

          {/* 5. Checkliste */}
          <section className={`p-6 md:p-8 rounded-2xl border ${cardClass}`}>
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-purple-500">5. Checkliste für deinen Text</h2>
            <div className="space-y-3">
               <div className="flex items-center gap-3"><CheckSquare className="text-green-500 shrink-0"/> <span><strong>Du-Perspektive:</strong> Sprichst du den Leser direkt an?</span></div>
               <div className="flex items-center gap-3"><CheckSquare className="text-green-500 shrink-0"/> <span><strong>Aktive Sprache:</strong> Starke Verben nutzen.</span></div>
               <div className="flex items-center gap-3"><CheckSquare className="text-green-500 shrink-0"/> <span><strong>Lesbarkeit:</strong> Kurze Sätze. Viele Absätze.</span></div>
               <div className="flex items-center gap-3"><CheckSquare className="text-green-500 shrink-0"/> <span><strong>Ein Ziel:</strong> Hat der Text genau EINEN Call to Action?</span></div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

// ==========================================
// TEIL 3: DATENBANK PROJEKT
// ==========================================

const DatabaseProjectView = ({ onBack, darkMode }) => {
  const [activeQuery, setActiveQuery] = useState(0);
  const queries = [
    {
      title: "Alle Bestellungen eines Kunden",
      sql: `SELECT o.id, o.date, p.name, p.price 
FROM Orders o
JOIN Users u ON o.user_id = u.id
JOIN Products p ON o.product_id = p.id
WHERE u.email = 'kunde@beispiel.de';`,
      result: [
        { id: "#1023", date: "2024-02-15", name: "Gaming Maus", price: "49.99€" },
        { id: "#1045", date: "2024-03-01", name: "Tastatur", price: "89.99€" },
      ]
    },
    {
      title: "Top Seller (Meistverkaufte Produkte)",
      sql: `SELECT p.name, COUNT(o.id) as sales_count
FROM Products p
LEFT JOIN Orders o ON p.id = o.product_id
GROUP BY p.id
ORDER BY sales_count DESC
LIMIT 5;`,
      result: [
        { name: "Gaming Maus", sales_count: 142 },
        { name: "USB-C Kabel", sales_count: 98 },
        { name: "Monitor 27\"", sales_count: 45 },
      ]
    }
  ];

  return (
    <div className={`min-h-screen p-4 md:p-12 overflow-y-auto relative z-50 ${darkMode ? 'bg-black text-slate-200' : 'bg-slate-50 text-slate-800'} pb-32 md:pb-12`}>
      <div className="max-w-5xl mx-auto">
        <nav className="flex justify-between items-center mb-8 md:mb-12">
            <div className="flex items-center gap-4 cursor-pointer hover:opacity-80" onClick={onBack}>
               <div className="p-2 md:p-3 bg-emerald-500/10 text-emerald-500 rounded-xl"><Database size={24} className="md:w-8 md:h-8"/></div>
               <div>
                  <h1 className="text-xl md:text-2xl font-bold">E-Commerce DB</h1>
                  <p className="opacity-60 text-xs">Architecture & SQL</p>
               </div>
            </div>
            <button onClick={onBack} className={`p-2 md:p-3 rounded-full shadow-xl border transition-all ${darkMode ? 'bg-slate-800 border-slate-700 hover:bg-slate-700' : 'bg-white border-slate-200 hover:bg-slate-100'}`}><X size={20} /></button>
        </nav>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
           <div className={`p-6 rounded-xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <h3 className="font-bold mb-4 flex items-center gap-2"><Server size={18}/> Tabellen Struktur</h3>
              <div className="space-y-3 font-mono text-sm">
                 <div className="p-2 bg-emerald-500/10 border-l-2 border-emerald-500 rounded">Users (id, email)</div>
                 <div className="flex justify-center text-xs opacity-50">⬇ 1:n</div>
                 <div className="p-2 bg-blue-500/10 border-l-2 border-blue-500 rounded">Orders (id, user_id, date)</div>
                 <div className="flex justify-center text-xs opacity-50">⬇ n:1</div>
                 <div className="p-2 bg-purple-500/10 border-l-2 border-purple-500 rounded">Products (id, name, price)</div>
              </div>
           </div>

           <div className="lg:col-span-2 space-y-6">
              <div className={`rounded-xl border overflow-hidden ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                 <div className="flex border-b border-slate-700/50 overflow-x-auto">
                    {queries.map((q,i) => (
                       <button key={i} onClick={() => setActiveQuery(i)} className={`px-4 py-3 text-sm whitespace-nowrap ${activeQuery === i ? 'bg-emerald-500/10 text-emerald-500 border-b-2 border-emerald-500' : 'opacity-60'}`}>Query {i+1}</button>
                    ))}
                 </div>
                 <div className="p-4 md:p-6">
                    <div className="bg-black p-4 rounded-lg font-mono text-emerald-400 text-xs md:text-sm mb-4 border border-slate-700 overflow-x-auto"><pre>{queries[activeQuery].sql}</pre></div>
                    <div className="text-xs uppercase font-bold opacity-50 mb-2">Result:</div>
                    <div className="bg-slate-800/50 rounded border border-slate-700 overflow-hidden overflow-x-auto">
                       <table className="w-full text-sm text-left whitespace-nowrap">
                          <thead className="bg-slate-700 text-slate-200">
                             <tr>{Object.keys(queries[activeQuery].result[0]).map(k => <th key={k} className="px-4 py-2 capitalize">{k}</th>)}</tr>
                          </thead>
                          <tbody className="text-slate-300">
                             {queries[activeQuery].result.map((r, i) => (
                                <tr key={i} className="border-b border-slate-700/50 last:border-0 hover:bg-slate-700/50">
                                   {Object.values(r).map((v, j) => <td key={j} className="px-4 py-2">{v}</td>)}
                                </tr>
                             ))}
                          </tbody>
                       </table>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// TEIL 4: NETWORK & API BASICS - MOBILE OPTIMIZED
// ==========================================

const NetworkProjectView = ({ onBack, darkMode }) => {
  const [step, setStep] = useState(0); 
  const [logs, setLogs] = useState([]);
  const cardClass = darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200";

  const runSimulation = () => {
    if (step > 0 && step < 5) return; 
    setStep(1);
    setLogs(["Initialisiere Anfrage an 'api.shop.de'..."]);
    
    setTimeout(() => {
        setLogs(prev => [...prev, "🔍 DNS Lookup: 'api.shop.de' wird gesucht..."]);
    }, 800);

    setTimeout(() => {
        setLogs(prev => [...prev, "✅ IP gefunden: 192.168.178.45"]);
        setStep(2);
    }, 2000);

    setTimeout(() => {
        setLogs(prev => [...prev, "🔄 Verbinde mit Server (Handshake)..."]);
        setStep(3);
    }, 3500);

    setTimeout(() => {
        setLogs(prev => [...prev, "📨 Sende GET Request: /products"]);
        setStep(4);
    }, 5000);
    
    setTimeout(() => {
        setLogs(prev => [...prev, "📥 Antwort erhalten: 200 OK (JSON Data)"]);
        setStep(5);
    }, 6500);
  };

  const resetSimulation = () => {
    setStep(0);
    setLogs([]);
  };

  return (
    <div className={`min-h-screen p-4 md:p-12 overflow-y-auto relative z-50 ${darkMode ? 'bg-black text-slate-200' : 'bg-slate-50 text-slate-800'} pb-32 md:pb-12`}>
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <nav className="flex justify-between items-center mb-8 md:mb-12">
            <div className="flex items-center gap-4 cursor-pointer hover:opacity-80" onClick={onBack}>
               <div className="p-2 md:p-3 bg-cyan-500/10 text-cyan-500 rounded-xl"><Network size={24} className="md:w-8 md:h-8"/></div>
               <div>
                  <h1 className="text-xl md:text-2xl font-bold">Web & Network</h1>
                  <p className="opacity-60 text-xs">IP, Hosting, DNS & API</p>
               </div>
            </div>
            <button onClick={onBack} className={`p-2 md:p-3 rounded-full shadow-xl border transition-all ${darkMode ? 'bg-slate-800 border-slate-700 hover:bg-slate-700' : 'bg-white border-slate-200 hover:bg-slate-100'}`}><X size={20} /></button>
        </nav>

        {/* 1. Theorie Karten - Einfach Erklärt */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-lg md:text-xl font-bold mb-6 flex items-center gap-2"><BookOpen className="text-cyan-500"/> Die Grundlagen</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
            
            {/* IP Karte */}
            <div className={`p-6 rounded-xl border ${cardClass} hover:border-cyan-500/50 transition-colors`}>
               <div className="w-10 h-10 bg-blue-500/10 text-blue-500 rounded-lg flex items-center justify-center mb-4"><MapPin size={20}/></div>
               <h3 className="font-bold mb-2">IP-Adresse</h3>
               <p className="text-xs opacity-70 leading-relaxed">
                 Die <strong>Hausnummer</strong> im Internet. Jedes Gerät braucht eine Nummer (z.B. 192.168.1.1), um gefunden zu werden.
               </p>
            </div>

            {/* Domain / DNS Karte */}
            <div className={`p-6 rounded-xl border ${cardClass} hover:border-cyan-500/50 transition-colors`}>
               <div className="w-10 h-10 bg-purple-500/10 text-purple-500 rounded-lg flex items-center justify-center mb-4"><Globe size={20}/></div>
               <h3 className="font-bold mb-2">Domain & DNS</h3>
               <p className="text-xs opacity-70 leading-relaxed">
                 Domains (google.de) sind Namen. Das <strong>DNS (Telefonbuch)</strong> übersetzt den Namen in die IP-Nummer.
               </p>
            </div>

            {/* Hosting Karte */}
            <div className={`p-6 rounded-xl border ${cardClass} hover:border-cyan-500/50 transition-colors`}>
               <div className="w-10 h-10 bg-orange-500/10 text-orange-500 rounded-lg flex items-center justify-center mb-4"><Server size={20}/></div>
               <h3 className="font-bold mb-2">Hosting</h3>
               <p className="text-xs opacity-70 leading-relaxed">
                 Das <strong>"Grundstück"</strong>. Ein Hoster vermietet Platz auf einem Server, damit deine Webseite immer erreichbar ist.
               </p>
            </div>

            {/* API Karte */}
            <div className={`p-6 rounded-xl border ${cardClass} hover:border-cyan-500/50 transition-colors`}>
               <div className="w-10 h-10 bg-green-500/10 text-green-500 rounded-lg flex items-center justify-center mb-4"><Zap size={20}/></div>
               <h3 className="font-bold mb-2">API</h3>
               <p className="text-xs opacity-70 leading-relaxed">
                 Der <strong>Kellner</strong>. Du bestellst Daten. Die API holt sie aus der Küche (Datenbank) und bringt sie dir.
               </p>
            </div>

          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* 2. Simulation - MOBILE FRIENDLY */}
          <section className={`p-6 md:p-8 rounded-2xl border flex flex-col ${cardClass}`}>
             <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg md:text-xl font-bold flex items-center gap-2"><Monitor className="text-cyan-500"/> Simulator</h2>
                <div className="text-[10px] md:text-xs px-2 py-1 rounded bg-slate-800 border border-slate-700 font-mono">Status: {step === 0 ? 'IDLE' : step === 5 ? 'COMPLETE' : 'RUNNING...'}</div>
             </div>

             {/* Visual Flow Animation Area */}
             <div className="flex-1 bg-black/40 rounded-xl border border-slate-700/50 p-4 md:p-6 mb-6 relative overflow-hidden flex flex-col md:block items-center justify-center min-h-[400px] md:min-h-[300px]">
                
                {/* Connection Lines (Desktop Only) */}
                <svg className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-0">
                   <path d="M 100 150 L 250 80" stroke={step >= 1 ? "#22d3ee" : "#334155"} strokeWidth="2" fill="none" className={step === 1 ? "path-animation" : ""} />
                   <path d="M 250 80 L 400 150" stroke={step >= 2 ? "#22d3ee" : "#334155"} strokeWidth="2" fill="none" className={step === 2 ? "path-animation" : ""} />
                   <path d="M 100 150 L 400 150" stroke={step >= 3 ? "#10b981" : "#334155"} strokeWidth="2" fill="none" className={step >= 3 ? "path-animation" : ""} opacity={step >= 3 ? 1 : 0.2} />
                </svg>

                {/* Connection Lines (Mobile Only - Vertical) */}
                 <div className="md:hidden absolute inset-0 flex flex-col items-center justify-center z-0">
                    <div className={`w-0.5 h-full ${step >= 1 ? 'bg-cyan-500' : 'bg-slate-700'}`}></div>
                 </div>

                {/* Elements */}
                <div className="relative z-10 w-full h-full flex flex-col md:block justify-between md:justify-normal items-center md:items-stretch py-4 md:py-0">
                    
                    {/* Browser / User */}
                    <div className={`md:absolute md:top-1/2 md:left-10 md:-translate-y-1/2 flex flex-col items-center gap-2 transition-all duration-500 ${step >= 0 ? 'opacity-100' : 'opacity-30'}`}>
                        <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center border-2 ${step >= 0 ? 'bg-slate-800 border-white text-white shadow-[0_0_15px_rgba(255,255,255,0.3)]' : 'bg-slate-900 border-slate-700 text-slate-600'}`}>
                           <Monitor size={24} className="md:w-7 md:h-7"/>
                        </div>
                        <span className="text-xs font-bold bg-black/50 px-2 py-1 rounded">Browser</span>
                    </div>

                    {/* Arrow for Mobile */}
                    <div className="md:hidden"><ArrowDown size={20} className={step >= 1 ? "text-cyan-500 animate-bounce" : "text-slate-700"}/></div>

                    {/* DNS Server */}
                    <div className={`md:absolute md:top-10 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-500 ${step >= 1 ? 'scale-110 opacity-100' : 'opacity-30 scale-100'}`}>
                        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border-2 ${step >= 1 ? 'bg-purple-900/80 border-purple-500 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.5)]' : 'bg-slate-900 border-slate-700 text-slate-600'}`}>
                           <Globe size={20} className="md:w-6 md:h-6"/>
                        </div>
                        <span className="text-xs font-bold bg-black/50 px-2 py-1 rounded">DNS</span>
                        {step === 1 && <span className="text-[10px] text-purple-400 animate-pulse absolute -right-24 top-2 w-20 md:block hidden">Suche IP...</span>}
                    </div>

                    {/* Arrow for Mobile */}
                    <div className="md:hidden"><ArrowDown size={20} className={step >= 2 ? "text-cyan-500 animate-bounce" : "text-slate-700"}/></div>

                    {/* Web Server */}
                    <div className={`md:absolute md:top-1/2 md:right-10 md:-translate-y-1/2 flex flex-col items-center gap-2 transition-all duration-500 ${step >= 2 ? 'scale-110 opacity-100' : 'opacity-30 scale-100'}`}>
                        <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center border-2 ${step >= 2 ? 'bg-orange-900/80 border-orange-500 text-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.5)]' : 'bg-slate-900 border-slate-700 text-slate-600'}`}>
                           <Server size={24} className="md:w-7 md:h-7"/>
                        </div>
                        <span className="text-xs font-bold bg-black/50 px-2 py-1 rounded">Server (Hosting)</span>
                    </div>
                    
                </div>
             </div>

             {/* Controls & Logs */}
             <div className="space-y-4">
               <div className="flex gap-4">
                  <button 
                    onClick={runSimulation} 
                    disabled={step > 0 && step < 5}
                    className={`flex-1 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${step > 0 && step < 5 ? 'bg-slate-800 text-slate-500 cursor-not-allowed' : 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-900/20'}`}
                  >
                    {step === 5 ? <><CheckCircle size={18}/> Neustarten</> : <><Zap size={18}/> Starten</>}
                  </button>
                  {step === 5 && <button onClick={resetSimulation} className="px-4 rounded-lg bg-slate-800 hover:bg-slate-700 text-white"><Trash2 size={18}/></button>}
               </div>
               
               <div className="h-32 md:h-40 bg-black rounded-lg border border-slate-800 p-4 font-mono text-[10px] md:text-xs overflow-y-auto space-y-2">
                  <div className="text-slate-500 opacity-50">// System Logs...</div>
                  {logs.map((log, i) => (
                    <div key={i} className="flex gap-2">
                      <span className="text-slate-600">[{new Date().toLocaleTimeString().split(' ')[0]}]</span>
                      <span className={log.includes('Antwort') ? 'text-green-400' : log.includes('IP') ? 'text-purple-400' : 'text-slate-300'}>
                        {log}
                      </span>
                    </div>
                  ))}
                  {step === 5 && (
                    <div className="mt-2 pt-2 border-t border-slate-800 text-green-500">
                      {`{ "status": "success", "data": [ "Produkt A", "Produkt B" ] }`}
                    </div>
                  )}
               </div>
             </div>
          </section>

          {/* 3. Logik Diagramm */}
          <section className={`p-6 md:p-8 rounded-2xl border ${cardClass}`}>
             <h2 className="text-lg md:text-xl font-bold mb-6 flex items-center gap-2"><Layers className="text-cyan-500"/> Logik-Diagramm</h2>
             <p className="text-sm opacity-70 mb-8">
               Was passiert im Hintergrund, wenn du auf einen Link klickst?
             </p>
             
             <div className="space-y-6 relative">
               {/* Vertical Line */}
               <div className={`absolute left-6 top-6 bottom-6 w-0.5 ${darkMode ? 'bg-slate-800' : 'bg-slate-200'}`}></div>

               {/* Step 1 */}
               <div className="relative pl-16">
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold z-10 shadow-lg border-4 border-slate-900">1</div>
                  <h4 className="font-bold text-base md:text-lg mb-1">User Anfrage</h4>
                  <p className="text-xs md:text-sm opacity-70 mb-2">Du tippst <code>google.de</code> ein.</p>
                  <div className="p-3 bg-slate-500/10 rounded border border-slate-500/20 text-xs font-mono">GET https://google.de</div>
               </div>

               {/* Step 2 */}
               <div className="relative pl-16">
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold z-10 shadow-lg border-4 border-slate-900">2</div>
                  <h4 className="font-bold text-base md:text-lg mb-1">DNS Auflösung</h4>
                  <p className="text-xs md:text-sm opacity-70 mb-2">Browser fragt: "Wer ist google.de?"</p>
                  <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
                    <ArrowRight size={14}/> DNS Server antwortet: 142.250.181.227
                  </div>
               </div>

               {/* Step 3 */}
               <div className="relative pl-16">
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold z-10 shadow-lg border-4 border-slate-900">3</div>
                  <h4 className="font-bold text-base md:text-lg mb-1">Server Verarbeitung</h4>
                  <p className="text-xs md:text-sm opacity-70 mb-2">Server (Hosting) empfängt Anfrage.</p>
                  <div className="p-3 bg-orange-500/10 rounded border border-orange-500/20 text-xs text-orange-400">
                    Backend Logik prüft Datenbank...
                  </div>
               </div>

               {/* Step 4 */}
               <div className="relative pl-16">
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold z-10 shadow-lg border-4 border-slate-900">4</div>
                  <h4 className="font-bold text-base md:text-lg mb-1">Response (Antwort)</h4>
                  <p className="text-xs md:text-sm opacity-70 mb-2">Der Server schickt die Webseite (HTML/JSON) zurück.</p>
                  <div className="flex items-center gap-2 text-xs font-mono text-green-400">
                    <CheckCircle size={14}/> 200 OK - Content Loaded
                  </div>
               </div>

             </div>
          </section>

        </div>

      </div>
    </div>
  );
};


// ==========================================
// HAUPT-APP
// ==========================================

// Wellen-Hintergrund Komponente (NEON VERSION - PULSIEREND)
const WaveBackground = ({ darkMode }) => {
  return (
    <div className={`fixed inset-0 w-full h-full -z-10 transition-colors duration-1000 overflow-hidden ${darkMode ? 'bg-black' : 'bg-slate-100'}`}>
      
      {/* Grid Overlay */}
      <div className={`absolute inset-0 opacity-10 bg-[size:40px_40px] ${darkMode 
        ? 'bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]' 
        : 'bg-[linear-gradient(to_right,#0000001a_1px,transparent_1px),linear-gradient(to_bottom,#0000001a_1px,transparent_1px)]'
      }`}></div>

      {/* Pulsierende Neon Blobs - NUR AUF PC SICHTBAR (Performance Fix) */}
      <div className={`hidden md:block absolute top-0 -left-20 w-[500px] h-[500px] rounded-full mix-blend-screen filter blur-[80px] animate-blob opacity-40 ${darkMode ? 'bg-cyan-900' : 'bg-cyan-300'}`}></div>
      <div className={`hidden md:block absolute top-1/2 -right-20 w-[600px] h-[600px] rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000 opacity-30 ${darkMode ? 'bg-blue-900' : 'bg-blue-300'}`}></div>
      <div className={`hidden md:block absolute -bottom-40 left-1/3 w-[500px] h-[500px] rounded-full mix-blend-screen filter blur-[90px] animate-blob animation-delay-4000 opacity-40 ${darkMode ? 'bg-purple-900' : 'bg-purple-300'}`}></div>
      
      {/* Globale Pulsation - NUR AUF PC SICHTBAR */}
      <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/20 animate-pulse-slow pointer-events-none"></div>
    </div>
  );
};

export default function App() {
  const [projects, setProjects] = useState([
    {
      id: "network-basics",
      title: "Web-Infrastruktur & APIs",
      description: "Interaktive Simulation von DNS, Server-Hosting und API-Requests. Verstehe den Weg vom Klick bis zur Datenanzeige.",
      tags: ["Network", "API", "DNS", "Hosting"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      viewType: 'network',
      isInternal: true
    },
    {
      id: "database-project",
      title: "E-Commerce Database Architecture",
      description: "Entwurf eines relationalen Datenbankschemas. SQL-Abfragen, JOINs und Normalisierung.",
      tags: ["SQL", "Database", "Backend"],
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800",
      viewType: 'database',
      isInternal: true
    },
    {
      id: "copywriting-docs",
      title: "Conversion Copywriting & SEO",
      description: "Interaktive Dokumentation zu Verkaufspsychologie und AIDA-Formel.",
      tags: ["SEO", "Psychology", "Docs"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
      viewType: 'docs',
      isInternal: true
    },
    {
      id: "landing-page-project",
      title: "High-End Copywriting Page",
      description: "Interaktive Landingpage mit Vorher/Nachher-Slider.",
      tags: ["React", "Interactive", "UI/UX"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      viewType: 'landing',
      isInternal: true
    }
  ]);
  
  const [showAddModal, setShowAddModal] = useState(false);
  const [activeTab, setActiveTab] = useState('portfolio'); 
  const [currentView, setCurrentView] = useState('portfolio');
  const [legalView, setLegalView] = useState(null); // 'imprint', 'privacy', null
  
  // THEME & ADMIN STATE
  const [darkMode, setDarkMode] = useState(true); 
  const [isAdmin, setIsAdmin] = useState(false); 
  const [adminClicks, setAdminClicks] = useState(0); 

  // Bild-Upload Logik
  // ---------------------------------------------------------------------------
  // SCHRITT 1: Lege dein Bild (z.B. 'profil.png') in den 'public' Ordner in VS Code.
  // SCHRITT 2: Ändere die Zeile unten zu: useState("/profil.png");
  // ---------------------------------------------------------------------------
  const [profileImage, setProfileImage] = useState("/9404.png"); // <--- HIER ÄNDERN (Dateiname)
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleAdminTrigger = () => {
    const newClicks = adminClicks + 1;
    setAdminClicks(newClicks);
    if (newClicks === 5) {
      setIsAdmin(true);
      alert("Admin Modus aktiviert!");
    }
  };

  const handleDeleteProject = (id) => {
    setProjects(projects.filter(p => p.id !== id));
  };
  
  const handleLogoClick = () => {
    setActiveTab('portfolio');
    setCurrentView('portfolio');
    setLegalView(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Styles für Text & Cards
  const textMain = darkMode ? "text-white" : "text-slate-900";
  const textSub = darkMode ? "text-slate-400" : "text-slate-600";
  const cardStyle = darkMode ? "glass-panel-dark" : "glass-panel-light";

  // ROUTING LOGIK
  if (currentView === 'network') return <NetworkProjectView onBack={() => setCurrentView('portfolio')} darkMode={darkMode} />;
  if (currentView === 'landing') return <CopywritingLandingProject onBack={() => setCurrentView('portfolio')} />;
  if (currentView === 'docs') return <CopywritingDocsView onBack={() => setCurrentView('portfolio')} darkMode={darkMode} />;
  if (currentView === 'database') return <DatabaseProjectView onBack={() => setCurrentView('portfolio')} darkMode={darkMode} />;


  // NAVIGATION
  const Navigation = () => (
    <>
      {/* Desktop Navigation (Top) */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center transition-all duration-700 ${darkMode ? 'bg-black/80 border-cyan-900/30' : 'bg-white/80 border-cyan-200'} backdrop-blur-md border-b`}>
        <div className="max-w-6xl mx-auto w-full flex justify-between items-center">
          <div 
            onClick={handleLogoClick}
            className={`text-2xl font-bold tracking-widest uppercase flex items-center gap-2 cursor-pointer select-none ${darkMode ? 'text-white' : 'text-slate-900'}`}
          >
            <Terminal size={24} className="text-cyan-500" />
            PD<span className="text-cyan-500 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]">.DEV</span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-8">
              {['Portfolio', 'Profil', 'Kontakt'].map((item) => (
                <button 
                  key={item}
                  onClick={() => { setActiveTab(item === 'Profil' ? 'about' : item.toLowerCase()); setLegalView(null); }}
                  className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 
                    ${activeTab === (item === 'Profil' ? 'about' : item.toLowerCase()) && !legalView
                      ? 'text-cyan-500 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]' 
                      : (darkMode ? 'text-slate-400 hover:text-red-500' : 'text-slate-500 hover:text-red-500')
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-all duration-500 border ${darkMode ? 'bg-black border-cyan-500 text-cyan-400' : 'bg-white border-cyan-500 text-cyan-600'} hover:border-red-500 hover:text-red-500`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation (Bottom) - NEU - Z-Index 100 damit es sichtbar ist */}
      <div className={`md:hidden fixed bottom-8 left-6 right-6 z-[100] p-4 rounded-2xl flex justify-around items-center border shadow-2xl transition-all ${darkMode ? 'bg-black/90 border-slate-700 text-slate-400' : 'bg-white/90 border-slate-200 text-slate-500'} backdrop-blur-md`}>
          {['Portfolio', 'Profil', 'Kontakt'].map((item) => (
              <button 
                key={item}
                onClick={() => { setActiveTab(item === 'Profil' ? 'about' : item.toLowerCase()); setLegalView(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`flex flex-col items-center gap-1 text-[10px] font-bold uppercase tracking-widest transition-all
                  ${activeTab === (item === 'Profil' ? 'about' : item.toLowerCase()) && !legalView
                    ? 'text-cyan-500 scale-110' 
                    : 'hover:text-red-500'
                  }`}
              >
                {item === 'Portfolio' && <Code size={20} />}
                {item === 'Profil' && <User size={20} />}
                {item === 'Kontakt' && <Mail size={20} />}
                {item}
              </button>
          ))}
      </div>
    </>
  );

  return (
    <div className={`min-h-screen font-sans transition-colors duration-1000 ${darkMode ? 'bg-black' : 'bg-slate-50'}`}>
      <style>{styles}</style>
      
      {/* VERCEL ANALYTICS */}
      {/* SCHRITT FÜR ANALYTICS 2: Entferne die Kommentierung in der nächsten Zeile, wenn du es lokal nutzt: */}
      {<Analytics />}
      
      <WaveBackground darkMode={darkMode} />
      <Navigation />

      <main className="max-w-6xl mx-auto px-4 pb-32 md:pb-20 relative z-10"> {/* Padding Bottom erhöht für Mobile Nav */}
        
        {/* LEGAL MODAL OVERLAY */}
        {legalView && (
          // HIER GEÄNDERT: Z-Index auf 100 erhöht, damit es garantiert oben liegt
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setLegalView(null)}>
             <div className={`w-full max-w-2xl p-8 rounded-2xl border shadow-2xl relative overflow-y-auto max-h-[80vh] ${darkMode ? 'bg-slate-900 border-slate-700 text-slate-200' : 'bg-white border-slate-200 text-slate-800'}`} onClick={e => e.stopPropagation()}>
                <button onClick={() => setLegalView(null)} className="absolute top-4 right-4 p-2 rounded-full hover:bg-red-500 hover:text-white transition-colors"><X size={24}/></button>
                
                {legalView === 'imprint' && (
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold mb-4 border-b pb-4 border-cyan-500/30">Impressum</h2>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg">Angaben gemäß § 5 TMG</h3>
                      <p>Pennueng Daenchai</p>
                      <p>Lappacher Weg 19</p>
                      <p>91315 Höchstadt a.d. Aisch</p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg">Kontakt</h3>
                      <p>Telefon: 0160 98720811</p>
                      <p>E-Mail: Penjidaenchai@gmail.com</p>
                    </div>
                    <div className="text-xs opacity-60 mt-8 p-4 bg-black/20 rounded">
                      Hinweis: Dies ist ein Portfolio zur Bewerbung. Es werden keine kostenpflichtigen Dienstleistungen direkt über diese Seite abgewickelt.
                    </div>
                  </div>
                )}

                {legalView === 'privacy' && (
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold mb-4 border-b pb-4 border-cyan-500/30">Datenschutzerklärung</h2>
                    <div className="space-y-4 text-sm leading-relaxed">
                      <p>Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:</p>
                      <p className="font-bold">Pennueng Daenchai (siehe Impressum)</p>
                      
                      <h3 className="font-bold text-lg text-cyan-500 mt-4">1. Datenschutz auf einen Blick</h3>
                      <p><strong>Allgemeine Hinweise:</strong> Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>

                      <h3 className="font-bold text-lg text-cyan-500 mt-4">2. Hosting</h3>
                      <p>Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Meta- und Kommunikationsdaten handeln. Unser Hoster ist [Vercel / Netlify / GitHub Pages - bitte entsprechenden Anbieter ergänzen].</p>
                      
                      <h3 className="font-bold text-lg text-cyan-500 mt-4">3. Datenerfassung auf dieser Website</h3>
                      <p><strong>Vercel Web Analytics:</strong> Diese Website nutzt 'Vercel Analytics', einen Webanalysedienst von Vercel Inc., um die Nutzung unserer Website statistisch auszuwerten. Die Erfassung erfolgt anonymisiert und ohne den Einsatz von Cookies, die eine Identifizierung über verschiedene Webseiten hinweg ermöglichen würden. Die Daten werden ausschließlich zur Verbesserung der Performance und Benutzerfreundlichkeit dieser Website verwendet.</p>
                      <p><strong>SSL- bzw. TLS-Verschlüsselung:</strong> Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung.</p>
                      <p><strong>Server-Log-Dateien:</strong> Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt (Browsertyp, Uhrzeit, IP-Adresse).</p>
                      
                      <h3 className="font-bold text-lg text-cyan-500 mt-4">4. Ihre Rechte</h3>
                      <p>Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten sowie ein Recht auf Berichtigung oder Löschung dieser Daten. Bitte wenden Sie sich dazu an die im Impressum angegebene Adresse.</p>
                    </div>
                  </div>
                )}
             </div>
          </div>
        )}

        {/* PORTFOLIO CONTENT (nur sichtbar wenn kein spezieller Tab aktiv ist oder wenn Portfolio Tab aktiv) */}
        {activeTab === 'portfolio' && (
          <>
            <div className="pt-40 pb-20 px-4 text-center relative z-10">
              
              <div className="mb-10 relative inline-block group">
                  <div className={`absolute -inset-2 rounded-full opacity-100 blur-md animate-spin-slow bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600`}></div>
                  {/* HIER GEÄNDERT: Von w-40 h-40 auf w-56 h-56 für ein größeres Bild */}
                  <div className={`relative w-56 h-56 rounded-full overflow-hidden border-2 shadow-2xl mx-auto flex items-center justify-center transition-all duration-500 bg-black border-cyan-500 z-10`}>
                    {profileImage ? (
                      <img src={profileImage} alt="Profilbild" className="w-full h-full object-cover" />
                    ) : (
                      /* HIER GEÄNDERT: Icon Größe von 64 auf 96 */
                      <User size={96} className="text-slate-400" />
                    )}
                  </div>
                  
                  {isAdmin && (
                    <button onClick={() => fileInputRef.current.click()} className="absolute bottom-0 right-0 p-3 bg-black border border-cyan-500 rounded-full text-cyan-500 hover:border-red-500 hover:text-red-500 transition-all z-20">
                      <Camera size={18} />
                    </button>
                  )}
                  <input type="file" ref={fileInputRef} onChange={handleImageUpload} className="hidden" accept="image/*" />
              </div>

              <h1 
                onClick={handleAdminTrigger}
                className={`text-5xl md:text-7xl font-bold mb-4 cursor-default select-none transition-all duration-700 ${textMain}`}
              >
                Pennueng Daenchai
                {isAdmin && <span className="text-xs align-top text-red-500 ml-2 animate-pulse">[ADMIN]</span>}
              </h1>
              
              <h2 className={`text-xl md:text-2xl font-medium mb-8 flex items-center justify-center gap-3 text-cyan-500`}>
                 <Wrench size={24} /> Problemlöser & System-Versteher
              </h2>
              
              <div className="flex justify-center gap-6 flex-wrap">
                {isAdmin && (
                  <button onClick={() => setShowAddModal(true)} className="flex items-center gap-2 border-2 border-cyan-500 text-cyan-500 px-8 py-3 rounded-none font-bold uppercase tracking-widest hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(239,68,68,0.6)]">
                    <Plus size={20} /> Projekt +
                  </button>
                )}
                
                <button 
                  onClick={() => setActiveTab('about')} 
                  className={`flex items-center gap-2 px-8 py-3 rounded-none font-bold uppercase tracking-widest border-2 transition-all duration-300 
                    border-cyan-500 text-cyan-600 hover:bg-red-500 hover:border-red-500 hover:text-white`}
                >
                  <User size={20} /> Meine Story
                </button>
              </div>
            </div>
            
            <div className={`flex items-center justify-between mb-8 pt-8 border-t ${darkMode ? 'border-slate-800' : 'border-slate-300'}`}>
              <h2 className={`text-2xl font-bold flex items-center gap-3 uppercase tracking-wider ${textMain}`}>
                <Code className="text-cyan-500" /> Real-World Projects
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.id} className={`group flex flex-col h-full rounded-xl overflow-hidden ${cardStyle}`}>
                  <div className={`relative h-48 overflow-hidden bg-black`}>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className={`text-xl font-bold ${textMain} group-hover:text-red-500 transition-colors`}>{project.title}</h3>
                      {isAdmin && (
                        <button onClick={() => handleDeleteProject(project.id)} className="text-slate-500 hover:text-red-500 transition">
                          <Trash2 size={18} />
                        </button>
                      )}
                    </div>
                    
                    <p className={`mb-6 text-sm flex-1 leading-relaxed ${textSub}`}>
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, index) => (
                        <span key={index} className={`px-2 py-1 text-[10px] uppercase tracking-wider font-bold border border-cyan-500/30 text-cyan-600 bg-cyan-500/10`}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto">
                        {project.isInternal ? (
                            <button 
                                onClick={() => setCurrentView(project.viewType)}
                                className={`w-full py-3 font-bold uppercase tracking-widest text-sm border-2 transition-all duration-300 flex items-center justify-center gap-2
                                  border-cyan-500 text-cyan-500 hover:bg-red-600 hover:border-red-600 hover:text-white hover:shadow-[0_0_20px_rgba(239,68,68,0.5)]`}
                            >
                                {project.viewType === 'docs' ? <BookOpen size={16} /> : project.viewType === 'database' ? <Database size={16} /> : project.viewType === 'network' ? <Network size={16} /> : <ExternalLink size={16} />}
                                Demo Starten
                            </button>
                        ) : (
                             <a href="#" className={`block w-full py-3 text-center text-sm font-bold uppercase tracking-widest border transition-all ${darkMode ? 'border-slate-700 text-slate-400 hover:text-white hover:border-white' : 'border-slate-300 text-slate-600 hover:text-black hover:border-black'}`}>
                                Mehr Details
                             </a>
                        )}
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* --- ÜBER MICH & LEBENSLAUF SEKTION --- */}
        {activeTab === 'about' && (
          <div className="pt-40 max-w-4xl mx-auto">
             
             <div className={`p-8 mb-12 rounded-xl ${cardStyle}`}>
               <div className="flex flex-col md:flex-row gap-10 items-start">
                  <div className="shrink-0 relative mx-auto md:mx-0 group">
                     {/* Profile Pic with Neon Ring - VERGRÖßERT */}
                     <div className={`absolute -inset-1 rounded-full opacity-100 blur-md animate-spin-slow bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600`}></div>
                     <div className={`relative w-48 h-48 rounded-full overflow-hidden border-2 border-cyan-500 bg-black z-10`}> {/* Größe von w-32 h-32 auf w-48 h-48 geändert */}
                        {profileImage ? (
                          <img src={profileImage} alt="Profil" className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-black"><User size={64} className="text-slate-500" /></div> /* Icon auch vergrößert */
                        )}
                     </div>
                  </div>
                  <div>
                    <h2 className={`text-3xl font-bold mb-4 ${textMain}`}>Der pragmatische Lösungsfinder</h2>
                    <div className={`leading-relaxed mb-6 space-y-4 ${textSub}`}>
                      <p>
                        Ich bin ehrlich: Wenn Sie jemanden suchen, der Ihnen theoretische Informatik-Konzepte an die Tafel malt, bin ich der Falsche. 
                        Wenn Sie aber jemanden suchen, der ein <strong>Problem sieht, es analysiert und den Fehler behebt</strong>, dann bin ich Ihr Mann.
                      </p>
                      <p>
                        Ich habe meine Stärken in der Praxis: Egal ob in der Logistik bei Aldi, beim Qualitätscheck von Mietwagen oder beim Debuggen von Code. Ich habe gelernt, genau hinzusehen und Unstimmigkeiten zu erkennen. 
                        Ich nutze KI und moderne Frameworks wie Werkzeuge, um Lösungen zu bauen, anstatt alles von Hand neu zu erfinden.
                      </p>
                      <p className={`font-bold border-l-4 pl-4 py-2 border-cyan-500 text-cyan-600 bg-cyan-500/10`}>
                        "Wer in dieser Zeit noch sagt, KI nimmt uns die Arbeit weg oder ist der faule Weg, der hat die Zukunft nicht verstanden. 
                        Deutschland muss wieder wachsen und konkurrenzfähig werden – dafür brauchen wir Effizienz."
                      </p>
                    </div>
                  </div>
               </div>
            </div>

            {/* Werdegang */}
            <h3 className={`text-2xl font-bold mb-8 flex items-center gap-3 uppercase tracking-wider ${textMain}`}>
              <Briefcase className="text-cyan-500" /> Mein Weg
            </h3>
            
            <div className={`relative border-l-2 ml-4 space-y-12 pb-12 ${darkMode ? 'border-slate-800' : 'border-slate-300'}`}>
              {[
                { year: "Aktuell", title: "Technical Builder", company: "Eigenständige Entwicklung", desc: "Intensive Projektarbeit: Ich baue funktionierende Software-Lösungen, indem ich moderne Tools und KI als Werkzeuge nutze. Fokus auf Umsetzung und Fehlerbehebung.", icon: <Blocks size={20} /> },
                { year: "12/2024 - 02/2025", title: "Quality Assurance & Operations", company: "Sixt Autovermietung", desc: "Operative Problemlösung in Echtzeit. Systematische Qualitätskontrollen und Prozess-Optimierung in einem stressigen Umfeld.", icon: <ShieldCheck size={20} /> },
                { year: "11/2022 - 11/2024", title: "Software-Entwicklung (Startschuss)", company: "Lutz und Grub AG / e.solutions", desc: "Die Umschulung war mein Startblock. Ich habe dort gelernt, was man für den Einstieg braucht. Aber in einer Welt, die zu sehr auf Zertifikate fixiert ist, habe ich verstanden: Echtes IT-Wissen lernt man am besten selbst durch Tun.", icon: <Terminal size={20} /> },
                { year: "02/2018 - 10/2022", title: "Logistik & Systematik", company: "Aldi SÜD", desc: "Effiziente Kommissionierung und Prozess-Optimierung. Arbeit in einem High-Performance-Umfeld mit strikten Zeitvorgaben. Hier habe ich gelernt, auch unter Druck präzise zu liefern.", icon: <Database size={20} /> },
                { year: "12/2016 - 09/2017", title: "Service & Präzision", company: "Mister Minit", desc: "Direkter Kundenkontakt und lösungsorientierte Handarbeit. Sofortige Problemlösung für Kundenanliegen – eine Fähigkeit, die ich heute in den IT-Support übertrage.", icon: <User size={20} /> },
                { year: "09/2012 - 08/2016", title: "Handwerk & Disziplin", company: "Dachdeckerei Andreas Moran GmbH", desc: "Ausbildung und Gesellenzeit. Harte körperliche Arbeit, Teamwork in der Höhe und absolute Verlässlichkeit. Wer ein Dach decken kann, hat keine Angst vor komplexen Herausforderungen.", icon: <Hammer size={20} /> }
              ].map((item, idx) => (
                <div key={idx} className="relative pl-12 group">
                  <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 transition-colors bg-black border-cyan-500 group-hover:border-red-500 group-hover:bg-red-500`}></div>
                  <div className={`p-6 rounded-xl transition-all duration-300 ${cardStyle}`}>
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <span className={`text-xs font-bold uppercase tracking-widest block mb-1 text-cyan-600`}>{item.year}</span>
                            <h4 className={`text-lg font-bold mb-2 ${textMain}`}>{item.title}</h4>
                        </div>
                        <div className={`p-2 rounded border border-cyan-500/30 text-cyan-500`}>{item.icon}</div>
                    </div>
                    <div className={`text-sm font-bold mb-3 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{item.company}</div>
                    <p className={`text-sm leading-relaxed ${textSub}`}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <h3 className={`text-2xl font-bold mb-8 flex items-center gap-3 uppercase tracking-wider ${textMain}`}>
              <Brain className="text-cyan-500" /> Kompetenzen
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className={`p-6 rounded-xl ${cardStyle}`}>
                <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 ${textMain}`}>
                  <Microscope className="text-emerald-500" /> Fehleranalyse
                </h3>
                <p className={`text-sm mb-4 ${textSub}`}>
                  Ich finde Bugs und Probleme, bevor sie kritisch werden.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Debugging", "Quality Checks", "System-Tests", "Troubleshooting"].map(s => (
                    <span key={s} className={`px-3 py-1 rounded-xs text-xs border ${darkMode ? 'bg-emerald-900/30 text-emerald-300 border-emerald-500/30' : 'bg-emerald-50 text-emerald-700 border-emerald-200'}`}>{s}</span>
                  ))}
                </div>
              </div>

              <div className={`p-6 rounded-xl ${cardStyle}`}>
                <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 ${textMain}`}>
                  <Terminal className="text-blue-500" /> Tech Stack
                </h3>
                <p className={`text-sm mb-4 ${textSub}`}>
                  Stabiles Fundament durch Umschulung & Eigenstudium.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Java", "C#", "Python", "React", "AI Prompting", "Linux"].map(s => (
                    <span key={s} className={`px-3 py-1 rounded-xs text-xs border ${darkMode ? 'bg-blue-900/30 text-blue-300 border-blue-500/30' : 'bg-blue-50 text-blue-700 border-blue-200'}`}>{s}</span>
                  ))}
                </div>
              </div>

              <div className={`p-6 rounded-xl ${cardStyle}`}>
                <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 ${textMain}`}>
                  <GitBranch className="text-orange-500" /> Workflow
                </h3>
                <p className={`text-sm mb-4 ${textSub}`}>
                  Ich weiß, wie professionelle Teams arbeiten.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Git & Bitbucket", "Scrum / Agile", "Jira / Tickets", "First Level Support"].map(s => (
                    <span key={s} className={`px-3 py-1 rounded-xs text-xs border ${darkMode ? 'bg-orange-900/30 text-orange-300 border-orange-500/30' : 'bg-orange-50 text-orange-700 border-orange-200'}`}>{s}</span>
                  ))}
                </div>
              </div>

              <div className={`p-6 rounded-xl md:col-span-3 ${cardStyle}`}>
                <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 ${textMain}`}>
                  <Target className="text-purple-500" /> Copywriting & Sales Psychology
                </h3>
                <p className={`text-sm mb-4 ${textSub}`}>
                  Code ist nichts ohne den richtigen Kontext. Ich verstehe, wie man Nutzer führt und überzeugt.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["SEO Optimization", "AIDA Model", "Conversion Optimization", "Landing Page Structure", "Feature vs. Benefit"].map(s => (
                    <span key={s} className={`px-3 py-1 rounded-xs text-xs border ${darkMode ? 'bg-purple-900/30 text-purple-300 border-purple-500/30' : 'bg-purple-50 text-purple-700 border-purple-200'}`}>{s}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Contact Section - VOLLSTÄNDIG */}
        {activeTab === 'contact' && (
          <div className="pt-40 max-w-xl mx-auto">
            <div className={`p-10 rounded-xl text-center ${cardStyle}`}>
              <h2 className={`text-3xl font-bold mb-6 ${textMain}`}>Lassen Sie uns sprechen</h2>
              <p className={`mb-10 ${textSub}`}>
                Sie suchen jemanden, der anpackt? Ich bin bereit.
              </p>
              
              <div className="space-y-4 mb-10 text-left">
                  {/* Name */}
                  <div className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${darkMode ? 'border-slate-800 bg-black/40 hover:border-cyan-500/50' : 'border-slate-200 bg-white/60'}`}>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg shrink-0 ${darkMode ? 'bg-slate-900 text-cyan-500' : 'bg-white text-blue-500'}`}>
                      <User size={20} />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-bold text-slate-500 mb-0.5">Name</div>
                      <div className={`text-lg font-medium ${textMain}`}>Pennueng Daenchai</div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${darkMode ? 'border-slate-800 bg-black/40 hover:border-cyan-500/50' : 'border-slate-200 bg-white/60'}`}>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg shrink-0 ${darkMode ? 'bg-slate-900 text-cyan-500' : 'bg-white text-blue-500'}`}>
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-bold text-slate-500 mb-0.5">Email</div>
                      <div className={`text-lg font-medium ${textMain}`}>Penjidaenchai@gmail.com</div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${darkMode ? 'border-slate-800 bg-black/40 hover:border-cyan-500/50' : 'border-slate-200 bg-white/60'}`}>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg shrink-0 ${darkMode ? 'bg-slate-900 text-cyan-500' : 'bg-white text-blue-500'}`}>
                      <Phone size={20} />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-bold text-slate-500 mb-0.5">Telefon / WhatsApp</div>
                      <div className={`text-lg font-medium ${textMain}`}>0160 98720811</div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${darkMode ? 'border-slate-800 bg-black/40 hover:border-cyan-500/50' : 'border-slate-200 bg-white/60'}`}>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg shrink-0 ${darkMode ? 'bg-slate-900 text-cyan-500' : 'bg-white text-blue-500'}`}>
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-bold text-slate-500 mb-0.5">Adresse</div>
                      <div className={`text-lg font-medium ${textMain}`}>Lappacher Weg 19, 91315 Höchstadt a.d. Aisch</div>
                    </div>
                  </div>
              </div>
              
              <a 
                href="https://wa.me/4916098720811" 
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 font-bold uppercase tracking-widest border-2 flex items-center justify-center gap-3 transition-all duration-300 rounded-xl
                  bg-green-600 text-white border-green-600 hover:bg-green-500 hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]`}
              >
                <MessageCircle size={24} />
                WhatsApp Chat Starten
              </a>
            </div>
          </div>
        )}

      </main>

      {/* FOOTER - Updated: Layout geändert (Kontakt unterhalb) */}
      <footer className={`py-12 border-t px-6 relative z-10 ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
           <div className="max-w-6xl mx-auto flex flex-col items-center text-slate-500 text-sm font-medium">
             
             {/* 1. OBERE ZEILE: Impressum & Datenschutz */}
             <div className="flex gap-6 mb-4 opacity-70">
                <button onClick={() => setLegalView('imprint')} className="hover:text-cyan-500 transition-colors">Impressum</button>
                <span>|</span>
                <button onClick={() => setLegalView('privacy')} className="hover:text-cyan-500 transition-colors">Datenschutz</button>
             </div>

             {/* 2. Copyright */}
             <div className="mb-10 opacity-50">
                © {new Date().getFullYear()} Alle Rechte vorbehalten.
             </div>

             {/* 3. UNTERE ZEILE: Kontakt (Groß) */}
             <div className={`flex flex-col md:flex-row items-center gap-4 md:gap-6 px-8 py-4 rounded-full border transition-all ${darkMode ? 'bg-slate-900/50 border-slate-700' : 'bg-white/50 border-slate-200'} hover:border-cyan-500/50`}>
                 <span className={textMain}>Pennueng Daenchai</span>
                 <span className="hidden md:inline opacity-30">•</span>
                 <span className={textSub}>Penjidaenchai@gmail.com</span>
                 <span className="hidden md:inline opacity-30">•</span>
                 
                 {/* WhatsApp Button */}
                 <a 
                   href="https://wa.me/4916098720811"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-4 py-1.5 rounded-full transition-all shadow-lg shadow-green-900/20 hover:scale-105 font-bold tracking-wide text-xs"
                 >
                   <MessageCircle size={14} />
                   WhatsApp
                 </a>
             </div>

           </div>
        </footer>

      {/* Modal zum Hinzufügen von Projekten - NUR FÜR ADMIN */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-lg p-6 shadow-2xl animate-in fade-in zoom-in duration-200">
            {/* ... Admin Form Content ... */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white">Projekt präsentieren</h3>
              <button onClick={() => setShowAddModal(false)} className="text-slate-400 hover:text-white"><X size={24} /></button>
            </div>
            {/* Form Logic Placeholder for Admin */}
            <p className="text-slate-400">Admin Formular...</p>
          </div>
        </div>
      )}
    </div>
  );
}