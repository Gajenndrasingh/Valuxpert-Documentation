import React, { useRef, useState } from 'react';
import { Copy, Check, PlayCircle } from 'lucide-react';
import staffImage from '../../public/staff.png'; // Yahan image import kiya hai


const content = {
  en: {
    secTitle: "Section 04 — Staff Management",
    h2: "Staff Management",
    q1: "Adding a new branch",
    a1_1: "Go to the Branch from your dashboard.",
    a1_2: "Click Create Branch.",
    a1_3: "Enter the Branch details:",
    a1_4: "Then click Submit.",
    q2: "Creating Roles for Staff",
    a2_1: "The Roles feature allows administrators to create and manage staff roles within the system. These roles can be assigned to staff members to define their responsibilities and access permissions.",
    a2_2: "From the Dashboard click on the Admins.",
    a2_3: "Click Roles.",
    a2_4: "Enter the following role details:",
    a2_5: "After entering the required information, click the Submit button.",
    a2_6: "Note: You can create multiple roles from here.",
    q3: "Add a New Staff Member",
    a3_1: "This feature allows you to add a new staff member to your company.",
    a3_2: "Click on Staff.",
    a3_3: "Select All Staff.",
    a3_4: "Click Add Staff.",
    a3_5: "Fill the employee's information.",
    a3_6: "Click Create Employee.",
    a3_7: "The new staff member will be successfully added to your company."
  },
  hi: {
    secTitle: "Section 04 — Staff Management",
    h2: "Staff Management",
    q1: "Nayi Branch add karna",
    a1_1: "Apne dashboard se Branch par jayein.",
    a1_2: "Create Branch par click karein.",
    a1_3: "Branch ki details enter karein:",
    a1_4: "Phir Submit par click karein.",
    q2: "Staff ke liye Roles banana",
    a2_1: "Roles feature administrators ko system ke andar staff roles banane aur manage karne ki suvidha deta hai. Ye roles staff members ko assign kiye ja sakte hain unki responsibilities aur access permissions define karne ke liye.",
    a2_2: "Dashboard se Admins par click karein.",
    a2_3: "Roles par click karein.",
    a2_4: "Ye role details enter karein:",
    a2_5: "Zaruri information enter karne ke baad, Submit button par click karein.",
    a2_6: "Note: Aap yahan se multiple roles bana sakte hain.",
    q3: "Naya Staff Member add karein",
    a3_1: "Ye feature aapko apni company me ek naya staff member add karne ki suvidha deta hai.",
    a3_2: "Staff par click karein.",
    a3_3: "All Staff select karein.",
    a3_4: "Add Staff par click karein.",
    a3_5: "Employee ki information bharein.",
    a3_6: "Create Employee par click karein.",
    a3_7: "Naya staff member successfully aapki company me add ho jayega."
  }
};

const StaffManagement = ({ lang, search }) => {
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
    <section id="staff-management" className="w-full max-w-4xl px-6 md:px-12 pt-8 pb-10 scroll-mt-[200px]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h4 className="text-green-600 font-semibold text-sm tracking-widest uppercase">{text.secTitle}</h4>
        <button onClick={handleCopy} className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-md hover:bg-gray-100 transition-colors w-fit">
          {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />} 
          {copied ? 'Copied!' : 'Copy page'}
        </button>
      </div>

      <div className="max-w-none" ref={contentRef}>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{text.h2}</h2>
        
        {/* === SECTION 1: Adding a new branch === */}
        <h3 id={lang==='en'?'adding-a-new-branch':'nayi-branch-add-karna'} className="text-xl font-bold text-gray-900 mt-8 mb-4">{text.q1}</h3>
        <ol className="space-y-3 mb-6 list-none pl-0">
          <li className="text-lg text-gray-600 flex items-start"><span className="text-green-600 font-bold mr-2 mt-0.5">1.</span><p>{text.a1_1}</p></li>
          <li className="text-lg text-gray-600 flex items-start"><span className="text-green-600 font-bold mr-2 mt-0.5">2.</span><p>{text.a1_2}</p></li>
          <li className="text-lg text-gray-600 flex items-start"><span className="text-green-600 font-bold mr-2 mt-0.5">3.</span><p>{text.a1_3}</p></li>
        </ol>
        <ul className="space-y-3 mb-6 ml-6">
          {['Name', 'Email Address', 'Contact Number', 'Alternative Number', 'Landline Number', 'Address'].map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 text-lg text-gray-600 font-semibold">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></span>
              <span className="text-gray-900">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-600 text-lg mb-8">{text.a1_4}</p>

        {/* Media Block 1: Branch */}
        <div className="mt-8 mb-16 flex flex-col items-start gap-6">
          <div className="w-full">
            <img 
              src={staffImage} 
              alt="Adding a new branch" 
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


        {/* === SECTION 2: Creating Roles for Staff === */}
        <h3 id={lang==='en'?'creating-roles-for-staff':'staff-ke-liye-roles-banana'} className="text-xl font-bold text-gray-900 mt-12 mb-4">{text.q2}</h3>
        <p className="text-gray-600 text-lg mb-6 leading-relaxed">{text.a2_1}</p>
        <ol className="space-y-3 mb-6 list-none pl-0">
          <li className="text-lg text-gray-600 flex items-start"><span className="text-green-600 font-bold mr-2 mt-0.5">1.</span><p>{text.a2_2}</p></li>
          <li className="text-lg text-gray-600 flex items-start"><span className="text-green-600 font-bold mr-2 mt-0.5">2.</span><p>{text.a2_3}</p></li>
        </ol>
        <p className="text-gray-600 text-lg mb-4">{text.a2_4}</p>
        <ul className="space-y-3 mb-6 ml-6">
          {['Display Name', 'Description', 'Select Color'].map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 text-lg text-gray-600 font-semibold">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></span>
              <span className="text-gray-900">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-600 text-lg mb-4">{text.a2_5}</p>
        <div className="bg-green-50 text-green-800 p-4 rounded-md border border-green-100 mb-8 text-sm">
          <strong className="font-semibold">{text.a2_6}</strong>
        </div>

        {/* Media Block 2: Roles */}
        <div className="mt-8 mb-16 flex flex-col items-start gap-6">
          <div className="w-full">
            <img 
              src="/roles-image.png" 
              alt="Creating roles for staff" 
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


        {/* === SECTION 3: Add a New Staff Member === */}
        <h3 id={lang==='en'?'add-a-new-staff-member':'naya-staff-member-add-karein'} className="text-xl font-bold text-gray-900 mt-12 mb-4">{text.q3}</h3>
        <p className="text-gray-600 text-lg mb-6">{text.a3_1}</p>
        <ol className="space-y-3 mb-6 list-none pl-0">
          <li className="text-lg text-gray-600 flex items-start"><span className="text-green-600 font-bold mr-2 mt-0.5">1.</span><p>{text.a3_2}</p></li>
          <li className="text-lg text-gray-600 flex items-start"><span className="text-green-600 font-bold mr-2 mt-0.5">2.</span><p>{text.a3_3}</p></li>
          <li className="text-lg text-gray-600 flex items-start"><span className="text-green-600 font-bold mr-2 mt-0.5">3.</span><p>{text.a3_4}</p></li>
          <li className="text-lg text-gray-600 flex items-start"><span className="text-green-600 font-bold mr-2 mt-0.5">4.</span><p>{text.a3_5}</p></li>
          <li className="text-lg text-gray-600 flex items-start"><span className="text-green-600 font-bold mr-2 mt-0.5">5.</span><p>{text.a3_6}</p></li>
        </ol>
        <p className="text-gray-600 text-lg mb-8">{text.a3_7}</p>

        {/* Media Block 3: New Staff Member */}
        <div className="mt-8 mb-12 flex flex-col items-start gap-6">
          <div className="w-full">
            <img 
              src="/staff-member-image.png" 
              alt="Add new staff member" 
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
export default StaffManagement;