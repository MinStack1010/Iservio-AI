import { useState } from 'react';
import { Plus, FileText, AlertTriangle, Building2, Search, X } from 'lucide-react';

const domains = [
  {
    id: 1,
    name: 'Lubricants / Oils / Greases',
    description: 'Track lubricants, oils, and greases used in aircraft engines and systems',
    articles: 847,
    events: 12,
    suppliers: 18,
    status: 'active',
    keywords: ['lubricant', 'oil', 'grease', 'aerospace lubrication'],
    sources: ['news', 'reports', 'pdf']
  },
  {
    id: 2,
    name: 'Aircraft Electronic Components',
    description: 'Monitor avionics and electronic components, including sensors, microchips, and control systems',
    articles: 623,
    events: 9,
    suppliers: 24,
    status: 'active',
    keywords: ['avionics', 'electronic components', 'sensors', 'aircraft control systems'],
    sources: ['news', 'reports']
  },
  {
    id: 3,
    name: 'Hydraulic Systems',
    description: 'Track aircraft hydraulic systems and related components',
    articles: 412,
    events: 8,
    suppliers: 14,
    status: 'active',
    keywords: ['hydraulic', 'fluid systems', 'actuators', 'hydraulic pumps'],
    sources: ['news', 'pdf']
  },
  {
    id: 4,
    name: 'Engine Components',
    description: 'Monitor aircraft engine components, turbines, and related parts',
    articles: 965,
    events: 7,
    suppliers: 31,
    status: 'active',
    keywords: ['turbine', 'engine parts', 'jet engine', 'combustion chamber'],
    sources: ['news', 'reports', 'pdf']
  }
];

export function MonitoringDomains() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Monitoring Categories
          </h1>
          <p className="text-slate-600">
            Manage monitoring categories across the aerospace supply chain
          </p>
        </div>
        <button 
          onClick={() => setShowCreateForm(true)}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>Create new category</span>
        </button>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search domains..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Domains Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {domains.map((domain) => (
          <div 
            key={domain.id}
            className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">
                    {domain.name}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {domain.description}
                  </p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                  Active
                </span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-slate-200 my-4">
                <div>
                  <div className="flex items-center gap-2 text-slate-600 mb-1">
                    <FileText className="w-4 h-4" />
                    <span className="text-xs">Articles</span>
                  </div>
                  <div className="font-semibold text-slate-900">
                    {domain.articles.toLocaleString()}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-slate-600 mb-1">
                    <AlertTriangle className="w-4 h-4" />
                    <span className="text-xs">Events</span>
                  </div>
                  <div className="font-semibold text-slate-900">
                    {domain.events}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-slate-600 mb-1">
                    <Building2 className="w-4 h-4" />
                    <span className="text-xs">Suppliers</span>
                  </div>
                  <div className="font-semibold text-slate-900">
                    {domain.suppliers}
                  </div>
                </div>
              </div>

              {/* Keywords */}
              <div className="mb-4">
                <div className="text-xs text-slate-500 mb-2">Keywords:</div>
                <div className="flex flex-wrap gap-2">
                  {domain.keywords.map((keyword, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button className="flex-1 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium">
                  View details
                </button>
                <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors text-sm font-medium">
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create Domain Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-200 flex items-center justify-between sticky top-0 bg-white">
              <h2 className="text-xl font-bold text-slate-900">
                Create new domain
              </h2>
              <button 
                onClick={() => setShowCreateForm(false)}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              <form className="space-y-6">
                {/* Domain Name */}
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Domain name *
                  </label>
                  <input
                    type="text"
                    placeholder="Example: Composite Materials"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Description
                  </label>
                  <textarea
                    rows={3}
                    placeholder="A short description of this domain..."
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Keywords */}
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Tracking keywords *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter keywords, separated by commas"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <p className="text-xs text-slate-500 mt-2">
                    Example: composite, carbon fiber, aircraft materials
                  </p>
                </div>

                {/* Related Suppliers */}
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Related suppliers (optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Select suppliers..."
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Data Sources */}
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Data sources *
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 p-3 border border-slate-300 rounded-lg cursor-pointer hover:bg-slate-50">
                      <input type="checkbox" className="w-4 h-4" defaultChecked />
                      <div>
                        <div className="font-medium text-slate-900">News</div>
                        <div className="text-xs text-slate-500">Track news from trusted sources</div>
                      </div>
                    </label>
                    <label className="flex items-center gap-3 p-3 border border-slate-300 rounded-lg cursor-pointer hover:bg-slate-50">
                      <input type="checkbox" className="w-4 h-4" defaultChecked />
                      <div>
                        <div className="font-medium text-slate-900">Industry reports</div>
                        <div className="text-xs text-slate-500">Analyze reports and research publications</div>
                      </div>
                    </label>
                    <label className="flex items-center gap-3 p-3 border border-slate-300 rounded-lg cursor-pointer hover:bg-slate-50">
                      <input type="checkbox" className="w-4 h-4" />
                      <div>
                        <div className="font-medium text-slate-900">File PDF</div>
                        <div className="text-xs text-slate-500">Upload and analyze PDF files</div>
                      </div>
                    </label>
                  </div>
                </div>

                {/* AI Notice */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex gap-3">
                    <div className="text-2xl">🤖</div>
                    <div>
                      <div className="font-medium text-blue-900 mb-1">
                        AI will monitor automatically
                      </div>
                      <div className="text-sm text-blue-700">
                        After you create a domain, AI will automatically collect and analyze related information from the selected data sources.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowCreateForm(false)}
                    className="flex-1 px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Create domain
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
