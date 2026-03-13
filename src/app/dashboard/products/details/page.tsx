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
    <div className="min-h-screen bg-slate-50 dark:bg-[#0A0D14] text-slate-900 dark:text-white font-sans p-4 md:p-6 lg:p-8 transition-colors duration-300">
      <Header />
      <div className="max-w-6xl mx-auto mt-6">
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-4">
              <div className="lg:col-span-8">
                <SubstitutionEngine />
              </div>
              <div className="lg:col-span-4">
                <CrawlerMetadata />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
