import React from 'react';

export interface AudioVisualizerProps {
  isRecording?: boolean;
  isPlaying?: boolean;
  barCount?: number;
}

export const AudioVisualizer: React.FC<AudioVisualizerProps> = ({
  isRecording = false,
  isPlaying = false,
  barCount = 16,
}) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', height: '36px', padding: '0 8px' }}>
      {Array.from({ length: barCount }).map((_, idx) => {
        const heightMultiplier = Math.sin((idx / barCount) * Math.PI) * 100;
        const height = isRecording || isPlaying ? Math.max(15, heightMultiplier) : 20;

        return (
          <div
            key={idx}
            style={{
              width: '4px',
              height: `${height}%`,
              background: isRecording
                ? 'linear-gradient(180deg, #F43F5E, #FB7185)'
                : 'linear-gradient(180deg, #00F2FE, #6366F1)',
              borderRadius: '2px',
              transition: 'height 0.2s ease-in-out',
            }}
          />
        );
      })}
    </div>
  );
};
