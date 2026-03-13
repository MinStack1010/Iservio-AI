// src/components/boeingDashboard/products/HeaderSearch.tsx
'use client';

import { Search, X } from 'lucide-react';
import { useProductStore } from '../../../stores/productsStore';

export default function HeaderSearch() {
  const searchQuery = useProductStore((state) => state.searchQuery);
  const setSearchQuery = useProductStore((state) => state.setSearchQuery);

  return (
    <div className="flex items-center gap-3 w-full max-w-xl">
      <div className="flex-1 flex items-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all">
        <Search className="w-5 h-5 text-slate-400 ml-3 flex-shrink-0" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by part number, keyword..."
          className="flex-1 px-3 py-2.5 text-sm text-slate-900 dark:text-white bg-transparent border-0 focus:ring-0 focus:outline-none placeholder-slate-400"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2.5 text-white text-sm font-medium transition-colors">
          <Search className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}