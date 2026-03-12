// src/components/boeingDashboard/products/Sidebar.tsx
'use client';
import { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import { filters } from '../../../lib/mockData';

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
    <div className="border-b border-gray-200 dark:border-[#1E2532] last:border-b-0 bg-white dark:bg-[#11151C]">
      
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
  return (
    <div className="border border-gray-200 dark:border-[#1E2532] rounded-sm overflow-hidden mb-8">
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