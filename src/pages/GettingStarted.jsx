import React, { useRef, useState } from 'react';
import { Copy, Check } from 'lucide-react';

const content = {
  en: {
    secTitle: "Section 02 — Getting Started",
    h2: "Getting Started",
    q1: "Requirements",
    a1_1: "Valuxpert is fully web-based — no installation or download is needed. All you need is:",
    a1_2: "A modern web browser (Chrome, Firefox, Safari, or Edge)",
    a1_3: "A stable internet connection",
    q2: "Logging in",
    a2_1: "Go to the Valuxpert login page.",
    a2_2: "Enter your registered email address and password.",
    a2_3: "Click Log In.",
    q3: "Dashboard overview",
    a3_1: "Once logged in, you will see your main dashboard. Here is what each section does:"
  },
  hi: {
    secTitle: "Section 02 — Getting Started",
    h2: "Getting Started",
    q1: "Requirements",
    a1_1: "Valuxpert poori tarah se web-based hai — koi installation ya download ki zarurat nahi hai. Aapko sirf itna chahiye:",
    a1_2: "Ek modern web browser (Chrome, Firefox, Safari, ya Edge)",
    a1_3: "Ek stable internet connection",
    q2: "Login karna",
    a2_1: "Valuxpert ke login page par jayein.",
    a2_2: "Apna registered email address aur password enter karein.",
    a2_3: "Log In par click karein.",
    q3: "Dashboard overview",
    a3_1: "Login karne ke baad, aapko apna main dashboard dikhega. Har section ka kaam ye hai:"
  }
};

const tableData = {
  en: [
    { title: 'Publish Offer', desc: 'Create and manage job offers for candidates and employees.' },
    { title: 'Cases', desc: 'Manage case records, track progress, and update case information.' },
    { title: 'Branch', desc: 'Create and manage branch details and related operations.' },
    { title: 'Finance', desc: 'Monitor financial transactions, payments, and financial records.' },
    { title: 'MAP', desc: 'View and manage location-based information and mapping services.' },
    { title: 'FORCE PIN', desc: 'Generate and manage secure PINs for authentication and verification.' },
    { title: 'Report', desc: 'Generate and view reports for different modules and activities.' },
    { title: 'Master', desc: 'Manage master data and system-wide configuration settings.' },
    { title: 'Admins', desc: 'Create and manage administrators, users, roles, and permissions.' },
    { title: 'HRMS', desc: 'Manage employee records, attendance, payroll, and HR-related activities.' },
    { title: 'Staff', desc: 'View and manage staff profiles, information, and employment details.' },
    { title: 'Unapproved', desc: 'Review and manage pending records awaiting approval.' },
    { title: 'Add-Goes', desc: 'Create and manage employee Add-Goes requests and related records.' },
    { title: 'Celebration', desc: 'Manage employee birthdays, anniversaries, and organizational events.' },
    { title: 'Settings', desc: 'Configure application preferences, system settings, and user options.' }
  ],
  hi: [
    { title: 'Publish Offer', desc: 'Candidates aur employees ke liye job offers banayein aur manage karein.' },
    { title: 'Cases', desc: 'Case records manage karein, progress track karein, aur case information update karein.' },
    { title: 'Branch', desc: 'Branch details aur related operations banayein aur manage karein.' },
    { title: 'Finance', desc: 'Financial transactions, payments, aur financial records monitor karein.' },
    { title: 'MAP', desc: 'Location-based information aur mapping services dekhein aur manage karein.' },
    { title: 'FORCE PIN', desc: 'Authentication aur verification ke liye secure PINs generate aur manage karein.' },
    { title: 'Report', desc: 'Alag-alag modules aur activities ke reports generate karein aur dekhein.' },
    { title: 'Master', desc: 'Master data aur system-wide configuration settings manage karein.' },
    { title: 'Admins', desc: 'Administrators, users, roles, aur permissions banayein aur manage karein.' },
    { title: 'HRMS', desc: 'Employee records, attendance, payroll, aur HR-related activities manage karein.' },
    { title: 'Staff', desc: 'Staff profiles, information, aur employment details dekhein aur manage karein.' },
    { title: 'Unapproved', desc: 'Approval ke intezar me pending records review aur manage karein.' },
    { title: 'Add-Goes', desc: 'Employee Add-Goes requests aur related records banayein aur manage karein.' },
    { title: 'Celebration', desc: 'Employee birthdays, anniversaries, aur organizational events manage karein.' },
    { title: 'Settings', desc: 'Application preferences, system settings, aur user options configure karein.' }
  ]
};

const GettingStarted = ({ lang, search }) => {
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
    <section id="getting-started" className="w-full max-w-4xl px-6 md:px-12 pt-8 pb-10 scroll-mt-[200px]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h4 className="text-green-600 font-semibold text-sm tracking-widest uppercase">{text.secTitle}</h4>
        <button onClick={handleCopy} className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-md hover:bg-gray-100 transition-colors w-fit">
          {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />} 
          {copied ? 'Copied!' : 'Copy page'}
        </button>
      </div>

      <div className="max-w-none" ref={contentRef}>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{text.h2}</h2>
        <h3 id={lang==='en'?'requirements':'requirements'} className="text-xl font-bold text-gray-900 mt-8 mb-4">{text.q1}</h3>
        <p className="text-gray-600 text-lg mb-4">{text.a1_1}</p>
        <ul className="space-y-3 mb-8">
          <li className="flex items-start gap-3 text-lg text-gray-600"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 flex-shrink-0"></span><p>{text.a1_2}</p></li>
          <li className="flex items-start gap-3 text-lg text-gray-600"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 flex-shrink-0"></span><p>{text.a1_3}</p></li>
        </ul>

        <h3 id={lang==='en'?'logging-in':'login-karna'} className="text-xl font-bold text-gray-900 mt-8 mb-4">{text.q2}</h3>
        <ol className="space-y-3 mb-8 list-none pl-0">
          <li className="text-lg text-gray-600 flex items-start"><span className="text-green-600 font-bold mr-2 mt-0.5">1.</span><p>{text.a2_1}</p></li>
          <li className="text-lg text-gray-600 flex items-start"><span className="text-green-600 font-bold mr-2 mt-0.5">2.</span><p>{text.a2_2}</p></li>
          <li className="text-lg text-gray-600 flex items-start"><span className="text-green-600 font-bold mr-2 mt-0.5">3.</span><p>{text.a2_3}</p></li>
        </ol>

        <h3 id={lang==='en'?'dashboard-overview':'dashboard-overview'} className="text-xl font-bold text-gray-900 mt-8 mb-4">{text.q3}</h3>
        <p className="text-gray-600 text-lg mb-6">{text.a3_1}</p>
        
        <div className="overflow-x-auto mb-8 border border-gray-200 rounded-lg">
          <table className="w-full text-left border-collapse min-w-[500px]">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="py-3 px-4 text-xs font-bold text-gray-500 tracking-widest uppercase w-1/4">Section</th>
                <th className="py-3 px-4 text-xs font-bold text-gray-500 tracking-widest uppercase">Description</th>
              </tr>
            </thead>
            <tbody>
              {tableData[lang].map((row, i) => (
                 <tr key={i} className="border-b border-gray-200 last:border-0 hover:bg-gray-50/50">
                   <td className="py-4 px-4 text-gray-900 font-semibold text-sm">{row.title}</td>
                   <td className="py-4 px-4 text-gray-600 text-sm">{row.desc}</td>
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
export default GettingStarted;