'use client';

import { ReactNode } from 'react';

export default function ClientLayoutWrapper({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen">
            <main>
                {children}
            </main>
        </div>
    );
}
