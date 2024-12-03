import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import MainHeader from '@/components/MainHeader';
import MainFooter from '@/components/MainFooter';
import { ShopContextWrapper } from './context/shopContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Shop App',
    description: 'Created By Daniel Moore',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='en'>
            <body className={inter.className + ' relative flex flex-col items-center justify-center'}>
                <MainHeader />
                <section className='mx-6 md:mx-14 max-w-[1030px] w-full'>
                    <ShopContextWrapper>{children}</ShopContextWrapper>
                </section>
                <MainFooter />
            </body>
        </html>
    );
}
