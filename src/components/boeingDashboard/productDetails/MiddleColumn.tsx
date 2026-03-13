// src/components/dashboard-details/MiddleColumn.tsx
import { Factory, ChevronDown, Network, MapPin, ShieldAlert } from 'lucide-react';
import { suppliers, dependency } from '@/lib/mockData';
import { useProductStore } from '../../../stores/productsStore';

const getDetailKey = (title?: string | null) => {
  if (!title) return 'default';
  const lower = title.toLowerCase();
  if (lower.includes('mobilgrease 28')) return 'mobilgrease28';
  if (lower.includes('aeroshell') || lower.includes('grease 33')) return 'aeroshell33ms';
  return 'default';
};

const productDetails: Record<
  string,
  {
    overview: string;
    features: string[];
    specs: string[];
    application: string;
    technical: { label: string; value: string }[];
    shipping: { label: string; value: string }[];
    aiInsights: string[];
  }
> = {
  mobilgrease28: {
    overview:
      'Designed for plain and rolling bearings, splines, screws, worm gears and other mechanisms where high-friction reduction, low-wear and low-lubricant friction losses are required. Meets the specifications of MIL-PRF-81322G; DOD-G-24508A, Amendment 4; and NATO G-395.',
    features: [
      'High viscosity index (VI) synthetic base stock with no wax content for a wide operating temperature range.',
      'Excellent protection against wear and corrosion, extending bearing life and reducing replacement costs.',
      'Extreme-pressure protection characteristics to avoid excessive wear under shock loads.',
      'High thermal and oxidative stability enabling long relubrication intervals.',
      'High resistance to water washout for reliable performance in adverse conditions.',
    ],
    specs: ['MIL-PRF-81322G', 'DOD-G-24508A, Amendment 4', 'NATO G-395'],
    application:
      'Mobilgrease 28 is designed for the lubrication of plain and rolling bearings at low to high speeds, and splines, screws, worm gears, and other mechanisms where high friction reduction, low wear, and low lubricant friction losses are required. The recommended operating temperature range is -54ºC to 177ºC (-65ºF to 350ºF) with appropriate relubrication intervals.',
    technical: [
      { label: 'FAA Approval Code', value: 'N/R' },
      { label: 'Condition', value: 'New' },
      { label: 'Country of Origin', value: 'United States' },
      { label: 'Harmonized Tariff Code', value: '3403990000' },
      { label: 'Lead Time (Days)', value: '50' },
      { label: 'Shelf Life', value: 'Yes' },
      { label: 'Total Shelf Life (Days)', value: '3650' },
      { label: 'Forecasted', value: 'Yes' },
      { label: 'Dimensions (L x W x H)', value: '2.25 x 2.25 x 9.25' },
      { label: 'Package Weight', value: '0.93 LB' },
      { label: 'Aircraft Makes', value: 'Boeing' },
      { label: 'Aircraft Models', value: '737-200, 737-400, 737-800, 767-200' },
    ],
    shipping: [
      { label: 'Hazmat Code', value: 'ZND' },
      { label: 'ECCN', value: 'EAR99' },
      { label: 'Schedule B', value: '3403990000' },
      { label: '8130-3 Eligible', value: 'No' },
      { label: 'Hazmat', value: 'No' },
      { label: 'Part Explosive', value: 'No' },
    ],
    aiInsights: [
      'AI dự đoán nhu cầu Mobilgrease 28 tăng mạnh trong 12 tháng tới do kế hoạch đại tu đội bay khu vực APAC.',
      'Chuỗi cung ứng hiện phụ thuộc nhiều vào 1 nhà máy tại Đông Âu – AI gắn cờ rủi ro gián đoạn nếu xung đột kéo dài.',
      'Khuyến nghị: xây dựng nguồn thay thế đã được phê duyệt với mức tương thích > 95% để giảm rủi ro AOG.',
    ],
  },
  aeroshell33ms: {
    overview:
      'Aeroshell Grease 33MS là mỡ bôi trơn đa dụng cho vòng bi và cơ cấu tải nặng trên máy bay, được tối ưu cho môi trường nhiệt độ rộng và điều kiện vận hành khắc nghiệt.',
    features: [
      'Hiệu năng ổn định trong dải nhiệt độ rộng điển hình cho môi trường hàng không.',
      'Khả năng bám dính tốt trên bề mặt kim loại, hạn chế rò rỉ và thấm nước.',
      'Bảo vệ chống mài mòn và ăn mòn cho các bề mặt chịu tải nặng.',
      'Tương thích với nhiều loại vật liệu phớt và elastomer dùng trên máy bay.',
    ],
    specs: ['MIL-G-21164D', 'BMS 3-33', 'DoD approved'],
    application:
      'Được sử dụng rộng rãi trong ổ bi, khớp, cơ cấu chấp hành và các điểm bôi trơn quan trọng trên máy bay thương mại và quân sự, nơi cần độ tin cậy cao và chu kỳ bảo dưỡng kéo dài.',
    technical: [
      { label: 'Condition', value: 'New' },
      { label: 'Country of Origin', value: 'EU / US' },
      { label: 'Typical Use Cases', value: 'Landing gear, actuators, control linkages' },
      { label: 'Operating Temperature', value: 'Tới ~177ºC (tuỳ ứng dụng)' },
    ],
    shipping: [
      { label: 'Hazmat', value: 'Có thể áp dụng tùy cấu hình đóng gói' },
      { label: 'Regulatory', value: 'Tuân thủ các yêu cầu vận chuyển hoá chất hàng không phổ biến' },
    ],
    aiInsights: [
      'AI phát hiện rủi ro nguồn cung tăng do một nhà máy chính tại Đức từng bị sự cố cháy lớn.',
      'Khuyến nghị xem xét tồn kho an toàn cao hơn và đánh giá các mỡ bôi trơn tương thích đã được Boeing phê duyệt.',
    ],
  },
  default: {
    overview:
      'Hạng mục MRO được thiết kế cho ứng dụng hàng không, với trọng tâm là độ tin cậy, khả năng truy xuất nguồn gốc và tuân thủ quy định.',
    features: [
      'Được cung cấp bởi các nhà sản xuất và distributor đã được Boeing phê duyệt.',
      'Hỗ trợ dữ liệu kỹ thuật và tài liệu chứng nhận phục vụ audit.',
      'Hỗ trợ quản lý vòng đời linh kiện và thay thế tương đương.',
    ],
    specs: [],
    application:
      'Dùng trong các hệ thống và cụm lắp ráp máy bay phù hợp với thông số kỹ thuật và phê duyệt của nhà sản xuất thiết bị.',
    technical: [],
    shipping: [],
    aiInsights: [
      'AI theo dõi liên tục tín hiệu từ news, báo cáo nhà máy và dữ liệu logistics để phát hiện sớm rủi ro supply chain.',
    ],
  },
};

export default function MiddleColumn() {
  const selectedProduct = useProductStore((state) => state.selectedProduct);
  const detailKey = getDetailKey(selectedProduct?.title);
  const detail = productDetails[detailKey];

  return (
    <div className="flex flex-col gap-4">

      {/* AI IMPACT SUMMARY – giúp người xem nắm nhanh linh kiện ảnh hưởng khu vực nào */}
      <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 rounded-lg overflow-hidden">
        <div className="px-4 py-3 flex items-center gap-2 text-xs font-bold text-amber-800 dark:text-amber-300 border-b border-amber-200 dark:border-amber-800 uppercase">
          <ShieldAlert className="w-4 h-4" />
          AI IMPACT ON BOEING AIRCRAFT
        </div>
        <div className="p-4 text-xs text-amber-900 dark:text-amber-100 space-y-1">
          {detailKey === 'mobilgrease28' && (
            <>
              <p>- Ảnh hưởng trực tiếp tới <strong>landing gear, wheel & brake assemblies</strong> trên dòng 737/767.</p>
              <p>- Rủi ro supply chain có thể dẫn tới <strong>AOG</strong> nếu không có grease tương đương được phê duyệt.</p>
              <p>- Khuyến nghị ưu tiên lập kế hoạch thay thế cho các bộ phận chịu tải cao và chu kỳ hạ cánh dày đặc.</p>
            </>
          )}
          {detailKey === 'aeroshell33ms' && (
            <>
              <p>- Được dùng rộng rãi trong <strong>actuators & control linkages</strong> trên máy bay Boeing.</p>
              <p>- Gián đoạn nguồn cung có thể ảnh hưởng đến lịch bảo dưỡng <strong>flight control systems</strong>.</p>
            </>
          )}
          {detailKey === 'default' && (
            <p>
              - AI tóm tắt các khu vực hệ thống trên thân/động cơ/hydraulic mà linh kiện này tham gia, giúp team MRO
              thấy nhanh tác động khi có gián đoạn supply chain.
            </p>
          )}
        </div>
      </div>

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

      {/* PRODUCT OVERVIEW & TECHNICAL SECTIONS */}
      <div className="bg-white dark:bg-[#11151C] border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
        <div className="text-[10px] font-bold tracking-wide text-gray-500 uppercase px-4 py-3 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-transparent flex items-center">
          PRODUCT OVERVIEW & TECHNICAL DETAILS
        </div>
        <div className="p-4 space-y-4 text-xs text-gray-700 dark:text-gray-300">
          <div>
            <div className="font-bold mb-1">Overview</div>
            <p className="leading-relaxed">
              {detail.overview}
            </p>
          </div>

          {detail.features.length > 0 && (
            <div>
              <div className="font-bold mb-1">Features &amp; Benefits</div>
              <ul className="list-disc list-inside space-y-1">
                {detail.features.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
            </div>
          )}

          {detail.specs.length > 0 && (
            <div>
              <div className="font-bold mb-1">Specifications</div>
              <ul className="list-disc list-inside space-y-1">
                {detail.specs.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <div className="font-bold mb-1">Application</div>
            <p className="leading-relaxed">
              {detail.application}
            </p>
          </div>

          {detail.technical.length > 0 && (
            <div>
              <div className="font-bold mb-2">Technical Information</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
                {detail.technical.map((row, idx) => (
                  <div key={idx} className="flex justify-between gap-2">
                    <span className="text-gray-500 dark:text-gray-400">{row.label}</span>
                    <span className="font-medium text-right">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {detail.shipping.length > 0 && (
            <div>
              <div className="font-bold mb-2">Shipping Details</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
                {detail.shipping.map((row, idx) => (
                  <div key={idx} className="flex justify-between gap-2">
                    <span className="text-gray-500 dark:text-gray-400">{row.label}</span>
                    <span className="font-medium text-right">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* AI product-level analysis */}
          <div className="border border-emerald-200 dark:border-emerald-900/40 bg-emerald-50 dark:bg-emerald-900/10 rounded-md p-3 mt-2">
            <div className="text-[10px] font-bold tracking-wide text-emerald-700 dark:text-emerald-400 uppercase mb-1">
              AI PRODUCT ANALYSIS
            </div>
            <ul className="list-disc list-inside space-y-1 text-emerald-800 dark:text-emerald-200">
              {detail.aiInsights.map((i, idx) => (
                <li key={idx}>{i}</li>
              ))}
            </ul>
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