import './globals.css';
import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import { ListProvider, SidebarProvider } from '@/components/providers';

const nunito = Nunito_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Do Daily',
  description: 'A simple todo app to help you get things done.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <SidebarProvider>
        <ListProvider>
          <body className={nunito.className}>{children}</body>
        </ListProvider>
      </SidebarProvider>
    </html>
  );
}
