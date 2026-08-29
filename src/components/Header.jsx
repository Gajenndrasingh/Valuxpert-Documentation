import React from 'react';
import { Search, ArrowRightToLine, Menu } from 'lucide-react';
import logo from '../../public/logo.png'; // Adjust the path as necessary

const Header = ({ lang, setLang, isSearchOpen, setIsSearchOpen, search, setSearch, isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <header className="w-full bg-white border-b border-gray-200 shrink-0 relative z-50">
      <div className="flex items-center justify-between px-4 md:px-6 py-4">
        
        <div className="flex items-center gap-3">
          {/* Hamburger Menu Icon for Mobile */}
          <button 
            className="md:hidden p-1 text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
          
          {/* Logo Section */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            {/* Custom Logo Image added here */}
            <img src={logo} alt="Valuxpert Logo" className="w-8 h-8 object-contain rounded-sm" />
            <span className="text-xl font-bold ml-1 text-gray-900 hidden sm:block">Valuxpert</span>
            <span className="text-xs font-semibold text-gray-400 tracking-widest ml-2 mt-1 hidden sm:block">DOCS</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4 md:gap-6">
          <div className="flex items-center gap-2 text-xs md:text-sm font-medium bg-gray-50 px-3 py-1 rounded-full border border-gray-200">
            <span 
              onClick={() => setLang('en')} 
              className={`cursor-pointer transition-colors ${lang === 'en' ? 'text-green-600 font-bold' : 'text-gray-400 hover:text-gray-900'}`}
            >EN</span>
            <span className="text-gray-300">/</span>
            <span 
              onClick={() => setLang('hi')} 
              className={`cursor-pointer transition-colors ${lang === 'hi' ? 'text-green-600 font-bold' : 'text-gray-400 hover:text-gray-900'}`}
            >HI</span>
          </div>
          <Search onClick={() => {setIsSearchOpen(!isSearchOpen); setSearch('');}} className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-900" />
          <ArrowRightToLine className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-900 hidden sm:block" />
        </div>
      </div>

      {/* Search Bar Dropdown */}
      {isSearchOpen && (
        <div className="bg-white border-t border-gray-200 px-6 py-3 flex justify-center shadow-sm">
          <div className="relative w-full max-w-3xl flex items-center">
            <Search className="absolute left-3 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder={lang === 'en' ? "Filter sections..." : "Sections filter karein..."}
              className="w-full pl-10 pr-4 py-2 border border-green-500 rounded-md outline-none bg-gray-50 focus:bg-white transition-colors text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoFocus
            />
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;