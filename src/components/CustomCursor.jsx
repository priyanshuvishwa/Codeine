import React, { useEffect, useState, useRef } from 'react';

/**
 * Custom Cursor Component
 * Follows pointer coordinates and toggles visibility on interactive elements.
 */
const CustomCursor = () => {
  // Store mouse position
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const cursorRef = useRef(null);

  useEffect(() => {
    // Detects mouse movement and updates positions
    const handleMouseMove = (event) => {
      // Horizontal position (X-axis)
      // Save position X
      const posX = event.clientX;

      // Vertical position (Y-axis)
      // Save position Y
      const posY = event.clientY;

      // Centers the element at the pointer
      setMousePosition({ x: posX, y: posY });
      
      if (!isVisible) {
        setIsVisible(true);
      }
    };

    // Repeats the function with each movement
    window.addEventListener('mousemove', handleMouseMove);

    /* Hide custom cursor on links */
    // Mouse enters the link and hides the cursor
    const handleMouseEnterInteractive = () => {
      setIsHovered(true);
    };

    // Mouse exits the link and shows the cursor
    const handleMouseLeaveInteractive = () => {
      setIsHovered(false);
    };

    const attachLinkListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, input, textarea, select, .services__card, .work__card, .interactive'
      );

      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnterInteractive);
        el.addEventListener('mouseleave', handleMouseLeaveInteractive);
      });

      return () => {
        interactiveElements.forEach((el) => {
          el.removeEventListener('mouseenter', handleMouseEnterInteractive);
          el.removeEventListener('mouseleave', handleMouseLeaveInteractive);
        });
      };
    };

    const detachListeners = attachLinkListeners();

    // Re-check for new links when DOM updates
    const observer = new MutationObserver(() => {
      attachLinkListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      detachListeners();
      observer.disconnect();
    };
  }, [isVisible]);

  // If hidden or offscreen on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${!isVisible || isHovered ? 'custom-cursor--hidden' : ''}`}
      style={{
        transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) translate(-50%, -50%)`,
      }}
      aria-hidden="true"
    >
      <div className="custom-cursor__dot" />
    </div>
  );
};

export default CustomCursor;
