import React from 'react';
import { Package, AlertTriangle, CheckCircle, Clock, Building2, TrendingUp } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const components = [
  {
    id: 1,
    name: 'Turbine Oil',
    category: 'Lubricants',
    supplier: 'LubeTech GmbH',
    status: 'high',
    riskSignals: 3,
    lastCheck: '2026-03-12',
    criticalityScore: 9.2,
    stockLevel: 'Low',
    alternativeSuppliers: 2
  },
  {
    id: 2,
    name: 'Aircraft Grease',
    category: 'Lubricants',
    supplier: 'LubeTech GmbH',
    status: 'high',
    riskSignals: 3,
    lastCheck: '2026-03-12',
    criticalityScore: 8.5,
    stockLevel: 'Medium',
    alternativeSuppliers: 3
  },
  {
    id: 3,
    name: 'Flight Control Sensors',
    category: 'Electronics',
    supplier: 'EuroElectronics SA',
    status: 'medium',
    riskSignals: 2,
    lastCheck: '2026-03-12',
    criticalityScore: 9.8,
    stockLevel: 'High',
    alternativeSuppliers: 1
  },
  {
    id: 4,
    name: 'Navigation Units',
    category: 'Electronics',
    supplier: 'EuroElectronics SA',
    status: 'medium',
    riskSignals: 2,
    lastCheck: '2026-03-12',
    criticalityScore: 9.5,
    stockLevel: 'Medium',
    alternativeSuppliers: 2
  },
  {
    id: 5,
    name: 'Hydraulic Oil',
    category: 'Hydraulics',
    supplier: 'Nordic Hydraulics AB',
    status: 'safe',
    riskSignals: 0,
    lastCheck: '2026-03-12',
    criticalityScore: 7.8,
    stockLevel: 'High',
    alternativeSuppliers: 4
  },
  {
    id: 6,
    name: 'Hydraulic Pumps',
    category: 'Hydraulics',
    supplier: 'Nordic Hydraulics AB',
    status: 'safe',
    riskSignals: 0,
    lastCheck: '2026-03-12',
    criticalityScore: 8.2,
    stockLevel: 'High',
    alternativeSuppliers: 3
  },
  {
    id: 7,
    name: 'Titanium Alloy Sheets',
    category: 'Materials',
    supplier: 'TitanSource Ltd',
    status: 'high',
    riskSignals: 2,
    lastCheck: '2026-03-12',
    criticalityScore: 9.0,
    stockLevel: 'Low',
    alternativeSuppliers: 1
  },
  {
    id: 8,
    name: 'Carbon Fiber Panels',
    category: 'Materials',
    supplier: 'Advanced Composites Inc.',
    status: 'safe',
    riskSignals: 0,
    lastCheck: '2026-03-12',
    criticalityScore: 8.7,
    stockLevel: 'High',
    alternativeSuppliers: 2
  },
  {
    id: 9,
    name: 'Engine Mounting Bolts',
    category: 'Fasteners',
    supplier: 'AeroFix Components',
    status: 'high',
    riskSignals: 1,
    lastCheck: '2026-03-12',
    criticalityScore: 7.5,
    stockLevel: 'Critical',
    alternativeSuppliers: 5
  },
  {
    id: 10,
    name: 'Circuit Boards',
    category: 'Electronics',
    supplier: 'Pacific Electronics Corp',
    status: 'medium',
    riskSignals: 1,
    lastCheck: '2026-03-12',
    criticalityScore: 8.9,
    stockLevel: 'Medium',
    alternativeSuppliers: 2
  }
];

const statusDistribution = [
  { name: 'High risk', value: 27, color: '#ef4444' },
  { name: 'Warning', value: 38, color: '#f59e0b' },
  { name: 'Safe', value: 85, color: '#10b981' }
];

const categoryRisk = [
  { category: 'Lubricants', high: 5, medium: 2, low: 1 },
  { category: 'Electronics', high: 3, medium: 8, low: 4 },
  { category: 'Hydraulics', high: 1, medium: 3, low: 6 },
  { category: 'Materials', high: 4, medium: 5, low: 3 },
  { category: 'Fasteners', high: 2, medium: 1, low: 5 }
];

export function Components() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'high': return { bg: 'bg-red-100', text: 'text-red-700', dot: 'bg-red-500' };
      case 'medium': return { bg: 'bg-orange-100', text: 'text-orange-700', dot: 'bg-orange-500' };
      case 'safe': return { bg: 'bg-green-100', text: 'text-green-700', dot: 'bg-green-500' };
      default: return { bg: 'bg-slate-100', text: 'text-slate-700', dot: 'bg-slate-500' };
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'high': return 'High risk';
      case 'medium': return 'Warning';
      case 'safe': return 'Safe';
      default: return status;
    }
  };

  const getStockColor = (level: string) => {
    switch (level) {
      case 'Critical': return 'text-red-600';
      case 'Low': return 'text-orange-600';
      case 'Medium': return 'text-yellow-600';
      case 'High': return 'text-green-600';
      default: return 'text-slate-600';
    }
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Components
        </h1>
        <p className="text-slate-600">
          Track aircraft parts and materials
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg p-4 border border-slate-200">
          <div className="text-sm text-slate-600 mb-1">Total components</div>
          <div className="text-2xl font-bold text-slate-900">150</div>
          <div className="text-xs text-slate-500 mt-1">Under monitoring</div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-red-200 bg-red-50">
          <div className="text-sm text-red-600 mb-1">High risk</div>
          <div className="text-2xl font-bold text-red-700">27</div>
          <div className="text-xs text-red-600 mt-1">Action required</div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-orange-200 bg-orange-50">
          <div className="text-sm text-orange-600 mb-1">Warning</div>
          <div className="text-2xl font-bold text-orange-700">38</div>
          <div className="text-xs text-orange-600 mt-1">Monitoring</div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-green-200 bg-green-50">
          <div className="text-sm text-green-600 mb-1">Safe</div>
          <div className="text-2xl font-bold text-green-700">85</div>
          <div className="text-xs text-green-600 mt-1">In good shape</div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Status Distribution */}
        <div className="bg-white rounded-lg p-6 border border-slate-200">
          <h2 className="font-semibold text-lg text-slate-900 mb-4">
            Status distribution
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={statusDistribution}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={5}
                dataKey="value"
              >
                {statusDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: 'none', 
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {statusDistribution.map((item) => (
              <div key={item.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-slate-600">{item.name}</span>
                </div>
                <span className="font-semibold text-slate-900">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Category Risk */}
        <div className="bg-white rounded-lg p-6 border border-slate-200">
          <h2 className="font-semibold text-lg text-slate-900 mb-4">
            Risk by category
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={categoryRisk}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="category" stroke="#64748b" fontSize={12} />
              <YAxis stroke="#64748b" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: 'none', 
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
              <Bar dataKey="high" stackId="a" fill="#ef4444" name="High" />
              <Bar dataKey="medium" stackId="a" fill="#f59e0b" name="Medium" />
              <Bar dataKey="low" stackId="a" fill="#10b981" name="Low" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Components Table */}
      <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-200">
          <h2 className="font-semibold text-lg text-slate-900">
            Components list
          </h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">
                  Component
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">
                  Supplier
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">
                  Criticality
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">
                  Stock
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">
                  Risk signals
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {components.map((component) => {
                const statusColor = getStatusColor(component.status);
                
                return (
                  <tr key={component.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Package className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium text-slate-900">{component.name}</div>
                          <div className="text-xs text-slate-500">{component.category}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-slate-400" />
                        <span className="text-sm text-slate-900">{component.supplier}</span>
                      </div>
                      <div className="text-xs text-slate-500 mt-1">
                        {component.alternativeSuppliers} alternative suppliers
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${statusColor.dot}`}></div>
                        <span className={`text-sm font-medium ${statusColor.text}`}>
                          {getStatusLabel(component.status)}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${
                              component.criticalityScore >= 9 ? 'bg-red-600' :
                              component.criticalityScore >= 8 ? 'bg-orange-600' :
                              'bg-yellow-600'
                            }`}
                            style={{ width: `${(component.criticalityScore / 10) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-slate-900">
                          {component.criticalityScore}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-sm font-medium ${getStockColor(component.stockLevel)}`}>
                        {component.stockLevel}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {component.riskSignals > 0 ? (
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-orange-600" />
                          <span className="text-sm font-medium text-orange-600">
                            {component.riskSignals}
                          </span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-green-600">None</span>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <button className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium">
                        Details
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
