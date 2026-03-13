// src/app/products/page.tsx
'use client';
import Sidebar from '../../../components/boeingDashboard/products/Sidebar';
import MainContent from '../../../components/boeingDashboard/products/MainContent';
import { useProductStore } from '../../../stores/productsStore';
import HeaderSearch from '../../../components/boeingDashboard/products/HeaderSearch';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductsPage() {
  const isDark = useProductStore((state) => state.isDark);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 dark:bg-[#0A0D14] text-gray-900 dark:text-white font-sans transition-colors duration-300">
        <div className="max-w-full">
          <div className="flex flex-col items-center sm:justify-between gap-4 mb-6 px-4">
            <div className="flex items-center gap-4 w-full">
              <HeaderSearch />
              {/* Desktop toggle button */}
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="hidden lg:flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-sm"
              >
                {sidebarCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
                {sidebarCollapsed ? 'Show Filters' : 'Hide Filters'}
              </button>
            </div>
            {/* Mobile toggle button */}
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="lg:hidden fixed left-4 top-24 z-40 p-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-md hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            >
              {sidebarCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </button>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 px-4">
            {/* Sidebar - Responsive and collapsible */}
            <div className={`${sidebarCollapsed ? 'hidden lg:block lg:w-16' : 'w-full lg:w-64'} flex-shrink-0 transition-all duration-300`}>
              <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
            </div>
            {/* Main Content - Takes remaining space */}
            <div className="flex-1 min-w-0">
              <MainContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}