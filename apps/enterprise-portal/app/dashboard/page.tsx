import React from 'react';

export default function Dashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h1 style={{ fontSize: '32px', fontWeight: 800, fontFamily: "'Outfit', sans-serif", margin: 0 }}>
          Workforce Language Upskilling Suite
        </h1>
        <p style={{ color: '#94A3B8', margin: '4px 0 0 0' }}>Manage employee licenses, custom corporate vocabulary tracks, and SAML 2.0 SSO identity.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
        <div style={{ padding: '24px', borderRadius: '20px', background: 'rgba(18, 24, 36, 0.8)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <span style={{ fontSize: '12px', color: '#00F2FE', fontWeight: 700 }}>CORPORATE PLAN</span>
          <h3 style={{ fontSize: '20px', fontWeight: 800, margin: '12px 0 4px 0', fontFamily: "'Outfit', sans-serif" }}>Acme Global Workforce</h3>
          <p style={{ color: '#94A3B8', fontSize: '14px', margin: '0 0 16px 0' }}>Enrolled Employees: <strong>485 / 500</strong></p>
          <div style={{ fontSize: '13px', color: '#10B981', fontWeight: 700 }}>96% Weekly Engagement Rate</div>
        </div>

        <div style={{ padding: '24px', borderRadius: '20px', background: 'rgba(18, 24, 36, 0.8)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <span style={{ fontSize: '12px', color: '#8B5CF6', fontWeight: 700 }}>CUSTOM VOCABULARY TRACKS</span>
          <h3 style={{ fontSize: '20px', fontWeight: 800, margin: '12px 0 4px 0', fontFamily: "'Outfit', sans-serif" }}>3 Industry Tracks Active</h3>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '12px' }}>
            <span style={{ padding: '4px 10px', background: 'rgba(99, 102, 241, 0.15)', color: '#6366F1', borderRadius: '6px', fontSize: '12px', fontWeight: 700 }}>Business English</span>
            <span style={{ padding: '4px 10px', background: 'rgba(0, 242, 254, 0.15)', color: '#00F2FE', borderRadius: '6px', fontSize: '12px', fontWeight: 700 }}>Medical Spanish</span>
            <span style={{ padding: '4px 10px', background: 'rgba(139, 92, 246, 0.15)', color: '#8B5CF6', borderRadius: '6px', fontSize: '12px', fontWeight: 700 }}>Aviation French</span>
          </div>
        </div>
      </div>
    </div>
  );
}
