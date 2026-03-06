'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, UserPlus, Calendar, Activity, LayoutDashboard } from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();

  // Hide sidebar on the home page entirely
  if (pathname === '/') {
    return null;
  }

  const links = [
    { href: '/', label: 'Dashboard', icon: Home },
    { href: '/register', label: 'Register Patient', icon: UserPlus },
    { href: '/schedule', label: 'Schedule Appointment', icon: Calendar },
    { href: '/triage', label: 'AI Triage', icon: Activity },
    { href: '/clinician', label: 'Clinician Dashboard', icon: LayoutDashboard },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-100 hidden md:flex flex-col h-[calc(100vh-73px)] sticky top-[73px]">
      <div className="flex-1 overflow-y-auto py-6 px-4">
        <nav className="space-y-1">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/');

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group ${isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
              >
                <Icon
                  className={`w-5 h-5 transition-colors ${isActive ? 'text-primary' : 'text-gray-400 group-hover:text-gray-600'
                    }`}
                />
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
