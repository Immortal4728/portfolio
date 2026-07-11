import React from 'react';

export default function GrainOverlay() {
  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      {/* SVG noise filter for potential inline styling / texture usage */}
      <svg className="absolute w-0 h-0 opacity-0 pointer-events-none" aria-hidden="true">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.80" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.08 0" />
        </filter>
      </svg>
    </>
  );
}
