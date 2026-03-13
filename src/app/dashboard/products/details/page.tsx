'use client';

import { useState } from 'react';
import Header from '../../../../components/boeingDashboard/productDetails/Header';
import ProductSummary from '../../../../components/boeingDashboard/productDetails/ProductSummary';
import SubstitutionEngine from '../../../../components/boeingDashboard/productDetails/SubstitutionEngine';
import CrawlerMetadata from '../../../../components/boeingDashboard/productDetails/CrawlerMetadata';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function DashboardDetailsPage() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0A0D14] text-slate-900 dark:text-white font-sans transition-colors duration-300">
      <div className="w-full">
        <Header />
        <div className="max-w-7xl mx-auto mt-6 px-4 md:px-6 lg:px-8">
          <ProductSummary />
          <div className="mt-6">
            <button
              onClick={() => setShowMore(!showMore)}
              className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {showMore ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              {showMore ? 'Thu gọn' : 'Alternatives & metadata'}
            </button>
            {showMore && (
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mt-4">
                <div className="xl:col-span-8">
                  <SubstitutionEngine />
                </div>
                <div className="xl:col-span-4">
                  <CrawlerMetadata />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
