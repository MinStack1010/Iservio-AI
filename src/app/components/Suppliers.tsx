import { Building2, MapPin, Package, AlertTriangle, CheckCircle, Clock, TrendingUp } from 'lucide-react';

const suppliers = [
  {
    id: 1,
    name: 'LubeTech GmbH',
    location: 'Hamburg, Germany',
    products: ['Turbine Oil', 'Aircraft Grease', 'Hydraulic Fluid'],
    riskStatus: 'high',
    riskScore: 8.5,
    events: 3,
    lastEvent: '2026-03-10',
    lastEventTitle: 'Factory fire',
    relationship: 'Tier 1',
    established: '2015'
  },
  {
    id: 2,
    name: 'EuroElectronics SA',
    location: 'Lyon, France',
    products: ['Flight Sensors', 'Control Systems', 'Navigation Units'],
    riskStatus: 'medium',
    riskScore: 5.2,
    events: 2,
    lastEvent: '2026-03-11',
    lastEventTitle: 'Worker strike',
    relationship: 'Tier 1',
    established: '2008'
  },
  {
    id: 3,
    name: 'TitanSource Ltd',
    location: 'London, UK',
    products: ['Titanium Alloys', 'Raw Materials', 'Metal Components'],
    riskStatus: 'high',
    riskScore: 7.8,
    events: 2,
    lastEvent: '2026-03-09',
    lastEventTitle: 'Raw material shortage',
    relationship: 'Tier 1',
    established: '2010'
  },
  {
    id: 4,
    name: 'Asia Logistics Co.',
    location: 'Singapore',
    products: ['Freight Services', 'Supply Chain Management', 'Warehousing'],
    riskStatus: 'low',
    riskScore: 3.1,
    events: 1,
    lastEvent: '2026-03-07',
    lastEventTitle: 'Port delays',
    relationship: 'Tier 2',
    established: '2018'
  },
  {
    id: 5,
    name: 'AeroFix Components',
    location: 'Manchester, UK',
    products: ['Fasteners', 'Bolts & Nuts', 'Small Parts'],
    riskStatus: 'high',
    riskScore: 9.2,
    events: 1,
    lastEvent: '2026-03-05',
    lastEventTitle: 'Company bankruptcy',
    relationship: 'Tier 2',
    established: '2005'
  },
  {
    id: 6,
    name: 'Advanced Composites Inc.',
    location: 'Seattle, USA',
    products: ['Carbon Fiber', 'Composite Materials', 'Structural Parts'],
    riskStatus: 'safe',
    riskScore: 1.5,
    events: 0,
    lastEvent: null,
    lastEventTitle: null,
    relationship: 'Tier 1',
    established: '2012'
  },
  {
    id: 7,
    name: 'Nordic Hydraulics AB',
    location: 'Stockholm, Sweden',
    products: ['Hydraulic Pumps', 'Actuators', 'Pressure Systems'],
    riskStatus: 'safe',
    riskScore: 2.0,
    events: 0,
    lastEvent: null,
    lastEventTitle: null,
    relationship: 'Tier 1',
    established: '2016'
  },
  {
    id: 8,
    name: 'Pacific Electronics Corp',
    location: 'Tokyo, Japan',
    products: ['Circuit Boards', 'Semiconductors', 'Displays'],
    riskStatus: 'medium',
    riskScore: 4.3,
    events: 1,
    lastEvent: '2026-03-03',
    lastEventTitle: 'Production incident',
    relationship: 'Tier 2',
    established: '2009'
  }
];

const timeline = [
  {
    date: '2026-03-11',
    event: 'Strike at EuroElectronics SA',
    impact: 'medium',
    description: 'Workers are striking for higher pay'
  },
  {
    date: '2026-03-10',
    event: 'Fire at LubeTech GmbH plant',
    impact: 'high',
    description: 'Major fire causing severe damage'
  },
  {
    date: '2026-03-09',
    event: 'Titanium shortage from TitanSource',
    impact: 'high',
    description: 'Supply disrupted'
  },
  {
    date: '2026-03-07',
    event: 'Port delays in Singapore',
    impact: 'low',
    description: 'Temporary logistics congestion'
  },
  {
    date: '2026-03-05',
    event: 'AeroFix bankruptcy',
    impact: 'medium',
    description: 'Small company filed for bankruptcy'
  }
];

export function Suppliers() {
  const getRiskColor = (status: string) => {
    switch (status) {
      case 'high': return { bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-200' };
      case 'medium': return { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-200' };
      case 'low': return { bg: 'bg-yellow-100', text: 'text-yellow-700', border: 'border-yellow-200' };
      case 'safe': return { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-200' };
      default: return { bg: 'bg-slate-100', text: 'text-slate-700', border: 'border-slate-200' };
    }
  };

  const getRiskLabel = (status: string) => {
    switch (status) {
      case 'high': return 'High risk';
      case 'medium': return 'Medium risk';
      case 'low': return 'Low risk';
      case 'safe': return 'Safe';
      default: return status;
    }
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Suppliers
        </h1>
        <p className="text-slate-600">
          Track suppliers across the aerospace supply chain
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        <div className="bg-white rounded-lg p-4 border border-slate-200">
          <div className="text-sm text-slate-600 mb-1">Total suppliers</div>
          <div className="text-2xl font-bold text-slate-900">87</div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-red-200 bg-red-50">
          <div className="text-sm text-red-600 mb-1">High risk</div>
          <div className="text-2xl font-bold text-red-700">18</div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-orange-200 bg-orange-50">
          <div className="text-sm text-orange-600 mb-1">Medium risk</div>
          <div className="text-2xl font-bold text-orange-700">24</div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-yellow-200 bg-yellow-50">
          <div className="text-sm text-yellow-600 mb-1">Low risk</div>
          <div className="text-2xl font-bold text-yellow-700">15</div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-green-200 bg-green-50">
          <div className="text-sm text-green-600 mb-1">Safe</div>
          <div className="text-2xl font-bold text-green-700">30</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Suppliers List */}
        <div className="lg:col-span-2 space-y-4">
          {suppliers.map((supplier) => {
            const riskColor = getRiskColor(supplier.riskStatus);
            
            return (
              <div 
                key={supplier.id}
                className="bg-white rounded-lg border border-slate-200 hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-slate-900 mb-1">
                          {supplier.name}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-slate-600 mb-2">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {supplier.location}
                          </span>
                          <span className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-xs">
                            {supplier.relationship}
                          </span>
                          <span className="text-xs text-slate-500">
                            Est. {supplier.established}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${riskColor.bg} ${riskColor.text}`}>
                        {getRiskLabel(supplier.riskStatus)}
                      </span>
                      <div className="text-right">
                        <div className="text-xs text-slate-500">Risk Score</div>
                        <div className={`text-lg font-bold ${riskColor.text}`}>
                          {supplier.riskScore.toFixed(1)}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Products */}
                  <div className="mb-4">
                    <div className="text-xs text-slate-500 mb-2">Products supplied:</div>
                    <div className="flex flex-wrap gap-2">
                      {supplier.products.map((product, index) => (
                        <span 
                          key={index}
                          className="flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded"
                        >
                          <Package className="w-3 h-3" />
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Events */}
                  {supplier.events > 0 && (
                    <div className={`p-3 rounded-lg border mb-4 ${riskColor.bg} ${riskColor.border}`}>
                      <div className="flex items-center gap-2">
                        <AlertTriangle className={`w-4 h-4 ${riskColor.text}`} />
                        <div className="flex-1">
                          <div className={`text-sm font-medium ${riskColor.text}`}>
                            {supplier.events} related events
                          </div>
                          <div className={`text-xs ${riskColor.text} opacity-80`}>
                            Latest: {supplier.lastEventTitle} ({supplier.lastEvent})
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {supplier.events === 0 && (
                    <div className="p-3 rounded-lg border mb-4 bg-green-50 border-green-200">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <div className="text-sm font-medium text-green-700">
                          No risk events recorded
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button className="flex-1 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium">
                      View details
                    </button>
                    <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors text-sm font-medium">
                      Timeline
                    </button>
                    <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors text-sm font-medium">
                      Report
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg border border-slate-200 p-6 sticky top-8">
            <h2 className="font-semibold text-lg text-slate-900 mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Event timeline
            </h2>
            
            <div className="space-y-4">
              {timeline.map((item, index) => {
                const impactColors = {
                  high: 'border-red-500 bg-red-50',
                  medium: 'border-orange-500 bg-orange-50',
                  low: 'border-yellow-500 bg-yellow-50'
                };

                return (
                  <div key={index} className="relative pl-6">
                    {/* Timeline line */}
                    {index < timeline.length - 1 && (
                      <div className="absolute left-2 top-6 bottom-0 w-0.5 bg-slate-200"></div>
                    )}
                    
                    {/* Timeline dot */}
                    <div className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 ${
                      item.impact === 'high' ? 'border-red-500 bg-red-500' :
                      item.impact === 'medium' ? 'border-orange-500 bg-orange-500' :
                      'border-yellow-500 bg-yellow-500'
                    }`}></div>

                    <div>
                      <div className="text-xs text-slate-500 mb-1">{item.date}</div>
                      <div className="font-medium text-slate-900 text-sm mb-1">
                        {item.event}
                      </div>
                      <div className="text-xs text-slate-600">
                        {item.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="w-full mt-6 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors text-sm font-medium">
              View all events
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
