// src/stores/productsStore.ts
import { create } from 'zustand';
import { Product, mockProducts } from '../lib/mockData';

interface ProductState {
  allProducts: Product[];
  filteredProducts: Product[];
  searchQuery: string;
  isDark: boolean;
  selectedProduct: Product | null;
  
  setSearchQuery: (query: string) => void;
  toggleTheme: () => void; 
  setSelectedProduct: (product: Product) => void;
}

export const useProductStore = create<ProductState>((set) => ({
  allProducts: mockProducts,
  filteredProducts: mockProducts,
  searchQuery: '',
  isDark: false,
  selectedProduct: null,

  setSearchQuery: (query) => set((state) => ({
    searchQuery: query,
    filteredProducts: state.allProducts.filter(p => 
      p.title.toLowerCase().includes(query.toLowerCase()) || 
      p.sku.toLowerCase().includes(query.toLowerCase())
    )
  })),

  toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
  setSelectedProduct: (product) => set({ selectedProduct: product }),
}));