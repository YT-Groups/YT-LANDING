
import React from "react";
import AnimatedSection from "./AnimatedSection";
import AnimatedText from "./AnimatedText";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section bg-secondary">
      <div className="section-container">
        <AnimatedSection animation="fade-in">
          <span className="inline-block text-xs uppercase tracking-widest py-1 px-3 border border-current mb-6">
            Who Are We?
          </span>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <AnimatedSection animation="slide-up" delay={200}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">
              Sophisticated Yet Simple
            </h2>
            <p className="text-base md:text-lg opacity-80 mb-6 max-w-xl">
              Our technology is a deliberate statement: clarity over complexity, function over decoration. 
              We embrace the Swiss design principle of "less is more" and incoporate it in our builds.
            </p>
            
            <div className="space-y-4 mt-8">
              <h4 className="text-lg font-normal uppercase tracking-wide">The Yorke & Toni Principles</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 text-lg">—</span>
                  <span>
                    <strong className="font-medium">Negative Space:</strong>{" "}
                    White space is not empty; it's a strategic design element
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-lg">—</span>
                  <span>
                    <strong className="font-medium">Typography:</strong>{" "}
                    A dynamic, living language of communication
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-lg">—</span>
                  <span>
                    <strong className="font-medium">Color Palette:</strong>{" "}
                    Monochromatic sophistication (Black & White)
                  </span>
                </li>
              </ul>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="slide-up" delay={400}>
            <div className="relative h-full min-h-[300px] md:min-h-[400px]">
              <div className="absolute right-0 top-0 w-4/5 h-4/5 border border-black"></div>
              <div className="absolute left-0 bottom-0 w-4/5 h-4/5 bg-white p-8 shadow-lg">
                <h3 className="text-2xl font-light mb-4">Brand Ethos</h3>
                <p className="text-sm md:text-base opacity-80 mb-6">
                  We don't just solve problems. We redefine potential at the intersection of 
                  technology, strategy, and human ambition.
                </p>
                <p className="text-sm uppercase tracking-widest">
                  Precision. Innovation. Impact.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
        
        <h3 className="text-2xl md:text-3xl font-light mb-12 text-center">Our Founders</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <AnimatedSection animation="fade-in" delay={600} className="bg-white p-8 shadow-sm">
            <div className="aspect-square bg-gray-100 mb-6"></div>
            <h4 className="text-xl font-normal mb-2">Yorke</h4>
            <AnimatedText
              text="Visionary strategist with a background in Swiss design and business transformation. Yorke brings a unique blend of creative thinking and analytical rigor to every project."
              animation="reveal"
              tag="p"
              className="text-sm opacity-80"
            />
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={800} className="bg-white p-8 shadow-sm">
            <div className="aspect-square bg-gray-100 mb-6"></div>
            <h4 className="text-xl font-normal mb-2">Toni</h4>
            <AnimatedText
              text="Technology pioneer specializing in algorithmic solutions and systemic innovation. Toni's approach combines deep technical expertise with an unwavering focus on human-centered design."
              animation="reveal"
              tag="p"
              className="text-sm opacity-80"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
