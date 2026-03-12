

import Header from '../../../../components/boeingDashboard/productDetails/Header';
import LeftColumn from '../../../../components/boeingDashboard/productDetails/LeftColumn';
import MiddleColumn from '../../../../components/boeingDashboard/productDetails/MiddleColumn';
import RightColumn from '../../../../components/boeingDashboard/productDetails/RightColumn';
import SubstitutionEngine from '../../../../components/boeingDashboard/productDetails/SubstitutionEngine';
import CrawlerMetadata from '../../../../components/boeingDashboard/productDetails/CrawlerMetadata';

export default function DashboardDetailsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0A0D14] text-gray-900 dark:text-white font-sans p-4 transition-colors duration-300">
      <Header />

      {/* Row 1: 3 Cột chính */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4">
        <div className="md:col-span-3"><LeftColumn /></div>
        <div className="md:col-span-6"><MiddleColumn /></div>
        <div className="md:col-span-3"><RightColumn /></div>
      </div>

      {/* Row 2: Bảng tra cứu & Crawler Log */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4">
        <div className="md:col-span-8"><SubstitutionEngine /></div>
        <div className="md:col-span-4"><CrawlerMetadata /></div>
      </div>
    </div>
  );
}