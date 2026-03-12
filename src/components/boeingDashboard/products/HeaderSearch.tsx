// src/components/boeingDashboard/products/HeaderSearch.tsx
'use client';

import { Search, ArrowLeft, X, ChevronDown, Sun, Moon } from 'lucide-react';
import { useProductStore } from '../../../stores/productsStore';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router'
export default function HeaderSearch() {
  const navigate = useNavigate();
  const searchQuery = useProductStore((state) => state.searchQuery);
  const setSearchQuery = useProductStore((state) => state.setSearchQuery);
  const isDark = useProductStore((state) => state.isDark);
  const toggleTheme = useProductStore((state) => state.toggleTheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className=" text-white w-full border-b ">

      <button
        className="flex items-center gap-2 text-black mb-6"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft size={16} />
        Back
      </button>
    <div className="mx-auto max-w-5xl w-full px-6 py-4 flex md:flex-row items-center justify-center">

        {/* <div className="flex items-center gap-8 flex-shrink-0 w-full md:w-auto justify-between md:justify-start">
          
          <div className="flex items-center text-white cursor-pointer group">
            <img 
              src="https://inservio.app/assets/images/inservio.app-color.png" 
              alt="Inservio Logo" 
              className="h-8 w-auto mr-3 transition-opacity group-hover:opacity-80"
            />
          </div>
        </div> */}

        <div className="flex items-center gap-4 flex-grow w-full md:w-auto justify-end max-w-3xl">
          <div className="flex-grow flex items-center border rounded-sm overflow-hidden p-[2px]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Example: Aerospace Bearings..."
              className="flex-grow px-4 py-2 text-sm text-gray-900"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="p-2 text-gray-400 hover:text-gray-600">
                <X className="w-4 h-4" />
              </button>
            )}
            <button className="bg-[#10B981] hover:bg-[#059669] p-2 px-5 transition-colors text-white">
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* <button
            onClick={toggleTheme}
            className="p-2 rounded bg-white/5 border border-[#323B49] hover:border-[#10B981] transition-all flex items-center justify-center text-sm flex-shrink-0"
            title="Toggle Light/Dark Mode"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-amber-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
            )}
          </button> */}
        </div>

      </div>
    </div>
  );
}