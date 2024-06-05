import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

import MainHeader from '@/components/main-header';
import AddNewNote from '@/components/add-new-note';

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
                <header className="w-full bg-primary flex items-center justify-center">
                    <MainHeader />
                </header>
                <div className="flex flex-col w-full items-center">
                    <aside className="text-foreground ">
                        <AddNewNote />
                    </aside>
                    <main className="w-full h-full">{children}</main>
                </div>
            </body>
        </html>
    );
}
