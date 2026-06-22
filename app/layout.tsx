import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GOGO Electric — Design System',
  description: 'Electric boda-boda battery-swap network by Bodawerk International, Uganda.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
