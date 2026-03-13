'use client';

import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  ArrowLeft, Search,
  Flame, ShieldAlert
} from "lucide-react";
import { useProductStore } from "../stores/productsStore";
import DashboardProducts from '../app/dashboard/products/page';

import type { Product } from "../lib/mockData";

type ComponentItem = {
  id: number;
  name: string;
  category: string;
  supplier: string;
  spec: string;
  stock: string;
  riskScore: number;
  signals: number;
  price: string;
  condition: "New" | "Overhauled" | "Repaired";
  countryOfOrigin: string;
  hasShelfLife: boolean;
  isHazmat: boolean;
  aircraftArea: string;
  obsolescenceWarning?: string;
};

const categories = [
  {
    id: "lubricants",
    name: "Lubricants",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800",
    description: "Dầu bôi trơn & Grease hàng không"
  },
  {
    id: "electronics",
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1518770660439-5f0f8e9c6d7e?q=80&w=800",
    description: "Cảm biến & Bo mạch"
  },
  {
    id: "sensors",
    name: "Sensors",
    image: "https://images.unsplash.com/photo-1581092160607-9c6c5b7c3b3f?q=80&w=800",
    description: "Cảm biến áp suất, nhiệt độ"
  },
  {
    id: "bearings",
    name: "Bearings",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a26?q=80&w=800",
    description: "Vòng bi & ổ lăn"
  }
];

const allComponents: ComponentItem[] = [
  // Lubricants
  {
    id: 1,
    name: "Aeroshell Grease 33MS",
    category: "lubricants",
    supplier: "Shell Aviation",
    spec: "MIL-G-21164D",
    stock: "High",
    riskScore: 28,
    signals: 2,
    price: "$28.50",
    condition: "New",
    countryOfOrigin: "Germany",
    hasShelfLife: true,
    isHazmat: false,
    aircraftArea: "Landing gear & actuators",
    obsolescenceWarning:
      "Sẽ lỗi thời trong 6 tháng tới do nhà máy Shell tại Đức bị cháy lớn (tháng 2/2026).",
  },
  {
    id: 2,
    name: "Mobilgrease 28",
    category: "lubricants",
    supplier: "ExxonMobil",
    spec: "MIL-G-81322",
    stock: "Medium",
    riskScore: 65,
    signals: 4,
    price: "$31.20",
    condition: "New",
    countryOfOrigin: "United States",
    hasShelfLife: true,
    isHazmat: false,
    aircraftArea: "Wheels, brakes & bearings",
    obsolescenceWarning:
      "Rủi ro cao vì nhà máy Đông Âu đang trong khu vực xung đột.",
  },
  {
    id: 3,
    name: "Royco 22",
    category: "lubricants",
    supplier: "Lanxess",
    spec: "MIL-PRF-81322",
    stock: "Low",
    riskScore: 82,
    signals: 5,
    price: "$42.80",
    condition: "New",
    countryOfOrigin: "Belgium",
    hasShelfLife: true,
    isHazmat: true,
    aircraftArea: "Flight control linkages",
  },

  // Electronics
  {
    id: 4,
    name: "Flight Control Sensor",
    category: "electronics",
    supplier: "EuroElectronics",
    spec: "DO-160G",
    stock: "Medium",
    riskScore: 72,
    signals: 3,
    price: "$185",
    condition: "New",
    countryOfOrigin: "France",
    hasShelfLife: false,
    isHazmat: false,
    aircraftArea: "Primary flight controls",
  },
  {
    id: 5,
    name: "Pressure Transducer",
    category: "electronics",
    supplier: "Honeywell",
    spec: "DO-178C",
    stock: "High",
    riskScore: 35,
    signals: 1,
    price: "$92",
    condition: "New",
    countryOfOrigin: "United States",
    hasShelfLife: false,
    isHazmat: false,
    aircraftArea: "Hydraulic & fuel systems",
  },

  // Sensors
  {
    id: 6,
    name: "Temperature Sensor ASG-TS-01",
    category: "sensors",
    supplier: "Boeing OEM",
    spec: "AS9100",
    stock: "Low",
    riskScore: 91,
    signals: 6,
    price: "$145",
    condition: "New",
    countryOfOrigin: "United States",
    hasShelfLife: false,
    isHazmat: false,
    aircraftArea: "Engine nacelle & bleed air",
    obsolescenceWarning:
      "Cảnh báo REACH mới 2026 – chất liệu sẽ bị cấm.",
  },
  {
    id: 7,
    name: "Vibration Sensor",
    category: "sensors",
    supplier: "Meggitt",
    spec: "DO-160",
    stock: "High",
    riskScore: 44,
    signals: 2,
    price: "$210",
    condition: "New",
    countryOfOrigin: "United Kingdom",
    hasShelfLife: false,
    isHazmat: false,
    aircraftArea: "Engine & rotating equipment",
  },

  // Bearings
  {
    id: 8,
    name: "Main Bearing 1234-AB",
    category: "bearings",
    supplier: "SKF Aviation",
    spec: "AS81820",
    stock: "Medium",
    riskScore: 55,
    signals: 3,
    price: "$320",
    condition: "New",
    countryOfOrigin: "Sweden",
    hasShelfLife: false,
    isHazmat: false,
    aircraftArea: "Main landing gear truck",
  }
];

const mapComponentToProduct = (comp: ComponentItem): Product => ({
  id: String(comp.id),
  title: comp.name,
  sku: comp.spec || comp.name.toUpperCase().replace(/\s+/g, "-"),
  manufacturer: comp.supplier,
  distributor: "Boeing Distribution Inc.",
  hasImage: comp.category === "lubricants" || comp.category === "bearings",
});

const getObsolescenceInfo = (comp: ComponentItem) => {
  if (comp.category === "lubricants") {
    return {
      window: "6–9 tháng tới",
      confidence: "92%",
      narrative:
        comp.obsolescenceWarning ||
        "Nguồn cung dầu gốc PAO từ châu Âu bị gián đoạn do cháy nhà máy và chi phí năng lượng tăng đột biến.",
    };
  }
  if (comp.category === "electronics") {
    return {
      window: "12–18 tháng tới",
      confidence: "88%",
      narrative:
        "AI dự đoán khan hiếm chip FPGA và cảm biến do mở rộng lệnh kiểm soát xuất khẩu và tái cấu trúc nhà máy tại Đài Loan.",
    };
  }
  if (comp.category === "sensors") {
    return {
      window: "9–12 tháng tới",
      confidence: "90%",
      narrative:
        comp.obsolescenceWarning ||
        "Các quy định REACH mới 2026 khiến một số hợp chất trong cảm biến bị hạn chế, kéo theo nhiều dòng sản phẩm bị end-of-life.",
    };
  }
  return {
    window: "12 tháng tới",
    confidence: "84%",
    narrative:
      "AI ghi nhận rủi ro tăng dần do hợp nhất nhà cung cấp vòng bi và tập trung sản xuất tại một nhà máy duy nhất ở Đông Âu.",
  };
};

export default function Components() {
  const navigate = useNavigate();
  const setSelectedProduct = useProductStore((state) => state.setSelectedProduct);
  const [view, setView] = useState<"categories" | "components">("categories");
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [search, setSearch] = useState("");
  const [supplierFilter, setSupplierFilter] = useState<string[]>([]);
  const [conditionFilter, setConditionFilter] = useState<string[]>([]);
  const [countryFilter, setCountryFilter] = useState<string[]>([]);
  const [shelfLifeFilter, setShelfLifeFilter] = useState<"yes" | "no" | null>(null);
  const [hazmatFilter, setHazmatFilter] = useState<"yes" | "no" | null>(null);

  const filteredComponents = allComponents
    .filter((c) => c.category === selectedCategory?.id)
    .filter((c) => supplierFilter.length === 0 || supplierFilter.includes(c.supplier))
    .filter((c) => conditionFilter.length === 0 || conditionFilter.includes(c.condition))
    .filter(
      (c) =>
        countryFilter.length === 0 ||
        countryFilter.includes(c.countryOfOrigin)
    )
    .filter((c) =>
      shelfLifeFilter === null
        ? true
        : shelfLifeFilter === "yes"
          ? c.hasShelfLife
          : !c.hasShelfLife
    )
    .filter((c) =>
      hazmatFilter === null
        ? true
        : hazmatFilter === "yes"
          ? c.isHazmat
          : !c.isHazmat
    )
    .filter((c) => c.name.toLowerCase().includes(search.toLowerCase()));

  const riskColor = (score: number) => {
    if (score > 70) return "text-red-600";
    if (score > 45) return "text-yellow-600";
    return "text-emerald-600";
  };

  const riskChipBg = (score: number) => {
    if (score > 70) return "bg-red-50 dark:bg-red-900/10";
    if (score > 45) return "bg-orange-50 dark:bg-orange-900/10";
    return "bg-emerald-50 dark:bg-emerald-900/10";
  };

  const renderBreadcrumb = () => {
    if (view === "categories") {
      return (
        <span className="text-xs text-slate-500">
          Components & Diagnostics
        </span>
      );
    }

    if (view === "components" && selectedCategory) {
      return (
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <button
            onClick={() => {
              setView("categories");
              setSelectedCategory(null);
              setSearch("");
              setSupplierFilter([]);
              setConditionFilter([]);
              setCountryFilter([]);
              setShelfLifeFilter(null);
              setHazmatFilter(null);
            }}
            className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-900"
          >
            <ArrowLeft className="w-3 h-3" />
            All domains
          </button>
          <span>/</span>
          <span className="font-medium text-slate-700 dark:text-slate-300">
            {selectedCategory.name}
          </span>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="p-8">
      {/* PAGE HEADER */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
            AI Components Diagnostics
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
            Khám phá các lĩnh vực (lubricants, electronics, sensors...) và xem chuẩn đoán AI chi tiết cho từng linh kiện Boeing.
          </p>
          {renderBreadcrumb()}
        </div>
        <div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-full bg-slate-900 text-slate-100 text-xs font-medium">
          <ShieldAlert className="w-4 h-4 text-amber-400" />
          <span>Boeing MRO Supply Chain</span>
        </div>
      </div>

      {/* CATEGORIES VIEW */}
      {view === "categories" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat);
                setView("components");
                setSearch("");
              }}

              className="group bg-white dark:bg-[#11151C] border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:border-blue-600 hover:shadow-lg transition-all cursor-pointer"
            >
              <img src={cat.image} className="h-48 w-full object-cover" alt={cat.name} />
              <div className="p-5">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">{cat.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{cat.description}</p>
                <div className="mt-4 text-blue-600 text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Khám phá linh kiện
                  <ArrowLeft className="rotate-180 w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {view === "components" && selectedCategory && (
        <DashboardProducts />
      )}

    </div>
  );
}