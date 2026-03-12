
import { ArrowRightLeft, CheckCircle, AlertCircle, XCircle } from 'lucide-react';
import { alternatives } from '@/lib/mockData';

export default function SubstitutionEngine() {
  const getIcon = (status: string) => {
    if (status === 'verified') return <CheckCircle className="w-4 h-4 text-emerald-500 mx-auto" />;
    if (status === 'partial') return <AlertCircle className="w-4 h-4 text-orange-500 mx-auto" />;
    return <XCircle className="w-4 h-4 text-red-500 mx-auto" />;
  };

  return (
    <div className="bg-white dark:bg-[#11151C] border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden h-full">

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 py-3 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-transparent gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <ArrowRightLeft className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-black text-gray-800 dark:text-gray-200 tracking-wide">SUBSTITUTION ENGINE</span>
          <span className="px-2 py-0.5 text-[10px] font-bold text-blue-700 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 rounded-full">
            5 alternatives
          </span>
        </div>
        <div className="flex items-center text-xs text-gray-500 w-full sm:w-auto justify-between sm:justify-end">
          <span className="mr-4">Last run: 2h ago</span>
          <button className="px-3 py-1.5 bg-gray-900 dark:bg-gray-800 text-white font-bold rounded-lg text-xs hover:bg-gray-800 transition-colors">
            Re-run Engine
          </button>
        </div>
      </div>
      
      <div className="p-4 overflow-x-auto custom-scrollbar">
        <table className="w-full text-xs text-left min-w-[600px]">
          <thead>
            <tr className="text-gray-500 border-b border-gray-200 dark:border-gray-800">
              <th className="pb-2 font-bold w-12">RANK</th>
              <th className="pb-2 font-bold">ALTERNATIVE</th>
              <th className="pb-2 font-bold">ALT SKU</th>
              <th className="pb-2 font-bold text-center w-32">COMPAT. %</th>
              <th className="pb-2 font-bold text-center">CERTS</th>
              <th className="pb-2 font-bold text-right">PRICE</th>
            </tr>
          </thead>
          <tbody>
            {alternatives.map((alt, i) => (
              <tr key={i} className="border-b border-gray-100 dark:border-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800/20 transition-colors">
                <td className="py-4">
                  <div className="flex items-center">
                    <div className="w-5 h-5 rounded bg-gray-900 dark:bg-gray-800 text-white flex items-center justify-center font-bold text-[11px] mr-2 flex-shrink-0">
                      {i + 1}
                    </div>
                    <span className={`font-bold capitalize ${alt.statusColor}`}>{alt.status}</span>
                  </div>
                </td>
                <td className="py-4 pr-4">
                  <div className="font-black text-gray-800 dark:text-gray-200 text-[13px] whitespace-nowrap">{alt.name}</div>
                  <div className="text-gray-500 text-[11px] truncate max-w-[180px] sm:max-w-[250px]">{alt.desc}</div>
                </td>
                <td className="py-4 font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap">{alt.sku}</td>
                <td className="py-4 text-center">
                  <div className="flex items-center justify-center">
                    <span className={`font-black mr-2 ${alt.compatColor}`}>{alt.compat}%</span>
                    <div className="w-[40px] sm:w-[60px] h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className={`h-full ${alt.compatColor ? `bg-${alt.compatColor}-500` : 'bg-emerald-500'}`} style={{ width: `${alt.compat}%` }}></div>
                    </div>
                  </div>
                </td>
                <td className="py-4 text-center">
                  {getIcon(alt.status)}
                  <div className="text-[9px] text-gray-500 mt-1 whitespace-nowrap">{alt.certs}</div>
                </td>
                <td className="py-4 text-right font-black text-gray-800 dark:text-gray-200">{alt.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}