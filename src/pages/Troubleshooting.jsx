import React, { useRef, useState } from 'react';
import { Copy, Check } from 'lucide-react';

const content = {
  en: {
    secTitle: "Section 07 — Troubleshooting",
    h2: "Troubleshooting",
    q1: "Cannot log in",
    a1: "Make sure you are using the correct email and password. If you have forgotten your password, contact the Valuxpert Superadmin.",
    q2: "I accidentally deleted a staff member",
    a2: "Once a staff member is permanently removed, their record cannot be recovered. You will need to add them again as a new staff member.",
    q3: "The page not loading correctly",
    a3: "Try refreshing your browser, clearing your cache, or switching to a different browser (Chrome or Firefox recommended)."
  },
  hi: {
    secTitle: "Section 07 — Troubleshooting",
    h2: "Troubleshooting",
    q1: "Main log in nahi kar pa raha/rahi hoon.",
    a1: "Sunishchit karein ki aap sahi email aur password use kar rahe hain. Agar aap apna password bhool gaye hain, to ValuXpert Superadmin se contact karein.",
    q2: "Maine galti se ek staff member delete kar diya.",
    a2: "Ek baar staff member permanently remove ho jaye, to unka record recover nahi ho sakta. Aapko unhe naye staff member ke roop me dobara add karna hoga.",
    q3: "Page sahi se load nahi ho raha hai.",
    a3: "Apna browser refresh karne, cache clear karne, ya doosre browser (Chrome ya Firefox recommended) par switch karne ki koshish karein."
  }
};

const Troubleshooting = ({ lang, search }) => {
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
    <section id="troubleshooting" className="w-full max-w-4xl px-6 md:px-12 pt-8 pb-10 scroll-mt-[200px]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h4 className="text-green-600 font-semibold text-sm tracking-widest uppercase">{text.secTitle}</h4>
        <button onClick={handleCopy} className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-md hover:bg-gray-100 transition-colors w-fit">
          {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />} 
          {copied ? 'Copied!' : 'Copy page'}
        </button>
      </div>

      <div className="max-w-none" ref={contentRef}>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{text.h2}</h2>
        
        <h3 id={lang==='en'?'cannot-log-in':'main-log-in-nahi-kar-pa-raha-rahi-hoon-'} className="text-xl font-bold text-gray-900 mt-8 mb-4">{text.q1}</h3>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">{text.a1}</p>

        <h3 id={lang==='en'?'i-accidentally-deleted-a-staff-member':'maine-galti-se-ek-staff-member-delete-kar-diya-'} className="text-xl font-bold text-gray-900 mt-8 mb-4">{text.q2}</h3>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">{text.a2}</p>

        <h3 id={lang==='en'?'the-page-not-loading-correctly':'page-sahi-se-load-nahi-ho-raha-hai-'} className="text-xl font-bold text-gray-900 mt-8 mb-4">{text.q3}</h3>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">{text.a3}</p>
      </div>
      <hr className="border-gray-200 mt-10" />
    </section>
  );
};
export default Troubleshooting;