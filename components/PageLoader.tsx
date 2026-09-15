import React from 'react';

interface PageLoaderProps {
  message?: string;
  fullScreen?: boolean;
}

export const PageLoader: React.FC<PageLoaderProps> = ({
  message = 'Loading industrial gas solutions...',
  fullScreen = true,
}) => {
  return (
    <div
      className={`${
        fullScreen ? 'fixed inset-0 z-50' : 'min-h-[60vh] w-full'
      } flex flex-col items-center justify-center bg-white/95 backdrop-blur-xs transition-opacity duration-300`}
      role="status"
      aria-label="Loading page"
    >
      <div className="relative flex flex-col items-center justify-center p-8 max-w-sm text-center">
        {/* Ambient Pulse Rings */}
        <div className="absolute w-36 h-36 rounded-full bg-sky-100/60 animate-pulse-ring pointer-events-none" />
        <div className="absolute w-28 h-28 rounded-full bg-sky-200/40 animate-ping pointer-events-none opacity-20 duration-1000" />

        {/* Heartbeating Shakti Logo */}
        <div className="relative z-10 animate-heartbeat flex items-center justify-center mb-5 drop-shadow-xs">
          <img
            src="/ShaktiLogo.svg"
            alt="Shakti Group"
            width={72}
            height={51}
            className="w-18 h-auto object-contain select-none"
          />
        </div>

        {/* Brand Title */}
        <div className="relative z-10 flex flex-col items-center">
          <span className="font-extrabold text-slate-900 tracking-wider text-sm uppercase">
            SHAKTI GROUP
          </span>
          <span className="text-[10px] text-sky-800 font-bold tracking-widest uppercase mt-0.5">
            INDUSTRIAL GASES & CRYOGENICS
          </span>
        </div>

        {/* Progress indicator bar */}
        <div className="w-36 h-1 bg-slate-100 rounded-full overflow-hidden mt-4 relative">
          <div className="h-full bg-sky-700 rounded-full w-1/2 animate-[progress_1.4s_ease-in-out_infinite]" />
        </div>

        {/* Dynamic status message */}
        <p className="mt-3 text-xs text-slate-500 font-medium">
          {message}
        </p>
      </div>
    </div>
  );
};

export default PageLoader;
