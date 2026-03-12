
import { Clock, Activity, AlertOctagon, CheckCircle, Circle, Factory, Ban, FlaskConical, ShieldAlert } from 'lucide-react';

export default function RightColumn() {
  return (
    <div className="flex flex-col gap-4">
      
      {/* LIFECYCLE STAGE TRACKING */}
      <div className="bg-white dark:bg-[#11151C] border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
        <div className="text-[10px] font-bold tracking-wide text-gray-500 uppercase px-4 py-3 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-transparent flex justify-between items-center">
          <span className="flex items-center truncate mr-2"><Clock className="w-4 h-4 mr-2 flex-shrink-0" /> LIFECYCLE STAGE</span>
          <span className="px-2 py-0.5 bg-orange-50 text-orange-600 dark:bg-orange-900/10 dark:text-orange-400 border border-orange-200 dark:border-orange-900/30 rounded text-[10px] font-bold flex-shrink-0">Limited Support</span>
        </div>
        <div className="p-4 pt-6">
          <div className="relative flex justify-between mb-6">
            <div className="absolute top-[10px] left-[10%] right-[10%] h-[2px] bg-gray-200 dark:bg-gray-800 z-0"></div>
            <div className="absolute top-[10px] left-[10%] w-[40%] h-[2px] bg-emerald-500 z-0"></div>
            
            <div className="text-center z-10 bg-white dark:bg-[#11151C] px-1">
              <CheckCircle className="w-6 h-6 text-emerald-500 mx-auto" />
              <div className="text-[10px] font-bold text-emerald-500 mt-1">Active</div>
            </div>
            <div className="text-center z-10 bg-white dark:bg-[#11151C] px-1">
              <Circle className="w-6 h-6 text-orange-500 mx-auto" />
              <div className="text-[10px] font-medium text-gray-500 mt-1">NRND</div>
            </div>
            <div className="text-center z-10 bg-white dark:bg-[#11151C] px-1">
              <Circle className="w-6 h-6 text-gray-400 mx-auto" />
              <div className="text-[10px] font-medium text-gray-500 mt-1">EOL</div>
            </div>
          </div>
          
          <ul className="text-xs font-medium space-y-3">
            <li className="flex justify-between pb-2 border-b border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400">
              <span className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></span> Full Support</span>
              <span>2010 — 2024</span>
            </li>
            <li className="flex justify-between flex-wrap gap-1 py-2 bg-orange-50 dark:bg-orange-900/10 px-2 -mx-2 rounded font-bold text-gray-800 dark:text-gray-200">
              <span className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></span> Limited Support 
                <span className="ml-2 px-1 text-[9px] bg-orange-500 text-white rounded">Current</span>
              </span>
              <span>2024 — 2026</span>
            </li>
            <li className="flex justify-between pb-2 border-b border-gray-100 dark:border-gray-800 text-gray-500">
              <span className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700 mr-2"></span> NRND</span>
              <span>2026 — 2028</span>
            </li>
            <li className="flex justify-between text-gray-500">
              <span className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700 mr-2"></span> EOL</span>
              <span>2028 — ...</span>
            </li>
          </ul>
        </div>
      </div>

      {/* LIFECYCLE PREDICTION */}
      <div className="bg-white dark:bg-[#11151C] border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
        <div className="text-[10px] font-bold tracking-wide text-gray-500 uppercase px-4 py-3 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-transparent flex justify-between items-center">
          <span className="flex items-center"><Activity className="w-4 h-4 mr-2 flex-shrink-0" /> LIFECYCLE PREDICTION</span>
          <span className="font-normal text-[9px] whitespace-nowrap ml-2">AI Model v3.4</span>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center mb-1 text-xs text-gray-500">
            <span>Vitality Index</span><span className="font-bold text-red-500">-4.5% /yr</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-1 mb-4">
            <div className="bg-orange-500 h-1 rounded-full" style={{ width: '65%' }}></div>
          </div>
          
          <div className="flex justify-between items-center mb-1 text-xs font-bold text-gray-700 dark:text-gray-300">
            <span>Lifecycle consumed</span><span className="text-lg font-black text-orange-600 dark:text-orange-400">88%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2 overflow-hidden">
             <div className="h-full bg-gradient-to-r from-emerald-500 via-orange-500 to-red-500" style={{ width: '88%' }}></div>
          </div>
          <div className="flex justify-between text-gray-500 mt-1 mb-4 text-[9px]">
            <span>2010 — Launch</span><span>2028 — Predicted EOL</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-center mt-2">
            <div className="border border-red-100 dark:border-red-900/30 rounded bg-red-50 dark:bg-red-900/10 py-2">
              <div className="text-[10px] text-gray-600 dark:text-gray-400 mb-1">Predicted EOL</div>
              <div className="font-black text-red-700 dark:text-red-400">Q2 2028</div>
            </div>
            <div className="border border-blue-100 dark:border-blue-900/30 rounded bg-blue-50 dark:bg-blue-900/10 py-2">
              <div className="text-[10px] text-gray-600 dark:text-gray-400 mb-1">Confidence</div>
              <div className="font-black text-blue-700 dark:text-blue-400">87%</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}