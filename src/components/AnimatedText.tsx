
import React, { useState, useEffect, useRef } from 'react';
import { useInView, splitText, useTypeWriter } from '../utils/animations';

type AnimatedTextProps = {
  text: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  animation?: 'reveal' | 'typewriter' | 'backspace' | 'none';
  delay?: number;
  speed?: number;
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  tag = 'span',
  animation = 'reveal',
  delay = 0,
  speed = 100,
}) => {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true }) as [
    React.RefObject<HTMLElement>,
    boolean
  ];
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false);
  
  const typewriterText = useTypeWriter(text, speed, speed / 2);
  
  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        hasAnimated.current = true;
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, delay]);

  const Tag = tag as keyof JSX.IntrinsicElements;
  
  let content;
  
  switch (animation) {
    case 'reveal':
      content = (
        <Tag 
          ref={ref as React.RefObject<any>} 
          className={`transition-opacity duration-500 ${className} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          {splitText(text)}
        </Tag>
      );
      break;
    
    case 'typewriter':
      content = (
        <Tag 
          ref={ref as React.RefObject<any>} 
          className={`${className} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          {isVisible ? typewriterText : ''}
          <span className="typewriter-cursor"></span>
        </Tag>
      );
      break;
    
    case 'backspace':
      content = (
        <Tag 
          ref={ref as React.RefObject<any>} 
          className={`${className} ${isVisible ? 'opacity-100' : 'opacity-0'} relative after:absolute after:top-0 after:right-0 after:h-full after:bg-background after:animate-type-backspace`}
          style={{ width: 'fit-content' }}
        >
          {isVisible ? text : ''}
        </Tag>
      );
      break;
    
    default:
      content = (
        <Tag 
          ref={ref as React.RefObject<any>} 
          className={`${className} ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          {text}
        </Tag>
      );
  }
  
  return content;
};

export default AnimatedText;
