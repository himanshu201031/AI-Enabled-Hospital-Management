'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  UserPlus,
  Calendar,
  Activity,
  LayoutDashboard,
  ShieldCheck,
  Zap,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <aside className="w-72 bg-white border-r border-slate-100 hidden md:flex flex-col h-[calc(100vh-73px)] sticky top-[73px] z-40 overflow-hidden">
      <div className="flex-1 overflow-y-auto py-8 px-4 space-y-10">
        <div>
          <h3 className="px-4 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6">
            Main Terminal
          </h3>
          <nav className="space-y-1.5">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/');

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-bold transition-all duration-300 group relative overflow-hidden ${isActive
                    ? 'text-primary'
                    : 'text-slate-500 hover:text-slate-950 hover:bg-slate-50'
                    }`}
                >
                  <div className="flex items-center gap-3.5 relative z-10">
                    <div className={`p-2 rounded-xl transition-all duration-300 ${isActive ? 'bg-primary shadow-lg shadow-primary/20 text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-white group-hover:text-slate-600'
                      }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    {link.label}
                  </div>

                  {isActive && (
                    <motion.div
                      layoutId="sidebar-active"
                      className="absolute inset-0 bg-primary/5 border border-primary/10 rounded-2xl z-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}

                  {isActive && (
                    <ChevronRight className="w-4 h-4 text-primary relative z-10" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Tactical Context Section */}
        <div className="px-4 space-y-6 pt-4 border-t border-slate-50">
          <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
            System Status
          </h3>

          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Neural Link</span>
                <span className="flex items-center gap-1.5 text-[10px] font-black text-emerald-500">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  ACTIVE
                </span>
              </div>
              <div className="w-full bg-slate-200 h-1 rounded-full overflow-hidden">
                <motion.div
                  className="bg-primary h-full rounded-full"
                  initial={{ width: "30%" }}
                  animate={{ width: "85%" }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                />
              </div>
            </div>

            <div className="flex items-center gap-3 px-1">
              <div className="w-8 h-8 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-black text-slate-900">Security: Level 4</span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tight">E2E Protocols Active</span>
              </div>
            </div>

            <div className="flex items-center gap-3 px-1">
              <div className="w-8 h-8 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-600">
                <Zap className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-black text-slate-900">MediAI Core v2.4</span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tight">Heuristic Latency: 12ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Footer Branding */}
      <div className="p-6 border-t border-slate-50">
        <div className="bg-slate-950 rounded-2xl p-4 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 blur-2xl rounded-full -mr-12 -mt-12 transition-all group-hover:bg-primary/40" />
          <div className="relative z-10">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Node Verified</p>
            <p className="text-sm font-black text-white italic">MediAI <span className="text-primary not-italic">Hub</span></p>
          </div>
        </div>
      </div>
    </aside>
  );
}
