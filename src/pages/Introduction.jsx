import React, { useRef, useState } from 'react';
import { Copy, Check, PlayCircle } from 'lucide-react';
import introImage from '../../public/Introduction.png'; // Yahan image import kiya hai

const content = {
  en: {
    doc: "Valuxpert Documentation",
    title: "Manage your company and staff, all in one place.",
    desc: "Everything you need to set up your workspace, invite your team, and run Valuxpert with confidence.",
    secTitle: "Section 01 — Introduction",
    h2: "Introduction",
    q1: "What is Valuxpert?",
    a1: "Valuxpert is a web-based platform that helps businesses manage their company and staff all in one place. With Valuxpert, company owners can create their own company workspace, invite employees, assign roles, and stay organized — without switching between multiple tools.",
    q2: "Who is Valuxpert for?",
    a2_1: "Valuxpert is built for two types of users:",
    a2_2: "Admins (Company Owners)",
    a2_3: "— People who create and manage a company workspace, including adding staff and configuring settings.",
    a2_4: "Staff Members (Employees)",
    a2_5: "— People invited to join a company workspace by an Admin.",
    q3: "What can you do with Valuxpert?",
    a3_1: "Create and manage your company profile",
    a3_2: "Add and organize your staff",
    a3_3: "Assign roles and control access levels",
    a3_4: "Manage company and account settings from one dashboard"
  },
  hi: {
    doc: "Valuxpert Documentation",
    title: "Manage your company and staff, all in one place.",
    desc: "Everything you need to set up your workspace, invite your team, and run Valuxpert with confidence.",
    secTitle: "Section 01 — Introduction",
    h2: "Introduction",
    q1: "Valuxpert kya hai?",
    a1: "Valuxpert ek web-based platform hai jo businesses ko apni company aur staff ko ek hi jagah manage karne me help karta hai. Valuxpert ke saath, company owners apna khud ka company workspace bana sakte hain, employees ko invite kar sakte hain, roles assign kar sakte hain, aur organized reh sakte hain — bina multiple tools ke beech switch kiye.",
    q2: "Valuxpert kiske liye hai?",
    a2_1: "Valuxpert do tarah ke users ke liye bana hai:",
    a2_2: "Admins (Company Owners)",
    a2_3: "— Wo log jo ek company workspace banate aur manage karte hain, jisme staff add karna aur settings configure karna shamil hai.",
    a2_4: "Staff Members (Employees)",
    a2_5: "— Wo log jinhe Admin ke dwara company workspace join karne ke liye invite kiya jata hai.",
    q3: "Valuxpert ke saath aap kya kar sakte hain?",
    a3_1: "Apna company profile banayein aur manage karein",
    a3_2: "Apne staff ko add aur organize karein",
    a3_3: "Roles assign karein aur access levels control karein",
    a3_4: "Company aur account settings ek hi dashboard se manage karein"
  }
};

const Introduction = ({ lang, search }) => {
  const text = content[lang];
  const stringified = JSON.stringify(text).toLowerCase();
  
  const contentRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (contentRef.current) {
      navigator.clipboard.writeText(contentRef.current.innerText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (search && !stringified.includes(search.toLowerCase())) return null;

  return (
    <section id="intro" className="w-full max-w-4xl px-6 md:px-12 pt-8 pb-10 scroll-mt-[200px]">
      <div className="mb-10">
        <h4 className="text-green-600 font-semibold text-sm tracking-widest mb-4 uppercase">{text.doc}</h4>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">{text.title}</h1>
        <p className="text-lg md:text-xl text-gray-500 mb-6">{text.desc}</p>
        <div className="flex flex-wrap gap-3 text-sm">
          <span className="px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full border border-gray-200">Version 1.0</span>
          <span className="px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full border border-gray-200">Web-based</span>
          <span className="px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full border border-gray-200">Admins & Staff</span>
        </div>
      </div>
      <hr className="border-gray-200 mb-10" />
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h4 className="text-green-600 font-semibold text-sm tracking-widest uppercase">{text.secTitle}</h4>
        <button onClick={handleCopy} className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-md hover:bg-gray-100 transition-colors w-fit">
          {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />} 
          {copied ? 'Copied!' : 'Copy page'}
        </button>
      </div>
      
      <div className="max-w-none" ref={contentRef}>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{text.h2}</h2>
        
        {/* Text Section - Full Width */}
        <h3 id={lang==='en'?'what-is-valuxpert?':'valuxpert-kya-hai?'} className="text-xl font-bold text-gray-900 mt-0 mb-4">{text.q1}</h3>
        <p className="text-gray-600 text-lg mb-6 leading-relaxed">{text.a1}</p>
        
        <h3 id={lang==='en'?'who-is-valuxpert-for?':'valuxpert-kiske-liye-hai?'} className="text-xl font-bold text-gray-900 mt-8 mb-4">{text.q2}</h3>
        <p className="text-gray-600 text-lg mb-4">{text.a2_1}</p>
        <ul className="space-y-3 mb-8">
          <li className="flex items-start gap-3 text-lg text-gray-600">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 flex-shrink-0"></span>
            <p><strong className="text-gray-900">{text.a2_2}</strong> {text.a2_3}</p>
          </li>
          <li className="flex items-start gap-3 text-lg text-gray-600">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 flex-shrink-0"></span>
            <p><strong className="text-gray-900">{text.a2_4}</strong> {text.a2_5}</p>
          </li>
        </ul>

        <h3 id={lang==='en'?'what-you-can-do':'aap-kya-kar-sakte-hain'} className="text-xl font-bold text-gray-900 mt-8 mb-4">{text.q3}</h3>
        <ul className="space-y-3 mb-8">
          {[text.a3_1, text.a3_2, text.a3_3, text.a3_4].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-lg text-gray-600">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 flex-shrink-0"></span><p>{item}</p>
            </li>
          ))}
        </ul>

        {/* Media Section: Image & Button below the text */}
        <div className="mt-12 flex flex-col items-start gap-6">
            
          {/* Image */}
          <div className="w-full">
            <img 
              src={introImage} 
              alt="Introduction" 
              className="w-full rounded-lg border border-gray-200 shadow-md object-contain bg-white"
            />
          </div>

          {/* Video Button */}
          <a 
            href="https://www.youtube.com/watch?v=QdtBJXaPjtk&list=PLMB5R0mHXahg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-50 text-red-600 font-medium rounded-md border border-red-100 hover:bg-red-100 hover:text-red-700 transition-colors w-fit shadow-sm"
          >
            <PlayCircle className="w-5 h-5" />
            {lang === 'en' ? 'Watch Video Tutorial' : 'Video Tutorial Dekhein'}
          </a>

        </div>

      </div>
      <hr className="border-gray-200 mt-10" />
    </section>
  );
};
export default Introduction;