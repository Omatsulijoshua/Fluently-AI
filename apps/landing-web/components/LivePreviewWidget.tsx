'use client';
import React, { useState } from 'react';

export const LivePreviewWidget: React.FC = () => {
  const [messages, setMessages] = useState([
    { sender: 'AI', text: '¡Hola! Soy Sophia, tu tutora de español. ¿Qué tal estuvo tu día hoy?' },
  ]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (!inputText.trim()) return;
    const newMsgs = [...messages, { sender: 'USER', text: inputText }];
    setMessages(newMsgs);
    setInputText('');

    setTimeout(() => {
      setMessages([
        ...newMsgs,
        {
          sender: 'AI',
          text: '¡Excelente! Gramática perfecta. Noté que dijiste "fui al mercado". ¡Uso impecable del pretérito indefinido! 🌟',
        },
      ]);
    }, 800);
  };

  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto 80px auto',
      background: 'rgba(18, 24, 36, 0.85)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.12)',
      borderRadius: '24px',
      padding: '24px',
      boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10B981' }} />
          <span style={{ fontWeight: 700, fontFamily: "'Outfit', sans-serif" }}>LIVE AI TUTOR PREVIEW DEMO</span>
        </div>
        <span style={{ fontSize: '12px', color: '#00F2FE', background: 'rgba(0, 242, 254, 0.1)', padding: '4px 10px', borderRadius: '999px' }}>SPANISH (CEFR B1)</span>
      </div>

      <div style={{ minHeight: '180px', maxHeight: '250px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
        {messages.map((m, i) => (
          <div key={i} style={{ alignSelf: m.sender === 'USER' ? 'flex-end' : 'flex-start', maxWidth: '75%' }}>
            <div style={{
              padding: '12px 18px',
              borderRadius: '16px',
              background: m.sender === 'USER' ? 'linear-gradient(135deg, #6366F1, #8B5CF6)' : 'rgba(255, 255, 255, 0.08)',
              color: '#FFF',
              fontSize: '15px',
            }}>
              {m.text}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '12px' }}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type or speak a phrase in Spanish..."
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          style={{
            flex: 1,
            padding: '14px 20px',
            borderRadius: '12px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#FFF',
            outline: 'none',
          }}
        />
        <button
          onClick={handleSend}
          style={{
            padding: '14px 24px',
            borderRadius: '12px',
            background: '#00F2FE',
            color: '#0A0D14',
            fontWeight: 800,
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};
