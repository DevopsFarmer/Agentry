import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Bot, Search, MessageSquare, Phone, BarChart3 } from 'lucide-react';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      icon: Mail,
      title: "Multi-Channel Cold Outreach Automation",
      description: "Automated email sequences, LinkedIn DM campaigns, and follow-up systems that book qualified meetings on autopilot using advanced n8n workflows and AI personalization.",
      features: ["Email automation", "LinkedIn outreach", "Follow-up sequences", "AI personalization"]
    },
    {
      id: 2,
      icon: Bot,
      title: "AI-Powered Sales Development Representatives",
      description: "Intelligent AI agents that qualify leads, conduct initial discovery calls, book meetings, and handle prospect conversations 24/7 with human-like accuracy.",
      features: ["Lead qualification", "Discovery calls", "Meeting booking", "24/7 availability"]
    },
    {
      id: 3,
      icon: Search,
      title: "Automated Lead Research & Company Intelligence",
      description: "AI-driven prospect research using LinkedIn Sales Navigator, email verification services, and enriched company data for targeted outreach campaigns.",
      features: ["Prospect research", "Data enrichment", "Email verification", "Company intelligence"]
    },
    {
      id: 4,
      icon: MessageSquare,
      title: "Smart Customer Support & Sales Chatbots",
      description: "RAG-powered conversational AI chatbots that handle customer inquiries, qualify leads, and provide instant support using your company knowledge base.",
      features: ["RAG technology", "Lead qualification", "Instant support", "Knowledge base integration"]
    },
    {
      id: 5,
      icon: Phone,
      title: "Conversational Voice AI Assistants",
      description: "Advanced voice-based AI agents for inbound/outbound calls, appointment setting, customer service, and sales qualification with natural conversation flow.",
      features: ["Voice AI", "Call automation", "Appointment setting", "Natural conversations"]
    },
    {
      id: 6,
      icon: BarChart3,
      title: "Real-Time Automation Performance Dashboards",
      description: "Custom-built analytics dashboards tracking automation ROI, lead conversion rates, pipeline velocity, and campaign performance metrics.",
      features: ["ROI tracking", "Conversion analytics", "Pipeline metrics", "Custom dashboards"]
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6 gradient-text">
            AI Automation Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your sales process with cutting-edge AI automation solutions designed to maximize efficiency and drive revenue growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredCard === service.id;
            
            return (
              <Card
                key={service.id}
                className={`glass border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 magnetic ${
                  isHovered ? 'animate-glow' : ''
                }`}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 animate-float">
                    <Icon className="text-white" size={24} />
                  </div>
                  <CardTitle className="text-xl font-mono font-semibold text-white">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  
                  {/* Feature List */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Technology Stack */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-mono font-bold mb-8 text-white">
            Built on Enterprise-Grade Automation Technology
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['n8n', 'Make.com', 'Zapier', 'OpenAI', 'Anthropic', 'Pinecone'].map((tech, index) => (
              <div
                key={tech}
                className="glass px-6 py-3 rounded-lg magnetic"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <span className="font-mono text-gray-300">{tech}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            We leverage industry-leading automation platforms and cutting-edge AI models to deliver scalable, enterprise-ready solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;

