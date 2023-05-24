import './globals.css';

export const metadata = {
  title: 'DevUp',
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
      <body>{children}</body>
    </html>
  );
}
