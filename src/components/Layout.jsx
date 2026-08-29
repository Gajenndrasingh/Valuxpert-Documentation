import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import TableOfContents from './TableOfContents';
import { ChevronRight } from 'lucide-react';

const Layout = ({ children, activeItem, sidebarItems, lang, setLang, isSearchOpen, setIsSearchOpen, search, setSearch, isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col relative">
      
      <div className="sticky top-0 z-40 w-full flex flex-col shadow-sm bg-white">
        <Header 
          lang={lang} setLang={setLang} 
          isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} 
          search={search} setSearch={setSearch} 
          isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}
        />
        
        <div className="px-4 md:px-6 py-3 border-b border-gray-200 flex items-center text-sm bg-white shrink-0">
          <span className="text-gray-500">Documentation</span>
          <ChevronRight className="w-4 h-4 text-gray-400 mx-2 shrink-0" />
          <span className="text-green-600 font-medium truncate">{activeItem?.title || 'Guide'}</span>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity" 
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className="flex flex-1 max-w-[1600px] w-full mx-auto relative items-start">
        <Sidebar 
          activeSectionKey={activeItem?.key} 
          items={sidebarItems} 
          isSearchOpen={isSearchOpen} 
          isSidebarOpen={isSidebarOpen} 
          setIsSidebarOpen={setIsSidebarOpen}
        />
        
        <div className="flex-1 min-w-0">
          {children}
        </div>
        
        <TableOfContents links={activeItem?.subItems || []} lang={lang} isSearchOpen={isSearchOpen} />
      </div>
    </div>
  );
};
export default Layout;