
import React, { useRef, useEffect, useState } from 'react';
import { useInView } from '../utils/animations';

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-in' | 'slide-up' | 'slide-down' | 'none';
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  animation = 'fade-in',
}) => {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true }) as [
    React.RefObject<HTMLDivElement>,
    boolean
  ];
  const [hasAnimated, setHasAnimated] = useState(false);
  
  useEffect(() => {
    if (isInView && !hasAnimated) {
      const timer = setTimeout(() => {
        setHasAnimated(true);
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, delay, hasAnimated]);
  
  let animationClass = '';
  
  switch (animation) {
    case 'fade-in':
      animationClass = hasAnimated ? 'animate-fade-in' : 'opacity-0';
      break;
    case 'slide-up':
      animationClass = hasAnimated ? 'animate-slide-up' : 'opacity-0 translate-y-5';
      break;
    case 'slide-down':
      animationClass = hasAnimated ? 'animate-slide-down' : 'opacity-0 -translate-y-5';
      break;
    default:
      animationClass = '';
  }
  
  return (
    <div 
      ref={ref}
      className={`${className} ${animationClass}`}
      style={{ 
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
