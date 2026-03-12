// src/components/products/Breadcrumb.tsx
import { ChevronRight } from 'lucide-react';

export default function Breadcrumb() {
  return (
    <nav className="flex items-center text-[11px] text-gray-500 mb-6">
      <a href="#" className="hover:text-[#0033A0]">Home</a>
      <ChevronRight className="w-3 h-3 mx-1" />
      <a href="#" className="hover:text-[#0033A0]">All Products</a>
      <ChevronRight className="w-3 h-3 mx-1" />
      <a href="#" className="hover:text-[#0033A0]">Hardware & Standard Parts</a>
      <ChevronRight className="w-3 h-3 mx-1" />
      <span className="text-gray-800 font-semibold">Bearings</span>
    </nav>
  );
}