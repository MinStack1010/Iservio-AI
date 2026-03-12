
"use client" 
import { ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { useProductStore } from '../../../stores/productsStore';

export default function MainContent() {
  const products = useProductStore((state) => state.filteredProducts);
  const searchQuery = useProductStore((state) => state.searchQuery);
  
  return (
    <div className="w-full md:w-3/4 lg:w-4/5">

      {searchQuery && (
        <div className="bg-[#11151C] border border-[#1E2532] p-3 rounded-sm mb-4 flex justify-between items-center">
          <span className="text-xs text-gray-400">
            Found <strong className="text-white">{products.length}</strong> results for "{searchQuery}"
          </span>
        </div>
      )}
 
      <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-50 dark:bg-[#11151C] p-3 border border-gray-200 dark:border-[#1E2532] rounded-sm mb-4">
        <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">Showing 1-20 of 15,310 results</span>
        <div className="flex items-center mt-2 sm:mt-0">
          <label className="text-xs text-gray-600 dark:text-gray-400 mr-2 font-medium">Sort By:</label>
          <select className="border border-gray-300 dark:border-[#323B49] text-xs py-1.5 px-3 rounded-sm bg-white dark:bg-[#0A0D14] dark:text-white focus:outline-none focus:border-[#10B981] transition-colors">
            <option>Best Match</option>
            <option>Part Number (A-Z)</option>
            <option>Part Number (Z-A)</option>
          </select>
        </div>
      </div>

      <div className="border border-gray-200 dark:border-[#1E2532] rounded-sm bg-white dark:bg-[#11151C] flex flex-col">
        {products.map((product, index) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            isLast={index === products.length - 1} 
          />
        ))}
      </div>

      <div className="flex justify-center items-center mt-8 gap-1">
        <button className="p-1 border border-transparent hover:bg-gray-100 dark:hover:bg-[#1E2532] text-gray-500 disabled:opacity-50 transition-colors"><ChevronRight className="w-4 h-4 rotate-180" /></button>
        <button className="px-3 py-1 text-sm font-bold bg-[#1E2532] dark:bg-[#323B49] text-white rounded-sm">1</button>
        <button className="px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#1E2532] rounded-sm transition-colors">2</button>
        <button className="px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#1E2532] rounded-sm transition-colors">3</button>
        <button className="px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#1E2532] rounded-sm transition-colors">4</button>
        <span className="px-2 text-gray-400">...</span>
        <button className="p-1 border border-transparent hover:bg-gray-100 dark:hover:bg-[#1E2532] text-gray-500 transition-colors"><ChevronRight className="w-4 h-4" /></button>
      </div>

    </div>
  );
}