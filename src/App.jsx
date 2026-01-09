import React, { useState, useRef, useEffect } from 'react';
// HINWEIS: Analytics ist standardmäßig auskommentiert, damit der Code in jeder Umgebung läuft.
// import { Analytics } from '@vercel/analytics/react'; 

import { 
  Github, ExternalLink, Plus, Trash2, Code, Mail, Linkedin, User, Briefcase, X, 
  Phone, MapPin, Camera, Brain, Terminal, Database, ArrowRight, Moon, Sun, 
  CheckCircle, Send, Search, PenTool, Zap, Clock, AlertCircle, Cpu, ShieldCheck, 
  Microscope, Flame, Blocks, Wrench, GitBranch, Users, ClipboardList, BookOpen, 
  Lightbulb, Target, Lock, Server, Table, Key, Hammer, MessageCircle, FileText, 
  CheckSquare, Globe, Wifi, Layers, Monitor, Network, FileCheck, Menu, ArrowDown,
  Megaphone, Laptop
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
    background: rgba(10, 10, 10, 0.75);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(34, 211, 238, 0.2);
    transition: all 0.3s ease;
  }
  .glass-panel-light {
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(6, 182, 212, 0.3); 
    transition: all 0.3s ease;
  }
  
  .glass-panel-dark:hover, .glass-panel-light:hover {
    border-color: rgba(6, 182, 212, 0.6);
    transform: translateY(-2px);
  }
  
  /* Simulation Lines Animation */
  @keyframes dash {
    to { stroke-dashoffset: 0; }
  }
  .path-animation {
    stroke-dasharray: 10;
    animation: dash 1s linear infinite;
  }
  
  /* Marquee Animation for Tech Stack */
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-marquee {
    animation: marquee 25s linear infinite;
  }
  
  /* Blink Cursor for Typewriter */
  @keyframes blink {
    50% { opacity: 0; }
  }
  .animate-cursor {
    animation: blink 1s step-end infinite;
  }
  
  /* Hide scrollbar for clean look in horizontal scrolls */
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

// ==========================================
// HELPER COMPONENTS
// ==========================================
const SectionTitle = ({ icon: Icon, title, darkMode }) => (
  <h2 className={`text-xl md:text-2xl font-bold mb-6 flex items-center gap-3 uppercase tracking-wider ${darkMode ? 'text-white' : 'text-slate-900'}`}>
    {Icon && <Icon className="text-cyan-500" size={24} />} 
    {title}
  </h2>
);

// --- TYPEWRITER COMPONENT ---
const Typewriter = ({ words, darkMode }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Typing effect
  useEffect(() => {
    if (index === words.length) return;

    if ( subIndex === words[index].length + 1 && !reverse ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

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

// --- TECH STACK MARQUEE COMPONENT ---
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

  // Duplicate list for seamless loop
  const items = [...stack, ...stack, ...stack];

  return (
    <div className="w-full overflow-hidden py-8 relative">
      <div className={`absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r ${darkMode ? 'from-black to-transparent' : 'from-slate-50 to-transparent'}`}></div>
      <div className={`absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l ${darkMode ? 'from-black to-transparent' : 'from-slate-50 to-transparent'}`}></div>
      
      <div className="flex animate-marquee w-max gap-8">
        {items.map((item, i) => (
          <div key={i} className={`flex items-center gap-2 px-4 py-2 rounded-full border ${darkMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-600'}`}>
            <span className="text-cyan-500">{item.icon}</span>
            <span className="text-sm font-bold uppercase tracking-wider">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ==========================================
// TEIL 1: LANDING PAGE PROJEKT (Mobile Optimized)
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
       <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3 flex justify-between items-center bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
           <div onClick={onBack} className="text-lg font-extrabold tracking-tight uppercase cursor-pointer hover:opacity-80 truncate mr-4">
             PD<span className="text-orange-500">.COPY</span>
           </div>
           <button onClick={onBack} className="border border-slate-200 text-slate-500 hover:bg-slate-100 p-2 rounded-full transition-all">
             <X size={20} />
           </button>
        </nav>

        <section className="pt-28 pb-10 px-4 text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight leading-tight">Worte. Wirkung. <span className="text-orange-500">Umsatz.</span></h1>
            <p className="text-base md:text-xl text-slate-500 max-w-xl mx-auto mb-8">Premium Copywriting & SEO. Ich verwandle Besucher in Kunden. Ohne Meetings, rein schriftlich.</p>
            <a href="#audit" className="bg-orange-500 text-white px-6 py-3 rounded-full font-bold text-sm md:text-base hover:bg-orange-600 transition shadow-lg inline-flex items-center gap-2">
               Kostenlose Analyse <ArrowRight size={18} />
            </a>
        </section>

        <section className="px-4 pb-16">
          <div className="max-w-4xl mx-auto border-4 border-slate-200 rounded-xl overflow-hidden shadow-2xl bg-white relative">
             <div className="h-8 bg-slate-100 border-b flex items-center px-3 gap-2">
                <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-red-400"></div><div className="w-2 h-2 rounded-full bg-yellow-400"></div><div className="w-2 h-2 rounded-full bg-green-400"></div></div>
                <div className="flex-1 bg-white mx-2 rounded text-[10px] text-center py-0.5 text-gray-500 font-mono truncate">
                  {isAfterMode ? industries[activeIndustry].after.url : industries[activeIndustry].before.url}
                </div>
             </div>
             
             <div className="relative min-h-[400px] md:aspect-video group flex flex-col justify-center">
                <div className={`absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-12 transition-all duration-500 ${isAfterMode ? industries[activeIndustry].after.bgClass : industries[activeIndustry].before.bgClass} ${isAfterMode ? industries[activeIndustry].after.textClass : industries[activeIndustry].before.textClass}`}>
                   <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">{isAfterMode ? industries[activeIndustry].after.headline : industries[activeIndustry].before.headline}</h2>
                   <p className="text-sm md:text-lg mb-8 max-w-lg mx-auto opacity-90 leading-relaxed">{isAfterMode ? industries[activeIndustry].after.sub : industries[activeIndustry].before.sub}</p>
                   <button className={`px-6 py-3 font-bold rounded text-sm ${isAfterMode ? 'bg-orange-500 text-white shadow-lg transform scale-105' : 'border-2 border-current'}`}>
                      {isAfterMode ? industries[activeIndustry].after.cta : industries[activeIndustry].before.cta}
                   </button>
                </div>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur text-white p-1 rounded-full flex gap-1 cursor-pointer border border-white/20 shadow-xl" onClick={() => setIsAfterMode(!isAfterMode)}>
                   <div className={`px-4 py-2 rounded-full transition-all text-xs font-bold ${!isAfterMode ? 'bg-slate-700' : 'hover:bg-white/10'}`}>Vorher</div>
                   <div className={`px-4 py-2 rounded-full transition-all text-xs font-bold ${isAfterMode ? 'bg-orange-500' : 'hover:bg-white/10'}`}>Nachher</div>
                </div>
             </div>
          </div>
          <div className="flex justify-center gap-2 mt-4 overflow-x-auto pb-2 no-scrollbar px-4">
             {industries.map((ind) => (
                <button key={ind.id} onClick={() => { setActiveIndustry(ind.id); setIsAfterMode(false); }} className={`px-4 py-2 rounded-full text-xs font-bold border transition whitespace-nowrap ${activeIndustry === ind.id ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-slate-500 border-slate-300'}`}>
                   {ind.name}
                </button>
             ))}
          </div>
        </section>

        <section className="bg-slate-50 py-16 px-4">
           <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                 <h2 className="text-orange-500 font-bold tracking-widest uppercase text-xs mb-2">Expertise</h2>
                 <h3 className="text-2xl md:text-3xl font-extrabold">Was ich liefere</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                 {[
                   { icon: Search, title: "SEO Audit", desc: "Analyse Ihrer Struktur und Keywords. Ich sorge dafür, dass Sie von genau den Kunden gefunden werden, die Sie suchen.", bg: "bg-orange-100", color: "text-orange-500" },
                   { icon: PenTool, title: "Sales Copy", desc: "Verkaufstexte, die den Wert Ihres Angebots auf den Punkt bringen, statt mit leeren Floskeln zu langweilen.", bg: "bg-blue-100", color: "text-blue-500" }
                 ].map((item, i) => (
                   <div key={i} className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                     <div className={`w-12 h-12 ${item.bg} ${item.color} rounded-xl flex items-center justify-center mb-4`}><item.icon size={24} /></div>
                     <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                     <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        <section id="audit" className="py-16 px-4 bg-white mb-20">
          <div className="max-w-md mx-auto bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100">
             <h3 className="text-xl md:text-2xl font-bold mb-2 text-center">Interesse geweckt?</h3>
             <p className="text-slate-500 mb-6 text-center text-sm">Lassen Sie uns Ihre Website analysieren.</p>
             {formStatus === 'success' ? (
                <div className="p-8 bg-green-50 text-green-600 rounded-xl text-center font-bold flex flex-col items-center gap-4">
                   <CheckCircle size={48} />
                   Anfrage erfolgreich gesendet!
                   <button onClick={() => setFormStatus('idle')} className="text-sm underline opacity-70">Neue Anfrage</button>
                </div>
             ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                   <input required type="text" className="w-full p-3 bg-white rounded-lg border border-slate-200 focus:border-orange-500 outline-none text-sm font-medium" placeholder="Ihr Name" />
                   <input required type="email" className="w-full p-3 bg-white rounded-lg border border-slate-200 focus:border-orange-500 outline-none text-sm font-medium" placeholder="ihre@email.de" />
                   <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg w-full flex items-center justify-center gap-2 text-sm transition-all">
                      Analyse anfordern <Send size={16} />
                   </button>
                </form>
             )}
          </div>
        </section>
    </div>
  );
}

// ==========================================
// TEIL 2: COPYWRITING DOKUMENTATION - ENHANCED
// ==========================================
const CopywritingDocsView = ({ onBack, darkMode }) => {
  const cardClass = darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200";
  const textMain = darkMode ? "text-white" : "text-slate-900";
  const textSub = darkMode ? "text-slate-400" : "text-slate-600";

  return (
    <div className={`min-h-screen p-4 md:p-8 overflow-y-auto relative z-50 ${darkMode ? 'bg-black text-slate-200' : 'bg-slate-50 text-slate-800'} pb-24`}>
      <div className="max-w-3xl mx-auto">
        <nav className="flex justify-between items-center mb-8 sticky top-0 z-10 py-2 bg-inherit/90 backdrop-blur-md">
           <div className={`text-lg md:text-xl font-bold cursor-pointer hover:opacity-80 flex items-center gap-2 ${textMain}`} onClick={onBack}>
              <Brain size={20} className="text-purple-500" />
              <span>Copy.Docs</span>
           </div>
           <button onClick={onBack} className={`p-2 rounded-full border transition-all ${darkMode ? 'bg-slate-800 border-slate-700 hover:bg-slate-700' : 'bg-white border-slate-200 hover:bg-slate-100'}`}><X size={18} /></button>
        </nav>

        <header className="mb-10 text-center">
          <h1 className={`text-2xl md:text-4xl font-bold mb-3 ${textMain}`}>Cheat Sheet</h1>
          <p className="text-sm md:text-base opacity-60">Psychologie & Struktur für bessere Texte.</p>
        </header>

        <div className="space-y-6">
          {/* 1. Feature vs Benefit */}
          <section className={`p-6 rounded-2xl border ${cardClass}`}>
            <h2 className="text-lg font-bold mb-2 text-purple-500">1. Der "Na und?"-Test (Feature vs. Benefit)</h2>
            <p className={`text-xs mb-4 ${textSub}`}>Features sind Fakten. Benefits sind Gefühle. Teste jede Aussage mit "Na und?" - die Antwort ist der Benefit.</p>
            <div className="grid gap-3">
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-sm">
                <strong className="text-red-500 block mb-1">❌ Feature (Merkmal)</strong>
                "128GB Speicherplatz."
              </div>
              <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-sm">
                <strong className="text-green-500 block mb-1">✅ Benefit (Nutzen)</strong>
                "Platz für 50.000 Fotos deiner Enkel, damit keine Erinnerung verloren geht."
              </div>
            </div>
          </section>

          {/* 2. Frameworks - P.A.S. Added */}
          <section className={`p-6 rounded-2xl border ${cardClass}`}>
            <h2 className="text-lg font-bold mb-4 text-purple-500">2. Struktur-Formeln</h2>
            
            <div className="mb-6">
              <h3 className={`font-bold mb-2 text-sm uppercase tracking-wider ${textMain}`}>Der Klassiker: A.I.D.A.</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-3"><span className="font-bold text-purple-400 w-4">A</span><span><strong className={textMain}>Attention:</strong> Headline muss stoppen.</span></li>
                <li className="flex gap-3"><span className="font-bold text-purple-400 w-4">I</span><span><strong className={textMain}>Interest:</strong> Fakten, die neugierig machen.</span></li>
                <li className="flex gap-3"><span className="font-bold text-purple-400 w-4">D</span><span><strong className={textMain}>Desire:</strong> Emotionale Lösung zeigen.</span></li>
                <li className="flex gap-3"><span className="font-bold text-purple-400 w-4">A</span><span><strong className={textMain}>Action:</strong> Klarer Befehl (CTA).</span></li>
              </ul>
            </div>

            <div>
              <h3 className={`font-bold mb-2 text-sm uppercase tracking-wider ${textMain}`}>Der Problemlöser: P.A.S.</h3>
              <p className={`text-xs mb-2 opacity-70`}>Besser für Landing Pages mit konkreten Schmerzpunkten.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-3"><span className="font-bold text-blue-400 w-4">P</span><span><strong className={textMain}>Problem:</strong> "Rückenschmerzen beim Sitzen?"</span></li>
                <li className="flex gap-3"><span className="font-bold text-blue-400 w-4">A</span><span><strong className={textMain}>Agitation:</strong> "Es wird schlimmer. Bald kannst du nicht mehr arbeiten."</span></li>
                <li className="flex gap-3"><span className="font-bold text-blue-400 w-4">S</span><span><strong className={textMain}>Solution:</strong> "Unser Stuhl korrigiert die Haltung sofort."</span></li>
              </ul>
            </div>
          </section>

          {/* 3. Psychologische Trigger - NEW SECTION */}
          <section className={`p-6 rounded-2xl border ${cardClass}`}>
            <h2 className="text-lg font-bold mb-4 text-purple-500">3. Psychologische Trigger</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm">
               <div className={`p-3 rounded-lg border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-100'}`}>
                  <strong className="block mb-1 text-cyan-500 flex items-center gap-2"><Users size={14}/> Social Proof</strong>
                  "Bereits 10.000 Kunden" (Sicherheit in der Masse).
               </div>
               <div className={`p-3 rounded-lg border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-100'}`}>
                  <strong className="block mb-1 text-cyan-500 flex items-center gap-2"><Clock size={14}/> Scarcity</strong>
                  "Nur noch 3 Stück verfügbar" (Angst, etwas zu verpassen).
               </div>
               <div className={`p-3 rounded-lg border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-100'}`}>
                  <strong className="block mb-1 text-cyan-500 flex items-center gap-2"><CheckCircle size={14}/> Authority</strong>
                  "Von Zahnärzten empfohlen" (Vertrauen durch Experten).
               </div>
               <div className={`p-3 rounded-lg border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-100'}`}>
                  <strong className="block mb-1 text-cyan-500 flex items-center gap-2"><ShieldCheck size={14}/> Risk Reversal</strong>
                  "30 Tage Geld-zurück-Garantie" (Nimmt die Hürde).
               </div>
            </div>
          </section>

          {/* 4. UX & Scanning - NEW SECTION */}
          <section className={`p-6 rounded-2xl border ${cardClass}`}>
            <h2 className="text-lg font-bold mb-2 text-purple-500">4. UX Writing & Lesbarkeit</h2>
            <p className={`text-sm ${textSub}`}>
              Im Web wird nicht gelesen, sondern gescannt. 
              <br/>
              <span className="block mt-2 font-mono text-xs opacity-70">
                ✅ Kurze Absätze (max 3 Zeilen)<br/>
                ✅ Zwischenüberschriften alle 300 Wörter<br/>
                ✅ Bullet Points für Listen<br/>
                ✅ Fettungen für Schlüsselsätze
              </span>
            </p>
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
      title: "Alle Bestellungen",
      sql: `SELECT o.id, o.date, p.name 
FROM Orders o
JOIN Products p ON o.product_id = p.id
WHERE u.email = 'kunde@beispiel.de';`,
      result: [
        { id: "#1023", date: "2024-02-15", name: "Gaming Maus", price: "49.99€" },
        { id: "#1045", date: "2024-03-01", name: "Tastatur", price: "89.99€" },
      ]
    },
    {
      title: "Top Seller",
      sql: `SELECT p.name, COUNT(o.id) as sales
FROM Products p
LEFT JOIN Orders o ON p.id = o.product_id
GROUP BY p.id
ORDER BY sales DESC
LIMIT 5;`,
      result: [
        { name: "Gaming Maus", sales: 142 },
        { name: "USB-C Kabel", sales: 98 },
      ]
    }
  ];

  return (
    <div className={`min-h-screen p-4 overflow-y-auto relative z-50 ${darkMode ? 'bg-black text-slate-200' : 'bg-slate-50 text-slate-800'} pb-24`}>
      <div className="max-w-4xl mx-auto">
        <nav className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3 cursor-pointer" onClick={onBack}>
               <div className="p-2 bg-emerald-500/10 text-emerald-500 rounded-lg"><Database size={20}/></div>
               <div>
                  <h1 className="text-lg font-bold">E-Commerce DB</h1>
                  <p className="opacity-60 text-[10px] uppercase tracking-wider">SQL & Architecture</p>
               </div>
            </div>
            <button onClick={onBack} className={`p-2 rounded-full border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}><X size={18} /></button>
        </nav>

        <div className="grid gap-6">
           <div className={`p-5 rounded-xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <h3 className="font-bold mb-3 flex items-center gap-2 text-sm"><Server size={16}/> Tabellen Struktur</h3>
              <div className="space-y-2 font-mono text-xs">
                 <div className="p-2 bg-emerald-500/10 border-l-2 border-emerald-500 rounded">Users (id, email)</div>
                 <div className="flex justify-center text-[10px] opacity-50">⬇ 1:n</div>
                 <div className="p-2 bg-blue-500/10 border-l-2 border-blue-500 rounded">Orders (id, user_id, date)</div>
                 <div className="flex justify-center text-[10px] opacity-50">⬇ n:1</div>
                 <div className="p-2 bg-purple-500/10 border-l-2 border-purple-500 rounded">Products (id, name, price)</div>
              </div>
           </div>

           <div className={`rounded-xl border overflow-hidden ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div className="flex border-b border-slate-700/50 overflow-x-auto no-scrollbar">
                 {queries.map((q,i) => (
                    <button key={i} onClick={() => setActiveQuery(i)} className={`px-4 py-3 text-xs font-bold whitespace-nowrap transition-colors ${activeQuery === i ? 'bg-emerald-500/10 text-emerald-500 border-b-2 border-emerald-500' : 'opacity-60 hover:opacity-100'}`}>Query {i+1}</button>
                 ))}
              </div>
              <div className="p-4">
                 <div className="bg-black p-3 rounded-lg font-mono text-emerald-400 text-xs mb-4 border border-slate-700 overflow-x-auto whitespace-pre"><code className="block">{queries[activeQuery].sql}</code></div>
                 <div className="text-[10px] uppercase font-bold opacity-50 mb-2">Result:</div>
                 <div className="bg-slate-800/50 rounded border border-slate-700 overflow-x-auto">
                    <table className="w-full text-xs text-left whitespace-nowrap">
                       <thead className="bg-slate-700 text-slate-200">
                          <tr>{Object.keys(queries[activeQuery].result[0]).map(k => <th key={k} className="px-3 py-2 capitalize">{k}</th>)}</tr>
                       </thead>
                       <tbody className="text-slate-300">
                          {queries[activeQuery].result.map((r, i) => (
                             <tr key={i} className="border-b border-slate-700/50 last:border-0 hover:bg-slate-700/50">
                                {Object.values(r).map((v, j) => <td key={j} className="px-3 py-2">{v}</td>)}
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
  );
};

// ==========================================
// TEIL 4: NETWORK & API BASICS (Mobile Optimized Simulation)
// ==========================================
const NetworkProjectView = ({ onBack, darkMode }) => {
  const [step, setStep] = useState(0); 
  const [logs, setLogs] = useState([]);
  const cardClass = darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200";

  const runSimulation = () => {
    if (step > 0 && step < 5) return; 
    setStep(1);
    setLogs(["Initialisiere Anfrage..."]);
    
    setTimeout(() => { setLogs(prev => [...prev, "🔍 DNS Lookup: 'api.shop.de'"]); }, 800);
    setTimeout(() => { setLogs(prev => [...prev, "✅ IP gefunden: 192.168.178.45"]); setStep(2); }, 2000);
    setTimeout(() => { setLogs(prev => [...prev, "🔄 Handshake mit Server..."]); setStep(3); }, 3500);
    setTimeout(() => { setLogs(prev => [...prev, "📨 GET Request /products"]); setStep(4); }, 5000);
    setTimeout(() => { setLogs(prev => [...prev, "📥 200 OK (JSON Data)"]); setStep(5); }, 6500);
  };

  const resetSimulation = () => { setStep(0); setLogs([]); };

  return (
    <div className={`min-h-screen p-4 overflow-y-auto relative z-50 ${darkMode ? 'bg-black text-slate-200' : 'bg-slate-50 text-slate-800'} pb-24`}>
      <div className="max-w-4xl mx-auto">
        <nav className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3 cursor-pointer" onClick={onBack}>
               <div className="p-2 bg-cyan-500/10 text-cyan-500 rounded-lg"><Network size={20}/></div>
               <div>
                  <h1 className="text-lg font-bold">Web & Network</h1>
                  <p className="opacity-60 text-[10px] uppercase">IP, Hosting & API</p>
               </div>
            </div>
            <button onClick={onBack} className={`p-2 rounded-full border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}><X size={18} /></button>
        </nav>

        <section className={`p-5 rounded-2xl border flex flex-col mb-6 ${cardClass}`}>
             <div className="flex justify-between items-center mb-4">
                <h2 className="text-base font-bold flex items-center gap-2"><Monitor className="text-cyan-500" size={18}/> Simulator</h2>
                <div className="text-[10px] px-2 py-1 rounded bg-slate-800 border border-slate-700 font-mono text-slate-300">Status: {step === 0 ? 'IDLE' : step === 5 ? 'DONE' : 'RUN'}</div>
             </div>

             {/* CLEAN TRIANGLE SIMULATION LAYOUT - RESPONSIVE */}
             <div className="relative w-full h-[360px] md:h-[400px] bg-slate-900/50 rounded-2xl border border-slate-700/50 overflow-hidden flex items-center justify-center mb-6">
                
                {/* SVG Connections Layer */}
                <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                    {/* Line 1: Browser -> DNS */}
                    <line 
                        x1="20%" y1="80%" 
                        x2="50%" y2="20%" 
                        stroke={step >= 1 ? "#22d3ee" : "#334155"} 
                        strokeWidth={step === 1 ? "3" : "2"}
                        strokeDasharray={step === 1 ? "5,5" : "0"}
                        className={`transition-colors duration-700 ${step === 1 ? "animate-pulse" : ""}`}
                    />

                    {/* Line 3: DNS -> Server (Visual completion) - ANIMATED AT STEP 2 */}
                    <line 
                        x1="50%" y1="20%" 
                        x2="80%" y2="80%" 
                        stroke={step >= 2 ? "#a855f7" : "#334155"} 
                        strokeWidth={step >= 2 ? "2" : "1"}
                        strokeDasharray={step === 2 ? "5,5" : "4,4"}
                        strokeOpacity={step >= 2 ? "1" : "0.3"}
                        className={`transition-colors duration-700 ${step === 2 ? "animate-pulse" : ""}`}
                    />

                    {/* Line 2: Browser -> Server */}
                    <line 
                        x1="20%" y1="80%" 
                        x2="80%" y2="80%" 
                        stroke={step >= 3 ? "#10b981" : "#334155"} 
                        strokeWidth={step >= 3 ? "3" : "2"}
                        strokeDasharray={step === 4 ? "5,5" : "0"}
                        className={`transition-colors duration-700 ${step >= 3 ? "" : ""}`}
                    />
                </svg>

                {/* Nodes */}
                {/* 1. DNS (Top Center) */}
                <div className={`absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 transition-all duration-500 z-10 ${step >= 1 ? 'scale-110' : 'opacity-60 grayscale'}`}>
                    <div className={`p-3 md:p-4 rounded-full border-2 ${step >= 1 ? 'bg-purple-500/20 border-purple-500 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.4)]' : 'bg-slate-800 border-slate-700 text-slate-500'}`}>
                        <Globe size={24} className="md:w-8 md:h-8" />
                    </div>
                    <span className="text-[10px] md:text-xs font-bold bg-black/60 px-2 py-1 rounded text-slate-300 backdrop-blur-sm border border-slate-700">DNS</span>
                </div>

                {/* 2. Browser (Bottom Left) */}
                <div className={`absolute bottom-[20%] left-[20%] -translate-x-1/2 translate-y-1/2 flex flex-col items-center gap-2 transition-all duration-500 z-10 ${step >= 0 ? 'scale-110' : 'opacity-60'}`}>
                    <div className={`p-3 md:p-4 rounded-full border-2 ${step >= 0 ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)]' : 'bg-slate-800 border-slate-700 text-slate-500'}`}>
                        <Monitor size={24} className="md:w-8 md:h-8" />
                    </div>
                    <span className="text-[10px] md:text-xs font-bold bg-black/60 px-2 py-1 rounded text-slate-300 backdrop-blur-sm border border-slate-700">User</span>
                </div>

                {/* 3. Server (Bottom Right) */}
                <div className={`absolute bottom-[20%] right-[20%] translate-x-1/2 translate-y-1/2 flex flex-col items-center gap-2 transition-all duration-500 z-10 ${step >= 2 ? 'scale-110' : 'opacity-60 grayscale'}`}>
                    <div className={`p-3 md:p-4 rounded-full border-2 ${step >= 2 ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.4)]' : 'bg-slate-800 border-slate-700 text-slate-500'}`}>
                        <Server size={24} className="md:w-8 md:h-8" />
                    </div>
                    <span className="text-[10px] md:text-xs font-bold bg-black/60 px-2 py-1 rounded text-slate-300 backdrop-blur-sm border border-slate-700">Server</span>
                </div>

             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <button 
                 onClick={runSimulation} 
                 disabled={step > 0 && step < 5}
                 className={`py-3 rounded-xl font-bold flex items-center justify-center gap-2 text-sm transition-all ${step > 0 && step < 5 ? 'bg-slate-800 text-slate-500' : 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg'}`}
               >
                 {step === 5 ? <><CheckCircle size={16}/> Neustart</> : <><Zap size={16}/> Start</>}
               </button>
               {step === 5 && <button onClick={resetSimulation} className="py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center"><Trash2 size={16}/></button>}
             </div>
             
             <div className="mt-4 h-32 bg-black rounded-lg border border-slate-800 p-3 font-mono text-[10px] overflow-y-auto space-y-1.5">
                {logs.map((log, i) => (
                  <div key={i} className="flex gap-2">
                    <span className="text-slate-600">{i+1}</span>
                    <span className={log.includes('200') ? 'text-green-400' : log.includes('IP') ? 'text-purple-400' : 'text-slate-300'}>{log}</span>
                  </div>
                ))}
             </div>
        </section>

        <section className={`p-5 rounded-2xl border ${cardClass}`}>
           <h3 className="font-bold mb-4 text-sm flex items-center gap-2"><BookOpen size={16} className="text-cyan-500"/> Glossar</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
              <div className="p-3 bg-slate-500/5 rounded border border-slate-500/10">
                <strong className="block mb-1 text-blue-400">IP-Adresse</strong>
                Die "Hausnummer" im Internet (z.B. 192.168.0.1).
              </div>
              <div className="p-3 bg-slate-500/5 rounded border border-slate-500/10">
                <strong className="block mb-1 text-purple-400">DNS</strong>
                Das Telefonbuch. Übersetzt "google.de" in die IP-Adresse.
              </div>
              <div className="p-3 bg-slate-500/5 rounded border border-slate-500/10">
                <strong className="block mb-1 text-orange-400">Server (Hosting)</strong>
                Der Computer, auf dem die Webseite liegt.
              </div>
              <div className="p-3 bg-slate-500/5 rounded border border-slate-500/10">
                <strong className="block mb-1 text-green-400">API (Schnittstelle)</strong>
                Der Kellner, der Daten zwischen Browser und Datenbank trägt.
              </div>
           </div>
        </section>
      </div>
    </div>
  );
};

// ==========================================
// HAUPT-APP
// ==========================================
const WaveBackground = ({ darkMode }) => (
  <div className={`fixed inset-0 w-full h-full -z-10 overflow-hidden ${darkMode ? 'bg-black' : 'bg-slate-100'}`}>
    {/* Grid Overlay */}
    <div className={`absolute inset-0 opacity-10 bg-[size:40px_40px] ${darkMode 
      ? 'bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]' 
      : 'bg-[linear-gradient(to_right,#0000001a_1px,transparent_1px),linear-gradient(to_bottom,#0000001a_1px,transparent_1px)]'
    }`}></div>

    {/* Blobs nur auf Desktop anzeigen für Mobile Performance */}
    <div className={`hidden md:block absolute top-0 -left-20 w-[500px] h-[500px] rounded-full mix-blend-screen filter blur-[80px] animate-blob opacity-30 ${darkMode ? 'bg-cyan-900' : 'bg-cyan-300'}`}></div>
    <div className={`hidden md:block absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full mix-blend-screen filter blur-[80px] animate-blob animation-delay-2000 opacity-30 ${darkMode ? 'bg-blue-900' : 'bg-blue-300'}`}></div>
    
    {/* Simple Gradient für Mobile */}
    <div className={`md:hidden absolute inset-0 bg-gradient-to-b ${darkMode ? 'from-black via-slate-900 to-black' : 'from-white via-slate-50 to-white'} opacity-80`}></div>
  </div>
);

export default function App() {
  const [projects, setProjects] = useState([
    {
      id: "network-basics",
      title: "Web-Infrastruktur & APIs",
      description: "Interaktive Simulation von DNS, Server-Hosting und API-Requests. Verstehe den Weg vom Klick bis zur Datenanzeige.",
      tags: ["Network", "API", "DNS"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      viewType: 'network',
      isInternal: true
    },
    {
      id: "database-project",
      title: "E-Commerce Database",
      description: "Entwurf eines relationalen Datenbankschemas. SQL-Abfragen, JOINs und Normalisierung.",
      tags: ["SQL", "Database", "Backend"],
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800",
      viewType: 'database',
      isInternal: true
    },
    {
      id: "copywriting-docs",
      title: "Conversion Copywriting",
      description: "Interaktive Dokumentation zu Verkaufspsychologie und AIDA-Formel.",
      tags: ["SEO", "Psychology", "Docs"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
      viewType: 'docs',
      isInternal: true
    },
    {
      id: "landing-page-project",
      title: "High-End Landing Page",
      description: "Interaktive Landingpage mit Vorher/Nachher-Slider.",
      tags: ["React", "UI/UX"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      viewType: 'landing',
      isInternal: true
    }
  ]);
  
  const [activeTab, setActiveTab] = useState('portfolio'); 
  const [currentView, setCurrentView] = useState('portfolio');
  const [legalView, setLegalView] = useState(null);
  const [darkMode, setDarkMode] = useState(true); 
  const [isAdmin, setIsAdmin] = useState(false); 
  const [adminClicks, setAdminClicks] = useState(0); 

  const [profileImage, setProfileImage] = useState("/9404.png"); 
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
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

  const textMain = darkMode ? "text-white" : "text-slate-900";
  const textSub = darkMode ? "text-slate-400" : "text-slate-600";
  const cardStyle = darkMode ? "glass-panel-dark" : "glass-panel-light";

  // ROUTING LOGIK
  if (currentView === 'network') return <NetworkProjectView onBack={() => setCurrentView('portfolio')} darkMode={darkMode} />;
  if (currentView === 'landing') return <CopywritingLandingProject onBack={() => setCurrentView('portfolio')} />;
  if (currentView === 'docs') return <CopywritingDocsView onBack={() => setCurrentView('portfolio')} darkMode={darkMode} />;
  if (currentView === 'database') return <DatabaseProjectView onBack={() => setCurrentView('portfolio')} darkMode={darkMode} />;

  // NAVIGATION COMPONENT
  const Navigation = () => (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 px-6 py-4 hidden md:flex justify-between items-center transition-all duration-300 ${darkMode ? 'bg-black/80 border-cyan-900/30' : 'bg-white/80 border-cyan-200'} backdrop-blur-md border-b`}>
        <div className="max-w-6xl mx-auto w-full flex justify-between items-center">
          <div onClick={handleLogoClick} className={`text-2xl font-bold tracking-widest uppercase flex items-center gap-2 cursor-pointer select-none ${textMain}`}>
            <Terminal size={24} className="text-cyan-500" />
            PD<span className="text-cyan-500">.DEV</span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex gap-8">
              {['Portfolio', 'Profil', 'Kontakt'].map((item) => (
                <button key={item} onClick={() => { setActiveTab(item === 'Profil' ? 'about' : item.toLowerCase()); setLegalView(null); }} className={`text-sm font-bold uppercase tracking-widest transition-all ${activeTab === (item === 'Profil' ? 'about' : item.toLowerCase()) && !legalView ? 'text-cyan-500' : 'text-slate-500 hover:text-cyan-400'}`}>
                  {item}
                </button>
              ))}
            </div>
            <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-full border ${darkMode ? 'bg-black border-cyan-500 text-cyan-400' : 'bg-white border-cyan-500 text-cyan-600'}`}>
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Top Bar (Logo & Theme) */}
      <div className={`md:hidden fixed top-0 left-0 right-0 z-40 px-4 py-3 flex justify-between items-center ${darkMode ? 'bg-black/90' : 'bg-white/90'} backdrop-blur border-b ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
         <div onClick={handleLogoClick} className={`font-bold tracking-widest uppercase flex items-center gap-2 ${textMain}`}>
            <Terminal size={20} className="text-cyan-500" />
            PD.DEV
         </div>
         <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-full ${darkMode ? 'text-yellow-400' : 'text-slate-600'}`}>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
         </button>
      </div>

      {/* Mobile Navigation (Bottom) - Elevated Z-Index */}
      <div className={`md:hidden fixed bottom-6 left-4 right-4 z-[100] p-3 rounded-2xl flex justify-around items-center border shadow-2xl ${darkMode ? 'bg-slate-900/95 border-slate-700 text-slate-400' : 'bg-white/95 border-slate-200 text-slate-500'} backdrop-blur-md`}>
          {['Portfolio', 'Profil', 'Kontakt'].map((item) => (
              <button key={item} onClick={() => { setActiveTab(item === 'Profil' ? 'about' : item.toLowerCase()); setLegalView(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className={`flex flex-col items-center gap-1 text-[10px] font-bold uppercase tracking-widest transition-all ${activeTab === (item === 'Profil' ? 'about' : item.toLowerCase()) && !legalView ? 'text-cyan-500 scale-105' : ''}`}>
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
    <div className={`min-h-screen font-sans transition-colors duration-500 ${darkMode ? 'bg-black' : 'bg-slate-50'}`}>
      <style>{styles}</style>
      {/* <Analytics /> */}
      <WaveBackground darkMode={darkMode} />
      <Navigation />

      <main className="max-w-6xl mx-auto px-4 pb-32 pt-20 relative z-10">

        {/* PORTFOLIO TAB */}
        {activeTab === 'portfolio' && (
          <div className="pt-10 md:pt-20 text-center">
             <div className="mb-8 relative inline-block">
                 <div className={`absolute -inset-1 rounded-full opacity-60 blur-lg animate-pulse-slow bg-gradient-to-r from-cyan-400 to-purple-600`}></div>
                 <div className={`relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-2 shadow-2xl mx-auto flex items-center justify-center bg-black border-cyan-500`}>
                   {profileImage ? <img src={profileImage} alt="Profilbild" className="w-full h-full object-cover" /> : <User size={64} className="text-slate-500" />}
                 </div>
                 {isAdmin && (
                   <>
                    <button onClick={() => fileInputRef.current.click()} className="absolute bottom-2 right-2 p-2 bg-black border border-cyan-500 rounded-full text-cyan-500 z-20"><Camera size={16} /></button>
                    <input type="file" ref={fileInputRef} onChange={handleImageUpload} className="hidden" accept="image/*" />
                   </>
                 )}
             </div>

             <h1 onClick={handleAdminTrigger} className={`text-3xl md:text-7xl font-bold mb-3 cursor-default select-none ${textMain}`}>
               Pennueng Daenchai
               {isAdmin && <span className="text-xs align-top text-red-500 ml-2 animate-pulse">[ADMIN]</span>}
             </h1>
             
             {/* TYPEWRITER EFFECT REPLACING STATIC SUBTITLE */}
             <Typewriter 
               words={["Problemlöser.", "Praktiker.", "Lösungs-Finder.", "Macher."]} 
               darkMode={darkMode} 
             />
             
             {/* NEW FEATURE: TECH STACK MARQUEE - CLEANED UP */}
             <div className="mb-16">
                <TechStackTicker darkMode={darkMode} />
             </div>
             
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
                 <div key={project.id} className={`group flex flex-col rounded-2xl overflow-hidden ${cardStyle} hover:scale-[1.02] transition-transform duration-300`}>
                   <div className="relative h-40 overflow-hidden bg-black">
                     <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                   </div>
                   <div className="p-5 flex-1 flex flex-col">
                     <div className="flex justify-between items-start mb-2">
                       <h3 className={`text-lg font-bold ${textMain}`}>{project.title}</h3>
                       {isAdmin && <button onClick={() => handleDeleteProject(project.id)} className="text-red-500"><Trash2 size={16} /></button>}
                     </div>
                     <p className={`mb-4 text-xs leading-relaxed flex-1 ${textSub}`}>{project.description}</p>
                     <div className="flex flex-wrap gap-1.5 mb-4">
                       {project.tags.map((tag, idx) => (
                         <span key={idx} className="px-2 py-1 text-[10px] uppercase font-bold border border-cyan-500/30 text-cyan-600 bg-cyan-500/10 rounded">{tag}</span>
                       ))}
                     </div>
                     <button onClick={() => setCurrentView(project.viewType)} className={`w-full py-2.5 font-bold uppercase tracking-widest text-xs border rounded-lg transition-all flex items-center justify-center gap-2 border-cyan-500 text-cyan-500 hover:bg-cyan-600 hover:text-white`}>
                        {project.viewType === 'docs' ? <BookOpen size={14} /> : project.viewType === 'database' ? <Database size={14} /> : <ExternalLink size={14} />} Demo
                     </button>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        )}

        {/* ABOUT TAB */}
        {activeTab === 'about' && (
          <div className="pt-6 md:pt-10 max-w-3xl mx-auto">
             <div className={`p-6 rounded-2xl mb-10 ${cardStyle}`}>
               <h2 className={`text-2xl font-bold mb-4 ${textMain}`}>Der pragmatische Ansatz</h2>
               <div className={`space-y-4 text-sm md:text-base leading-relaxed ${textSub}`}>
                  <p>Ich bin ehrlich: Wenn Sie reine Theorie suchen, bin ich der Falsche. Wenn Sie jemanden suchen, der ein <strong>Problem sieht und es behebt</strong>, dann bin ich Ihr Mann.</p>
                  <p>Vom Handwerk über die Logistik bis zur IT: Ich habe gelernt, genau hinzusehen. Ich nutze KI und moderne Frameworks als Werkzeuge, um effiziente Lösungen zu bauen.</p>
                  <p>Die IT-Landschaft ist riesig. Niemand kennt 100% aller Systeme. Aber das ist auch nicht mein Anspruch. Mein Talent ist es, mich tief in neue Themen hineinzufuchsen und pragmatische Lösungen zu finden. Dabei nutze ich KI als Hebel, um schneller und effizienter Ergebnisse zu liefern, statt das Rad neu zu erfinden.</p>
                  <p className="p-3 border-l-4 border-cyan-500 bg-cyan-500/10 text-cyan-600 font-medium italic rounded-r">
                    "Deutschland muss wieder effizienter werden. KI und Automation sind keine Bedrohung, sondern der Schlüssel dazu."
                  </p>
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
               
               <div className={`p-6 rounded-xl ${cardStyle}`}>
                 <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 ${textMain}`}>
                   <Microscope className="text-emerald-500" size={20} /> Fehleranalyse
                 </h3>
                 <p className={`text-sm mb-4 ${textSub}`}>
                   Ich finde Bugs und Probleme, bevor sie kritisch werden.
                 </p>
                 <div className="flex flex-wrap gap-2">
                   {["Debugging", "Quality Checks", "System-Tests", "Troubleshooting"].map(s => (
                     <span key={s} className={`px-3 py-1 rounded text-xs border ${darkMode ? 'bg-emerald-900/30 text-emerald-300 border-emerald-500/30' : 'bg-emerald-50 text-emerald-700 border-emerald-200'}`}>{s}</span>
                   ))}
                 </div>
               </div>

               <div className={`p-6 rounded-xl ${cardStyle}`}>
                 <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 ${textMain}`}>
                   <Terminal className="text-blue-500" size={20} /> Tech Stack
                 </h3>
                 <p className={`text-sm mb-4 ${textSub}`}>
                   Stabiles Fundament durch Umschulung & Eigenstudium.
                 </p>
                 <div className="flex flex-wrap gap-2">
                   {["Java", "C#", "Python", "React", "AI Prompting", "Linux"].map(s => (
                     <span key={s} className={`px-3 py-1 rounded text-xs border ${darkMode ? 'bg-blue-900/30 text-blue-300 border-blue-500/30' : 'bg-blue-50 text-blue-700 border-blue-200'}`}>{s}</span>
                   ))}
                 </div>
               </div>

               <div className={`p-6 rounded-xl ${cardStyle}`}>
                 <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 ${textMain}`}>
                   <GitBranch className="text-orange-500" size={20} /> Workflow
                 </h3>
                 <p className={`text-sm mb-4 ${textSub}`}>
                   Ich weiß, wie professionelle Teams arbeiten.
                 </p>
                 <div className="flex flex-wrap gap-2">
                   {["Git & Bitbucket", "Scrum / Agile", "Jira / Tickets", "Support"].map(s => (
                     <span key={s} className={`px-3 py-1 rounded text-xs border ${darkMode ? 'bg-orange-900/30 text-orange-300 border-orange-500/30' : 'bg-orange-50 text-orange-700 border-orange-200'}`}>{s}</span>
                   ))}
                 </div>
               </div>

               <div className={`p-6 rounded-xl md:col-span-3 ${cardStyle}`}>
                 <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 ${textMain}`}>
                   <Target className="text-purple-500" size={20} /> Copywriting & Sales Psychology
                 </h3>
                 <p className={`text-sm mb-4 ${textSub}`}>
                   Code ist nichts ohne den richtigen Kontext. Ich verstehe, wie man Nutzer führt und überzeugt.
                 </p>
                 <div className="flex flex-wrap gap-2">
                   {["SEO Optimization", "AIDA Model", "Conversion Optimization", "Landing Page Structure"].map(s => (
                     <span key={s} className={`px-3 py-1 rounded text-xs border ${darkMode ? 'bg-purple-900/30 text-purple-300 border-purple-500/30' : 'bg-purple-50 text-purple-700 border-purple-200'}`}>{s}</span>
                   ))}
                 </div>
               </div>
             </div>
          </div>
        )}

        {/* CONTACT TAB */}
        {activeTab === 'contact' && (
          <div className="pt-10 max-w-md mx-auto pb-10">
            <div className={`p-6 md:p-10 rounded-2xl text-center ${cardStyle}`}>
               <h2 className={`text-2xl font-bold mb-4 ${textMain}`}>Kontakt</h2>
               <p className={`mb-8 text-sm ${textSub}`}>Lassen Sie uns sprechen.</p>
               
               <div className="space-y-3 mb-8 text-left">
                  {[
                    { icon: User, label: "Name", val: "Pennueng Daenchai" },
                    { icon: Mail, label: "Email", val: "Penjidaenchai@gmail.com" },
                    { icon: Phone, label: "Telefon", val: "0160 98720811" },
                    { icon: MapPin, label: "Ort", val: "Lappacher Weg 19, 91315 Höchstadt a.d. Aisch" }
                  ].map((c, i) => (
                    <div key={i} className={`flex items-center gap-4 p-3 rounded-xl border ${darkMode ? 'border-slate-800 bg-black/40' : 'border-slate-100 bg-white/60'}`}>
                       <div className="w-10 h-10 rounded-full flex items-center justify-center bg-cyan-500/10 text-cyan-500 shrink-0"><c.icon size={18}/></div>
                       <div className="overflow-hidden">
                          <div className="text-[10px] uppercase font-bold opacity-50">
                            {c.label}
                          </div>
                          <div className={`text-sm font-medium ${textMain} break-words whitespace-normal`}>{c.val}</div>
                       </div>
                    </div>
                  ))}
               </div>

               <a href="https://wa.me/4916098720811" target="_blank" rel="noopener noreferrer" className="w-full py-3.5 font-bold uppercase tracking-widest border border-green-500 bg-green-600 text-white rounded-xl flex items-center justify-center gap-2 shadow-lg hover:bg-green-500 transition-all text-sm">
                  <MessageCircle size={20} /> WhatsApp
               </a>
            </div>
          </div>
        )}

      </main>

      {/* FOOTER - REORDERED: Contact Pill -> Links -> Copyright */}
      <footer className={`py-12 border-t px-4 relative z-10 text-center ${darkMode ? 'border-slate-800 bg-black/80' : 'border-slate-200 bg-white/80'} text-xs text-slate-500 pb-28 md:pb-12`}>
         <div className="max-w-6xl mx-auto flex flex-col items-center">
             
             {/* 1. Contact Pill (NOW FIRST) */}
             <div className={`flex flex-col md:flex-row items-center gap-4 md:gap-6 px-6 py-3 rounded-full border transition-all mb-8 ${darkMode ? 'bg-slate-900/50 border-slate-700' : 'bg-white/50 border-slate-200'} hover:border-cyan-500/50`}>
                 <span className={`font-bold ${textMain}`}>Pennueng Daenchai</span>
                 <span className="hidden md:inline opacity-30">•</span>
                 <span className={textSub}>Penjidaenchai@gmail.com</span>
                 <span className="hidden md:inline opacity-30">•</span>
                 
                 <a 
                   href="https://wa.me/4916098720811"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-3 py-1.5 rounded-full transition-all shadow-lg shadow-green-900/20 hover:scale-105 font-bold tracking-wide text-[10px] md:text-xs"
                 >
                   <MessageCircle size={14} />
                   WhatsApp
                 </a>
             </div>

             {/* 2. Links */}
             <div className="flex gap-6 mb-4 opacity-70">
                <button onClick={() => setLegalView('imprint')} className="hover:text-cyan-500 transition-colors">Impressum</button>
                <span>|</span>
                <button onClick={() => setLegalView('privacy')} className="hover:text-cyan-500 transition-colors">Datenschutz</button>
             </div>

             {/* 3. Copyright */}
             <div className="opacity-50">
                © {new Date().getFullYear()} Pennueng Daenchai
             </div>
         </div>
      </footer>

      {/* LEGAL MODAL - FIX BACKGROUND OPACITY TO PREVENT SEE-THROUGH */}
      {legalView && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in" onClick={() => setLegalView(null)}>
             <div className={`w-full max-w-lg p-6 rounded-2xl border shadow-2xl relative overflow-y-auto max-h-[85vh] ${darkMode ? 'bg-slate-900 border-slate-700 text-slate-200' : 'bg-white border-slate-200 text-slate-800'}`} onClick={e => e.stopPropagation()}>
                <button onClick={() => setLegalView(null)} className="absolute top-4 right-4 p-2 rounded-full hover:bg-red-500 hover:text-white transition-colors"><X size={20}/></button>
                <h2 className="text-2xl font-bold mb-4 border-b pb-4 border-cyan-500/30">{legalView === 'imprint' ? 'Impressum' : 'Datenschutz'}</h2>
                <div className="text-sm space-y-4 leading-relaxed opacity-90">
                   {legalView === 'imprint' ? (
                     <div className="space-y-4">
                       <div>
                         <h3 className="font-bold text-base mb-2">Angaben gemäß § 5 TMG</h3>
                         <p>Pennueng Daenchai</p>
                         <p>Lappacher Weg 19</p>
                         <p>91315 Höchstadt a.d. Aisch</p>
                       </div>
                       <div>
                         <h3 className="font-bold text-base mb-2">Kontakt</h3>
                         <p>Telefon: 0160 98720811</p>
                         <p>E-Mail: Penjidaenchai@gmail.com</p>
                       </div>
                       <div className="text-xs opacity-60 mt-8 p-4 bg-black/20 rounded">
                          Hinweis: Dies ist ein Portfolio zur Bewerbung. Es werden keine kostenpflichtigen Dienstleistungen direkt über diese Seite abgewickelt.
                       </div>
                     </div>
                   ) : (
                     <div className="space-y-4">
                       <p>Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist: <strong>Pennueng Daenchai (siehe Impressum)</strong></p>
                       
                       <h3 className="font-bold text-cyan-500 mt-4">1. Datenschutz auf einen Blick</h3>
                       <p><strong>Allgemeine Hinweise:</strong> Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>

                       <h3 className="font-bold text-cyan-500 mt-4">2. Hosting</h3>
                       <p>Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Meta- und Kommunikationsdaten handeln.</p>
                       
                       <h3 className="font-bold text-cyan-500 mt-4">3. Datenerfassung auf dieser Website</h3>
                       <p><strong>Vercel Web Analytics:</strong> Diese Website nutzt 'Vercel Analytics', einen Webanalysedienst von Vercel Inc., um die Nutzung unserer Website statistisch auszuwerten. Die Erfassung erfolgt anonymisiert und ohne den Einsatz von Cookies, die eine Identifizierung über verschiedene Webseiten hinweg ermöglichen würden. Die Daten werden ausschließlich zur Verbesserung der Performance und Benutzerfreundlichkeit dieser Website verwendet.</p>
                       <p><strong>SSL- bzw. TLS-Verschlüsselung:</strong> Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung.</p>
                       <p><strong>Server-Log-Dateien:</strong> Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt (Browsertyp, Uhrzeit, IP-Adresse).</p>
                       
                       <h3 className="font-bold text-cyan-500 mt-4">4. Ihre Rechte</h3>
                       <p>Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten sowie ein Recht auf Berichtigung oder Löschung dieser Daten. Bitte wenden Sie sich dazu an die im Impressum angegebene Adresse.</p>
                     </div>
                   )}
                </div>
             </div>
          </div>
        )}

    </div>
  );
}