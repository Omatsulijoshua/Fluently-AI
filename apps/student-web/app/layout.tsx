import React from 'react';
import { Sidebar } from '../components/Sidebar';

export const metadata = {
  title: 'Learner Workspace - Fluently AI',
  description: 'Personalized AI language learning student dashboard',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          body {
            margin: 0;
            background-color: #0A0D14;
            color: #F8FAFC;
            font-family: 'Plus Jakarta Sans', sans-serif;
          }
        `}</style>
      </head>
      <body style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ marginLeft: '240px', flex: 1, padding: '32px', minHeight: '100vh' }}>{children}</main>
      </body>
    </html>
  );
}
