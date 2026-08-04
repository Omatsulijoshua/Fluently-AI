import React from 'react';

export const PricingMatrix: React.FC = () => {
  const plans = [
    { title: 'Starter Free', price: '$0', desc: '15 mins/day AI conversation, basic flashcards.', cta: 'Get Started' },
    { title: 'Pro Unlimited', price: '$14.99/mo', desc: 'Unlimited AI Tutor, acoustic IPA mouth analysis, media importer.', cta: 'Start 7-Day Free Trial', featured: true },
    { title: 'Family & Friends', price: '$24.99/mo', desc: 'Up to 5 accounts, shared leaderboards, parent control dashboard.', cta: 'Choose Family' },
    { title: 'Enterprise & Schools', price: 'Custom', desc: 'SAML SSO, custom industry vocab, teacher portal, student analytics.', cta: 'Contact Sales' },
  ];

  return (
    <section id="pricing" style={{ padding: '80px 32px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '40px', textAlign: 'center', fontWeight: 800, fontFamily: "'Outfit', sans-serif", marginBottom: '16px' }}>
        Simple, Transparent Pricing
      </h2>
      <p style={{ textAlign: 'center', color: '#94A3B8', marginBottom: '48px' }}>Unlock infinite fluency with no limits.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
        {plans.map((p, idx) => (
          <div
            key={idx}
            style={{
              padding: '32px 24px',
              borderRadius: '20px',
              background: p.featured ? 'linear-gradient(180deg, rgba(99, 102, 241, 0.2), rgba(18, 24, 36, 0.9))' : 'rgba(18, 24, 36, 0.6)',
              border: p.featured ? '2px solid #6366F1' : '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <h3 style={{ fontSize: '22px', fontWeight: 700, margin: '0 0 8px 0' }}>{p.title}</h3>
              <div style={{ fontSize: '36px', fontWeight: 800, color: p.featured ? '#00F2FE' : '#FFF', marginBottom: '16px' }}>{p.price}</div>
              <p style={{ color: '#94A3B8', fontSize: '14px', lineHeight: 1.5, marginBottom: '24px' }}>{p.desc}</p>
            </div>
            <a
              href="http://localhost:3002"
              style={{
                padding: '12px 20px',
                borderRadius: '12px',
                background: p.featured ? 'linear-gradient(135deg, #6366F1, #8B5CF6)' : 'rgba(255, 255, 255, 0.1)',
                color: '#FFF',
                textAlign: 'center',
                textDecoration: 'none',
                fontWeight: 700,
              }}
            >
              {p.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
