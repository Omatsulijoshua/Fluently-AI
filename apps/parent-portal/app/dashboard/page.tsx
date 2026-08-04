import React from 'react';

export default function Dashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h1 style={{ fontSize: '32px', fontWeight: 800, fontFamily: "'Outfit', sans-serif", margin: 0 }}>
          Parental Safety & Progress Hub
        </h1>
        <p style={{ color: '#94A3B8', margin: '4px 0 0 0' }}>Monitor screen time limits, COPPA safety filters, and milestone rewards for your children.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
        <div style={{ padding: '24px', borderRadius: '20px', background: 'rgba(18, 24, 36, 0.8)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', color: '#10B981', fontWeight: 700 }}>LINKED CHILD PROFILE</span>
            <span style={{ padding: '4px 10px', background: 'rgba(16, 185, 129, 0.15)', color: '#10B981', borderRadius: '999px', fontSize: '12px', fontWeight: 700 }}>COPPA SECURE</span>
          </div>
          <h3 style={{ fontSize: '20px', fontWeight: 800, margin: '12px 0 4px 0', fontFamily: "'Outfit', sans-serif" }}>Leo Miller (Age 10)</h3>
          <p style={{ color: '#94A3B8', fontSize: '14px', margin: '0 0 16px 0' }}>Learning: Spanish (A2 Elementary) • 14 Day Streak</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '12px', fontSize: '13px' }}>
            <span>Today's Time: <strong>22 / 30 mins</strong></span>
            <span style={{ color: '#00F2FE' }}>Active Cap: 30m</span>
          </div>
        </div>

        <div style={{ padding: '24px', borderRadius: '20px', background: 'rgba(18, 24, 36, 0.8)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <span style={{ fontSize: '12px', color: '#F59E0B', fontWeight: 700 }}>SAFETY & CONTENT FILTER</span>
          <h3 style={{ fontSize: '20px', fontWeight: 800, margin: '12px 0 4px 0', fontFamily: "'Outfit', sans-serif" }}>Strict AI Safety Rules</h3>
          <p style={{ color: '#94A3B8', fontSize: '14px', margin: '0 0 16px 0' }}>Zero open web browsing • Pre-vetted kid conversation topics only.</p>
          <button style={{ padding: '8px 16px', background: 'rgba(245, 158, 11, 0.15)', color: '#F59E0B', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '10px', fontWeight: 700, cursor: 'pointer' }}>
            Configure Limits
          </button>
        </div>
      </div>
    </div>
  );
}
