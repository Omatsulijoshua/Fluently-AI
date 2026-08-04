import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section style={{ padding: '80px 32px', textAlign: 'center', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{
        display: 'inline-block',
        padding: '6px 16px',
        borderRadius: '999px',
        background: 'rgba(0, 242, 254, 0.12)',
        border: '1px solid rgba(0, 242, 254, 0.3)',
        color: '#00F2FE',
        fontSize: '13px',
        fontWeight: 700,
        marginBottom: '24px',
        letterSpacing: '1px',
      }}>
        🚀 NEXT-GEN AI LANGUAGE OPERATING SYSTEM
      </div>
      <h1 style={{
        fontSize: '64px',
        fontWeight: 800,
        fontFamily: "'Outfit', sans-serif",
        lineHeight: 1.1,
        marginBottom: '24px',
        background: 'linear-gradient(180deg, #FFFFFF 30%, #94A3B8 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>
        Master Any Language With Your <br />
        <span style={{ background: 'linear-gradient(135deg, #00F2FE, #4FACFE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          24/7 Personal AI Tutor
        </span>
      </h1>
      <p style={{ fontSize: '20px', color: '#94A3B8', maxWidth: '750px', margin: '0 auto 40px auto', lineHeight: 1.6 }}>
        Never static lessons. Permanent memory of your mistakes. Acoustic IPA mouth placement analysis, real-time voice dialogues, and dynamic CEFR curriculum.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
        <a href="http://localhost:3002" style={{
          padding: '16px 36px',
          borderRadius: '14px',
          background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
          color: '#FFF',
          fontWeight: 800,
          fontSize: '18px',
          textDecoration: 'none',
          boxShadow: '0 0 25px rgba(99, 102, 241, 0.4)',
        }}>
          Start Free Trial Now
        </a>
      </div>
    </section>
  );
};
