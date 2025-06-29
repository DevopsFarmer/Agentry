import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import ScrollReveal from './ScrollReveal';
import { useTypewriter } from '../hooks/useScrollAnimation';

const Hero = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const { displayText, isComplete } = useTypewriter('Revenue Machines', 100);
  
  const stats = [
    { number: 500, label: 'Workflows Automated', suffix: '+' },
    { number: 300, label: 'Average ROI', suffix: '%' },
    { number: 24, label: 'Lead Generation', suffix: '/7' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden grid-pattern">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-purple-500 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-cyan-500 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-purple-500 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-cyan-500 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <ScrollReveal direction="up" delay={200}>
            <h1 className="text-5xl md:text-7xl font-mono font-bold mb-6 leading-tight">
              Turn Your Sales Team Into{' '}
              <span className="gradient-text">
                {displayText}
                {!isComplete && <span className="animate-pulse">|</span>}
              </span>
            </h1>
          </ScrollReveal>

          {/* Subheadline */}
          <ScrollReveal direction="up" delay={400}>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              We build AI-powered automation systems that convert prospects into customers while you sleep. 
              From cold outreach to deal closure - fully automated.
            </p>
          </ScrollReveal>

          {/* Animated Stats */}
          <ScrollReveal direction="up" delay={600}>
            <div className="mb-12">
              <div className="inline-flex items-center space-x-8 bg-gray-900/50 backdrop-blur-sm rounded-full px-8 py-4 border border-purple-500/20 animate-glow">
                <div className="text-center">
                  <div className="text-3xl font-mono font-bold text-purple-400">
                    <AnimatedCounter 
                      end={stats[currentStat].number} 
                      suffix={stats[currentStat].suffix}
                      duration={1500}
                    />
                  </div>
                  <div className="text-sm text-gray-400">{stats[currentStat].label}</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal direction="up" delay={800}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })} className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-lg text-lg magnetic animate-glow">
                Get Your Free Automation Audit
                <ArrowRight className="ml-2" size={20} />
              </Button>
          </div>
        </ScrollReveal>

        {/* Glimpses of Our Work Section */}
        <ScrollReveal direction="up" delay={900}>
          <div className="mt-8">
            <h2 className="text-2xl md:text-3xl font-bold font-mono text-center mb-6 gradient-text tracking-wide animate-glow">
              GLIMPSES OF OUR WORK
            </h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center w-full">
              <iframe width="340" height="200" src="https://www.youtube.com/embed/qfrPkcDkIDE" title="Email Classifier Demo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="rounded-lg shadow-lg transition-transform hover:scale-105" style={{background: '#111'}}></iframe>
              <iframe width="340" height="200" src="https://www.youtube.com/embed/c0kCbJ9PpKo" title="Firecrawl Scrapper Demo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="rounded-lg shadow-lg transition-transform hover:scale-105" style={{background: '#111'}}></iframe>
              <iframe width="340" height="200" src="https://www.youtube.com/embed/CAbl9muPXaM" title="Therapist Demo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="rounded-lg shadow-lg transition-transform hover:scale-105" style={{background: '#111'}}></iframe>
            </div>
            {/* To add more videos, copy the <iframe> block above and update the src URL and title */}
          </div>
        </ScrollReveal>

        {/* Tagline */}
        <ScrollReveal direction="up" delay={1000}>
            <p className="text-gray-500 mt-8 text-lg font-mono">
              "Automate Your Success, Amplify Your Growth"
            </p>
          </ScrollReveal>
        </div>

        {/* 3D Workflow Visualization */}
        <ScrollReveal direction="up" delay={1200}>
          <div className="mt-20 relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {/* Workflow Node 1 */}
              <ScrollReveal direction="left" delay={1400}>
                <div className="glass rounded-xl p-6 magnetic animate-float hover:animate-glow group">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg mx-auto mb-4 animate-glow group-hover:scale-110 transition-transform"></div>
                  <h3 className="font-mono font-semibold mb-2">Lead Discovery</h3>
                  <p className="text-gray-400 text-sm">AI-powered prospect research and qualification</p>
                </div>
              </ScrollReveal>

              {/* Workflow Node 2 */}
              <ScrollReveal direction="up" delay={1600}>
                <div className="glass rounded-xl p-6 magnetic animate-float hover:animate-glow group" style={{animationDelay: '1s'}}>
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-green-500 rounded-lg mx-auto mb-4 animate-glow group-hover:scale-110 transition-transform"></div>
                  <h3 className="font-mono font-semibold mb-2">Outreach Automation</h3>
                  <p className="text-gray-400 text-sm">Multi-channel campaigns with personalization</p>
                </div>
              </ScrollReveal>

              {/* Workflow Node 3 */}
              <ScrollReveal direction="right" delay={1800}>
                <div className="glass rounded-xl p-6 magnetic animate-float hover:animate-glow group" style={{animationDelay: '2s'}}>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-purple-500 rounded-lg mx-auto mb-4 animate-glow group-hover:scale-110 transition-transform"></div>
                  <h3 className="font-mono font-semibold mb-2">Deal Closure</h3>
                  <p className="text-gray-400 text-sm">Automated follow-ups and conversion tracking</p>
                </div>
              </ScrollReveal>
            </div>

            {/* Connecting Lines with Animation */}
            <div className="hidden md:block absolute top-1/2 left-1/4 w-1/4 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transform -translate-y-1/2 animate-gradient"></div>
            <div className="hidden md:block absolute top-1/2 right-1/4 w-1/4 h-0.5 bg-gradient-to-r from-cyan-500 to-green-500 transform -translate-y-1/2 animate-gradient"></div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;
