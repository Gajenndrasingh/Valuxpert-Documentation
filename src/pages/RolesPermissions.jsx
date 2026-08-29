import React, { useRef, useState } from 'react';
import { Copy, Check, X } from 'lucide-react';

const content = {
  en: {
    secTitle: "Section 06 — Roles & Permissions",
    h2: "Roles & Permissions",
    desc: "Valuxpert has two user roles. Here is what each role can and cannot do:",
    q1: "Permissions matrix",
    q2: "Changing a staff member's role",
    a2_1: "Click on the Staff from your dashboard.",
    a2_2: "Then click on All Staff.",
    a2_3: "Click on View Profile from the staff directory.",
    a2_4: "Update role.",
    a2_5: "Then click Save."
  },
  hi: {
    secTitle: "Section 06 — Roles & Permissions",
    h2: "Roles & Permissions",
    desc: "Valuxpert me do user roles hain. Har role kya kar sakta aur kya nahi kar sakta, ye raha:",
    q1: "Permissions matrix",
    q2: "Kisi staff member ka role badalna",
    a2_1: "Apne dashboard se Staff par click karein.",
    a2_2: "Phir All Staff par click karein.",
    a2_3: "Staff directory se View Profile par click karein.",
    a2_4: "Role update karein.",
    a2_5: "Phir Save par click karein."
  }
};

const matrixData = {
  en: [
    { name: 'Create & edit company profile', admin: true, staff: false },
    { name: 'Add & remove staff members', admin: true, staff: false },
    { name: 'Assign staff roles', admin: true, staff: false },
    { name: 'View staff directory', admin: true, staff: true },
    { name: 'View own profile', admin: true, staff: true },
    { name: 'Access company settings', admin: true, staff: false },
    { name: 'Manage billing', admin: true, staff: false },
  ],
  hi: [
    { name: 'Company profile banana aur edit karna', admin: true, staff: false },
    { name: 'Staff members add aur remove karna', admin: true, staff: false },
    { name: 'Staff roles assign karna', admin: true, staff: false },
    { name: 'Staff directory dekhna', admin: true, staff: true },
    { name: 'Apna profile dekhna', admin: true, staff: true },
    { name: 'Company settings access karna', admin: true, staff: false },
    { name: 'Billing manage karna', admin: true, staff: false },
  ]
};

const RolesPermissions = ({ lang, search }) => {
  const text = content[lang];
  const stringified = JSON.stringify(text).toLowerCase() + JSON.stringify(matrixData[lang]).toLowerCase();
  
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
    <section id="roles" className="w-full max-w-4xl px-6 md:px-12 pt-8 pb-10 scroll-mt-[200px]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h4 className="text-green-600 font-semibold text-sm tracking-widest uppercase">{text.secTitle}</h4>
        <button onClick={handleCopy} className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-md hover:bg-gray-100 transition-colors w-fit">
          {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />} 
          {copied ? 'Copied!' : 'Copy page'}
        </button>
      </div>

      <div className="max-w-none" ref={contentRef}>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{text.h2}</h2>
        <p className="text-gray-600 text-lg mb-8">{text.desc}</p>
        
        <h3 id={lang==='en'?'permissions-matrix':'permissions-matrix'} className="text-xl font-bold text-gray-900 mt-8 mb-4">{text.q1}</h3>
        
        <div className="overflow-x-auto mb-12 border border-gray-200 rounded-lg">
          <table className="w-full text-left border-collapse min-w-[500px]">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="py-4 px-6 text-xs font-bold text-gray-500 tracking-widest uppercase">Permission</th>
                <th className="py-4 px-6 text-xs font-bold text-gray-500 tracking-widest uppercase text-center w-24">Admin</th>
                <th className="py-4 px-6 text-xs font-bold text-gray-500 tracking-widest uppercase text-center w-36">Staff Member</th>
              </tr>
            </thead>
            <tbody>
              {matrixData[lang].map((row, i) => (
                <tr key={i} className="border-b border-gray-200 last:border-0 hover:bg-gray-50/50">
                  <td className="py-4 px-6 text-gray-700 text-sm font-medium">{row.name}</td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center">
                      {row.admin ? (
                        <div className="text-green-600 font-bold text-lg">✓</div>
                      ) : (
                        <div className="text-red-600 font-bold text-lg">✕</div>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center">
                      {row.staff ? (
                        <div className="text-green-600 font-bold text-lg">✓</div>
                      ) : (
                        <div className="text-red-600 font-bold text-lg">✕</div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 id={lang==='en'?'changing-a-staff-member-s-role':'kisi-staff-member-ka-role-badalna'} className="text-xl font-bold text-gray-900 mt-12 mb-4">{text.q2}</h3>
        <ol className="space-y-3 mb-6 list-none pl-0">
          <li className="text-lg text-gray-600 flex items-start"><span className="text-green-600 font-bold mr-2 mt-0.5">1.</span><p>{text.a2_1}</p></li>
          <li className="text-lg text-gray-600 flex items-start"><span className="text-green-600 font-bold mr-2 mt-0.5">2.</span><p>{text.a2_2}</p></li>
          <li className="text-lg text-gray-600 flex items-start"><span className="text-green-600 font-bold mr-2 mt-0.5">3.</span><p>{text.a2_3}</p></li>
          <li className="text-lg text-gray-600 flex items-start"><span className="text-green-600 font-bold mr-2 mt-0.5">4.</span><p>{text.a2_4}</p></li>
          <li className="text-lg text-gray-600 flex items-start"><span className="text-green-600 font-bold mr-2 mt-0.5">5.</span><p>{text.a2_5}</p></li>
        </ol>
      </div>
      <hr className="border-gray-200 mt-10" />
    </section>
  );
};
export default RolesPermissions;