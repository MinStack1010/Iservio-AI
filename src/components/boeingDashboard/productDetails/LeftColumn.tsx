// src/components/dashboard-details/LeftColumn.tsx
import { Package, Image as ImageIcon, Box, ChevronDown, ShieldCheck, AlertTriangle, Flame } from 'lucide-react';
import { multiSku, regulatory } from '@/lib/mockData';

export default function LeftColumn() {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white dark:bg-[#11151C] border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
        <div className="text-[10px] font-bold tracking-wide text-gray-500 uppercase px-4 py-3 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-transparent flex items-center">
          <Package className="w-4 h-4 mr-2" /> PRODUCT IDENTITY
        </div>
        <div className="p-4">
          <div className="flex items-start mb-4">
            <div className="w-[60px] h-[80px] mr-4 rounded border border-gray-200 dark:border-gray-700 flex items-center justify-center bg-gray-50 dark:bg-gray-800 flex-shrink-0">
              <ImageIcon className="w-8 h-8 text-gray-400" />
            </div>
            <div className="flex-grow overflow-hidden">
              <div className="text-xs text-gray-500">Manufacturer</div>
              <div className="font-bold text-sm mb-1 truncate">Shell Aviation</div>
              <div className="text-xs text-gray-500">Part Number</div>
              <div className="font-bold text-sm mb-1 truncate">550020071</div>
              <div className="text-xs text-gray-500">UNSPSC</div>
              <div className="font-bold text-sm">15121500</div>
            </div>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 rounded px-3 py-2 flex justify-between items-center text-xs font-medium mb-4 bg-gray-50 dark:bg-gray-800">
            <span className="flex items-center"><Box className="w-4 h-4 mr-2 text-gray-500 flex-shrink-0" /> <span className="truncate">13 nr ASG-33MS-130Z</span></span>
            <span className="text-blue-600 dark:text-blue-400 font-bold flex items-center ml-2">$28.50 <ChevronDown className="w-4 h-4 ml-1" /></span>
          </div>
          
          <div className="text-[10px] font-bold text-gray-500 uppercase mb-2">MULTI-SKU MAPPING</div>
          {/* Wrapper overflow-x-auto để tránh vỡ bảng trên mobile */}
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-xs text-left min-w-[250px]">
              <thead>
                <tr className="text-gray-500 bg-gray-50 dark:bg-gray-800">
                  <th className="py-1 px-2 font-medium">Type</th><th className="py-1 px-2 font-medium">Code</th><th className="py-1 px-2 font-medium">System</th>
                </tr>
              </thead>
              <tbody>
                {multiSku.map((sku, i) => (
                  <tr key={i} className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-1 px-2 text-gray-600 dark:text-gray-400">{sku.type}</td>
                    <td className="py-1 px-2 font-medium">{sku.code}</td>
                    <td className="py-1 px-2">{sku.system}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-[#11151C] border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
        <div className="text-[10px] font-bold tracking-wide text-gray-500 uppercase px-4 py-3 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-transparent flex items-center">
          <ShieldCheck className="w-4 h-4 mr-2" /> COMPLIANCE & CERTIFICATIONS
        </div>
        <div className="p-4">
          <div className="border border-orange-200 rounded px-3 py-2 mb-2 bg-orange-50 dark:bg-orange-900/10 flex items-start">
            <AlertTriangle className="w-4 h-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-orange-700 dark:text-orange-400">Chemical Warning <span className="text-[10px] px-1 ml-1 bg-orange-600 text-white rounded inline-block">PROP 65</span></div>
              <div className="text-xs text-orange-600 dark:text-orange-300 mt-1">Contains crystalline silica — known carcinogen</div>
            </div>
          </div>
          <div className="border border-red-200 rounded px-3 py-2 mb-4 bg-red-50 dark:bg-red-900/10 flex items-start">
            <Flame className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-red-700 dark:text-red-400">GHS Hazard <span className="text-[10px] px-1 ml-1 bg-red-600 text-white rounded inline-block">H350</span></div>
              <div className="text-xs text-red-600 dark:text-red-300 mt-1">May cause cancer (Inhalation)</div>
            </div>
          </div>
          
          <div className="text-[10px] font-bold text-gray-500 uppercase mb-2">Regulatory Tracking</div>
          {regulatory.map((reg, i) => (
            <div key={i} className="flex justify-between items-center mb-2 text-xs">
              <span className="text-gray-600 dark:text-gray-400">{reg.name}</span>
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${reg.color} ${reg.bg}`}>{reg.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}