import React, { useState } from 'react';
import { AlertTriangle, Flame, Building2, FileX, TrendingDown, MapPin, Calendar, ArrowRight, Filter } from 'lucide-react';

const eventTypes = [
  { id: 'fire', label: 'Factory fire', icon: Flame, color: 'red' },
  { id: 'bankruptcy', label: 'Bankruptcy', icon: FileX, color: 'orange' },
  { id: 'regulation', label: 'Regulatory change', icon: Building2, color: 'blue' },
  { id: 'disruption', label: 'Production disruption', icon: TrendingDown, color: 'yellow' },
  { id: 'logistics', label: 'Logistics issue', icon: MapPin, color: 'purple' },
];

const events = [
  {
    id: 1,
    type: 'fire',
    title: 'Fire at lubricant manufacturing plant',
    company: 'LubeTech GmbH',
    location: 'Hamburg, Germany',
    date: '2026-03-10',
    confidence: 94,
    risk: 'high',
    description: 'A major fire at Europe’s largest aerospace lubricant plant. Estimated damages exceed EUR 50M and recovery is expected to take at least 6 months.',
    affectedSuppliers: 12,
    affectedComponents: 18,
    status: 'active'
  },
  {
    id: 2,
    type: 'regulation',
    title: 'New chemical regulations in Europe',
    company: 'European Union',
    location: 'Brussels, Belgium',
    date: '2026-03-08',
    confidence: 87,
    risk: 'medium',
    description: 'The EU issued new rules on chemical usage in aerospace manufacturing. Manufacturers must switch to environmentally friendly lubricants before 2028.',
    affectedSuppliers: 45,
    affectedComponents: 67,
    status: 'monitoring'
  },
  {
    id: 3,
    type: 'logistics',
    title: 'Shipping delays across Asia',
    company: 'Asia Logistics Co.',
    location: 'Singapore',
    date: '2026-03-07',
    confidence: 76,
    risk: 'low',
    description: 'Congestion at the Port of Singapore is delaying electronic component shipments. The situation is expected to improve within the next two weeks.',
    affectedSuppliers: 8,
    affectedComponents: 15,
    status: 'resolved'
  },
  {
    id: 4,
    type: 'disruption',
    title: 'Titanium raw material shortage',
    company: 'TitanSource Ltd',
    location: 'Global',
    date: '2026-03-09',
    confidence: 91,
    risk: 'high',
    description: 'Titanium supply has been disrupted by export restrictions from major producers, directly impacting engine and airframe production.',
    affectedSuppliers: 23,
    affectedComponents: 41,
    status: 'active'
  },
  {
    id: 5,
    type: 'disruption',
    title: 'Strike at electronics manufacturing plant',
    company: 'EuroElectronics SA',
    location: 'Lyon, France',
    date: '2026-03-11',
    confidence: 83,
    risk: 'medium',
    description: 'Workers are striking for higher pay. The plant produces critical sensors and control systems for the aerospace industry.',
    affectedSuppliers: 6,
    affectedComponents: 22,
    status: 'monitoring'
  },
  {
    id: 6,
    type: 'bankruptcy',
    title: 'Small parts supplier files for bankruptcy',
    company: 'AeroFix Components',
    location: 'Manchester, UK',
    date: '2026-03-05',
    confidence: 96,
    risk: 'medium',
    description: 'A manufacturer of specialized aerospace bolts and fasteners has filed for bankruptcy. Existing contracts will be transferred to competitors.',
    affectedSuppliers: 3,
    affectedComponents: 8,
    status: 'resolved'
  }
];

export function Events() {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedRisk, setSelectedRisk] = useState('all');

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200';
      case 'medium': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'low': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-red-100 text-red-700';
      case 'monitoring': return 'bg-blue-100 text-blue-700';
      case 'resolved': return 'bg-green-100 text-green-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active': return 'Active';
      case 'monitoring': return 'Monitoring';
      case 'resolved': return 'Resolved';
      default: return status;
    }
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Event Detection
        </h1>
        <p className="text-slate-600">
          AI-detected events from your data sources
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg p-4 border border-slate-200">
          <div className="text-sm text-slate-600 mb-1">Total events</div>
          <div className="text-2xl font-bold text-slate-900">43</div>
          <div className="text-xs text-slate-500 mt-1">Detected in the last 30 days</div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-red-200 bg-red-50">
          <div className="text-sm text-red-600 mb-1">High risk</div>
          <div className="text-2xl font-bold text-red-700">12</div>
          <div className="text-xs text-red-600 mt-1">Needs immediate review</div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-orange-200 bg-orange-50">
          <div className="text-sm text-orange-600 mb-1">Medium risk</div>
          <div className="text-2xl font-bold text-orange-700">18</div>
          <div className="text-xs text-orange-600 mt-1">Monitoring</div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-yellow-200 bg-yellow-50">
          <div className="text-sm text-yellow-600 mb-1">Low risk</div>
          <div className="text-2xl font-bold text-yellow-700">13</div>
          <div className="text-xs text-yellow-600 mt-1">Routine monitoring</div>
        </div>
      </div>

      {/* Event Types */}
      <div className="bg-white rounded-lg p-6 border border-slate-200 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <Filter className="w-5 h-5 text-slate-600" />
          <h2 className="font-semibold text-slate-900">Event type</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedType('all')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedType === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All
          </button>
          {eventTypes.map((type) => {
            const Icon = type.icon;
            return (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  selectedType === type.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{type.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Events List */}
      <div className="space-y-4">
        {events.map((event) => {
          const eventType = eventTypes.find(t => t.id === event.type);
          const Icon = eventType?.icon || AlertTriangle;

          return (
            <div 
              key={event.id}
              className="bg-white rounded-lg border border-slate-200 hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    eventType?.color === 'red' ? 'bg-red-100' :
                    eventType?.color === 'orange' ? 'bg-orange-100' :
                    eventType?.color === 'blue' ? 'bg-blue-100' :
                    eventType?.color === 'yellow' ? 'bg-yellow-100' :
                    'bg-purple-100'
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      eventType?.color === 'red' ? 'text-red-600' :
                      eventType?.color === 'orange' ? 'text-orange-600' :
                      eventType?.color === 'blue' ? 'text-blue-600' :
                      eventType?.color === 'yellow' ? 'text-yellow-600' :
                      'text-purple-600'
                    }`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="font-semibold text-lg text-slate-900 mb-2">
                          {event.title}
                        </h3>
                        <div className="flex items-center gap-3 text-sm text-slate-600">
                          <span className="flex items-center gap-1">
                            <Building2 className="w-4 h-4" />
                            {event.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {event.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {event.date}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getRiskColor(event.risk)}`}>
                          {event.risk === 'high' ? 'High risk' : event.risk === 'medium' ? 'Medium risk' : 'Low risk'}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                          {getStatusLabel(event.status)}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-700 mb-4">
                      {event.description}
                    </p>

                    {/* Impact Stats */}
                    <div className="flex items-center gap-6 mb-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-slate-500" />
                        <span className="text-slate-600">
                          <span className="font-semibold text-slate-900">{event.affectedSuppliers}</span> affected suppliers
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-slate-500" />
                        <span className="text-slate-600">
                          <span className="font-semibold text-slate-900">{event.affectedComponents}</span> at-risk components
                        </span>
                      </div>
                    </div>

                    {/* AI Confidence */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm text-slate-600">AI confidence:</span>
                      <div className="flex items-center gap-2 flex-1 max-w-xs">
                        <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${
                              event.confidence >= 90 ? 'bg-green-600' :
                              event.confidence >= 80 ? 'bg-blue-600' :
                              'bg-yellow-600'
                            }`}
                            style={{ width: `${event.confidence}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-semibold text-slate-900">
                          {event.confidence}%
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        <span className="text-sm font-medium">View impact analysis</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors text-sm font-medium">
                        View sources
                      </button>
                      <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors text-sm font-medium">
                        Export report
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
