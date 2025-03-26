
import React from "react";
import AnimatedSection from "./AnimatedSection";
import AnimatedText from "./AnimatedText";

const CompaniesSection: React.FC = () => {
  return (
    <section id="companies" className="section">
      <div className="section-container">
        <AnimatedSection animation="fade-in">
          <span className="inline-block text-xs uppercase tracking-widest py-1 px-3 border border-current mb-6">
            Our Ecosystem
          </span>
        </AnimatedSection>
        
        <AnimatedSection animation="slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">
            Three Interconnected Domains
          </h2>
          <p className="text-base md:text-lg opacity-80 mb-12 max-w-2xl">
            We've built a comprehensive ecosystem designed to tackle today's most complex challenges, 
            each division with a clear focus yet interconnected by a shared vision.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          <AnimatedSection animation="fade-in" delay={200} className="company-card">
            <div className="mb-6">
              <span className="inline-block text-xs font-medium py-1 px-2 border border-current mb-3">01</span>
              <h3 className="text-2xl font-light mb-2">YT Consult</h3>
              <p className="text-sm uppercase tracking-wider opacity-70">Strategic Elevation, Measured Transformation</p>
            </div>
            
            <ul className="space-y-4 mb-6 text-sm">
              <li className="flex items-start">
                <span className="mr-2 opacity-50">—</span>
                <span>Precision-engineered business strategies</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 opacity-50">—</span>
                <span>Adaptive organizational architectures</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 opacity-50">—</span>
                <span>Data-driven performance optimization</span>
              </li>
            </ul>
            
            <a href="#" className="text-xs uppercase tracking-wider underline">Learn more</a>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={400} className="company-card">
            <div className="mb-6">
              <span className="inline-block text-xs font-medium py-1 px-2 border border-current mb-3">02</span>
              <h3 className="text-2xl font-light mb-2">YT Suite</h3>
              <p className="text-sm uppercase tracking-wider opacity-70">Technology Without Boundaries</p>
            </div>
            
            <ul className="space-y-4 mb-6 text-sm">
              <li className="flex items-start">
                <span className="mr-2 opacity-50">—</span>
                <span>Industry-agnostic software engineering</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 opacity-50">—</span>
                <span>Modular, scalable technological solutions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 opacity-50">—</span>
                <span>Adaptive development frameworks</span>
              </li>
            </ul>
            
            <a href="#" className="text-xs uppercase tracking-wider underline">Learn more</a>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={600} className="company-card">
            <div className="mb-6">
              <span className="inline-block text-xs font-medium py-1 px-2 border border-current mb-3">03</span>
              <h3 className="text-2xl font-light mb-2">YT FINTECH</h3>
              <p className="text-sm uppercase tracking-wider opacity-70">Algorithmic Intelligence, Human Insight</p>
            </div>
            
            <ul className="space-y-4 mb-6 text-sm">
              <li className="flex items-start">
                <span className="mr-2 opacity-50">—</span>
                <span>Advanced predictive modeling</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 opacity-50">—</span>
                <span>Micro-investment capabilities</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 opacity-50">—</span>
                <span>Real-time financial ecosystems</span>
              </li>
            </ul>
            
            <a href="#" className="text-xs uppercase tracking-wider underline">Learn more</a>
          </AnimatedSection>
        </div>
        
        <AnimatedSection animation="slide-up" delay={800} className="bg-secondary p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5">
              <h3 className="text-2xl md:text-3xl font-light mb-4">YT FINTECH DETAILED</h3>
              <p className="text-sm opacity-80 mb-6">
                Our most specialized division combines cutting-edge financial algorithms with human-centered design to create accessible, powerful financial tools.
              </p>
            </div>
            
            <div className="md:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-border">
                  <h4 className="text-sm font-medium uppercase mb-2">ALPHA</h4>
                  <p className="text-xs opacity-80">Institutional Trading Ecosystem with featuring real-time market data integration, machine learning-based signal generation, risk management, and automated order execution. The system primarily uses Interactive Brokers (IBKR) as its data source and execution platform.
                  and capabale of producing synthetic data.</p>
                </div>
                
                <div className="p-4 border border-border">
                  <h4 className="text-sm font-medium uppercase mb-2">ALPHA MINI</h4>
                  <p className="text-xs opacity-80">Democratized Financial Access with localized trading infrastructure and micro-investment capabilities,everything ALPHA offers, at the tip of your fingers</p>
                </div>
                
                <div className="p-4 border border-border md:col-span-2">
                  <h4 className="text-sm font-medium uppercase mb-2">NEXUS</h4>
                  <p className="text-xs opacity-80">Enables microfinance institutions to evaluate creditworthiness across multiple sectors using advanced machine learning techniques without requiring internet connectivity..</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CompaniesSection;
