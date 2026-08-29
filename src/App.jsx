import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { getSidebarItems } from './components/Sidebar';

import Introduction from './pages/Introduction';
import GettingStarted from './pages/GettingStarted';
import CompanySetup from './pages/CompanySetup';
import StaffManagement from './pages/StaffManagement';
import AdminSettings from './pages/AdminSettings';
import RolesPermissions from './pages/RolesPermissions';
import Troubleshooting from './pages/Troubleshooting';
import FAQ from './pages/FAQ';
import Glossary from './pages/Glossary';
import ContactSupport from './pages/ContactSupport';

function App() {
  const [activeSection, setActiveSection] = useState('intro');
  const [lang, setLang] = useState('en');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [search, setSearch] = useState('');
  
  // Mobile Sidebar State
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const allSidebarItems = getSidebarItems(lang);
  
  const sidebarItems = search 
    ? allSidebarItems.filter(item => {
        const s = search.toLowerCase();
        return item.title.toLowerCase().includes(s) || item.subItems.some(sub => sub.toLowerCase().includes(s));
      })
    : allSidebarItems;

  useEffect(() => {
    const handleScroll = () => {
      const sections = allSidebarItems.map(item => document.getElementById(item.key));
      let current = 'intro';
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        if (section) {
          const sectionTop = section.offsetTop - 250;
          if (scrollPosition >= sectionTop) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [allSidebarItems]);

  const activeItem = allSidebarItems.find(item => item.key === activeSection) || allSidebarItems[0];

  return (
    <Layout 
      activeItem={activeItem} 
      sidebarItems={sidebarItems}
      lang={lang} setLang={setLang}
      isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen}
      search={search} setSearch={setSearch}
      isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}
    >
      <div className="flex flex-col w-full pb-32">
        <Introduction lang={lang} search={search} />
        <GettingStarted lang={lang} search={search} />
        <CompanySetup lang={lang} search={search} />
        <StaffManagement lang={lang} search={search} />
        <AdminSettings lang={lang} search={search} />
        <RolesPermissions lang={lang} search={search} />
        <Troubleshooting lang={lang} search={search} />
        <FAQ lang={lang} search={search} />
        <Glossary lang={lang} search={search} />
        <ContactSupport lang={lang} search={search} />
      </div>
    </Layout>
  );
}
export default App;