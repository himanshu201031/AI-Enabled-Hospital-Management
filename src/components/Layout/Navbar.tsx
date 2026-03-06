import Link from 'next/link';
import { Plus, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-[#f1f6f9]/80 backdrop-blur-md px-4 sm:px-8 py-4 flex justify-between items-center transition-all">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
        <div className="bg-transparent border-[3px] border-[#068783] rounded-full p-0.5 flex items-center justify-center">
          <Plus className="w-5 h-5 text-[#068783] stroke-[4px]" />
        </div>
        <span className="text-2xl font-bold tracking-tight text-gray-900">
          Nurexa
        </span>
      </Link>

      {/* Center Links (Desktop) */}
      <div className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-800">
        <Link href="/" className="hover:text-[#068783] transition-colors">Home+</Link>
        <Link href="/about" className="hover:text-[#068783] transition-colors">About+</Link>
        <Link href="/service" className="hover:text-[#068783] transition-colors">Service+</Link>
        <Link href="/portfolio" className="hover:text-[#068783] transition-colors">Portfolio+</Link>
        <Link href="/page" className="hover:text-[#068783] transition-colors">Page+</Link>
        <Link href="/blog" className="hover:text-[#068783] transition-colors">Blog+</Link>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3">
        <Link href="/schedule" className="hidden sm:inline-block">
          <button className="bg-[#0b1f2e] text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-[#1a364d] transition-colors">
            Appointment
          </button>
        </Link>
        <button className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-xl hover:bg-gray-100 transition-colors">
          <Menu className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </nav>
  );
}
