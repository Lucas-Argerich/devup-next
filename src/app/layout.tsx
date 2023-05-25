import Header from '@/components/structure/Header';
import './globals.css';

export const metadata = {
  title: 'DevUp Project',
  description:
    'The free-space for developers to share their endeavors and interact with each others!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
