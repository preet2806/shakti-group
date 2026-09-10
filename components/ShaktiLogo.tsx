import React from 'react';

interface ShaktiLogoProps {
  className?: string;
  variant?: 'color' | 'white' | 'dark';
  showText?: boolean;
}

export const ShaktiLogo: React.FC<ShaktiLogoProps> = ({
  className = "h-10 w-auto",
  variant = 'color',
  showText = true
}) => {
  return (
    <div className="flex items-center gap-3">
      <img
        src="/assets/ShaktiLogo.svg"
        alt="Shakti Group Logo"
        className={`${className} object-contain`}
        onError={(e) => {
          // Fallback to favicon.svg if asset path fails
          (e.target as HTMLImageElement).src = '/favicon.svg';
        }}
      />
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold tracking-tight text-lg leading-tight uppercase ${variant === 'white' ? 'text-white' : 'text-slate-900'}`}>
            SHAKTI
          </span>
          <span className={`text-[10px] font-semibold tracking-widest uppercase ${variant === 'white' ? 'text-sky-300' : 'text-sky-600'}`}>
            GROUP OF COMPANIES
          </span>
        </div>
      )}
    </div>
  );
};

export default ShaktiLogo;