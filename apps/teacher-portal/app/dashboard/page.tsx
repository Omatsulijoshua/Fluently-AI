import React from 'react';

export default function Dashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '32px', fontWeight: 800, fontFamily: "'Outfit', sans-serif", margin: 0 }}>
            Educator Dashboard
          </h1>
          <p style={{ color: '#94A3B8', margin: '4px 0 0 0' }}>Manage classrooms, generate AI homework assignments, and review audio grades.</p>
        </div>
        <button style={{
          padding: '12px 24px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #8B5CF6, #6366F1)',
          color: '#FFF',
          border: 'none',
          fontWeight: 700,
          cursor: 'pointer'
        }}>
          + Generate AI Assignment
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        <div style={{ padding: '24px', borderRadius: '20px', background: 'rgba(18, 24, 36, 0.8)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <span style={{ fontSize: '12px', color: '#8B5CF6', fontWeight: 700 }}>ACTIVE CLASSROOM</span>
          <h3 style={{ fontSize: '20px', fontWeight: 800, margin: '8px 0', fontFamily: "'Outfit', sans-serif" }}>AP Spanish Language & Culture</h3>
          <p style={{ color: '#94A3B8', fontSize: '14px', margin: '0 0 16px 0' }}>28 Active Students • Join Code: <strong style={{ color: '#00F2FE' }}>SPAN-4921</strong></p>
          <div style={{ fontSize: '13px', color: '#10B981', fontWeight: 700 }}>92% Average Class Pronunciation Score</div>
        </div>

        <div style={{ padding: '24px', borderRadius: '20px', background: 'rgba(18, 24, 36, 0.8)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <span style={{ fontSize: '12px', color: '#F59E0B', fontWeight: 700 }}>PENDING AI EVALUATIONS</span>
          <h3 style={{ fontSize: '20px', fontWeight: 800, margin: '8px 0', fontFamily: "'Outfit', sans-serif" }}>14 Submissions Ready</h3>
          <p style={{ color: '#94A3B8', fontSize: '14px', margin: '0 0 16px 0' }}>Oral Dialogue: Ordering at Restaurant</p>
          <div style={{ fontSize: '13px', color: '#8B5CF6', fontWeight: 700 }}>Automated AI Scores Calculated ✨</div>
        </div>
      </div>
    </div>
  );
}
