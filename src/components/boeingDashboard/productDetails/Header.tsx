// src/components/dashboard-details/Header.tsx
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { useProductStore } from '../../../stores/productsStore';
import { useNavigate } from 'react-router';

export default function Header() {
  const selectedProduct = useProductStore((state) => state.selectedProduct);
  const previousView = useProductStore((state) => state.previousView);
  const previousCategory = useProductStore((state) => state.previousCategory);
  const navigate = useNavigate();

  const handleBack = () => {
    if (previousView === "components" && previousCategory) {
      navigate('/components');
      // The Components page will need to check the store state to show the right view
      setTimeout(() => {
        // This will be handled by the Components page checking store state
      }, 0);
    } else {
      navigate('/components');
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <button
        className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white mb-4 transition-colors"
       onClick={handleBack}
      >
        <ArrowLeft size={16} />
        Back
      </button>
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            {selectedProduct?.title || 'Aeroshell Grease 33MS'}
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            {selectedProduct?.manufacturer || 'Shell Aviation'} • {selectedProduct?.sku || 'ASG–33MS–130Z'}
          </p>
          <div className="flex items-center gap-2 mt-2 text-xs text-slate-500">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            <span>Updated 2h ago</span>
          </div>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">98</span>
          <div>
            <div className="text-[10px] font-semibold text-slate-500 uppercase">Trust</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">98 / 100</div>
          </div>
        </div>
      </div>
    </div>
  );
}
