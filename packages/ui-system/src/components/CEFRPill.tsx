import React from 'react';

export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export interface CEFRPillProps {
  level: CEFRLevel;
}

export const CEFRPill: React.FC<CEFRPillProps> = ({ level }) => {
  const gradients: Record<CEFRLevel, string> = {
    A1: 'linear-gradient(135deg, #10B981, #059669)',
    A2: 'linear-gradient(135deg, #3B82F6, #2563EB)',
    B1: 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
    B2: 'linear-gradient(135deg, #EC4899, #DB2777)',
    C1: 'linear-gradient(135deg, #F59E0B, #D97706)',
    C2: 'linear-gradient(135deg, #EF4444, #DC2626)',
  };

  return (
    <span
      style={{
        padding: '4px 10px',
        borderRadius: '999px',
        background: gradients[level],
        color: '#FFF',
        fontSize: '12px',
        fontWeight: 800,
        fontFamily: "'Outfit', sans-serif",
        letterSpacing: '0.5px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
      }}
    >
      CEFR {level}
    </span>
  );
};
