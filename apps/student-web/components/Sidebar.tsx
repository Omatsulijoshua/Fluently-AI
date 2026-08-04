import React from 'react';

export const Sidebar: React.FC = () => {
  const items = [
    { label: 'Dashboard', icon: '⚡', active: true },
    { label: 'AI Conversations', icon: '🎙️' },
    { label: 'Grammar Coach', icon: '🧠' },
    { label: 'Pronunciation IPA', icon: '🗣️' },
    { label: 'Smart Reader', icon: '📖' },
    { label: 'Flashcards (SRS)', icon: '🎴' },
    { label: 'Leaderboard', icon: '🏆' },
    { label: 'Settings', icon: '⚙️' },
  ];

  return (
    <aside
      style={{
        width: '240px',
        height: '100vh',
        background: 'rgba(18, 24, 36, 0.95)',
        backdropFilter: 'blur(20px)',
        borderRight: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '24px 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        position: 'fixed',
        top: 0,
        left: 0,
      }}
    >
      <div style={{ fontSize: '22px', fontWeight: 800, fontFamily: "'Outfit', sans-serif", color: '#00F2FE', paddingLeft: '12px' }}>
        FLUENTLY<span style={{ color: '#FFF' }}>.AI</span>
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {items.map((item, idx) => (
          <a
            key={idx}
            href="#"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 14px',
              borderRadius: '12px',
              background: item.active ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.25), rgba(139, 92, 246, 0.15))' : 'transparent',
              border: item.active ? '1px solid rgba(99, 102, 241, 0.4)' : '1px solid transparent',
              color: item.active ? '#FFF' : '#94A3B8',
              textDecoration: 'none',
              fontWeight: item.active ? 700 : 500,
              fontSize: '14px',
            }}
          >
            <span style={{ fontSize: '18px' }}>{item.icon}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
};
