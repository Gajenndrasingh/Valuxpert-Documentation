import React, { useRef, useState } from 'react';
import { Copy, Check } from 'lucide-react';

const content = {
  en: {
    secTitle: "Section 03 — Company Setup",
    h2: "Company Setup",
    q1: "Creating your company",
    a1_1: "From the dashboard, click Admins.",
    a1_2: "Click on Companies.",
    a1_3: "Fill the following details:",
    a1_4: "Display Name",
    a1_5: "— The name that is visible to the others.",
    a1_6: "Then click Submit."
  },
  hi: {
    secTitle: "Section 03 — Company Setup",
    h2: "Company Setup",
    q1: "Apni company banana",
    a1_1: "Dashboard se, Admins par click karein.",
    a1_2: "Companies par click karein.",
    a1_3: "Ye details bharein:",
    a1_4: "Display Name",
    a1_5: "— Wo naam jo doosron ko dikhta hai.",
    a1_6: "Phir Submit par click karein."
  }
};

const CompanySetup = ({ lang, search }) => {
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
    <section id="company-setup" className="w-full max-w-4xl px-6 md:px-12 pt-8 pb-10 scroll-mt-[200px]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h4 className="text-green-600 font-semibold text-sm tracking-widest uppercase">{text.secTitle}</h4>
        <button onClick={handleCopy} className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-md hover:bg-gray-100 transition-colors w-fit">
          {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />} 
          {copied ? 'Copied!' : 'Copy page'}
        </button>
      </div>

      <div className="max-w-none" ref={contentRef}>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{text.h2}</h2>
        <h3 id={lang==='en'?'creating-your-company':'apni-company-banana'} className="text-xl font-bold text-gray-900 mt-8 mb-4">{text.q1}</h3>
        <ol className="space-y-3 mb-6 list-none pl-0">
          <li className="text-lg text-gray-600 flex items-start"><span className="text-green-600 font-bold mr-2 mt-0.5">1.</span><p>{text.a1_1}</p></li>
          <li className="text-lg text-gray-600 flex items-start"><span className="text-green-600 font-bold mr-2 mt-0.5">2.</span><p>{text.a1_2}</p></li>
        </ol>
        <p className="text-gray-600 text-lg mb-4">{text.a1_3}</p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3 text-lg text-gray-600">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 flex-shrink-0"></span>
            <p><strong className="text-gray-900">{text.a1_4}</strong> {text.a1_5}</p>
          </li>
        </ul>
        <p className="text-gray-600 text-lg mb-8">{text.a1_6}</p>
      </div>
      <hr className="border-gray-200 mt-10" />
    </section>
  );
};
export default CompanySetup;