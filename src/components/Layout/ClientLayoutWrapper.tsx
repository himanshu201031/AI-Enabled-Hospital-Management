'use client';

import { ReactNode } from 'react';
import Sidebar from './Sidebar';

export default function ClientLayoutWrapper({ children }: { children: ReactNode }) {
    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-grow min-h-screen">
                {children}
            </main>
        </div>
    );
}
