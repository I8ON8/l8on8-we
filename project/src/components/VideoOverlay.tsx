import React from 'react';

type VideoOverlayProps = {
  onReveal: () => void;
  isRevealed: boolean;
};

export default function VideoOverlay({ onReveal, isRevealed }: VideoOverlayProps) {
  return (
    <div
      className={`absolute inset-0 bg-black flex items-center justify-center cursor-pointer transition-all duration-700 z-20 ${
        isRevealed ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      onClick={onReveal}
    >
      <h2 
        className="text-white text-4xl font-cinzel font-bold tracking-widest
                   transition-all duration-300 hover:scale-125
                   hover:text-glow relative z-30"
      >
        VOLUME I
      </h2>
    </div>
  );
}