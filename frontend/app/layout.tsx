import './globals.scss';

export const metadata = {
  title: 'Next + Strapi',
  description: 'Demo project with Strapi API',
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
