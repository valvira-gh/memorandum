import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

import MainHeader from '@/components/main-header';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Memorandum',
    description: 'Memo app for your daily notes',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <header className="w-full h-[100px] bg-primary flex flex-col items-center">
                    <MainHeader />
                </header>
                <main className="w-full h-full">{children}</main>
            </body>
        </html>
    );
}
