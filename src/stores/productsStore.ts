// src/stores/productsStore.ts
import { create } from 'zustand';
import { Product, mockProducts } from '../lib/mockData';

interface ProductState {
  allProducts: Product[];
  filteredProducts: Product[];
  searchQuery: string;
  isDark: boolean;
  selectedProduct: Product | null;
  manufacturerFilter: string[];

  setSearchQuery: (query: string) => void;
  toggleTheme: () => void; 
  setSelectedProduct: (product: Product) => void;
  toggleManufacturerFilter: (manufacturer: string) => void;
  clearFilters: () => void;
}

const applyFilters = (
  allProducts: Product[],
  searchQuery: string,
  manufacturerFilter: string[],
) => {
  return allProducts.filter((p) => {
    const matchesSearch =
      !searchQuery ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.sku.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesManufacturer =
      manufacturerFilter.length === 0 || manufacturerFilter.includes(p.manufacturer);

    return matchesSearch && matchesManufacturer;
  });
};

export const useProductStore = create<ProductState>((set) => ({
  allProducts: mockProducts,
  filteredProducts: mockProducts,
  searchQuery: '',
  isDark: false,
  selectedProduct: null,
  manufacturerFilter: [],

  setSearchQuery: (query) =>
    set((state) => ({
      searchQuery: query,
      filteredProducts: applyFilters(state.allProducts, query, state.manufacturerFilter),
    })),

  toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
  setSelectedProduct: (product) => set({ selectedProduct: product }),

  toggleManufacturerFilter: (manufacturer) =>
    set((state) => {
      const exists = state.manufacturerFilter.includes(manufacturer);
      const nextFilter = exists
        ? state.manufacturerFilter.filter((m) => m !== manufacturer)
        : [...state.manufacturerFilter, manufacturer];

      return {
        manufacturerFilter: nextFilter,
        filteredProducts: applyFilters(state.allProducts, state.searchQuery, nextFilter),
      };
    }),

  clearFilters: () =>
    set((state) => ({
      searchQuery: '',
      manufacturerFilter: [],
      filteredProducts: state.allProducts,
    })),
}));