
import React, { useState, useEffect, useRef } from "react";
import { useFontMorph, useInView } from "../utils/animations";
import AnimatedText from "./AnimatedText";

const HeroSection: React.FC = () => {
  const [showFullText, setShowFullText] = useState(false);
  const [hasMorphed, setHasMorphed] = useState(false);
  const { fontWeight, letterSpacing } = useFontMorph();
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100 && !scrolled) {
        setScrolled(true);
        setShowFullText(true);
      }
    };

    const onLoad = () => {
      setHasMorphed(true);
      
      // After 3 seconds, if user hasn't scrolled, show the full text
      const timer = setTimeout(() => {
        if (!scrolled) {
          setShowFullText(true);
        }
      }, 3000);
      
      return () => clearTimeout(timer);
    };

    window.addEventListener('scroll', onScroll);
    
    // Trigger font morph animation on load
    const morphTimer = setTimeout(onLoad, 1000);

    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(morphTimer);
    };
  }, [scrolled]);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Initial Full-screen Typography with Morphing */}
      <div 
        className={`
          absolute inset-0 flex items-center justify-center transition-all duration-1000
          ${showFullText ? 'opacity-0 pointer-events-none' : 'opacity-100'}
        `}
      >
        <h1 
          className="text-[10vw] md:text-[8vw] font-light uppercase text-center transition-all duration-1000 p-4"
          style={{ 
            fontWeight: fontWeight,
            letterSpacing: `${letterSpacing}em`,
          }}
        >
          Yorke &amp; Toni
        </h1>
      </div>

      {/* Main Hero Content (appears on scroll) */}
      <div 
        className={`
          section-container pt-20 transition-all duration-1000 transform
          ${showFullText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-6">
            <div className="space-y-4">
              <span className="inline-block text-xs uppercase tracking-widest py-1 px-3 border border-current">
                Company Philosophy
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-none tracking-tight">
                <AnimatedText
                  text="Welcome to your future"
                  animation="typewriter"
                  tag="span"
                  speed={80}
                />
              </h1>
              <p className="text-lg md:text-xl max-w-xl font-light">
                <AnimatedText
                  text="Bridging Innovation, Designing Futures"
                  animation="reveal"
                  delay={1000}
                  tag="span"
                />
              </p>
            </div>
            
            <p className="text-sm md:text-base opacity-80 max-w-md leading-relaxed">
              <AnimatedText
                text="Our design is a deliberate statement: clarity over complexity, function over decoration. We embrace the Swiss design principle of 'less is more'."
                animation="reveal"
                delay={1500}
                tag="span"
              />
            </p>
            
            <div className="pt-4">
              <a
                href="#companies"
                className="inline-block py-3 px-6 border border-current hover:bg-black hover:text-white transition-colors duration-300"
              >
                Explore Our Companies
              </a>
            </div>
          </div>
          
          <div className="md:col-span-5 relative h-[40vh] md:h-[60vh]">
            <div className="absolute inset-0 bg-gray-100 transform -rotate-2" />
            <div className="absolute inset-2 bg-gray-200 transform rotate-1" />
            <div className="absolute inset-4 bg-gray-50 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <p className="text-center font-light text-xl">
                  <AnimatedText
                    text="Negative Space is not empty; it's a strategic design element."
                    animation="typewriter"
                    delay={2000}
                    tag="span"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className={`
          absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-opacity duration-500
          ${showFullText ? 'opacity-100' : 'opacity-0'}
        `}
      >
        <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-0.5 h-10 bg-current opacity-50 animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;
