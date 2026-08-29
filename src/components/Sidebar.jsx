import React, { useState, useEffect } from 'react';

export const getSidebarItems = (lang) => [
  { id: 1, title: lang === 'en' ? 'Introduction' : 'Parichay (Introduction)', key: 'intro', subItems: [lang === 'en' ? 'What is Valuxpert?' : 'Valuxpert kya hai?', lang === 'en' ? 'Who is Valuxpert for?' : 'Valuxpert kiske liye hai?', lang === 'en' ? 'What you can do' : 'Aap kya kar sakte hain'] },
  { id: 2, title: lang === 'en' ? 'Getting Started' : 'Shuruwaat (Getting Started)', key: 'getting-started', subItems: [lang === 'en' ? 'Requirements' : 'Zarooratein', lang === 'en' ? 'Logging in' : 'Login karna', lang === 'en' ? 'Dashboard overview' : 'Dashboard ki jankari'] },
  { id: 3, title: 'Company Setup', key: 'company-setup', subItems: [lang === 'en' ? 'Creating your company' : 'Apni company banana'] },
  { id: 4, title: 'Staff Management', key: 'staff-management', subItems: [lang === 'en' ? 'Adding a new branch' : 'Nayi branch add karna', lang === 'en' ? 'Creating Roles for Staff' : 'Staff ke liye Roles banana', lang === 'en' ? 'Add a New Staff Member' : 'Naya Staff Member add karna'] },
  { id: 5, title: 'Admin & Settings', key: 'admin-settings', subItems: [lang === 'en' ? 'Company settings' : 'Company ki settings', lang === 'en' ? 'Admin Module' : 'Admin Module'] },
  { id: 6, title: 'Roles & Permissions', key: 'roles', subItems: [lang === 'en' ? 'Permissions matrix' : 'Permissions matrix', lang === 'en' ? "Changing a staff member's role" : 'Staff member ka role badalna'] },
  { id: 7, title: 'Troubleshooting', key: 'troubleshooting', subItems: [lang === 'en' ? 'Cannot log in' : 'Login nahi kar pa raha hu', lang === 'en' ? 'I accidentally deleted a staff member' : 'Maine galti se staff member delete kar diya', lang === 'en' ? 'The page not loading correctly' : 'Page theek se load nahi ho raha'] },
  { id: 8, title: 'FAQ', key: 'faq', subItems: [lang === 'en' ? 'More than one company?' : 'Ek se zyada company?', lang === 'en' ? 'Can staff create a company?' : 'Kya staff company bana sakta hai?', lang === 'en' ? 'Data security' : 'Data security', lang === 'en' ? 'Canceling subscription' : 'Subscription cancel karna'] },
  { id: 9, title: lang === 'en' ? 'Glossary' : 'Shabdavali (Glossary)', key: 'glossary', subItems: [lang === 'en' ? 'Terms' : 'Shartein (Terms)'] },
  { id: 10, title: lang === 'en' ? 'Contact & Support' : 'Sampark aur Support', key: 'contact', subItems: [lang === 'en' ? 'Email support' : 'Email support', lang === 'en' ? 'What to include' : 'Kya shamil karein'] },
];

const Sidebar = ({ activeSectionKey, items, isSearchOpen, isSidebarOpen, setIsSidebarOpen }) => {
  if (!items) items = []; 
  
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const topPosition = isSearchOpen ? '169px' : '102px';
  const style = isMobile ? {} : { top: topPosition, height: `calc(100vh - ${topPosition})` };

  return (
    <aside 
      className={`
        w-[280px] flex-shrink-0 border-r border-gray-200 py-8 bg-white z-50 transition-transform duration-300 overflow-y-auto
        fixed inset-y-0 left-0 ${isSidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'} 
        md:sticky md:translate-x-0 md:shadow-none md:z-10
      `}
      style={style}
    >
      <div className="px-6 mb-4">
        <h3 className="text-xs font-bold text-gray-500 tracking-widest">DOCUMENTATION</h3>
      </div>
      <nav className="flex flex-col gap-1 pb-10">
        {items.map((item) => {
          const isActive = activeSectionKey === item.key;
          return (
            <div key={item.id} className="px-4">
              <a 
                href={`#${item.key}`}
                onClick={() => { if(isMobile) setIsSidebarOpen(false); }}
                className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition-colors ${
                  isActive ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span className={`text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-sm ${
                  isActive ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-500'
                }`}>
                  {item.id}
                </span>
                <span className={`text-sm ${isActive ? 'font-semibold' : 'font-medium'}`}>
                  {item.title}
                </span>
              </a>
              
              {isActive && item.subItems && (
                <div className="ml-10 mt-2 flex flex-col gap-3 text-sm text-gray-500 border-l-2 border-gray-100 pl-4 mb-2">
                  {item.subItems.map((sub, idx) => (
                    <a 
                      key={idx} 
                      href={`#${sub.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase()}`} 
                      onClick={() => { if(isMobile) setIsSidebarOpen(false); }}
                      className="hover:text-green-600 transition-colors"
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
};
export default Sidebar;