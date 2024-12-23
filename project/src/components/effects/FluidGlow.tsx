import React from 'react';

export default function FluidGlow() {
  return (
    <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
      <div className="fluid-glow"></div>
    </div>
  );
}