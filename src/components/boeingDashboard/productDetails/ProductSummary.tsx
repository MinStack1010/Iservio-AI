'use client';

import { Package, ShieldAlert, Factory, CheckCircle } from 'lucide-react';
import { suppliers } from '@/lib/mockData';
import { useProductStore } from '../../../stores/productsStore';

const getDetailKey = (title?: string | null) => {
  if (!title) return 'default';
  const lower = title.toLowerCase();
  if (lower.includes('mobilgrease 28')) return 'mobilgrease28';
  if (lower.includes('aeroshell') || lower.includes('grease 33')) return 'aeroshell33ms';
  return 'default';
};

const productDetails: Record<string, { overview: string; aiImpact: string; aiInsight: string; specs: string[] }> = {
  mobilgrease28: {
    overview: 'Synthetic aircraft grease for plain and rolling bearings, splines, worm gears. Meets MIL-PRF-81322G, DOD-G-24508A, NATO G-395. Temp range -54°C to 177°C.',
    aiImpact: 'Ảnh hưởng trực tiếp landing gear, wheel & brake trên 737/767. Rủi ro AOG nếu thiếu nguồn thay thế.',
    aiInsight: 'Nhu cầu tăng 12 tháng tới (APAC đại tu). Chuỗi cung phụ thuộc nhà máy Đông Âu.',
    specs: ['MIL-PRF-81322G', 'DOD-G-24508A', 'NATO G-395'],
  },
  aeroshell33ms: {
    overview: 'Mỡ bôi trơn đa dụng cho vòng bi và cơ cấu tải nặng. Dải nhiệt rộng, bảo vệ mài mòn & ăn mòn.',
    aiImpact: 'Actuators & control linkages Boeing. Gián đoạn nguồn cung ảnh hưởng flight control systems.',
    aiInsight: 'Rủi ro nguồn cung do nhà máy Đức. Khuyến nghị tăng tồn kho an toàn.',
    specs: ['MIL-G-21164D', 'BMS 3-33'],
  },
  default: {
    overview: 'Hạng mục MRO hàng không, tuân thủ quy định và truy xuất nguồn gốc.',
    aiImpact: 'Linh kiện tham gia nhiều hệ thống trên thân/động cơ/hydraulic.',
    aiInsight: 'AI theo dõi news, báo cáo nhà máy, logistics để phát hiện rủi ro sớm.',
    specs: [],
  },
};

export default function ProductSummary() {
  const selectedProduct = useProductStore((state) => state.selectedProduct);
  const key = getDetailKey(selectedProduct?.title);
  const detail = productDetails[key];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Cột trái: Identity + Quick specs */}
      <div className="lg:col-span-4 space-y-4">
        <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-4">
            <Package className="w-4 h-4" /> Product
          </div>
          <div className="space-y-3 text-sm">
            <div>
              <span className="text-slate-500 dark:text-slate-400">Manufacturer</span>
              <p className="font-medium text-slate-900 dark:text-white">{selectedProduct?.manufacturer || 'Shell Aviation'}</p>
            </div>
            <div>
              <span className="text-slate-500 dark:text-slate-400">Part / SKU</span>
              <p className="font-medium text-slate-900 dark:text-white">{selectedProduct?.sku || 'ASG–33MS–130Z'}</p>
            </div>
            {detail.specs.length > 0 && (
              <div>
                <span className="text-slate-500 dark:text-slate-400">Specs</span>
                <p className="font-medium text-slate-900 dark:text-white">{detail.specs.join(', ')}</p>
              </div>
            )}
          </div>
          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
            <span className="text-slate-600 dark:text-slate-400 text-sm">From</span>
            <span className="font-bold text-blue-600 dark:text-blue-400">$28.50</span>
          </div>
        </div>

        <div className="bg-amber-50 dark:bg-amber-900/10 rounded-xl border border-amber-200 dark:border-amber-800/50 p-5">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 dark:text-amber-300 uppercase tracking-wide mb-2">
            <ShieldAlert className="w-4 h-4" /> AI Aircraft Impact
          </div>
          <p className="text-sm text-amber-900 dark:text-amber-100">{detail.aiImpact}</p>
        </div>
      </div>

      {/* Cột phải: Overview + Suppliers + AI */}
      <div className="lg:col-span-8 space-y-4">
        <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">Overview</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{detail.overview}</p>
        </div>

        <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="px-5 py-3 border-b border-slate-200 dark:border-slate-700 flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">
            <Factory className="w-4 h-4" /> Supplier availability
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-700">
                  <th className="px-5 py-2.5 text-left font-medium">Supplier</th>
                  <th className="px-5 py-2.5 text-right font-medium">Stock</th>
                  <th className="px-5 py-2.5 text-right font-medium">Price</th>
                  <th className="px-5 py-2.5 text-center font-medium">Risk</th>
                </tr>
              </thead>
              <tbody>
                {suppliers.slice(0, 4).map((s, i) => (
                  <tr key={i} className="border-b border-slate-100 dark:border-slate-700/50 last:border-0">
                    <td className="px-5 py-2.5 font-medium text-slate-900 dark:text-white">{s.name}</td>
                    <td className={`px-5 py-2.5 text-right font-medium ${s.stockColor}`}>{s.stock}</td>
                    <td className="px-5 py-2.5 text-right">{s.price}</td>
                    <td className="px-5 py-2.5 text-center">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${s.riskColor}`}>{s.risk}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-emerald-50 dark:bg-emerald-900/10 rounded-xl border border-emerald-200 dark:border-emerald-800/50 p-5">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 dark:text-emerald-300 uppercase tracking-wide mb-2">
            <CheckCircle className="w-4 h-4" /> AI Analysis
          </div>
          <p className="text-sm text-emerald-900 dark:text-emerald-100">{detail.aiInsight}</p>
        </div>
      </div>
    </div>
  );
}
