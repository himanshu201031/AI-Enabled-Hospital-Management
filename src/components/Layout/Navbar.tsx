import Link from 'next/link';
import { Stethoscope, UserCircle } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-3 flex justify-between items-center transition-all">
      <Link href="/" className="flex items-center gap-2 text-primary hover:opacity-90 transition-opacity">
        <div className="bg-primary/10 p-2 rounded-xl">
          <Stethoscope className="w-6 h-6 text-primary" />
        </div>
        <span className="text-xl font-bold tracking-tight text-gray-900">
          AI Hospital<span className="text-primary">Sys</span>
        </span>
      </Link>
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20">
          <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center">
            <UserCircle className="w-6 h-6 text-primary" />
          </div>
        </button>
      </div>
    </nav>
  );
}
