// src/lib/mockData.ts

export const multiSku = [
  { type: 'Internal', code: 'LUB-AERO-33MS', system: 'ERP' },
  { type: 'Manufacturer', code: '550020071', system: 'Shell' },
  { type: 'Supplier A', code: 'SH-GREASE-33MS', system: 'Grainger' },
  { type: 'UPC', code: '021234502736', system: 'GS1' },
  { type: 'CAGE', code: '81349', system: 'DoD' },
  { type: 'NSN', code: '9150-01-197-7693', system: 'NATO' }
];

export const regulatory = [
  { name: 'REACH (EU)', status: 'Compliant', color: 'text-emerald-700 bg-emerald-100',bg: 'bg-emerald-50 dark:bg-emerald-900/10' },
  { name: 'RoHS', status: 'Compliant', color: 'text-emerald-700 bg-emerald-100', bg: 'bg-gray-100 dark:bg-gray-800' },
  { name: 'TSCA (US)', status: 'Compliant', color: 'text-emerald-700 bg-emerald-100', bg: 'bg-orange-50 dark:bg-orange-900/10' },
  { name: 'ITAR', status: 'Review', color: 'text-orange-700 bg-orange-100', bg: 'bg-orange-50 dark:bg-orange-900/10' }
];

export const documents = [
  { name: 'Safety Data Sheet (SDS)', date: 'Jan 2024', tag: 'SDS', color: 'text-blue-600 border-blue-200' },
  { name: 'Technical Data Sheet', date: 'Mar 2023', tag: 'TDS', color: 'text-purple-600 border-purple-200' },
  { name: 'MIL-PRF-23827 Certificate', date: 'Oct 2023', tag: 'CERT', color: 'text-emerald-600 border-emerald-200' },
  { name: 'BMS3-33 Approval Letter', date: 'Aug 2023', tag: 'CERT', color: 'text-emerald-600 border-emerald-200' }
];

export const suppliers = [
  { name: 'Shell Direct US', stock: '2,100', price: '$28.50', risk: 'Low', updated: '8h ago', dot: 'bg-emerald-500', stockColor: 'text-emerald-600', riskColor: 'text-emerald-700 bg-emerald-100' },
  { name: 'Grainger Industrial US', stock: '842', price: '$29.50', risk: 'Low', updated: '2h ago', dot: 'bg-emerald-500', stockColor: 'text-emerald-600', riskColor: 'text-emerald-700 bg-emerald-100' },
  { name: 'AeroSupply Pro EU', stock: '128', price: '$28.80', risk: 'Medium', updated: '9h ago', dot: 'bg-orange-500', stockColor: 'text-emerald-600', riskColor: 'text-orange-700 bg-orange-100' },
  { name: 'Aviation Depot APAC', stock: 'OUT', price: '$30.20', risk: 'High', updated: '2d ago', dot: 'bg-red-500', stockColor: 'text-red-500 font-black', riskColor: 'text-red-700 bg-red-100' }
];

export const dependency = [
  { name: 'Shell Direct', val: '48%', color: '#3b82f6' },
  { name: 'Grainger', val: '28%', color: '#818cf8' },
  { name: 'MSC Direct', val: '14%', color: '#c7d2fe' },
  { name: 'Others', val: '10%', color: '#e5e7eb' }
];

export const alternatives = [
  { status: 'verified', statusColor: 'text-emerald-500', name: 'Mobilgrease 28', desc: 'ExxonMobil Aviation • Drops-in replacement', sku: 'MOB-GRE-28-130Z', compat: 97, compatColor: 'text-emerald-600', compatBg: 'bg-emerald-500', certs: 'MIL-PRF-23827, BMS3-33', price: '$26.80' },
  { status: 'partial', statusColor: 'text-orange-500', name: 'Royco 22CF', desc: 'Anderol Specialties • Missing one cert', sku: 'ROYCO-22CF-130Z', compat: 94, compatColor: 'text-orange-600', compatBg: 'bg-orange-500', certs: 'MIL-PRF-23827 (2022-23)', price: '$24.50' },
  { status: 'review', statusColor: 'text-red-500', name: 'Nye Lubricants 767', desc: 'Nye Synthetic • Unverified specs', sku: 'NYE-767-130Z', compat: 62, compatColor: 'text-red-600', compatBg: 'bg-red-500', certs: 'MIL-PRF-23827', price: '$28.80' }
];

export interface Product {
  id: string;
  title: string;
  sku: string;
  manufacturer: string;
  distributor: string;
  hasImage: boolean;
  tags?: string[];
  category?: string;
  riskScore?: number;
  obsolescenceWarning?: string;
  obsolescenceWindow?: string;
  confidence?: string;
}

// Category-specific data
export const lubricantsData: Product[] = [
  { 
    id: 'lub1', 
    title: 'Aeroshell Grease 33MS', 
    sku: 'MIL-G-21164D', 
    manufacturer: 'Shell Aviation', 
    distributor: 'Boeing Distribution Inc.', 
    hasImage: true, 
    category: 'lubricants',
    riskScore: 28,
    obsolescenceWarning: 'Will become obsolete in 6 months due to major fire at Shell Germany plant (Feb 2026)',
    obsolescenceWindow: '6–9 months ahead',
    confidence: '92%',
    tags: ['Critical', 'High-Temp']
  },
  { 
    id: 'lub2', 
    title: 'Mobilgrease 28', 
    sku: 'MIL-G-81322', 
    manufacturer: 'ExxonMobil', 
    distributor: 'Boeing Distribution Inc.', 
    hasImage: true, 
    category: 'lubricants',
    riskScore: 65,
    obsolescenceWarning: 'High risk due to Eastern European plant in conflict zone',
    obsolescenceWindow: '6–12 months ahead',
    confidence: '78%',
    tags: ['Standard', 'All-Weather']
  },
  { 
    id: 'lub3', 
    title: 'Royco 22', 
    sku: 'MIL-PRF-81322', 
    manufacturer: 'Lanxess', 
    distributor: 'Boeing Distribution Inc.', 
    hasImage: true, 
    category: 'lubricants',
    riskScore: 82,
    obsolescenceWarning: 'PAO base materials from Europe disrupted due to energy cost spike',
    obsolescenceWindow: '3–6 months ahead',
    confidence: '85%',
    tags: ['AOG', 'Hazardous']
  },
  { 
    id: 'lub4', 
    title: 'Aeroshell Fluid 21', 
    sku: 'MIL-H-5606A', 
    manufacturer: 'Shell Aviation', 
    distributor: 'Boeing Distribution Inc.', 
    hasImage: true, 
    category: 'lubricants',
    riskScore: 35,
    obsolescenceWarning: 'French manufacturing plant planning major maintenance',
    obsolescenceWindow: '12–18 months ahead',
    confidence: '70%',
    tags: ['Hydraulic', 'Legacy']
  },
  { 
    id: 'lub5', 
    title: 'Skydrol Hydraulic Fluid', 
    sku: 'AS1241', 
    manufacturer: 'Eastman', 
    distributor: 'Boeing Distribution Inc.', 
    hasImage: true, 
    category: 'lubricants',
    riskScore: 42,
    obsolescenceWarning: 'Hazardous chemical supply restricted by new regulations',
    obsolescenceWindow: '9–15 months ahead',
    confidence: '75%',
    tags: ['Fire-Resistant', 'Critical']
  }
];

export const electronicsData: Product[] = [
  { 
    id: 'ele1', 
    title: 'Flight Control Sensor', 
    sku: 'DO-160G', 
    manufacturer: 'EuroElectronics', 
    distributor: 'Boeing Distribution Inc.', 
    hasImage: false, 
    category: 'electronics',
    riskScore: 72,
    obsolescenceWarning: 'AI predicts FPGA chip shortage due to expanded export controls',
    obsolescenceWindow: '12–18 months ahead',
    confidence: '88%',
    tags: ['Critical', 'Flight-Systems']
  },
  { 
    id: 'ele2', 
    title: 'Pressure Transducer', 
    sku: 'DO-178C', 
    manufacturer: 'Honeywell', 
    distributor: 'Boeing Distribution Inc.', 
    hasImage: false, 
    category: 'electronics',
    riskScore: 35,
    obsolescenceWarning: 'Taiwan plant restructuring may affect supply chain',
    obsolescenceWindow: '18–24 months ahead',
    confidence: '65%',
    tags: ['Standard', 'Hydraulic']
  },
  { 
    id: 'ele3', 
    title: 'Navigation Computer Module', 
    sku: 'ARINC-429', 
    manufacturer: 'Garmin', 
    distributor: 'Boeing Distribution Inc.', 
    hasImage: true, 
    category: 'electronics',
    riskScore: 45,
    obsolescenceWarning: 'Legacy firmware will no longer be supported from 2027',
    obsolescenceWindow: '12–15 months ahead',
    confidence: '80%',
    tags: ['Navigation', 'Legacy']
  },
  { 
    id: 'ele4', 
    title: 'Display Control Unit', 
    sku: 'DO-254', 
    manufacturer: 'Rockwell Collins', 
    distributor: 'Boeing Distribution Inc.', 
    hasImage: true, 
    category: 'electronics',
    riskScore: 58,
    obsolescenceWarning: 'Legacy LCD technology being replaced by OLED',
    obsolescenceWindow: '9–12 months ahead',
    confidence: '82%',
    tags: ['Display', 'Cockpit']
  },
  { 
    id: 'ele5', 
    title: 'Communication Radio', 
    sku: 'RTCA-DO-186', 
    manufacturer: 'Harris', 
    distributor: 'Boeing Distribution Inc.', 
    hasImage: false, 
    category: 'electronics',
    riskScore: 38,
    obsolescenceWarning: 'Radio frequencies limited by new FCC regulations',
    obsolescenceWindow: '15–20 months ahead',
    confidence: '71%',
    tags: ['Communication', 'Avionics']
  }
];

export const sensorsData: Product[] = [
  { 
    id: 'sen1', 
    title: 'Temperature Sensor ASG-TS-01', 
    sku: 'AS9100', 
    manufacturer: 'Boeing OEM', 
    distributor: 'Boeing Distribution Inc.', 
    hasImage: false, 
    category: 'sensors',
    riskScore: 91,
    obsolescenceWarning: 'New REACH 2026 regulations - materials will be banned',
    obsolescenceWindow: '9–12 months ahead',
    confidence: '90%',
    tags: ['Critical', 'Engine', 'High-Risk']
  },
  { 
    id: 'sen2', 
    title: 'Vibration Sensor', 
    sku: 'DO-160', 
    manufacturer: 'Meggitt', 
    distributor: 'Boeing Distribution Inc.', 
    hasImage: false, 
    category: 'sensors',
    riskScore: 44,
    obsolescenceWarning: 'Legacy sensor compounds restricted by environmental regulations',
    obsolescenceWindow: '12–18 months ahead',
    confidence: '76%',
    tags: ['Engine', 'Monitoring']
  },
  { 
    id: 'sen3', 
    title: 'Pressure Sensor', 
    sku: 'AS9100', 
    manufacturer: 'Parker', 
    distributor: 'Boeing Distribution Inc.', 
    hasImage: false, 
    category: 'sensors',
    riskScore: 52,
    obsolescenceWarning: 'Swedish manufacturer discontinuing this product line',
    obsolescenceWindow: '6–9 months ahead',
    confidence: '83%',
    tags: ['Hydraulic', 'Standard']
  },
  { 
    id: 'sen4', 
    title: 'Flow Sensor', 
    sku: 'DO-160', 
    manufacturer: 'Badger Meter', 
    distributor: 'Boeing Distribution Inc.', 
    hasImage: false, 
    category: 'sensors',
    riskScore: 38,
    obsolescenceWarning: 'Legacy flow measurement technology replaced by ultrasonic',
    obsolescenceWindow: '15–24 months ahead',
    confidence: '68%',
    tags: ['Fuel', 'Legacy']
  },
  { 
    id: 'sen5', 
    title: 'Level Sensor', 
    sku: 'AS9100', 
    manufacturer: 'Gems Sensors', 
    distributor: 'Boeing Distribution Inc.', 
    hasImage: false, 
    category: 'sensors',
    riskScore: 29,
    obsolescenceWarning: 'Sensor materials affected by raw material cost increases',
    obsolescenceWindow: '18–30 months ahead',
    confidence: '72%',
    tags: ['Fuel', 'Standard']
  }
];

export const bearingsData: Product[] = [
  { 
    id: 'bear1', 
    title: 'Main Bearing 1234-AB', 
    sku: 'AS81820', 
    manufacturer: 'SKF Aviation', 
    distributor: 'Boeing Distribution Inc.', 
    hasImage: true, 
    category: 'bearings',
    riskScore: 55,
    obsolescenceWarning: 'AI notes increasing risk due to supplier consolidation',
    obsolescenceWindow: '12 months ahead',
    confidence: '84%',
    tags: ['Critical', 'Landing-Gear']
  },
  { 
    id: 'bear2', 
    title: '5935', 
    sku: 'Roller Bearing, Tapered, Single Row', 
    manufacturer: 'Timken', 
    distributor: 'Boeing Distribution Inc.', 
    hasImage: true, 
    category: 'bearings',
    riskScore: 31,
    obsolescenceWarning: 'Eastern European concentrated production may be affected',
    obsolescenceWindow: '12–18 months ahead',
    confidence: '77%',
    tags: ['Standard', 'Rotating']
  },
  { 
    id: 'bear3', 
    title: 'MS21428-5', 
    sku: 'Teflon Lined, Self-Lubricating Bearing', 
    manufacturer: 'NHBB', 
    distributor: 'Boeing Distribution Inc.', 
    hasImage: false, 
    category: 'bearings',
    riskScore: 48,
    obsolescenceWarning: 'Legacy Teflon materials restricted by new regulations',
    obsolescenceWindow: '9–15 months ahead',
    confidence: '79%',
    tags: ['Self-Lubricating', 'Flight-Control']
  },
  { 
    id: 'bear4', 
    title: 'BACB10FV06K', 
    sku: 'Bush, Sleeve, Flanged, Press Fit', 
    manufacturer: 'The Boeing Company', 
    distributor: 'Commercial Capital', 
    hasImage: true, 
    tags: ['AOG', 'OEM'],
    category: 'bearings',
    riskScore: 25,
    obsolescenceWarning: 'Boeing plant transitioning production to new lines',
    obsolescenceWindow: '18–24 months ahead',
    confidence: '69%'
  },
  { 
    id: 'bear5', 
    title: 'MS14101-4', 
    sku: 'Bearing, Roller, Rod End, Self-Aligning', 
    manufacturer: 'Schaeffler Group USA Inc', 
    distributor: 'Commercial Capital', 
    hasImage: true, 
    category: 'bearings',
    riskScore: 41,
    obsolescenceWarning: 'Legacy bearing technology replaced by ceramic hybrid',
    obsolescenceWindow: '15–20 months ahead',
    confidence: '73%',
    tags: ['Rod-End', 'Control-Surface']
  }
];

// Function to get products by category
export const getProductsByCategory = (category: string): Product[] => {
  switch (category) {
    case 'lubricants':
      return lubricantsData;
    case 'electronics':
      return electronicsData;
    case 'sensors':
      return sensorsData;
    case 'bearings':
      return bearingsData;
    default:
      return [];
  }
};

export const mockProducts: Product[] = [
  { id: '1', title: '5935', sku: 'Roller Bearing, Tapered, Single Row, 1.25" ID, Straight Bore, Steel', manufacturer: 'Timken', distributor: 'Boeing Distribution Inc. Formally Aviall', hasImage: true },
  { id: '2', title: 'MS21428-5', sku: 'Teflon Lined, Self-Lubricating, Plain Spherical Roller Bearing, .3125" ID x .8125" OD x .375" W', manufacturer: 'NHBB (New Hampshire Ball Bearings)', distributor: 'Boeing Distribution Inc. Formally Aviall', hasImage: false },
  { id: '3', title: 'BACB10FV06K', sku: 'Bush, Sleeve, Flanged, Press Fit', manufacturer: 'The Boeing Company', distributor: 'Commercial Capital', hasImage: true, tags: ['AOG'] },
  { id: '4', title: 'MS14101-4', sku: 'Bearing, Roller, Rod End, Self-Aligning', manufacturer: 'Schaeffler Group USA Inc', distributor: 'Commercial Capital', hasImage: true },
  { id: '5', title: 'KP3A', sku: 'Bearing, Ball, Airframe, Anti-Friction, Heavy Duty', manufacturer: 'Kamatics Corporation', distributor: 'Boeing Distribution Inc. Formally Aviall', hasImage: false }
];

export const filters = [
  {
    title: 'Availability',
    options: [{ label: 'In Stock', count: 1240 }, { label: 'Out of Stock', count: 48 }],
  },
  {
    title: 'Product Type',
    options: [
      { label: 'Ball Bearing', count: 854 }, { label: 'Roller Bearing', count: 621 },
      { label: 'Rod End Bearing', count: 312 }, { label: 'Spherical Bearing', count: 189 },
    ],
  },
  {
    title: 'Condition',
    options: [{ label: 'New', count: 1800 }, { label: 'Overhauled', count: 150 }, { label: 'Repaired', count: 65 }],
  }
];