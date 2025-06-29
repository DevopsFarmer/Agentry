import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What is AI sales automation and how does it work?",
      answer: "AI sales automation uses artificial intelligence to streamline and optimize your sales processes. It includes automated lead generation, personalized outreach, intelligent lead scoring, and automated follow-ups. Our systems use machine learning to continuously improve performance and adapt to your specific business needs."
    },
    {
      id: 2,
      question: "How long does it take to implement automation workflows?",
      answer: "Implementation typically takes 6-12 weeks depending on complexity. We start with a 1-2 week discovery phase, followed by 2-3 weeks of strategy development, then 4-8 weeks of building and testing. You'll see initial results within the first month, with full optimization achieved by month 3."
    },
    {
      id: 3,
      question: "What platforms and tools do you integrate with?",
      answer: "We integrate with all major CRM systems (Salesforce, HubSpot, Pipedrive), email platforms (Gmail, Outlook), LinkedIn Sales Navigator, Slack, and hundreds of other tools through n8n, Make.com, and Zapier. We also work with AI platforms like OpenAI, Anthropic, and custom APIs."
    },
    {
      id: 4,
      question: "How do you ensure data security and compliance?",
      answer: "We follow enterprise-grade security standards including SOC 2 compliance, GDPR readiness, and end-to-end encryption. All data is processed securely, and we never store sensitive information unnecessarily. We provide detailed security documentation and can work within your existing compliance frameworks."
    },
    {
      id: 5,
      question: "What kind of ROI can I expect from automation?",
      answer: "Our clients typically see 200-400% ROI within 6 months. This includes increased lead generation (200-500%), reduced manual work (40-60 hours/week), improved conversion rates (50-300%), and faster sales cycles (30-50% reduction). Exact results depend on your current processes and implementation scope."
    },
    {
      id: 6,
      question: "Do you provide training and ongoing support?",
      answer: "Yes, we provide comprehensive training for your team, detailed documentation, and ongoing support. This includes monthly optimization reviews, performance monitoring, troubleshooting, and updates to keep your automation running smoothly. We also offer different support tiers based on your needs."
    },
    {
      id: 7,
      question: "Can automation work for small businesses or just enterprises?",
      answer: "Our automation solutions scale for businesses of all sizes. Small businesses often see the biggest impact because automation can immediately multiply their capacity. We offer different packages and can start with simple workflows that grow with your business."
    },
    {
      id: 8,
      question: "What happens if the automation breaks or needs updates?",
      answer: "We provide 24/7 monitoring and automatic error handling. Most issues are resolved automatically, and our team is notified immediately of any problems. We also provide regular updates, maintenance, and optimization to ensure your automation continues to improve over time."
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6 gradient-text">
            Frequently Asked Questions About AI Sales Automation
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get answers to common questions about implementing AI automation in your sales process.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="glass rounded-xl border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <button
                  className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none"
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <h3 className="text-lg font-mono font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFAQ === faq.id ? (
                      <ChevronUp className="text-purple-400" size={24} />
                    ) : (
                      <ChevronDown className="text-purple-400" size={24} />
                    )}
                  </div>
                </button>
                
                {openFAQ === faq.id && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-700 pt-4">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Help */}
        <div className="mt-16 text-center">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-mono font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-300 mb-6">
              Our automation experts are here to help you understand how AI can transform your sales process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })} className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold px-6 py-3 rounded-lg magnetic">
                Schedule a Consultation
              </button>
              <a href="/Agentry_Inc_FAQ_Guide.pdf" download className="border border-purple-500 text-purple-400 hover:bg-purple-500/10 px-6 py-3 rounded-lg magnetic">
                Download FAQ Guide
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

