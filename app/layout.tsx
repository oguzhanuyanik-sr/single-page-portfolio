import './global.css';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';

const grotesk = Space_Grotesk({
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  fallback: ['sans-serif'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Single Page Portfolio',
  description: 'This is a portfolio landing page.',
  icons: {
    icon: '/favicon.ico',
  },
  authors: {
    name: 'Oğuzhan',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={grotesk.className}>{children}</body>
    </html>
  );
}
