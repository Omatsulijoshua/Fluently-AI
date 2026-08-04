import React from 'react';
import { LessonPlayer } from '../../components/LessonPlayer';

export default function Dashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '1200px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '32px', fontWeight: 800, fontFamily: "'Outfit', sans-serif", margin: 0 }}>
            Welcome back, Alex! 👋
          </h1>
          <p style={{ color: '#94A3B8', margin: '4px 0 0 0' }}>Your AI tutor Sophia has prepared 3 dynamic micro-lessons for today.</p>
        </div>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <div style={{ padding: '8px 16px', background: 'rgba(245, 158, 11, 0.15)', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '999px', color: '#F59E0B', fontWeight: 700 }}>
            🔥 14 DAY STREAK
          </div>
          <div style={{ padding: '8px 16px', background: 'rgba(99, 102, 241, 0.15)', border: '1px solid rgba(99, 102, 241, 0.3)', borderRadius: '999px', color: '#6366F1', fontWeight: 700 }}>
            ⚡ 2,450 XP
          </div>
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        <LessonPlayer />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ padding: '20px', borderRadius: '20px', background: 'rgba(18, 24, 36, 0.8)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h4 style={{ margin: '0 0 12px 0', fontFamily: "'Outfit', sans-serif", fontSize: '16px' }}>Target Language Mastery</h4>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#00F2FE', marginBottom: '4px' }}>Spanish (Castilian)</div>
            <div style={{ fontSize: '14px', color: '#10B981', fontWeight: 700 }}>CEFR Level B1 - Intermediate</div>
          </div>

          <div style={{ padding: '20px', borderRadius: '20px', background: 'rgba(18, 24, 36, 0.8)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h4 style={{ margin: '0 0 12px 0', fontFamily: "'Outfit', sans-serif", fontSize: '16px' }}>Weak IPA Phonemes Today</h4>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ padding: '6px 12px', background: 'rgba(244, 63, 94, 0.15)', color: '#F43F5E', borderRadius: '8px', fontWeight: 700 }}>/r/ trill</span>
              <span style={{ padding: '6px 12px', background: 'rgba(245, 158, 11, 0.15)', color: '#F59E0B', borderRadius: '8px', fontWeight: 700 }}>/θ/ ceta</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
