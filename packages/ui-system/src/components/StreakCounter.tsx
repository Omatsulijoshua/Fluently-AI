import React from 'react';

export interface StreakCounterProps {
  streakDays: number;
}

export const StreakCounter: React.FC<StreakCounterProps> = ({ streakDays }) => {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '6px 14px',
        borderRadius: '999px',
        background: 'rgba(245, 158, 11, 0.15)',
        border: '1px solid rgba(245, 158, 11, 0.3)',
        color: '#F59E0B',
        fontSize: '14px',
        fontWeight: 700,
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      <span style={{ fontSize: '16px' }}>🔥</span>
      <span>{streakDays} DAY STREAK</span>
    </div>
  );
};
