import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'glass' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  glow?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  glow = false,
  children,
  className = '',
  ...props
}) => {
  const sizeStyles = {
    sm: 'padding: 6px 14px; font-size: 13px;',
    md: 'padding: 10px 20px; font-size: 15px;',
    lg: 'padding: 14px 28px; font-size: 17px;',
  };

  const variantStyles = {
    primary: 'background: linear-gradient(135deg, #6366F1, #8B5CF6); color: #FFF; border: none;',
    secondary: 'background: #1E293B; color: #F8FAFC; border: 1px solid #334155;',
    glass: 'background: rgba(255, 255, 255, 0.08); backdrop-filter: blur(12px); color: #FFF; border: 1px solid rgba(255, 255, 255, 0.15);',
    accent: 'background: linear-gradient(135deg, #00F2FE, #4FACFE); color: #0A0D14; border: none; font-weight: 700;',
  };

  return (
    <button
      style={{
        borderRadius: '12px',
        fontWeight: 600,
        fontFamily: "'Outfit', sans-serif",
        cursor: 'pointer',
        transition: 'all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        boxShadow: glow ? '0 0 20px rgba(99, 102, 241, 0.4)' : 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
      }}
      className={`fluently-button fluently-hover-lift ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
