// This file is now a Server Component by default.
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ClientLayoutWrapper from './ClientLayoutWrapper'; // New wrapper for client components
// AppLayout and Toaster will be imported in ClientLayoutWrapper

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'SmallBus AI',
  description: 'Your AI assistant for small businesses, powered by Firebase and Genkit.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Next.js will automatically add title and meta description from the 'metadata' export.
            Other <head> elements like favicons can be added here or via Next.js conventions. */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
