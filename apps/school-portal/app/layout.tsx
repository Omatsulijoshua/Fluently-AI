import React from 'react';

export const metadata = {
  title: 'School Portal - Fluently AI',
  description: 'School district management, seat allocations, and FERPA curriculum compliance portal',
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
          .school-nav {
            background: rgba(18, 24, 36, 0.9);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding: 16px 32px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        `}</style>
      </head>
      <body>
        <header className="school-nav">
          <div style={{ fontSize: '22px', fontWeight: 800, fontFamily: "'Outfit', sans-serif", color: '#F59E0B' }}>
            FLUENTLY<span style={{ color: '#FFF' }}>.SCHOOL</span>
          </div>
          <div style={{ fontSize: '14px', color: '#94A3B8' }}>District Admin: Dr. Marcus Vance</div>
        </header>
        <main style={{ padding: '32px', maxWidth: '1200px', margin: '0 auto' }}>{children}</main>
      </body>
    </html>
  );
}
