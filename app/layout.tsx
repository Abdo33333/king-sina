import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'KING SINA | النقل البري إلى سيناء',
  description: 'رحلات نقل بري مريحة وموثوقة من القاهرة إلى دهب وشرم الشيخ وطابا ونويبع.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl"><body>{children}</body></html>;
}
