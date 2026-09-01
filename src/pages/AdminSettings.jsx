import React, { useRef, useState } from 'react';
import { Copy, Check, PlayCircle } from 'lucide-react'; // PlayCircle import kiya
import adminsettingImage from '../../public/Adminsettings.png'; // Yahan image import kiya hai


const content = {
  en: {
    secTitle: "Section 05 — Admin & Settings",
    h2: "Admin & Settings",
    q1: "Company settings",
    a1_1: "Go to Admins from the dashboard.",
    a1_2: "Select Companies.",
    a1_3: "Available options:",
    a1_4_1: "Change Company Name",
    a1_4_2: "— Update the name shown across your workspace.",
    a1_5_1: "Delete Company",
    a1_5_2: "— Permanently remove your company and all data. (This cannot be undone.)",
    q2: "Admin Module",
    a2_1: "The Admin module is used to manage users, permissions, roles, companies, and monitor login activities. It allows administrators to control user access, assign responsibilities, and maintain security across the application.",
    q3: "Admin Properties"
  },
  hi: {
    secTitle: "Section 05 — Admin & Settings",
    h2: "Admin & Settings",
    q1: "Company settings",
    a1_1: "Dashboard se Admins par jayein.",
    a1_2: "Companies select karein.",
    a1_3: "Available options:",
    a1_4_1: "Change Company Name",
    a1_4_2: "— Aapke workspace me dikhne wala naam update karein.",
    a1_5_1: "Delete Company",
    a1_5_2: "— Apni company aur saara data permanently hata dein. (Ye undo nahi ho sakta.)",
    q2: "Admin Module",
    a2_1: "Admin module ka use users, permissions, roles, companies manage karne aur login activities monitor karne ke liye hota hai. Ye administrators ko user access control karne, responsibilities assign karne, aur poori application me security maintain karne deta hai.",
    q3: "Admin Properties"
  }
};

const tableData = {
  en: [
    { title: 'All Users', desc: 'Displays a list of all registered users along with their details and current status.' },
    { title: 'Add User', desc: 'Allows the administrator to create a new user account by entering the required information.' },
    { title: 'Trash Users', desc: 'Displays deleted or inactive users. Administrators can restore or permanently remove these users.' },
    { title: 'Permissions', desc: 'Used to create and manage permissions that define what actions users can perform in the system.' },
    { title: 'Roles', desc: 'Allows administrators to create roles and assign multiple permissions to those roles.' },
    { title: 'Companies', desc: 'Used to manage company information associated with the application.' },
    { title: 'Login Activity', desc: 'Displays login history, including login time, user information, and activity for auditing purposes.' }
  ],
  hi: [
    { title: 'All Users', desc: 'Sabhi registered users ki list unki details aur current status ke saath dikhata hai.' },
    { title: 'Add User', desc: 'Administrator ko zaruri information enter karke naya user account banane deta hai.' },
    { title: 'Trash Users', desc: 'Deleted ya inactive users dikhata hai. Administrators in users ko restore ya permanently remove kar sakte hain.' },
    { title: 'Permissions', desc: 'Aisi permissions banane aur manage karne ke liye use hoti hain jo define karti hain ki users system me kya actions kar sakte hain.' },
    { title: 'Roles', desc: 'Administrators ko roles banane aur un roles ko multiple permissions assign karne deta hai.' },
    { title: 'Companies', desc: 'Application se judi company information manage karne ke liye use hota hai.' },
    { title: 'Login Activity', desc: 'Login history dikhata hai, jisme login time, user information, aur auditing ke liye activity shamil hai.' }
  ]
};

const AdminSettings = ({ lang, search }) => {
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
    <section id="admin-settings" className="w-full max-w-4xl px-6 md:px-12 pt-8 pb-10 scroll-mt-[200px]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h4 className="text-green-600 font-semibold text-sm tracking-widest uppercase">{text.secTitle}</h4>
        <button onClick={handleCopy} className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-md hover:bg-gray-100 transition-colors w-fit">
          {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />} 
          {copied ? 'Copied!' : 'Copy page'}
        </button>
      </div>
      
      <div className="max-w-none" ref={contentRef}>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{text.h2}</h2>
        
        {/* === SECTION 1: Company Settings === */}
        <h3 id={lang==='en'?'company-settings':'company-settings'} className="text-xl font-bold text-gray-900 mt-8 mb-4">{text.q1}</h3>
        <ol className="space-y-3 mb-6 list-none pl-0">
          <li className="text-lg text-gray-600 flex items-start"><span className="text-green-600 font-bold mr-2 mt-0.5">1.</span><p>{text.a1_1}</p></li>
          <li className="text-lg text-gray-600 flex items-start"><span className="text-green-600 font-bold mr-2 mt-0.5">2.</span><p>{text.a1_2}</p></li>
        </ol>
        <p className="text-gray-600 text-lg mb-4">{text.a1_3}</p>
        <ul className="space-y-3 mb-8">
          <li className="flex items-start gap-3 text-lg text-gray-600">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 flex-shrink-0"></span>
            <p><strong className="text-gray-900">{text.a1_4_1}</strong> {text.a1_4_2}</p>
          </li>
          <li className="flex items-start gap-3 text-lg text-gray-600">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 flex-shrink-0"></span>
            <p><strong className="text-gray-900">{text.a1_5_1}</strong> {text.a1_5_2}</p>
          </li>
        </ul>

        {/* Media Block 1 */}
        <div className="mt-8 mb-16 flex flex-col items-start gap-6">
          <div className="w-full">
            <img 
              src={adminsettingImage} 
              alt="Admin Settings" 
              className="w-full rounded-lg border border-gray-200 shadow-md object-contain bg-white"
            />
          </div>
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


        {/* === SECTION 2: Admin Module === */}
        <h3 id={lang==='en'?'admin-module':'admin-module'} className="text-xl font-bold text-gray-900 mt-12 mb-4">{text.q2}</h3>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">{text.a2_1}</p>

        <h3 className="text-lg font-bold text-gray-900 mt-8 mb-4">{text.q3}</h3>
        <div className="overflow-x-auto mb-8 border border-gray-200 rounded-lg">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="py-3 px-4 text-xs font-bold text-gray-500 tracking-widest uppercase w-1/4">Property</th>
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

        {/* Media Block 2 */}
        <div className="mt-8 mb-12 flex flex-col items-start gap-6">
          <div className="w-full">
            <img 
              src="/admin-module-image.png" 
              alt="Admin Module Properties" 
              className="w-full rounded-lg border border-gray-200 shadow-md object-contain bg-white"
            />
          </div>
          <a 
            href="YAHAN_YOUTUBE_KI_LINK_PASTE_KAREIN" 
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
export default AdminSettings;