import React from 'react';

export const metadata = {
  title: 'Fluently AI - The World\'s Most Advanced AI Language Operating System',
  description: 'Master any language 10x faster with your 24/7 personal AI tutor. Dynamic lessons, acoustic IPA pronunciation engine, permanent cognitive memory, and real-time voice dialogues.',
  openGraph: {
    title: 'Fluently AI - AI Language Operating System',
    description: 'Surpassing Duolingo, Speak, and Babbel with dynamic AI tutoring.',
    url: 'https://fluently.ai',
    siteName: 'Fluently AI',
    type: 'website',
  },
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
          .glass-nav {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 100;
            background: rgba(10, 13, 20, 0.75);
            backdrop-filter: blur(16px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding: 16px 32px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        `}</style>
      </head>
      <body>
        <header className="glass-nav">
          <div style={{ fontSize: '24px', fontWeight: 800, fontFamily: "'Outfit', sans-serif", color: '#00F2FE' }}>
            FLUENTLY<span style={{ color: '#FFF' }}>.AI</span>
          </div>
          <nav style={{ display: 'flex', gap: '24px', fontSize: '15px', fontWeight: 600 }}>
            <a href="#features" style={{ color: '#94A3B8', textDecoration: 'none' }}>Features</a>
            <a href="#comparison" style={{ color: '#94A3B8', textDecoration: 'none' }}>Why Us</a>
            <a href="#pricing" style={{ color: '#94A3B8', textDecoration: 'none' }}>Pricing</a>
            <a href="#enterprise" style={{ color: '#94A3B8', textDecoration: 'none' }}>Enterprise</a>
          </nav>
          <div style={{ display: 'flex', gap: '12px' }}>
            <a href="http://localhost:3002" style={{ padding: '8px 16px', color: '#FFF', textDecoration: 'none', fontWeight: 600 }}>Sign In</a>
            <a href="http://localhost:3002" style={{ padding: '8px 18px', background: 'linear-gradient(135deg, #6366F1, #8B5CF6)', borderRadius: '10px', color: '#FFF', textDecoration: 'none', fontWeight: 700 }}>Get Started</a>
          </div>
        </header>
        <main style={{ paddingTop: '80px' }}>{children}</main>
      </body>
    </html>
  );
}
