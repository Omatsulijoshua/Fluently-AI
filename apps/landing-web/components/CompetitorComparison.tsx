import React from 'react';

export const CompetitorComparison: React.FC = () => {
  const rows = [
    { feature: 'Dynamic AI-Generated Lessons', fluently: '✅ Infinite', duolingo: '❌ Static Tree', speak: '⚠️ Partial', babbel: '❌ Static' },
    { feature: 'Permanent Memory of Mistakes', fluently: '✅ Lifetime HLR', duolingo: '❌ None', speak: '❌ None', babbel: '❌ None' },
    { feature: 'IPA Acoustic Mouth Alignment', fluently: '✅ 3D Phonemes', duolingo: '❌ Basic Voice', speak: '❌ STT Only', babbel: '❌ Audio Clip' },
    { feature: 'Smart Media Importer (PDF/Web/YT)', fluently: '✅ Auto CEFR', duolingo: '❌ None', speak: '❌ None', babbel: '❌ None' },
    { feature: 'Multi-Portal Ecosystem (Schools/Enterprise)', fluently: '✅ 9 Portals', duolingo: '⚠️ Basic School', speak: '❌ None', babbel: '⚠️ Corporate' },
  ];

  return (
    <section id="comparison" style={{ padding: '80px 32px', maxWidth: '1000px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '40px', textAlign: 'center', fontWeight: 800, fontFamily: "'Outfit', sans-serif", marginBottom: '40px' }}>
        Why Fluently AI Surpasses Every Competitor
      </h2>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid rgba(255, 255, 255, 0.15)' }}>
              <th style={{ padding: '16px', color: '#94A3B8' }}>Feature</th>
              <th style={{ padding: '16px', color: '#00F2FE', fontSize: '18px', fontWeight: 800 }}>Fluently AI</th>
              <th style={{ padding: '16px', color: '#94A3B8' }}>Duolingo</th>
              <th style={{ padding: '16px', color: '#94A3B8' }}>Speak / Loora</th>
              <th style={{ padding: '16px', color: '#94A3B8' }}>Babbel</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <td style={{ padding: '16px', fontWeight: 600 }}>{r.feature}</td>
                <td style={{ padding: '16px', color: '#00F2FE', fontWeight: 800 }}>{r.fluently}</td>
                <td style={{ padding: '16px', color: '#94A3B8' }}>{r.duolingo}</td>
                <td style={{ padding: '16px', color: '#94A3B8' }}>{r.speak}</td>
                <td style={{ padding: '16px', color: '#94A3B8' }}>{r.babbel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
