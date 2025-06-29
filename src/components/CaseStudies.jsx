import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Clock, Mail } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      icon: TrendingUp,
      title: "300% Qualified Lead Increase",
      company: "B2B SaaS Company",
      description: "Implemented AI-powered lead qualification and multi-channel outreach automation, resulting in a 300% increase in qualified leads and 45% reduction in sales cycle time.",
      metrics: [
        { label: "Lead Increase", value: "300%" },
        { label: "Cycle Reduction", value: "45%" },
        { label: "ROI", value: "420%" }
      ],
      industry: "SaaS",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      icon: Clock,
      title: "50 Hours Weekly Time Savings",
      company: "Digital Marketing Agency",
      description: "Automated client onboarding, lead nurturing, and reporting processes, freeing up 50 hours per week for strategic work and increasing client satisfaction by 85%.",
      metrics: [
        { label: "Time Saved", value: "50h/week" },
        { label: "Satisfaction", value: "85%" },
        { label: "Efficiency", value: "200%" }
      ],
      industry: "Marketing",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      id: 3,
      icon: Mail,
      title: "90% Email Open Rates",
      company: "Professional Services",
      description: "Developed personalized email automation with AI-generated content, achieving 90% open rates and 35% response rates, 5x higher than industry average.",
      metrics: [
        { label: "Open Rate", value: "90%" },
        { label: "Response Rate", value: "35%" },
        { label: "vs Industry", value: "5x higher" }
      ],
      industry: "Professional Services",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="case-studies" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6 gradient-text">
            Proven Results Across Industries
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real success stories from businesses that transformed their sales processes with our AI automation solutions.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            
            return (
              <Card
                key={study.id}
                className="glass border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 magnetic hover:animate-glow group"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-to-r ${study.gradient} rounded-xl flex items-center justify-center mb-4 animate-float group-hover:animate-glow`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <div className="mb-2">
                    <span className="text-sm text-gray-400 font-mono">{study.industry}</span>
                  </div>
                  <CardTitle className="text-2xl font-mono font-bold text-white mb-2">
                    {study.title}
                  </CardTitle>
                  <CardDescription className="text-purple-400 font-semibold">
                    {study.company}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {study.description}
                  </p>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    {study.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className="text-2xl font-mono font-bold text-white mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-400">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Social Proof Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-mono font-bold mb-8 text-white">
            Trusted by Growing Businesses Worldwide
          </h3>
          
          {/* Testimonial Slider */}
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-8 mb-8">
              <blockquote className="text-xl text-gray-300 italic mb-6">
                "Agentry Inc transformed our entire sales process. We went from manually qualifying leads to having an AI system that works 24/7. Our conversion rates increased by 300% in just 3 months."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
                <div className="text-left">
                  <div className="font-semibold text-white">Sarah Johnson</div>
                  <div className="text-gray-400 text-sm">CEO, TechFlow Solutions</div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['SOC 2 Compliant', 'GDPR Ready', 'Enterprise Security', '99.9% Uptime'].map((badge, index) => (
              <div
                key={badge}
                className="glass px-4 py-2 rounded-lg magnetic"
                style={{animationDelay: `${index * 150}ms`}}
              >
                <span className="font-mono text-sm text-gray-300">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

