// src/components/dashboard-details/Header.tsx
import { ArrowLeft, Zap, User, ShieldCheck, Sun, RefreshCw, Bell, Settings, CheckCircle } from 'lucide-react';
import { useProductStore } from '../../../stores/productsStore';
import { useNavigate } from 'react-router'

export default function Header() {
  const selectedProduct = useProductStore((state) => state.selectedProduct);
  const navigate = useNavigate();

  return (
    <div>
      <button
        className="flex items-center gap-2 mb-6"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft size={16} />
        Back
      </button>
      <div className="bg-white dark:bg-[#11151C] rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm">

        <div className="flex flex-col lg:flex-row lg:items-center p-4 border-b border-gray-200 dark:border-gray-800 gap-4">

          <div className="flex flex-col md:flex-row md:items-center gap-4 flex-grow">
            {/* <div className="md:pr-4 md:border-r border-gray-200 dark:border-gray-800">
            <button onClick={() => navigate(-1)} className="flex items-center text-gray-600 dark:text-gray-300 font-bold hover:text-gray-900">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Dashboard
            </button>
          </div> */}

            <div className="px-0 md:px-2">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h2 className="text-xl font-black tracking-tight">{selectedProduct?.title || 'Aeroshell Grease 33MS'}</h2>
                <span className="px-2 py-0.5 text-xs font-bold text-blue-700 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 rounded">
                  Aviation Grease
                </span>
                <span className="px-2 py-0.5 text-xs font-bold text-gray-700 bg-gray-100 dark:bg-gray-800 dark:text-gray-300 rounded">
                  {selectedProduct?.sku || 'ASG–33MS–130Z'}
                </span>
              </div>
              <div className="text-xs text-gray-500">
                Shell Aviation • MRO Lubricants & Greases
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 lg:justify-end">
            {/* Trust Score Box */}
            <div className="flex items-center border border-gray-200 dark:border-gray-800 rounded-2xl p-2 pr-4 bg-gray-50 dark:bg-gray-800/50 w-full sm:w-auto">
              <span className="text-emerald-500 font-black text-xl mr-3">98</span>
              <div>
                <div className="text-[9px] uppercase tracking-wider text-gray-400 font-black">Trust Score</div>
                <div className="text-sm font-black">98<span className="text-xs text-gray-400 font-medium"> / 100</span></div>
              </div>
            </div>

            <button className="flex-1 sm:flex-none flex items-center justify-center px-4 py-2 bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 font-bold rounded-lg text-sm">
              <Zap className="w-4 h-4 mr-2" /> Enriched
            </button>

            <button className="flex-1 sm:flex-none flex items-center justify-center px-6 py-2 bg-blue-600 text-white font-bold rounded-lg shadow-sm hover:bg-blue-700 text-sm w-full sm:w-auto">
              <ShieldCheck className="w-4 h-4 mr-2" /> Approve
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 py-2 text-xs gap-2">
          <div className="flex items-center text-gray-500 font-medium overflow-x-auto whitespace-nowrap pb-1 sm:pb-0 custom-scrollbar">
            <span>Product Catalog</span><span className="mx-2 text-gray-300">/</span>
            <span>MRO Supplies</span><span className="mx-2 text-gray-300">/</span>
            <span className="text-gray-800 dark:text-gray-200 font-bold italic">{selectedProduct?.title || 'Aeroshell Grease 33MS'}</span>
          </div>
          <div className="flex items-center text-gray-500 flex-shrink-0">
            Last updated: <span className="font-medium text-gray-700 dark:text-gray-300 ml-1">2 hrs ago</span>
            <CheckCircle className="w-4 h-4 text-emerald-500 ml-2 sm:ml-4 mr-1" />
            <span className="text-emerald-500 font-bold">Auto-validated</span>
          </div>
        </div>
      </div>
    </div>
  );
}