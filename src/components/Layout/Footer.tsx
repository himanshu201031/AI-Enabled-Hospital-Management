import Link from 'next/link';
import { Plus, Github, Twitter, Linkedin, Activity, Brain, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#f1f6f9] border-t border-gray-200/50 px-4 sm:px-8 pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 relative z-10">
        {/* Brand Column */}
        <div className="md:col-span-5 space-y-8">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-primary border-[3px] border-white rounded-2xl p-1 flex items-center justify-center shadow-2xl transition-transform group-hover:rotate-12 group-hover:scale-110">
              <Plus className="w-6 h-6 text-white stroke-[5px]" />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="text-3xl font-black tracking-tighter text-gray-950 italic">
                Pearl <span className="text-primary not-italic">Thoughts</span>
              </span>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-primary/70">Intelligence for Life</span>
            </div>
          </Link>
          <p className="text-gray-500 text-lg leading-relaxed max-w-sm font-medium">
            Standardizing clinical excellence through the power of Pearl AI. Mission-critical infrastructure for the modern healer.
          </p>
          <div className="flex gap-4 pt-4">
            {[Twitter, Github, Linkedin].map((Icon, i) => (
              <Link key={i} href="#" className="w-12 h-12 rounded-2xl bg-white shadow-xl shadow-gray-200/20 border border-gray-100 flex items-center justify-center text-gray-500 hover:text-primary transition-all hover:scale-105 hover:-translate-y-1">
                <Icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>

        {/* Links Grid */}
        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12">
          <div className="space-y-6">
            <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">Ecosystem</h4>
            <ul className="space-y-4 text-sm font-bold text-gray-900 tracking-tight">
              <li><Link href="/register" className="hover:text-primary transition-colors flex items-center gap-2 group"><Activity className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-primary" /> Patient Registry</Link></li>
              <li><Link href="/triage" className="hover:text-primary transition-colors flex items-center gap-2 group"><Brain className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-primary" /> Neural Triage</Link></li>
              <li><Link href="/clinician" className="hover:text-primary transition-colors flex items-center gap-2 group"><ShieldCheck className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-primary" /> Data Portal</Link></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">Resources</h4>
            <ul className="space-y-4 text-sm font-bold text-gray-900 tracking-tight">
              <li><Link href="#" className="hover:text-primary transition-colors">Documentation</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Safety Protocols</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Help Center</Link></li>
            </ul>
          </div>
          <div className="space-y-6 hidden sm:block">
            <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">Corporate</h4>
            <ul className="space-y-4 text-sm font-bold text-gray-900 tracking-tight">
              <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Legal</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Stats Mini Bar */}
      <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-gray-200/60 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex gap-8 group">
          <div className="flex flex-col">
            <span className="text-sm font-black text-gray-900 tracking-tighter">99.9% Uptime</span>
            <span className="text-[10px] font-black uppercase text-gray-400">Clinical Reliability</span>
          </div>
          <div className="w-[1px] h-8 bg-gray-200" />
          <div className="flex flex-col">
            <span className="text-sm font-black text-gray-900 tracking-tighter">SOC2 Type II</span>
            <span className="text-[10px] font-black uppercase text-gray-400">Security Certified</span>
          </div>
        </div>
        <p className="text-xs text-gray-400 font-bold md:text-right uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} Pearl thoughts Health AI • Excellence by Design.
        </p>
      </div>
    </footer>
  );
}
