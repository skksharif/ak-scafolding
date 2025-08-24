import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Best Scaffolding in Hyderabad | AK Scaffolding',
  description: 'AK Scaffolding – Hyderabad\'s trusted scaffolding supplier. Offering cuplock systems, acro spans, jack pipes, centering sheets, clamps & galvanized planks with safety and strength.',
  keywords: 'Best Scaffolding in Hyderabad, Scaffolding Suppliers in Hyderabad, Scaffolding Rentals Hyderabad, Scaffolding Cuplock Systems Hyderabad, Scaffolding Materials Hyderabad',
  openGraph: {
    title: 'Best Scaffolding in Hyderabad | AK Scaffolding',
    description: 'Hyderabad\'s trusted scaffolding supplier with premium quality materials',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}