import React from 'react';
import { 
  FileText, 
  AlertTriangle, 
  Building2, 
  Package,
  TrendingUp,
  TrendingDown,
  ArrowRight
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const stats = [
  {
    label: 'Analyzed articles',
    value: '2,847',
    change: '+12.5%',
    trend: 'up',
    icon: FileText,
    color: 'blue'
  },
  {
    label: 'Events detected',
    value: '43',
    change: '+8',
    trend: 'up',
    icon: AlertTriangle,
    color: 'orange'
  },
  {
    label: 'Affected suppliers',
    value: '18',
    change: '+3',
    trend: 'up',
    icon: Building2,
    color: 'red'
  },
  {
    label: 'At-risk components',
    value: '27',
    change: '-5',
    trend: 'down',
    icon: Package,
    color: 'yellow'
  }
];

const alerts = [
  {
    id: 1,
    title: 'Fire at lubricant manufacturing plant',
    location: 'Hamburg, Germany',
    risk: 'high',
    riskLabel: 'High risk',
    date: '2026-03-10',
    supplier: 'LubeTech GmbH',
    confidence: 94
  },
  {
    id: 2,
    title: 'New chemical regulations in Europe',
    location: 'European Union',
    risk: 'medium',
    riskLabel: 'Medium risk',
    date: '2026-03-08',
    supplier: 'Multiple',
    confidence: 87
  },
  {
    id: 3,
    title: 'Shipping delays across Asia',
    location: 'Singapore Port',
    risk: 'low',
    riskLabel: 'Low risk',
    date: '2026-03-07',
    supplier: 'Asia Logistics Co.',
    confidence: 76
  },
  {
    id: 4,
    title: 'Titanium raw material shortage',
    location: 'Global',
    risk: 'high',
    riskLabel: 'High risk',
    date: '2026-03-09',
    supplier: 'TitanSource Ltd',
    confidence: 91
  },
  {
    id: 5,
    title: 'Strike at electronics manufacturing plant',
    location: 'Lyon, France',
    risk: 'medium',
    riskLabel: 'Medium risk',
    date: '2026-03-11',
    supplier: 'EuroElectronics SA',
    confidence: 83
  }
];

const trendData = [
  { month: 'Oct', events: 12, articles: 850 },
  { month: 'Nov', events: 15, articles: 920 },
  { month: 'Dec', events: 18, articles: 1050 },
  { month: 'Jan', events: 21, articles: 1100 },
  { month: 'Feb', events: 28, articles: 1200 },
  { month: 'Mar', events: 43, articles: 1347 }
];

const riskDistribution = [
  { name: 'High risk', value: 12, color: '#ef4444' },
  { name: 'Medium risk', value: 18, color: '#f59e0b' },
  { name: 'Low risk', value: 13, color: '#10b981' }
];

const domainData = [
  { name: 'Lubricants', events: 12 },
  { name: 'Electronics', events: 9 },
  { name: 'Hydraulics', events: 8 },
  { name: 'Engines', events: 7 },
  { name: 'Materials', events: 7 }
];

export function Dashboard() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Overview dashboard
        </h1>
        <p className="text-slate-600">
          Monitor global aerospace supply-chain risk • Last updated: 2026-03-12, 14:30 UTC
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const TrendIcon = stat.trend === 'up' ? TrendingUp : TrendingDown;
          
          return (
            <div 
              key={stat.label}
              className="bg-white rounded-lg p-6 shadow-sm border border-slate-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  stat.color === 'blue' ? 'bg-blue-100' :
                  stat.color === 'orange' ? 'bg-orange-100' :
                  stat.color === 'red' ? 'bg-red-100' :
                  'bg-yellow-100'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    stat.color === 'blue' ? 'text-blue-600' :
                    stat.color === 'orange' ? 'text-orange-600' :
                    stat.color === 'red' ? 'text-red-600' :
                    'text-yellow-600'
                  }`} />
                </div>
                <div className={`flex items-center gap-1 text-sm ${
                  stat.trend === 'up' ? 'text-red-600' : 'text-green-600'
                }`}>
                  <TrendIcon className="w-4 h-4" />
                  <span>{stat.change}</span>
                </div>
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Trend Chart */}
        <div className="lg:col-span-2 bg-white rounded-lg p-6 shadow-sm border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Event detection trends
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={trendData}>
              <defs>
                <linearGradient id="colorEvents" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: 'none', 
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="events" 
                stroke="#3b82f6" 
                fillOpacity={1} 
                fill="url(#colorEvents)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Risk Distribution */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Risk distribution
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={riskDistribution}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={5}
                dataKey="value"
              >
                {riskDistribution.map((entry, index) => (
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
            {riskDistribution.map((item) => (
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
      </div>

      {/* Domain Events Chart */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 mb-8">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">
          Events by domain
        </h2>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={domainData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="name" stroke="#64748b" />
            <YAxis stroke="#64748b" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1e293b', 
                border: 'none', 
                borderRadius: '8px',
                color: '#fff'
              }}
            />
            <Bar dataKey="events" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Latest Alerts */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900">
            Latest risk alerts
          </h2>
        </div>
        <div className="divide-y divide-slate-200">
          {alerts.map((alert) => (
            <div 
              key={alert.id}
              className="p-6 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-slate-900">
                      {alert.title}
                    </h3>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      alert.risk === 'high' 
                        ? 'bg-red-100 text-red-700' 
                        : alert.risk === 'medium'
                        ? 'bg-orange-100 text-orange-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {alert.riskLabel}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-600 mb-2">
                    <span>📍 {alert.location}</span>
                    <span>🏢 {alert.supplier}</span>
                    <span>📅 {alert.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-xs text-slate-500">AI confidence:</div>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-600 rounded-full"
                          style={{ width: `${alert.confidence}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-slate-900">
                        {alert.confidence}%
                      </span>
                    </div>
                  </div>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  <span className="text-sm font-medium">View details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
