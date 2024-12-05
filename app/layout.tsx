import type {Metadata} from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PrelineScript from './components/PrelineScript';

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Generated by create next app',
  icons: {
    icon: '/images/logo.png',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <PrelineScript />
      </body>
    </html>
  );
}
