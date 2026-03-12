import React from 'react';
import { AlertTriangle, Building2, Package, TrendingDown, ArrowRight, ChevronDown, Flame } from 'lucide-react';

const analysisData = {
  event: {
    title: 'Fire at lubricant manufacturing plant in Germany',
    company: 'LubeTech GmbH',
    location: 'Hamburg, Germany',
    date: '2026-03-10',
    type: 'fire',
    severity: 'high'
  },
  aiAnalysis: {
    supplyDisruption: {
      probability: 92,
      duration: '4–6 months',
      description: 'The facility was heavily damaged and will require significant time to recover. Output is expected to be down 85% during the first 3 months.'
    },
    deliveryDelay: {
      probability: 88,
      impact: 'High',
      description: 'Current orders will be delayed by 2–3 months, impacting maintenance schedules for 23 airlines.'
    },
    maintenanceImpact: {
      probability: 76,
      affectedAircraft: 340,
      description: 'Lubricant shortages will affect routine engine maintenance and could lead to cancellations or delays.'
    }
  },
  supplyChain: [
    {
      level: 1,
      type: 'event',
      title: 'Factory fire',
      subtitle: 'LubeTech GmbH - Hamburg',
      icon: Flame,
      color: 'red'
    },
    {
      level: 2,
      type: 'supplier',
      title: 'Affected suppliers',
      items: [
        { name: 'LubeTech GmbH', impact: 'Direct', severity: 'high' },
        { name: 'Euro Aviation Supplies', impact: 'Distribution', severity: 'high' },
        { name: 'Global Aircraft Parts', impact: 'Distribution', severity: 'medium' }
      ],
      icon: Building2,
      color: 'orange'
    },
    {
      level: 3,
      type: 'product',
      title: 'At-risk products',
      items: [
        { name: 'Turbine Oil Type A', criticality: 9.5, stock: 'Low' },
        { name: 'Aircraft Grease Premium', criticality: 8.8, stock: 'Medium' },
        { name: 'Hydraulic Fluid HTF-1', criticality: 8.2, stock: 'Low' }
      ],
      icon: Package,
      color: 'yellow'
    },
    {
      level: 4,
      type: 'system',
      title: 'Aircraft systems',
      items: [
        { name: 'Aircraft Engine System', aircraft: 340, risk: 'high' },
        { name: 'Hydraulic Control System', aircraft: 280, risk: 'medium' },
        { name: 'Landing Gear System', aircraft: 195, risk: 'medium' }
      ],
      icon: TrendingDown,
      color: 'blue'
    }
  ],
  recommendations: [
    {
      priority: 'critical',
      title: 'Secure emergency alternative supply',
      description: 'Contact approved alternative suppliers immediately to ensure short-term supply.',
      action: 'Do now',
      assignedTo: 'Supply Chain Team'
    },
    {
      priority: 'high',
      title: 'Reassess current inventory',
      description: 'Review and reallocate existing lubricant inventory to prioritize critical aircraft.',
      action: 'Within 24h',
      assignedTo: 'Inventory Management'
    },
    {
      priority: 'high',
      title: 'Notify airline partners',
      description: 'Update partners about potential maintenance scheduling delays.',
      action: 'Within 48h',
      assignedTo: 'Customer Relations'
    },
    {
      priority: 'medium',
      title: 'Review long-term contracts',
      description: 'Negotiate long-term contracts with multiple suppliers to reduce concentration risk.',
      action: 'Within 2 weeks',
      assignedTo: 'Procurement'
    }
  ]
};

export function ImpactAnalysis() {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return { bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-300' };
      case 'high': return { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-300' };
      case 'medium': return { bg: 'bg-yellow-100', text: 'text-yellow-700', border: 'border-yellow-300' };
      default: return { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-300' };
    }
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Impact Analysis
        </h1>
        <p className="text-slate-600">
          Analyze how events impact the supply chain
        </p>
      </div>

      {/* Event Info */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-lg p-6 mb-8 text-white">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <Flame className="w-8 h-8" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-bold">{analysisData.event.title}</h2>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                Severity: High
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <span>🏢 {analysisData.event.company}</span>
              <span>📍 {analysisData.event.location}</span>
              <span>📅 {analysisData.event.date}</span>
            </div>
          </div>
        </div>
      </div>

      {/* AI Analysis */}
      <div className="bg-white rounded-lg border border-slate-200 p-6 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="text-3xl">🤖</div>
          <h2 className="text-xl font-bold text-slate-900">AI analysis</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Supply Disruption */}
          <div className="border border-slate-200 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <TrendingDown className="w-5 h-5 text-red-600" />
              <h3 className="font-semibold text-slate-900">Supply disruption</h3>
            </div>
            <div className="mb-3">
              <div className="text-xs text-slate-500 mb-1">Probability:</div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-red-600 rounded-full"
                    style={{ width: `${analysisData.aiAnalysis.supplyDisruption.probability}%` }}
                  ></div>
                </div>
                <span className="text-lg font-bold text-red-600">
                  {analysisData.aiAnalysis.supplyDisruption.probability}%
                </span>
              </div>
            </div>
            <div className="text-sm text-slate-600 mb-2">
              <span className="font-medium">Duration:</span> {analysisData.aiAnalysis.supplyDisruption.duration}
            </div>
            <p className="text-sm text-slate-700">
              {analysisData.aiAnalysis.supplyDisruption.description}
            </p>
          </div>

          {/* Delivery Delay */}
          <div className="border border-slate-200 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-5 h-5 text-orange-600" />
              <h3 className="font-semibold text-slate-900">Delivery delays</h3>
            </div>
            <div className="mb-3">
              <div className="text-xs text-slate-500 mb-1">Probability:</div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-orange-600 rounded-full"
                    style={{ width: `${analysisData.aiAnalysis.deliveryDelay.probability}%` }}
                  ></div>
                </div>
                <span className="text-lg font-bold text-orange-600">
                  {analysisData.aiAnalysis.deliveryDelay.probability}%
                </span>
              </div>
            </div>
            <div className="text-sm text-slate-600 mb-2">
              <span className="font-medium">Impact:</span> {analysisData.aiAnalysis.deliveryDelay.impact}
            </div>
            <p className="text-sm text-slate-700">
              {analysisData.aiAnalysis.deliveryDelay.description}
            </p>
          </div>

          {/* Maintenance Impact */}
          <div className="border border-slate-200 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <Package className="w-5 h-5 text-yellow-600" />
              <h3 className="font-semibold text-slate-900">Maintenance impact</h3>
            </div>
            <div className="mb-3">
              <div className="text-xs text-slate-500 mb-1">Probability:</div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-yellow-600 rounded-full"
                    style={{ width: `${analysisData.aiAnalysis.maintenanceImpact.probability}%` }}
                  ></div>
                </div>
                <span className="text-lg font-bold text-yellow-600">
                  {analysisData.aiAnalysis.maintenanceImpact.probability}%
                </span>
              </div>
            </div>
            <div className="text-sm text-slate-600 mb-2">
              <span className="font-medium">Aircraft:</span> {analysisData.aiAnalysis.maintenanceImpact.affectedAircraft}
            </div>
            <p className="text-sm text-slate-700">
              {analysisData.aiAnalysis.maintenanceImpact.description}
            </p>
          </div>
        </div>
      </div>

      {/* Supply Chain Flow */}
      <div className="bg-white rounded-lg border border-slate-200 p-6 mb-8">
        <h2 className="text-xl font-bold text-slate-900 mb-6">
          Impacted supply chain flow
        </h2>

        <div className="space-y-6">
          {analysisData.supplyChain.map((level, index) => {
            const Icon = level.icon;
            
            return (
              <div key={index}>
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    level.color === 'red' ? 'bg-red-100' :
                    level.color === 'orange' ? 'bg-orange-100' :
                    level.color === 'yellow' ? 'bg-yellow-100' :
                    'bg-blue-100'
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      level.color === 'red' ? 'text-red-600' :
                      level.color === 'orange' ? 'text-orange-600' :
                      level.color === 'yellow' ? 'text-yellow-600' :
                      'text-blue-600'
                    }`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 mb-3">{level.title}</h3>
                    
                    {level.type === 'event' && (
                      <div className="bg-slate-50 rounded-lg p-4">
                        <div className="font-medium text-slate-900">{level.subtitle}</div>
                      </div>
                    )}

                    {level.items && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {level.items.map((item: any, idx: number) => (
                          <div 
                            key={idx}
                            className="bg-slate-50 rounded-lg p-4 border border-slate-200"
                          >
                            <div className="font-medium text-slate-900 mb-2">
                              {item.name}
                            </div>
                            <div className="space-y-1 text-sm text-slate-600">
                              {item.impact && (
                                <div>Impact: <span className="font-medium">{item.impact}</span></div>
                              )}
                              {item.severity && (
                                <div className="flex items-center gap-2">
                                  <div className={`w-2 h-2 rounded-full ${
                                    item.severity === 'high' ? 'bg-red-500' : 'bg-orange-500'
                                  }`}></div>
                                  <span>{item.severity === 'high' ? 'High' : 'Medium'}</span>
                                </div>
                              )}
                              {item.criticality && (
                                <div>
                                  Criticality: <span className="font-medium">{item.criticality}/10</span>
                                </div>
                              )}
                              {item.stock && (
                                <div>Stock: <span className={`font-medium ${
                                  item.stock === 'Low' ? 'text-red-600' : 'text-yellow-600'
                                }`}>{item.stock}</span></div>
                              )}
                              {item.aircraft && (
                                <div>Aircraft: <span className="font-medium">{item.aircraft}</span></div>
                              )}
                              {item.risk && (
                                <div className="flex items-center gap-2">
                                  <div className={`w-2 h-2 rounded-full ${
                                    item.risk === 'high' ? 'bg-red-500' : 'bg-orange-500'
                                  }`}></div>
                                  <span>{item.risk === 'high' ? 'High risk' : 'Medium risk'}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Arrow */}
                {index < analysisData.supplyChain.length - 1 && (
                  <div className="flex justify-center my-4">
                    <ChevronDown className="w-6 h-6 text-slate-400" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white rounded-lg border border-slate-200 p-6">
        <h2 className="text-xl font-bold text-slate-900 mb-6">
          Recommended actions
        </h2>

        <div className="space-y-4">
          {analysisData.recommendations.map((rec, index) => {
            const priorityColor = getPriorityColor(rec.priority);
            
            return (
              <div 
                key={index}
                className={`border-l-4 rounded-lg p-5 ${priorityColor.border} ${priorityColor.bg}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${priorityColor.bg} ${priorityColor.text} border ${priorityColor.border}`}>
                        {rec.priority === 'critical' ? 'Critical' :
                         rec.priority === 'high' ? 'High priority' :
                         rec.priority === 'medium' ? 'Medium priority' : 'Normal'}
                      </span>
                      <h3 className="font-semibold text-slate-900">{rec.title}</h3>
                    </div>
                    <p className="text-sm text-slate-700 mb-3">
                      {rec.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-slate-600">Due:</span>
                        <span className="font-medium text-slate-900">{rec.action}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-600">Owner:</span>
                        <span className="font-medium text-slate-900">{rec.assignedTo}</span>
                      </div>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex-shrink-0">
                    <span className="text-sm font-medium">Assign</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
