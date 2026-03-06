import '../styles/globals.css';
import { ReactNode } from 'react';
import Providers from '../components/Providers';
import Navbar from '../components/Layout/Navbar';
import ClientLayoutWrapper from '../components/Layout/ClientLayoutWrapper';
import Footer from '../components/Layout/Footer';

export const metadata = {
  title: 'MediAI Hub | Clinical AI & Hospital Intelligence',
  description: 'Advanced AI-Enabled Hospital Management System and Neural Triage Infrastructure.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 selection:bg-primary/20 antialiased font-sans">
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <ClientLayoutWrapper>
              <div className="flex-grow">
                {children}
              </div>
            </ClientLayoutWrapper>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
