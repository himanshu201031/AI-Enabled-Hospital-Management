'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';

export default function ClientLayoutWrapper({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    return (
        <div className="flex min-h-screen">
            {!isHomePage && <Sidebar />}
            <main className={`flex-1 ${isHomePage ? '' : 'p-4 md:p-8'}`}>
                {children}
            </main>
        </div>
    );
}
