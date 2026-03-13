"use client";

import { useMemo, useState } from 'react';
import { ChevronRight, AlertTriangle, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useProductStore } from '../../../stores/productsStore';

const PAGE_SIZE = 10;

export default function MainContent() {
  const products = useProductStore((state) => state.filteredProducts);
  const searchQuery = useProductStore((state) => state.searchQuery);
  const setSelectedProduct = useProductStore((state) => state.setSelectedProduct);
  const navigate = useNavigate();

  const [page, setPage] = useState(1);

  const { totalPages, pageItems, from, to } = useMemo(() => {
    const total = products.length;
    const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
    const currentPage = Math.min(page, totalPages);
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    return {
      totalPages,
      pageItems: products.slice(startIndex, endIndex),
      from: total === 0 ? 0 : startIndex + 1,
      to: Math.min(endIndex, total),
    };
  }, [products, page]);

  const handleOpenDetails = (product: any) => {
    setSelectedProduct(product);
    // Navigate with state to indicate we're going to details
    navigate('/dashboard/products/details', { state: { from: 'components' } });
  };

  const getRiskColor = (score: number) => {
    if (score > 70) return "text-red-600";
    if (score > 45) return "text-yellow-600";
    return "text-emerald-600";
  };

  const getRiskBg = (score: number) => {
    if (score > 70) return "bg-red-50 dark:bg-red-900/10";
    if (score > 45) return "bg-orange-50 dark:bg-orange-900/10";
    return "bg-emerald-50 dark:bg-emerald-900/10";
  };

  const getTagColor = (tag: string) => {
    switch (tag.toLowerCase()) {
      case 'aog':
        return 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400';
      case 'critical':
        return 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400';
      case 'hazardous':
        return 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400';
      case 'high-risk':
        return 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400';
      case 'legacy':
        return 'bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-400';
      case 'oem':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400';
      default:
        return 'bg-slate-100 dark:bg-slate-900/30 text-slate-700 dark:text-slate-400';
    }
  };

  return (
    <div className="flex-1 min-w-0">
      {searchQuery && (
        <div className="mb-4 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800/50">
          <span className="text-sm text-blue-800 dark:text-blue-200">
            Found <strong>{products.length}</strong> results for &quot;{searchQuery}&quot;
          </span>
        </div>
      )}

      <div className="flex flex-col sm:flex-row justify-between items-center gap-2 mb-4">
        <span className="text-sm text-slate-600 dark:text-slate-400">
          Showing {from}–{to} of {products.length} results
        </span>
        <div className="flex items-center gap-2">
          <label className="text-sm text-slate-600 dark:text-slate-400">Sort:</label>
          <select className="text-sm py-1.5 px-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Best Match</option>
            <option>Part Number (A–Z)</option>
            <option>Part Number (Z–A)</option>
          </select>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm overflow-hidden overflow-x-auto custom-scrollbar">
        <table className="w-full text-sm min-w-[800px]">
          <thead className="bg-slate-50 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400">
            <tr>
              <th className="px-5 py-3 text-left font-semibold">Part Number</th>
              <th className="px-5 py-3 text-left font-semibold">Description</th>
              <th className="px-5 py-3 text-left font-semibold">Manufacturer</th>
              <th className="px-5 py-3 text-center font-semibold">Risk Score</th>
              <th className="px-5 py-3 text-left font-semibold">Obsolescence Warning</th>
              <th className="px-5 py-3 text-center font-semibold">Tags</th>
              <th className="px-5 py-3 text-center font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {pageItems.length === 0 && (
              <tr>
                <td colSpan={7} className="px-5 py-12 text-center text-slate-500 dark:text-slate-400">
                  No products found. Try adjusting your filters.
                </td>
              </tr>
            )}
            {pageItems.map((product) => (
              <tr
                key={product.id}
                className="border-t border-slate-100 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors"
              >
                <td className="px-5 py-3.5 align-top">
                  <button
                    onClick={() => handleOpenDetails(product)}
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-left"
                  >
                    {product.title}
                  </button>
                </td>
                <td className="px-5 py-3.5 align-top text-slate-600 dark:text-slate-400 max-w-[200px] truncate" title={product.sku}>
                  {product.sku}
                </td>
                <td className="px-5 py-3.5 align-top text-slate-700 dark:text-slate-300">
                  {product.manufacturer}
                </td>
                <td className="px-5 py-3.5 align-top text-center">
                  {product.riskScore !== undefined ? (
                    <div className="flex items-center justify-center gap-1">
                      <TrendingUp className={`w-4 h-4 ${getRiskColor(product.riskScore)}`} />
                      <span className={`font-medium ${getRiskColor(product.riskScore)}`}>
                        {product.riskScore}
                      </span>
                    </div>
                  ) : (
                    <span className="text-slate-400">-</span>
                  )}
                </td>
                <td className="px-5 py-3.5 align-top">
                  {product.obsolescenceWarning ? (
                    <div className="max-w-[300px]">
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        <div className="space-y-1">
                          <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                            {product.obsolescenceWarning}
                          </p>
                          {product.obsolescenceWindow && (
                            <div className="flex items-center gap-2">
                              <span className={`inline-flex px-2 py-0.5 rounded text-xs font-medium ${getRiskBg(product.riskScore || 0)} ${getRiskColor(product.riskScore || 0)}`}>
                                {product.obsolescenceWindow}
                              </span>
                              {product.confidence && (
                                <span className="text-xs text-slate-500">
                                  ({product.confidence})
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <span className="text-slate-400">No warnings</span>
                  )}
                </td>
                <td className="px-5 py-3.5 align-top text-center">
                  {product.tags && product.tags.length > 0 ? (
                    <div className="flex flex-wrap gap-1 justify-center">
                      {product.tags.map((tag, index) => (
                        <span
                          key={index}
                          className={`inline-flex px-2 py-0.5 rounded text-xs font-medium ${getTagColor(tag)}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="text-slate-400 text-xs">No tags</span>
                  )}
                </td>
                <td className="px-5 py-3.5 align-top text-center">
                  <button
                    onClick={() => handleOpenDetails(product)}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 text-white transition-colors"
                  >
                    View details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {products.length > 0 && totalPages > 1 && (
        <div className="flex justify-center items-center mt-6 gap-1">
          <button
            disabled={page <= 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
          </button>
          {Array.from({ length: Math.min(totalPages, 7) }).map((_, idx) => {
            const pageNumber = idx + 1;
            const isActive = pageNumber === page;
            return (
              <button
                key={pageNumber}
                onClick={() => setPage(pageNumber)}
                className={`min-w-[36px] h-9 px-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {pageNumber}
              </button>
            );
          })}
          <button
            disabled={page >= totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
