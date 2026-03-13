// src/components/boeingDashboard/products/Sidebar.tsx
'use client';
import { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import { filters, mockProducts } from '../../../lib/mockData';
import { useProductStore } from '../../../stores/productsStore';

const DISPLAY_LIMIT = 5; 

function FilterSection({ title, options, searchable = false }: { title: string, options: any[], searchable?: boolean }) {
  const [isOpen, setIsOpen] = useState(true);
  const [localSearch, setLocalSearch] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const filteredOptions = useMemo(() => {
    if (!localSearch) return options;
    return options.filter(opt => opt.label.toLowerCase().includes(localSearch.toLowerCase()));
  }, [localSearch, options]);

  const displayedOptions = (isExpanded || localSearch) 
    ? filteredOptions 
    : filteredOptions.slice(0, DISPLAY_LIMIT);

  const hiddenCount = filteredOptions.length - DISPLAY_LIMIT;
  const showToggleBtn = !localSearch && filteredOptions.length > DISPLAY_LIMIT;

  return (
    <div className="border-b border-slate-200 dark:border-slate-700 last:border-b-0">
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
      >
        <span className="text-[15px] font-medium text-gray-800 dark:text-gray-200">{title}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
      </button>
      
      {isOpen && (
        <div className="px-4 pb-4 flex flex-col gap-3">
          
          {searchable && (
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700 dark:text-gray-400 font-bold" />
              <input 
                type="text" 
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                placeholder="| Search"
                className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 dark:border-[#323B49] rounded bg-white dark:bg-[#0A0D14] text-gray-900 dark:text-white focus:outline-none focus:border-[#10B981] dark:focus:border-[#10B981] placeholder-gray-400 transition-colors"
              />
            </div>
          )}

          <div className={`flex flex-col gap-3 mt-1 ${isExpanded ? 'max-h-56 overflow-y-auto custom-scrollbar pr-2' : ''}`}>
            {displayedOptions.length > 0 ? displayedOptions.map((opt, idx) => (
              <label key={idx} className="flex items-center cursor-pointer group">
                {/* Checkbox màu Emerald */}
                <input 
                  type="checkbox" 
                  className="w-4 h-4 border-gray-300 dark:border-[#323B49] rounded-sm text-[#10B981] focus:ring-[#10B981] cursor-pointer bg-transparent" 
                />
                <span className="ml-3 text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white flex-grow transition-colors">
                  {opt.label}
                </span>
                <span className="text-sm text-gray-400 dark:text-gray-500">
                  ({opt.count})
                </span>
              </label>
            )) : (
              <span className="text-sm text-gray-500 italic">No matches found.</span>
            )}
          </div>

          {showToggleBtn && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-sm text-[#10B981] hover:text-[#059669] transition-colors text-left mt-1 font-medium"
            >
              {isExpanded ? 'Less' : `${hiddenCount} More`}
            </button>
          )}

        </div>
      )}
    </div>
  );
}

export default function Sidebar() {
  const allProducts = useProductStore((state) => state.allProducts);
  const manufacturerFilter = useProductStore((state) => state.manufacturerFilter);
  const toggleManufacturerFilter = useProductStore((state) => state.toggleManufacturerFilter);
  const clearFilters = useProductStore((state) => state.clearFilters);

  const manufacturerOptions = useMemo(() => {
    const counter: Record<string, number> = {};
    allProducts.forEach((p) => {
      counter[p.manufacturer] = (counter[p.manufacturer] || 0) + 1;
    });
    return Object.entries(counter)
      .map(([label, count]) => ({ label, count }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }, [allProducts]);

  return (
    <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm overflow-hidden sticky top-4">
      {/* Manufacturer filter giống Boeing shop */}
      <div className="border-b border-slate-200 dark:border-slate-700">
        <button className="w-full flex justify-between items-center p-4 text-left">
          <span className="text-[15px] font-medium text-gray-800 dark:text-gray-200">
            Manufacturer
          </span>
        </button>
        <div className="px-4 pb-4 flex flex-col gap-3">
          <div className="flex flex-col gap-2 max-h-56 overflow-y-auto custom-scrollbar pr-1">
            {manufacturerOptions.map((opt) => {
              const checked = manufacturerFilter.includes(opt.label);
              return (
                <label key={opt.label} className="flex items-center cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleManufacturerFilter(opt.label)}
                    className="w-4 h-4 border-gray-300 dark:border-[#323B49] rounded-sm text-[#10B981] focus:ring-[#10B981] cursor-pointer bg-transparent"
                  />
                  <span className="ml-3 text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white flex-grow transition-colors">
                    {opt.label}
                  </span>
                  <span className="text-sm text-gray-400 dark:text-gray-500">({opt.count})</span>
                </label>
              );
            })}
          </div>
          {manufacturerFilter.length > 0 && (
            <button
              onClick={clearFilters}
              className="text-xs text-[#10B981] hover:text-[#059669] font-medium self-start"
            >
              Clear manufacturer filter
            </button>
          )}
        </div>
      </div>

      {/* Các filter tĩnh khác (Availability, Product Type, Condition) */}
      {filters.map((filter, idx) => (
        <FilterSection 
          key={idx} 
          title={filter.title} 
          options={filter.options} 
          searchable={filter.title === 'Product Type' || filter.title === 'Condition'} 
        />
      ))}
    </div>
  );
}