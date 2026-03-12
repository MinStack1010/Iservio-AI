// src/components/dashboard-details/MiddleColumn.tsx
import { Factory, ChevronDown, Network, MapPin } from 'lucide-react';
import { suppliers, dependency } from '@/lib/mockData';

export default function MiddleColumn() {
  return (
    <div className="flex flex-col gap-4">

      <div className="bg-white dark:bg-[#11151C] border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
        <div className="text-[10px] font-bold tracking-wide text-gray-500 uppercase px-4 py-3 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-transparent flex justify-between items-center">
          <span className="flex items-center truncate mr-2"><Factory className="w-4 h-4 mr-2 flex-shrink-0" /> INVENTORY & SUPPLIER AVAILABILITY</span>
          <span className="normal-case font-normal flex items-center flex-shrink-0">10 Lines <ChevronDown className="w-3 h-3 ml-1"/></span>
        </div>
        <div className="p-4">

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mb-4 text-center">
            <div className="border border-emerald-100 dark:border-emerald-900/30 rounded bg-emerald-50 dark:bg-emerald-900/10 py-2 flex sm:block justify-between px-4 sm:px-0 items-center">
              <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 order-2 sm:order-1">In-Stock</div>
              <div className="text-lg sm:text-xl font-black text-emerald-500 order-1 sm:order-2">5</div>
            </div>
            <div className="border border-blue-200 dark:border-blue-900/30 rounded bg-blue-50 dark:bg-blue-900/10 py-2 flex sm:block justify-between px-4 sm:px-0 items-center">
               <div className="text-xs font-bold text-blue-600 dark:text-blue-400 order-2 sm:order-1">Total Units</div>
              <div className="text-lg sm:text-xl font-black text-blue-600 dark:text-blue-400 order-1 sm:order-2">3,485</div>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded bg-gray-50 dark:bg-gray-800 py-2 flex sm:block justify-between px-4 sm:px-0 items-center">
              <div className="text-xs font-bold text-gray-600 dark:text-gray-400 order-2 sm:order-1">Suppliers</div>
              <div className="text-lg sm:text-xl font-black text-gray-800 dark:text-gray-200 order-1 sm:order-2">6</div>
            </div>
          </div>
          
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-xs text-left min-w-[400px]">
              <thead>
                <tr className="text-gray-500 border-b border-gray-200 dark:border-gray-800">
                  <th className="pb-2 font-medium">Supplier</th>
                  <th className="pb-2 font-medium text-right">Stock</th>
                  <th className="pb-2 font-medium text-right">Price</th>
                  <th className="pb-2 font-medium text-center">Risk</th>
                </tr>
              </thead>
              <tbody>
                {suppliers.map((sup, i) => (
                  <tr key={i} className="border-b border-gray-100 dark:border-gray-800/50">
                    <td className="py-3 font-bold flex items-center">
                      <span className={`w-2 h-2 rounded-full mr-2 flex-shrink-0 ${sup.dot}`}></span> <span className="truncate">{sup.name}</span>
                    </td>
                    <td className={`text-right py-3 font-bold ${sup.stockColor}`}>{sup.stock}</td>
                    <td className="text-right py-3 font-medium">{sup.price}</td>
                    <td className="text-center py-3">
                      <span className={`px-2 py-1 rounded text-[10px] font-bold whitespace-nowrap ${sup.riskColor} ${sup.risk}`}>{sup.risk}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-[#11151C] border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
        <div className="text-[10px] font-bold tracking-wide text-gray-500 uppercase px-4 py-3 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-transparent flex items-center">
          <Network className="w-4 h-4 mr-2" /> SUPPLIER DEPENDENCY & RISK
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:border-r border-b md:border-b-0 border-gray-200 dark:border-gray-800 pb-4 md:pb-0 md:pr-4">
             <div className="text-xs font-bold mb-4">Dependency Split</div>
             <ul className="text-xs space-y-2">
                {dependency.map((item, i) => (
                  <li key={i} className="flex justify-between items-center">
                    <span className="flex items-center"><span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: item.color }}></span>{item.name}</span>
                    <span className="font-medium">{item.val}</span>
                  </li>
                ))}
             </ul>
          </div>
          <div className="md:pl-2">
             <div className="text-xs font-bold mb-4">Geographic Risk</div>
             <div className="border border-red-200 bg-red-50 dark:bg-red-900/10 dark:border-red-900/30 rounded p-2 mb-2">
               <div className="flex justify-between items-center mb-1">
                 <span className="text-[10px] font-bold text-red-700 dark:text-red-400 flex items-center"><MapPin className="w-3 h-3 mr-1 flex-shrink-0"/> Eastern Europe</span>
                 <span className="px-1 text-[9px] bg-red-500 text-white rounded">High</span>
               </div>
               <div className="text-[10px] text-red-600 dark:text-red-300">Active conflict zone — disruption likely</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}