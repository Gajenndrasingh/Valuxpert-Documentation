import React from 'react';

const TableOfContents = ({ links, lang, isSearchOpen }) => {
  const topPosition = isSearchOpen ? '169px' : '102px';
  
  return (
    <aside 
      className="w-[250px] flex-shrink-0 py-10 pr-6 hidden xl:block sticky self-start overflow-y-auto transition-all duration-300"
      style={{ top: topPosition, height: `calc(100vh - ${topPosition})` }}
    >
      {links && links.length > 0 && (
        <>
          <h3 className="text-xs font-bold text-gray-500 tracking-widest mb-4 uppercase">
            {lang === 'en' ? 'ON THIS PAGE' : 'IS PAGE PAR'}
          </h3>
          <div className="flex flex-col gap-3 text-sm text-gray-500 border-l-2 border-gray-100 pl-4">
            {links.map((link, idx) => (
              <a key={idx} href={`#${link.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase()}`} className="hover:text-green-600 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </>
      )}
    </aside>
  );
};
export default TableOfContents;