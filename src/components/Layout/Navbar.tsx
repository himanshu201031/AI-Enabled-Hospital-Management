import Link from 'next/link';
import { Plus, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-[#f1f6f9]/80 backdrop-blur-md px-4 sm:px-8 py-4 flex justify-between items-center transition-all border-b border-gray-100/50">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-all group">
        <div className="bg-primary/10 border-[3px] border-primary rounded-xl p-0.5 flex items-center justify-center transition-transform group-hover:rotate-12">
          <Plus className="w-5 h-5 text-primary stroke-[4px]" />
        </div>
        <div className="flex flex-col -space-y-1">
          <span className="text-2xl font-black tracking-tighter text-gray-900 group-hover:text-primary transition-colors">
            Pearl <span className="text-primary italic">Thoughts</span>
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Clinical AI</span>
        </div>
      </Link>

      {/* Center Links (Desktop) */}
      <div className="hidden md:flex items-center gap-8 font-bold text-sm text-gray-800 tracking-tight">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <Link href="/register" className="hover:text-primary transition-colors">Register</Link>
        <Link href="/triage" className="hover:text-primary transition-colors">AI Triage</Link>
        <Link href="/clinician" className="hover:text-primary transition-colors">Dashboard</Link>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3">
        <Link href="/schedule" className="hidden sm:inline-block">
          <button className="bg-primary hover:bg-[#05706c] text-white text-sm font-bold px-8 py-3 rounded-2xl transition-all shadow-lg shadow-primary/20 transform hover:scale-105">
            Book Demo
          </button>
        </Link>
        <button className="flex items-center justify-center w-12 h-12 border border-gray-200 rounded-2xl hover:bg-gray-100 transition-colors shadow-sm">
          <Menu className="w-6 h-6 text-gray-900" />
        </button>
      </div>
    </nav>
  );
}
