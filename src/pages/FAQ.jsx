import React, { useRef, useState } from 'react';
import { Copy, Check } from 'lucide-react';

const content = {
  en: {
    secTitle: "Section 08 — FAQ",
    h2: "FAQ",
    q1: "More than one company?",
    a1: "Currently, each Valuxpert account is linked to one company workspace.",
    q2: "Can staff create a company?",
    a2: "No. Only Admins can create a company. Staff members are invited to join an existing workspace.",
    q3: "Data security",
    a3: "Yes. Valuxpert uses industry-standard encryption to protect your data.",
    q4: "Canceling subscription",
    a4: "Your workspace will remain accessible until the end of your current billing period. After that, access will be suspended."
  },
  hi: {
    secTitle: "Section 08 — FAQ",
    h2: "FAQ",
    q1: "Kya main apne account ke andar ek se zyada company rakh sakta hoon?",
    a1: "Filhaal, har Valuxpert account ek company workspace se linked hai.",
    q2: "Kya ek staff member apni khud ki company bana sakta hai?",
    a2: "Nahi. Sirf Admins hi company bana sakte hain. Staff members ko ek existing workspace join karne ke liye invite kiya jata hai.",
    q3: "Kya meri company ka data secure hai?",
    a3: "Haan. Valuxpert aapke data ko protect karne ke liye industry-standard encryption use karta hai.",
    q4: "Agar main apni subscription cancel karta hoon to kya hoga?",
    a4: "Aapka workspace aapke current billing period ke ant tak accessible rahega. Uske baad, access suspend ho jayega."
  }
};

const FAQ = ({ lang, search }) => {
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
    <section id="faq" className="w-full max-w-4xl px-6 md:px-12 pt-8 pb-10 scroll-mt-[200px]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h4 className="text-green-600 font-semibold text-sm tracking-widest uppercase">{text.secTitle}</h4>
        <button onClick={handleCopy} className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-md hover:bg-gray-100 transition-colors w-fit">
          {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />} 
          {copied ? 'Copied!' : 'Copy page'}
        </button>
      </div>

      <div className="max-w-none" ref={contentRef}>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{text.h2}</h2>
        
        <h3 id={lang==='en'?'more-than-one-company-':'kya-main-apne-account-ke-andar-ek-se-zyada-company-rakh-sakta-hoon-'} className="text-xl font-bold text-gray-900 mt-8 mb-4">{text.q1}</h3>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">{text.a1}</p>

        <h3 id={lang==='en'?'can-staff-create-a-company-':'kya-ek-staff-member-apni-khud-ki-company-bana-sakta-hai-'} className="text-xl font-bold text-gray-900 mt-8 mb-4">{text.q2}</h3>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">{text.a2}</p>

        <h3 id={lang==='en'?'data-security':'kya-meri-company-ka-data-secure-hai-'} className="text-xl font-bold text-gray-900 mt-8 mb-4">{text.q3}</h3>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">{text.a3}</p>
        
        <h3 id={lang==='en'?'canceling-subscription':'agar-main-apni-subscription-cancel-karta-hoon-to-kya-hoga-'} className="text-xl font-bold text-gray-900 mt-8 mb-4">{text.q4}</h3>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">{text.a4}</p>
      </div>
      <hr className="border-gray-200 mt-10" />
    </section>
  );
};
export default FAQ;