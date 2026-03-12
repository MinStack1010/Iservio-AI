// src/app/products/page.tsx
'use client';
import { Sun, Moon } from 'lucide-react';
import Breadcrumb from '../../../components/boeingDashboard/products/Breadcrumb';
import Sidebar from '../../../components/boeingDashboard/products/Sidebar';
import MainContent from '../../../components/boeingDashboard/products/MainContent';
import { useProductStore } from '../../../stores/productsStore';
import HeaderSearch from '../../../components/boeingDashboard/products/HeaderSearch';

export default function ProductsPage() {
  const isDark = useProductStore((state) => state.isDark);
  const toggleTheme = useProductStore((state) => state.toggleTheme);

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-[#0A0D14] text-gray-900 dark:text-white font-sans p-4 md:p-8 transition-colors duration-300">
       
       <HeaderSearch />
       
        <div className="max-w-[1400px] mx-auto">
          
          <div className="flex justify-between items-center mb-6">
            {/* <Breadcrumb /> */}
          </div>


          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/4 lg:w-1/5 flex-shrink-0">
              <Sidebar />
            </div>
            
            <MainContent />
          </div>

        </div>
      </div>
    </div>
  );
}