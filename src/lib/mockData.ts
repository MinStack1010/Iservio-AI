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
}

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