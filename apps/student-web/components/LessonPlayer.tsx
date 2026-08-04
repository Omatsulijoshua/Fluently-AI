'use client';
import React, { useState } from 'react';

export const LessonPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      style={{
        padding: '24px',
        borderRadius: '24px',
        background: 'rgba(18, 24, 36, 0.8)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span style={{ fontSize: '12px', color: '#00F2FE', fontWeight: 700 }}>DYNAMIC AI LESSON</span>
          <h3 style={{ fontSize: '20px', fontWeight: 800, margin: '4px 0 0 0', fontFamily: "'Outfit', sans-serif" }}>
            Ordering Coffee in Madrid (Castilian Spanish)
          </h3>
        </div>
        <span style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10B981', padding: '4px 12px', borderRadius: '999px', fontWeight: 700, fontSize: '13px' }}>
          CEFR B1
        </span>
      </div>

      <div style={{ background: 'rgba(0,0,0,0.3)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.06)' }}>
        <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#94A3B8' }}>AI Tutor Prompt:</p>
        <p style={{ margin: 0, fontSize: '16px', fontWeight: 600, color: '#FFF' }}>
          "¡Hola! Bienvenido a Cafetería Central. ¿Qué le gustaría tomar hoy?"
        </p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', justifyContent: 'center', padding: '16px 0' }}>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: isPlaying ? '#F43F5E' : 'linear-gradient(135deg, #00F2FE, #4FACFE)',
            border: 'none',
            color: '#0A0D14',
            fontSize: '24px',
            cursor: 'pointer',
            boxShadow: '0 0 25px rgba(0, 242, 254, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {isPlaying ? '⏹️' : '🎙️'}
        </button>
      </div>

      <div style={{ textAlign: 'center', fontSize: '13px', color: '#94A3B8' }}>
        {isPlaying ? 'Listening to your pronunciation... Speak now!' : 'Click microphone to record your response'}
      </div>
    </div>
  );
};
