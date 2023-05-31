import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/app/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'omdb api - Next 13.4',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-[#f3f3f3]`}>
        <Navbar />
        <main className='flex max-w-[1800px] mx-auto my-12 px-6 md:px-10'>
          {children}
        </main>
      </body>
    </html>
  );
}