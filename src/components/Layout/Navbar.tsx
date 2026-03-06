'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Plus,
  Menu,
  Search,
  Bell,
  ChevronDown,
  Sparkles,
  Activity,
  LayoutDashboard,
  UserPlus,
  BrainCircuit
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/', icon: Activity },
    { name: 'Enrollment', href: '/register', icon: UserPlus },
    { name: 'Neural Triage', href: '/triage', icon: BrainCircuit },
    { name: 'Physician Hub', href: '/clinician', icon: LayoutDashboard },
  ];

  return (
    <nav className="sticky top-0 z-[100] w-full bg-white/70 backdrop-blur-xl border-b border-slate-100 px-6 py-3 flex justify-between items-center transition-all duration-300">
      {/* 1. Brand Identity Overlay */}
      <Link href="/" className="flex items-center gap-3 group shrink-0">
        <div className="relative">
          <div className="bg-primary/10 border-2 border-primary/20 rounded-2xl p-2 flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:rotate-[360deg] shadow-lg shadow-primary/10">
            <Plus className="w-5 h-5 text-primary group-hover:text-white transition-colors stroke-[3px]" />
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white animate-pulse"></div>
        </div>

        <div className="flex flex-col -space-y-1">
          <span className="text-xl font-black tracking-tight text-slate-900 flex items-center gap-1.5">
            Pearl <span className="text-primary italic">Thoughts</span>
          </span>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Clinical Intelligence</span>
          </div>
        </div>
      </Link>

      {/* 2. Tactical Navigation (Desktop) */}
      <div className="hidden lg:flex items-center gap-2 bg-slate-50/50 p-1.5 rounded-2xl border border-slate-100">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`
                px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2.5 relative
                ${isActive
                  ? 'text-primary bg-white shadow-sm ring-1 ring-slate-100'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100/50'
                }
              `}
            >
              <link.icon className={`w-4 h-4 ${isActive ? 'text-primary' : 'text-slate-400'}`} />
              {link.name}
              {isActive && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                />
              )}
            </Link>
          );
        })}
      </div>

      {/* 3. Operational Command & Actions */}
      <div className="flex items-center gap-4">
        {/* Search & Alerts - Hidden on small mobile */}
        <div className="hidden sm:flex items-center gap-2 mr-2">
          <button className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-400 hover:text-primary hover:bg-primary/5 transition-all">
            <Search className="w-5 h-5" />
          </button>
          <div className="relative">
            <button className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-400 hover:text-primary hover:bg-primary/5 transition-all">
              <Bell className="w-5 h-5" />
            </button>
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
          </div>
        </div>

        {/* Primary CTA */}
        <Link href="/schedule" className="hidden md:block">
          <button className="bg-slate-900 hover:bg-primary text-white text-xs font-black px-6 py-3.5 rounded-2xl transition-all duration-300 shadow-xl shadow-slate-200 flex items-center gap-2 uppercase tracking-widest border border-slate-800 hover:border-primary">
            <Sparkles className="w-3.5 h-3.5" />
            Audit Sync
          </button>
        </Link>

        {/* User / Menu */}
        <div className="flex items-center gap-2 p-1.5 pr-3 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-slate-100 transition-colors cursor-pointer group">
          <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-primary/20">
            JD
          </div>
          <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors" />
        </div>

        {/* Mobile menu trigger */}
        <button className="lg:hidden flex items-center justify-center w-11 h-11 bg-white border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all text-slate-900 shadow-sm overflow-hidden relative group">
          <Menu className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <motion.div
            initial={false}
            className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100"
          />
        </button>
      </div>
    </nav>
  );
}
