import React, { useRef, useState } from 'react';
import { Copy, Check } from 'lucide-react';

const content = {
  en: {
    secTitle: "Section 09 — Glossary",
    h2: "Glossary",
    q1: "Terms"
  },
  hi: {
    secTitle: "Section 09 — Glossary",
    h2: "Glossary",
    q1: "Terms"
  }
};

const tableData = {
  en: [
    { term: 'Tenant', def: 'A company or organization that uses Valuxpert as their workspace.' },
    { term: 'Workspace', def: "Your company's dedicated environment inside Valuxpert." },
    { term: 'Admin', def: 'A user with full control over the company workspace and staff.' },
    { term: 'Staff Member', def: 'An employee invited to a company workspace with limited access.' },
    { term: 'Dashboard', def: 'The main screen you see after logging in.' },
    { term: 'Staff Directory', def: 'A list of all staff members within your company.' },
    { term: 'Deactivate', def: "Removing a staff member's access without deleting their record." },
    { term: 'Subscription', def: 'The paid plan that gives you access to Valuxpert.' }
  ],
  hi: [
    { term: 'Tenant', def: 'Ek company ya organization jo Valuxpert ko apne workspace ke roop me use karti hai.' },
    { term: 'Workspace', def: 'Valuxpert ke andar aapki company ka dedicated environment.' },
    { term: 'Admin', def: 'Ek user jinke paas company workspace aur staff ka poora control hota hai.' },
    { term: 'Staff Member', def: 'Limited access ke saath ek company workspace me invite kiya gaya employee.' },
    { term: 'Dashboard', def: 'Login karne ke baad aapko dikhne wali main screen.' },
    { term: 'Staff Directory', def: 'Aapki company ke sabhi staff members ki list.' },
    { term: 'Deactivate', def: 'Kisi staff member ke record ko delete kiye bina uska access hatana.' },
    { term: 'Subscription', def: 'Wo paid plan jo aapko Valuxpert ka access deta hai.' }
  ]
};

const Glossary = ({ lang, search }) => {
  const text = content[lang];
  const stringified = JSON.stringify(text).toLowerCase() + JSON.stringify(tableData[lang]).toLowerCase();
  
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
    <section id="glossary" className="w-full max-w-4xl px-6 md:px-12 pt-8 pb-10 scroll-mt-[200px]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h4 className="text-green-600 font-semibold text-sm tracking-widest uppercase">{text.secTitle}</h4>
        <button onClick={handleCopy} className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-md hover:bg-gray-100 transition-colors w-fit">
          {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />} 
          {copied ? 'Copied!' : 'Copy page'}
        </button>
      </div>

      <div className="max-w-none" ref={contentRef}>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{text.h2}</h2>
        <h3 id={lang==='en'?'terms':'terms'} className="text-xl font-bold text-gray-900 mt-8 mb-4">{text.q1}</h3>
        
        <div className="overflow-x-auto mb-8 border border-gray-200 rounded-lg mt-6">
          <table className="w-full text-left border-collapse min-w-[500px]">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="py-3 px-4 text-xs font-bold text-gray-500 tracking-widest uppercase w-1/4">Term</th>
                <th className="py-3 px-4 text-xs font-bold text-gray-500 tracking-widest uppercase">Definition</th>
              </tr>
            </thead>
            <tbody>
              {tableData[lang].map((row, i) => (
                 <tr key={i} className="border-b border-gray-200 last:border-0 hover:bg-gray-50/50">
                   <td className="py-4 px-4 text-gray-900 font-medium text-sm">{row.term}</td>
                   <td className="py-4 px-4 text-gray-600 text-sm">{row.def}</td>
                 </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <hr className="border-gray-200 mt-10" />
    </section>
  );
};
export default Glossary;