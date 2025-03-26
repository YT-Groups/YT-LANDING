
import React, { useEffect, useState, useRef } from 'react';

// Hook to check if element is in viewport
export function useInView(options = {}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isInView];
}

// Hook for parallax scroll effect
export function useParallax(speed = 0.1) {
  const ref = useRef<HTMLElement | null>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      if (!element) return;
      
      const scrollTop = window.pageYOffset;
      const elementPos = element.offsetTop;
      const distance = scrollTop - elementPos;
      const translation = distance * speed;
      
      element.style.transform = `translateY(${translation}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);
  
  return ref;
}

// Text backspacing and retyping effect
export function useTypeWriter(text: string, typingSpeed = 150, backspaceSpeed = 75, delayBeforeRestart = 2000) {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  
  useEffect(() => {
    let timer: number;
    
    if (isDeleting) {
      timer = window.setTimeout(() => {
        setDisplayText(text.substring(0, displayText.length - 1));
        if (displayText.length === 1) {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }, backspaceSpeed);
    } else {
      timer = window.setTimeout(() => {
        setDisplayText(text.substring(0, displayText.length + 1));
        if (displayText.length === text.length) {
          // Wait before deleting
          timer = window.setTimeout(() => {
            setIsDeleting(true);
          }, delayBeforeRestart);
        }
      }, typingSpeed);
    }
    
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, text, typingSpeed, backspaceSpeed, delayBeforeRestart]);
  
  return displayText;
}

// For text reveal animation (word by word)
export function splitText(text: string) {
  return text.split(' ').map((word, i) => (
    <span
      key={i}
      className="inline-block overflow-hidden mr-1"
    >
      <span 
        className="inline-block transform transition-transform duration-1000 ease-out"
        style={{ 
          transform: 'translateY(100%)',
          animationDelay: `${i * 0.1}s`,
          animationFillMode: 'forwards',
          animationName: 'text-reveal',
          animationDuration: '0.8s',
          animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {word}
      </span>
    </span>
  ));
}

// Font morphing animation
export function useFontMorph() {
  const [fontWeight, setFontWeight] = useState(200);
  const [letterSpacing, setLetterSpacing] = useState(0);
  
  useEffect(() => {
    let frame: number;
    let startTime: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / 8000; // 8s animation cycle
      
      setFontWeight(200 + Math.sin(progress * Math.PI * 2) * 200);
      setLetterSpacing(Math.sin(progress * Math.PI * 2) * 0.05);
      
      frame = requestAnimationFrame(animate);
    };
    
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);
  
  return { fontWeight, letterSpacing };
}
