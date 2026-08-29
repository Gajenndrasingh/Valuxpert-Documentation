import React, { useRef, useState } from 'react';
import { Copy, Check } from 'lucide-react';

const content = {
  en: {
    secTitle: "Section 10 — Contact & Support",
    h2: "Contact & Support",
    q1: "Email support",
    a1: "If you need help with anything not covered in this documentation, reach out to the Valuxpert support team:",
    q2: "What to include",
    a2: "When contacting support, please include:",
    a2_1: "Your registered email address",
    a2_2: "The name of your company workspace",
    a2_3: "A clear description of the issue",
    a2_4: "Any error messages you have seen",
    f1: "Valuxpert — Manage your company and staff, all in one place.",
    f2: "Need more help? Email "
  },
  hi: {
    secTitle: "Section 10 — Contact & Support",
    h2: "Contact & Support",
    q1: "Email support",
    a1: "Agar aapko kisi aisi cheez me help chahiye jo is documentation me cover nahi hai, to Valuxpert support team se sampark karein:",
    q2: "Kya include karein",
    a2: "Support se sampark karte waqt, kripya ye shamil karein:",
    a2_1: "Aapka registered email address",
    a2_2: "Aapke company workspace ka naam",
    a2_3: "Issue ka spasht description",
    a2_4: "Koi bhi error messages jo aapne dekhe hain",
    f1: "Valuxpert — Apni company aur staff ko manage karein, sab ek hi jagah.",
    f2: "Aur madad chahiye? Email karein "
  }
};

const ContactSupport = ({ lang, search }) => {
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
    <section id="contact" className="w-full max-w-4xl px-6 md:px-12 pt-8 flex flex-col min-h-[calc(100vh-130px)] scroll-mt-[200px]">
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <h4 className="text-green-600 font-semibold text-sm tracking-widest uppercase">{text.secTitle}</h4>
          <button onClick={handleCopy} className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-md hover:bg-gray-100 transition-colors w-fit">
            {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />} 
            {copied ? 'Copied!' : 'Copy page'}
          </button>
        </div>

        <div className="max-w-none" ref={contentRef}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{text.h2}</h2>
          
          <h3 id={lang==='en'?'email-support':'email-support'} className="text-xl font-bold text-gray-900 mt-8 mb-4">{text.q1}</h3>
          <p className="text-gray-600 text-lg mb-4 leading-relaxed">{text.a1}</p>
          <p className="text-gray-900 text-lg mb-8 font-semibold break-all">Email: support@valuxpert.com</p>

          <h3 id={lang==='en'?'what-to-include':'kya-include-karein'} className="text-xl font-bold text-gray-900 mt-8 mb-4">{text.q2}</h3>
          <p className="text-gray-600 text-lg mb-4 leading-relaxed">{text.a2}</p>
          <ul className="space-y-3 mb-16">
            {[text.a2_1, text.a2_2, text.a2_3, text.a2_4].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-lg text-gray-600">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 flex-shrink-0"></span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="mt-auto border-t border-gray-200 pt-8 pb-10 text-center">
        <p className="text-gray-400 italic text-sm mb-4">{text.f1}</p>
        <p className="text-gray-500 text-sm mb-2">{text.f2}<a href="mailto:support@valuxpert.com" className="text-green-600 hover:underline">support@valuxpert.com</a>.</p>
        <p className="text-gray-400 text-xs">© 2026 Valuxpert. All rights reserved.</p>
      </footer>
    </section>
  );
};
export default ContactSupport;