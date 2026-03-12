
import { Globe, Check, History, DollarSign, PenTool, Bug, UserX } from 'lucide-react';

export default function CrawlerMetadata() {
  const auditLogs = [
    { title: 'Detected price change: $27.50 > $28.50 on Grainger feed', date: 'Mar 9, 2026 — 14:22', user: 'AI Engine', icon: <DollarSign className="w-3.5 h-3.5" />, color: 'text-blue-500 border-blue-200', tag: 'Price', tagColor: 'text-blue-500' },
    { title: 'Approved alternative: Mobilgrease 28 to Rank #1', date: 'Mar 8, 2026 — 11:45', user: 'R. Martinez', icon: <PenTool className="w-3.5 h-3.5" />, color: 'text-emerald-500 border-emerald-200', tag: 'Approval', tagColor: 'text-emerald-500' },
    { title: 'Crawled Shell Aviation product page — no changes', date: 'Mar 8, 2026 — 10:30', user: 'AI Engine', icon: <Bug className="w-3.5 h-3.5" />, color: 'text-purple-500 border-purple-200', tag: 'Crawl', tagColor: 'text-purple-500' },
    { title: 'Triggered human review on ITAR classification field', date: 'Mar 7, 2026 — 09:12', user: 'System', icon: <UserX className="w-3.5 h-3.5" />, color: 'text-orange-500 border-orange-200', tag: 'Review', tagColor: 'text-orange-500' }
  ];

  return (
    <div className="bg-white dark:bg-[#11151C] border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden h-full flex flex-col mt-4 md:mt-0">
      <div className="text-[10px] font-bold tracking-wide text-gray-500 uppercase px-4 py-3 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-transparent flex justify-between items-center">
        <span className="flex items-center"><Globe className="w-4 h-4 mr-2" /> CRAWLER METADATA</span>
        <span className="text-emerald-500 font-bold flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5"></span> RUN</span>
      </div>
      <div className="p-4 flex-grow text-xs text-gray-600 dark:text-gray-400">
        
        <div className="flex flex-col sm:flex-row mb-4 gap-4">
          <div className="w-full sm:w-1/2 sm:pr-2">
            <div className="font-bold text-gray-800 dark:text-gray-200 mb-1">Crawl Schedule</div>
            <div className="mb-1">Last crawl: <br/><span className="font-bold text-gray-800 dark:text-gray-200">Mar 9, 2026 — 10:30 UTC</span></div>
            <div>Frequency: <span className="font-medium text-gray-800 dark:text-gray-200">Every 24h</span></div>
          </div>
          <div className="w-full sm:w-1/2 sm:pl-2">
            <div className="mb-1 sm:mt-4">Next scheduled: <br/><span className="font-bold text-gray-800 dark:text-gray-200">Mar 10, 2026 — 10:30 UTC</span></div>
            <div>Alert config: <span className="font-medium text-gray-800 dark:text-gray-200">Feb 14, 2024</span></div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2 mb-4">
          <div className="border border-gray-200 dark:border-gray-800 rounded p-3 flex-grow bg-gray-50 dark:bg-gray-800/50 flex justify-between sm:block">
            <div>
              <div className="font-bold text-gray-800 dark:text-gray-200 mb-1">Deduplication</div>
              <div className="text-[9px]">6 duplicates found</div>
            </div>
            <span className="px-2 py-1 sm:px-1 sm:py-0.5 h-fit bg-emerald-50 text-emerald-600 dark:bg-emerald-900/10 dark:text-emerald-400 font-bold rounded text-[10px] inline-flex items-center sm:mb-1"><Check className="w-3 h-3 mr-1" /> PASS</span>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 rounded p-3 flex-grow bg-gray-50 dark:bg-gray-800/50 flex justify-between sm:block">
             <div>
              <div className="font-bold text-gray-800 dark:text-gray-200 mb-1">Validation</div>
              <div className="text-[9px]">ISO 914-1/3 v3.0</div>
            </div>
            <span className="px-2 py-1 sm:px-1 sm:py-0.5 h-fit bg-emerald-50 text-emerald-600 dark:bg-emerald-900/10 dark:text-emerald-400 font-bold rounded text-[10px] inline-flex items-center sm:mb-1"><Check className="w-3 h-3 mr-1" /> PASS</span>
          </div>
        </div>

        <hr className="border-gray-200 dark:border-gray-800 my-4" />
        
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold text-gray-800 dark:text-gray-200 flex items-center"><History className="w-4 h-4 mr-1" /> AUDIT LOG</span>
          <span className="px-2 py-0.5 bg-blue-500 text-white rounded font-bold text-[10px]">16 entries</span>
        </div>
        
        <div className="relative pl-6">
          <div className="absolute left-[11px] top-[10px] bottom-0 w-[2px] bg-gray-200 dark:bg-gray-800"></div>
          
          {auditLogs.map((log, i) => (
            <div key={i} className="mb-5 relative">
              <div className={`absolute -left-[24px] top-[-2px] w-6 h-6 rounded-full bg-white dark:bg-[#11151C] border ${log.color} flex items-center justify-center z-10`}>
                {log.icon}
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start gap-1">
                <div className="pr-2">
                  <div className="text-gray-800 dark:text-gray-200 font-medium mb-1 leading-tight text-[11px] sm:text-xs">{log.title}</div>
                  <div className="text-[9px] text-gray-500">{log.date} • {log.user}</div>
                </div>
                <span className={`font-bold text-[10px] ${log.tagColor} border border-${log.tagColor.split('-')[1]}-200 dark:border-gray-700 px-1.5 py-0.5 rounded-sm sm:border-0 sm:p-0`}>{log.tag}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}