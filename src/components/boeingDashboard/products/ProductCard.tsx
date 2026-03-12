"use client";
import { Image as ImageIcon, Truck } from 'lucide-react';
import { Product } from '../../../lib/mockData';
import { useNavigate } from 'react-router'
import { useProductStore } from '../../../stores/productsStore';

export default function ProductCard({ product, isLast }: { product: Product, isLast: boolean }) {
  const setSelectedProduct = useProductStore((state) => state.setSelectedProduct);
  const navigate = useNavigate();

  const handleViewDetail = () => {
    setSelectedProduct(product);
    navigate('/dashboard/products/details');
  };
  return (
    <div className={`p-4 flex flex-col sm:flex-row gap-6 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors ${!isLast ? 'border-b border-gray-200 dark:border-[#1E2532]' : ''}`}>
      
      <div className="w-24 h-24 flex-shrink-0 border border-gray-200 dark:border-[#1E2532] rounded flex items-center justify-center bg-gray-50 dark:bg-[#0A0D14]">
        {product.hasImage ? (
          <ImageIcon className="w-8 h-8 text-gray-400 dark:text-gray-600" />
        ) : (
          <span className="text-[9px] text-gray-400 text-center uppercase tracking-wider px-2">Image<br/>Unavailable</span>
        )}
      </div>

      <div className="flex-grow flex flex-col justify-center">
        <a href="" className="text-gray-900 dark:text-gray-100 font-bold text-lg hover:text-[#10B981] dark:hover:text-[#10B981] transition-colors cursor-pointer">
          {product.title}
        </a>
        <p className="text-xs text-gray-800 dark:text-[#9BA3AF] font-medium mt-1 leading-relaxed max-w-2xl">{product.sku}</p>
        
        <div className="flex items-center gap-4 mt-3 text-[11px] text-gray-500 dark:text-gray-400">
          <span className="flex items-center"><Truck className="w-3.5 h-3.5 mr-1" /> {product.manufacturer}</span>
          {product.tags?.includes('AOG') && (
            <span className="bg-red-100 dark:bg-red-500/10 text-red-700 dark:text-red-500 dark:border dark:border-red-500/20 font-bold px-1.5 py-0.5 rounded text-[9px] uppercase">
              AOG Supported
            </span>
          )}
        </div>
      </div>

      <div className="sm:w-64 flex-shrink-0 flex flex-col justify-center sm:items-end sm:text-right mt-4 sm:mt-0">
        <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium mb-2 uppercase tracking-wide">
          {product.distributor}
        </span>

        <button 
        onClick={handleViewDetail}
        className="w-full bg-[#1E2532] hover:bg-[#323B49] text-white dark:border dark:border-[#323B49] text-xs font-bold py-2.5 px-4 rounded-sm transition-colors shadow-sm flex items-center justify-center">
          Go to view product
        </button>
      </div>
    </div>
  );
}