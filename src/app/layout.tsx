import '../styles/globals.css';
import { ReactNode } from 'react';
import Providers from '../components/Providers';
import Navbar from '../components/Layout/Navbar';
import Sidebar from '../components/Layout/Sidebar';
import Footer from '../components/Layout/Footer';

export const metadata = {
  title: 'AI Hospital System',
  description: 'AI‑Enabled Hospital Management Dashboard',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Providers>
          <Navbar />
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 p-4">{children}</main>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
