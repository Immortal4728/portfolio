'use client';

import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [followerPosition, setFollowerPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hidden, setHidden] = useState(true);
  const cursorRef = useRef<{ x: number; y: number }>({ x: -100, y: -100 });

  useEffect(() => {
    // Disable custom cursor on touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleMouseEnter = () => {
      setHidden(false);
    };

    // Follower smooth animation with spring-like lag
    let animationFrameId: number;
    const updateFollower = () => {
      setFollowerPosition((prev) => {
        const dx = cursorRef.current.x - prev.x;
        const dy = cursorRef.current.y - prev.y;
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      animationFrameId = requestAnimationFrame(updateFollower);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    // Add hover listeners to clickable elements
    const addHoverListeners = () => {
      const interactives = document.querySelectorAll('a, button, [role="button"], input, textarea, select, .interactive-hover');
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovered(true));
        el.addEventListener('mouseleave', () => setIsHovered(false));
      });
    };

    addHoverListeners();
    animationFrameId = requestAnimationFrame(updateFollower);

    // Re-bind if DOM changes dynamically
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  if (hidden) return null;

  return (
    <>
      <div
        className="custom-cursor hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 2 : 1})`,
          backgroundColor: 'white',
        }}
      />
      <div
        className="custom-cursor-follower hidden md:block"
        style={{
          left: `${followerPosition.x}px`,
          top: `${followerPosition.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.2 : 1})`,
          borderColor: isHovered ? 'white' : 'rgba(255, 255, 255, 0.2)',
          backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
        }}
      />
    </>
  );
}
