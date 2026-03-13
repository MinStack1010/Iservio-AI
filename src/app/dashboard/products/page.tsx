// src/app/products/page.tsx
'use client';
import Sidebar from '../../../components/boeingDashboard/products/Sidebar';
import MainContent from '../../../components/boeingDashboard/products/MainContent';
import { useProductStore } from '../../../stores/productsStore';
import HeaderSearch from '../../../components/boeingDashboard/products/HeaderSearch';

export default function ProductsPage() {
  const isDark = useProductStore((state) => state.isDark);

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 dark:bg-[#0A0D14] text-gray-900 dark:text-white font-sans transition-colors duration-300">
        <div className=" mx-auto">
          <div className="flex flex-col items-center sm:justify-between gap-4 mb-6">
            <HeaderSearch />
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-64 flex-shrink-0">
              <Sidebar />
            </div>
            <MainContent />
          </div>
        </div>
      </div>
    </div>
  );
}