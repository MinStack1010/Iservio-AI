import { useState } from 'react';
import { Search, Upload, Plus, ArrowRight, Globe, FileText, Calendar, TrendingUp } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'Factory Fire Disrupts Global Aerospace Lubricant Supply Chain',
    source: 'Aviation Week',
    url: 'aviationweek.com',
    date: '2026-03-10',
    domain: 'Lubricants / Oils / Greases',
    summary: 'AI detected: A major fire at an aerospace lubricant plant in Hamburg, Germany may disrupt global supply. The facility supplies roughly 30% of turbine lubricant output for the European market.',
    aiConfidence: 94,
    inSystem: false,
    keywords: ['lubricant', 'fire', 'supply chain', 'Hamburg']
  },
  {
    id: 2,
    title: 'New EU Regulations on Chemical Usage in Aerospace Manufacturing',
    source: 'Reuters',
    url: 'reuters.com',
    date: '2026-03-08',
    domain: 'Lubricants / Oils / Greases',
    summary: 'AI detected: The European Union issued new rules on chemical usage in aerospace manufacturing, requiring manufacturers to switch to environmentally friendly lubricants before 2028. This may impact 45 current suppliers.',
    aiConfidence: 87,
    inSystem: true,
    keywords: ['regulation', 'EU', 'chemicals', 'compliance']
  },
  {
    id: 3,
    title: 'Asian Ports Face Logistics Delays Due to Equipment Shortage',
    source: 'Lloyd\'s List',
    url: 'lloydslist.com',
    date: '2026-03-07',
    domain: 'Logistics',
    summary: 'AI detected: Asian ports are experiencing delays due to container-handling equipment shortages. This may impact shipments of avionics and electronic components from Asia to other markets.',
    aiConfidence: 76,
    inSystem: false,
    keywords: ['logistics', 'port', 'delay', 'Asia']
  },
  {
    id: 4,
    title: 'Titanium Raw Material Shortage Threatens Aircraft Production',
    source: 'Metal Bulletin',
    url: 'metalbulletin.com',
    date: '2026-03-09',
    domain: 'Engine Components',
    summary: 'AI detected: Titanium raw material supply is severely constrained due to export restrictions from key producers. Titanium is a critical material for engine and airframe production.',
    aiConfidence: 91,
    inSystem: true,
    keywords: ['titanium', 'raw material', 'shortage', 'production']
  },
  {
    id: 5,
    title: 'Strike at French Electronics Manufacturing Plant',
    source: 'Financial Times',
    url: 'ft.com',
    date: '2026-03-11',
    domain: 'Aircraft Electronic Components',
    summary: 'AI detected: Workers at Europe’s largest aerospace electronics plant in Lyon, France have started a strike demanding higher pay. The plant produces critical sensors and control systems.',
    aiConfidence: 83,
    inSystem: false,
    keywords: ['strike', 'electronics', 'France', 'production']
  },
  {
    id: 6,
    title: 'Breakthrough in Synthetic Aviation Fuel Development',
    source: 'Science Daily',
    url: 'sciencedaily.com',
    date: '2026-03-06',
    domain: 'Materials',
    summary: 'AI detected: Scientists have developed a new synthetic aviation fuel that could reduce carbon emissions by 80%. This technology could reshape the aviation industry in the near future.',
    aiConfidence: 89,
    inSystem: false,
    keywords: ['fuel', 'innovation', 'sustainable', 'technology']
  }
];

export function KnowledgeFeed() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('all');

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Knowledge Feed
        </h1>
        <p className="text-slate-600">
          AI knowledge base — manage articles and information sources
        </p>
      </div>

      {/* AI Search Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-6 mb-6 text-white">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-3xl">🤖</div>
          <div>
            <h2 className="font-semibold text-lg">AI Search Assistant</h2>
            <p className="text-blue-100 text-sm">Ask AI to search for relevant news and reports</p>
          </div>
        </div>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-200" />
          <input
            type="text"
            placeholder="Example: Find news about a fire at an aerospace parts plant..."
            className="w-full pl-12 pr-32 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:bg-white/20"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors">
            Search with AI
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mb-6">
        <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
          <Upload className="w-5 h-5" />
          <span>Upload PDF</span>
        </button>
        <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
          <Plus className="w-5 h-5" />
          <span>Add data source</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg border border-slate-200 p-4 mb-6">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Filter by domain
            </label>
            <select 
              value={selectedDomain}
              onChange={(e) => setSelectedDomain(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All domains</option>
              <option value="lubricants">Lubricants / Oils / Greases</option>
              <option value="electronics">Aircraft Electronic Components</option>
              <option value="hydraulics">Hydraulic Systems</option>
              <option value="engines">Engine Components</option>
            </select>
          </div>
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Status
            </label>
            <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All</option>
              <option>Added to system</option>
              <option>Not analyzed</option>
            </select>
          </div>
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Sort by
            </label>
            <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Newest</option>
              <option>Highest AI confidence</option>
              <option>Relevance</option>
            </select>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg p-4 border border-slate-200">
          <div className="text-sm text-slate-600 mb-1">Total articles</div>
          <div className="text-2xl font-bold text-slate-900">2,847</div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-slate-200">
          <div className="text-sm text-slate-600 mb-1">Analyzed</div>
          <div className="text-2xl font-bold text-blue-600">2,143</div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-slate-200">
          <div className="text-sm text-slate-600 mb-1">Pending</div>
          <div className="text-2xl font-bold text-orange-600">704</div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-slate-200">
          <div className="text-sm text-slate-600 mb-1">Average accuracy</div>
          <div className="text-2xl font-bold text-green-600">87%</div>
        </div>
      </div>

      {/* Articles List */}
      <div className="space-y-4">
        {articles.map((article) => (
          <div 
            key={article.id}
            className="bg-white rounded-lg border border-slate-200 hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-lg text-slate-900">
                      {article.title}
                    </h3>
                    {article.inSystem && (
                      <span className="px-2.5 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        In system
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                    <span className="flex items-center gap-1">
                      <Globe className="w-4 h-4" />
                      {article.source}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FileText className="w-4 h-4" />
                      {article.domain}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500">AI Confidence:</span>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      article.aiConfidence >= 90 ? 'bg-green-100 text-green-700' :
                      article.aiConfidence >= 80 ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {article.aiConfidence}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="bg-slate-50 rounded-lg p-4 mb-4">
                <div className="text-sm text-slate-700 leading-relaxed">
                  {article.summary}
                </div>
              </div>

              {/* Keywords */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs text-slate-500">Keywords:</span>
                <div className="flex flex-wrap gap-2">
                  {article.keywords.map((keyword, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                {!article.inSystem && (
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Plus className="w-4 h-4" />
                    <span className="text-sm font-medium">Add to analysis system</span>
                  </button>
                )}
                <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors">
                  <span className="text-sm font-medium">View original</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors text-sm font-medium">
                  Detailed analysis
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="mt-8 text-center">
        <button className="px-8 py-3 bg-white border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors">
          Load more articles
        </button>
      </div>
    </div>
  );
}
