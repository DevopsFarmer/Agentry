import { Search, Lightbulb, Wrench, TrendingUp } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      id: 1,
      icon: Search,
      title: "Discovery & Analysis",
      description: "Deep-dive audit of your current sales process and automation opportunities",
      details: [
        "Sales process mapping",
        "Technology stack assessment",
        "Bottleneck identification",
        "ROI opportunity analysis"
      ]
    },
    {
      id: 2,
      icon: Lightbulb,
      title: "Strategy & Blueprint",
      description: "Custom automation strategy designed for your specific business model and goals",
      details: [
        "Automation roadmap creation",
        "Technology selection",
        "Integration planning",
        "Success metrics definition"
      ]
    },
    {
      id: 3,
      icon: Wrench,
      title: "Build & Deploy",
      description: "Expert development and testing of your n8n workflows and AI integrations",
      details: [
        "Workflow development",
        "AI model training",
        "System integration",
        "Quality assurance testing"
      ]
    },
    {
      id: 4,
      icon: TrendingUp,
      title: "Optimize & Scale",
      description: "Continuous monitoring, optimization, and scaling for maximum ROI",
      details: [
        "Performance monitoring",
        "A/B testing",
        "Continuous optimization",
        "Scaling strategies"
      ]
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6 gradient-text">
            Our Proven 4-Step Automation Process
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From initial consultation to full deployment, we follow a systematic approach to ensure your automation success.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                
                return (
                  <div key={step.id} className="relative">
                    {/* Connecting Line */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 z-10"></div>
                    )}
                    
                    {/* Step Card */}
                    <div className="glass rounded-2xl p-6 text-center magnetic hover:animate-glow group">
                      {/* Step Number */}
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-mono font-bold text-sm mx-auto mb-4">
                        {step.id}
                      </div>
                      
                      {/* Icon */}
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-float">
                        <Icon className="text-purple-400" size={32} />
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-xl font-mono font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                        {step.description}
                      </p>
                      
                      {/* Details */}
                      <div className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center text-xs text-gray-400">
                            <div className="w-1 h-1 bg-purple-500 rounded-full mr-2"></div>
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <div key={step.id} className="relative">
                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-purple-500 to-cyan-500"></div>
                  )}
                  
                  {/* Step Card */}
                  <div className="flex items-start space-x-6">
                    {/* Step Number & Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mb-2 animate-glow">
                        <Icon className="text-white" size={24} />
                      </div>
                      <div className="text-center">
                        <span className="text-sm font-mono text-purple-400">Step {step.id}</span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="glass rounded-xl p-6 flex-1">
                      <h3 className="text-xl font-mono font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      
                      {/* Details */}
                      <div className="grid grid-cols-2 gap-2">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center text-sm text-gray-400">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Summary */}
        <div className="mt-16 text-center">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-mono font-bold text-white mb-4">
              Typical Project Timeline
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-mono font-bold text-purple-400 mb-1">1-2</div>
                <div className="text-sm text-gray-400">Weeks Discovery</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-mono font-bold text-cyan-400 mb-1">2-3</div>
                <div className="text-sm text-gray-400">Weeks Strategy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-mono font-bold text-green-400 mb-1">4-8</div>
                <div className="text-sm text-gray-400">Weeks Build</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-mono font-bold text-yellow-400 mb-1">Ongoing</div>
                <div className="text-sm text-gray-400">Optimization</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

