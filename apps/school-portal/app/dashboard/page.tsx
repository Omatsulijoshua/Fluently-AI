import React from 'react';

export default function Dashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h1 style={{ fontSize: '32px', fontWeight: 800, fontFamily: "'Outfit', sans-serif", margin: 0 }}>
          School District Administration
        </h1>
        <p style={{ color: '#94A3B8', margin: '4px 0 0 0' }}>Manage institutional licenses, teacher seat allocations, and district curriculum compliance.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
        <div style={{ padding: '24px', borderRadius: '20px', background: 'rgba(18, 24, 36, 0.8)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <span style={{ fontSize: '12px', color: '#F59E0B', fontWeight: 700 }}>INSTITUTIONAL LICENSES</span>
          <h3 style={{ fontSize: '20px', fontWeight: 800, margin: '12px 0 4px 0', fontFamily: "'Outfit', sans-serif" }}>Oakridge Academy District</h3>
          <p style={{ color: '#94A3B8', fontSize: '14px', margin: '0 0 16px 0' }}>Student Seats Used: <strong>1,420 / 2,000</strong></p>
          <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '999px', height: '8px', overflow: 'hidden' }}>
            <div style={{ width: '71%', height: '100%', background: '#F59E0B' }} />
          </div>
        </div>

        <div style={{ padding: '24px', borderRadius: '20px', background: 'rgba(18, 24, 36, 0.8)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <span style={{ fontSize: '12px', color: '#10B981', fontWeight: 700 }}>FERPA & COMPLIANCE</span>
          <h3 style={{ fontSize: '20px', fontWeight: 800, margin: '12px 0 4px 0', fontFamily: "'Outfit', sans-serif" }}>Student Privacy Standard</h3>
          <p style={{ color: '#94A3B8', fontSize: '14px', margin: '0 0 16px 0' }}>Zero PII data sharing • Encrypted audio retention rules active.</p>
          <span style={{ color: '#10B981', fontWeight: 700, fontSize: '13px' }}>✓ Compliant with US FERPA & COPPA</span>
        </div>
      </div>
    </div>
  );
}
