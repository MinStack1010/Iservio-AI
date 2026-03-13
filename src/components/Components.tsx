'use client';

import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import {
  ArrowLeft, Search,
  Flame, ShieldAlert
} from "lucide-react";
import { useProductStore } from "../stores/productsStore";
import DashboardProducts from '../app/dashboard/products/page';
import { getProductsByCategory } from "../lib/mockData";


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



export default function Components() {
  const navigate = useNavigate();
  const location = useLocation();
  const setSelectedProduct = useProductStore((state) => state.setSelectedProduct);
  const setCategory = useProductStore((state) => state.setCategory);
  const clearFilters = useProductStore((state) => state.clearFilters);
  const setNavigationState = useProductStore((state) => state.setNavigationState);
  const setCurrentView = useProductStore((state) => state.setCurrentView);
  const setCurrentSelectedCategory = useProductStore((state) => state.setCurrentSelectedCategory);
  
  // Use store state instead of local state
  const view = useProductStore((state) => state.currentView);
  const selectedCategory = useProductStore((state) => state.currentSelectedCategory);

  // Reset to categories view when navigating from other pages (not from product details)
  useEffect(() => {
    // Check if we're returning from product details
    if (location.state?.returningFromDetails) {
      // Keep the current state when returning from details
      // Clear the state to prevent issues on refresh
      navigate(location.pathname, { replace: true, state: null });
    } else {
      // If we're not returning from details, reset to categories view
      setCurrentView("categories");
      setCurrentSelectedCategory(null);
      setCategory(null);
      clearFilters();
    }
  }, [location.state, setCurrentView, setCurrentSelectedCategory, setCategory, clearFilters, navigate]);



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
              setCurrentView("categories");
              setCurrentSelectedCategory(null);
              setCategory(null);
              clearFilters();
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
                setCurrentSelectedCategory(cat);
                setCurrentView("components");
                setCategory(cat.id);
                clearFilters();
                setNavigationState("components", cat);
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