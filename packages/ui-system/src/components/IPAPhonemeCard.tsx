import React from 'react';

export interface IPAPhonemeCardProps {
  symbol: string;
  exampleWord: string;
  description: string;
  acousticScore?: number;
  onClick?: () => void;
}

export const IPAPhonemeCard: React.FC<IPAPhonemeCardProps> = ({
  symbol,
  exampleWord,
  description,
  acousticScore = 95,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      style={{
        padding: '16px',
        borderRadius: '16px',
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(12px)',
        color: '#FFF',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        width: '180px',
      }}
      className="fluently-hover-lift"
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '28px', fontWeight: 800, fontFamily: "'Outfit', sans-serif", color: '#00F2FE' }}>
          /{symbol}/
        </span>
        <span
          style={{
            fontSize: '11px',
            fontWeight: 700,
            padding: '2px 8px',
            borderRadius: '999px',
            background: acousticScore >= 90 ? 'rgba(16, 185, 129, 0.2)' : 'rgba(245, 158, 11, 0.2)',
            color: acousticScore >= 90 ? '#10B981' : '#F59E0B',
          }}
        >
          {acousticScore}% IPA
        </span>
      </div>
      <div style={{ fontSize: '15px', fontWeight: 600, color: '#F8FAFC' }}>{exampleWord}</div>
      <div style={{ fontSize: '12px', color: '#94A3B8', lineHeight: 1.3 }}>{description}</div>
    </div>
  );
};
