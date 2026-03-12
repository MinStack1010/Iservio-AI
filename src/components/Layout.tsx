import { Outlet, NavLink } from 'react-router';
import {
  LayoutDashboard,
  Globe,
  FileText,
  AlertTriangle,
  Building2,
  Package,
  TrendingUp,
  Plane
} from 'lucide-react';

const navItems = [
  { path: '/', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/domains', label: 'Monitoring Domains', icon: Globe },
  { path: '/knowledge', label: 'Knowledge Feed', icon: FileText },
  { path: '/events', label: 'Events', icon: AlertTriangle },
  { path: '/suppliers', label: 'Suppliers', icon: Building2 },
  { path: '/components', label: 'Components', icon: Package },
  { path: '/impact-analysis', label: 'Impact Analysis', icon: TrendingUp },
];

export function Layout() {
  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <img
                src="https://storage.googleapis.com/inservio/image_inservio/inservio.svg"
                className="w-6 h-6"
                alt="logo"
              />

            </div>
            <div>
              <div className="font-bold text-lg">Inservio AI</div>
              <div className="text-xs text-slate-400">Supply Chain Monitor</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    end={item.path === '/'}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`
                    }
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800">
          <div className="text-xs text-slate-400">
            <div>© 2026 Inservio AI</div>
            <div className="mt-1">Aerospace Supply Chain Intelligence</div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
