import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import logo from '@/assets/agentry-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/50 border-t border-gray-800 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
  <img src={logo} alt="Agentry Inc Logo" className="w-8 h-8 rounded-lg shadow-lg" />
  <span className="text-xl font-mono font-bold gradient-text">Agentry Inc</span>
</div>
            <p className="text-gray-400 leading-relaxed">
              Automate Your Success, Amplify Your Growth. We build AI-powered automation systems that transform sales processes.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/agentryinc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors magnetic">
  <Linkedin size={20} />
</a>
<a href="https://twitter.com/agentryinc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors magnetic">
  <Twitter size={20} />
</a>
<a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors magnetic">
  <Github size={20} />
</a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-mono font-semibold text-white">Services</h3>
            <ul className="space-y-2">
              {[
  { name: 'Cold Outreach Automation', url: '/?search=Cold%20Outreach%20Automation' },
  { name: 'AI SDR Agents', url: '/?search=AI%20SDR%20Agents' },
  { name: 'Lead Generation', url: '/?search=Lead%20Generation' },
  { name: 'RAG Chatbots', url: '/?search=RAG%20Chatbots' },
  { name: 'Voice AI Agents', url: '/?search=Voice%20AI%20Agents' },
  { name: 'Custom Dashboards', url: '/?search=Custom%20Dashboards' }
].map((service, index) => (
  <li key={index}>
    <a href={service.url} className="text-gray-400 hover:text-white transition-colors text-sm">
      {service.name}
    </a>
  </li>
))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-mono font-semibold text-white">Company</h3>
            <ul className="space-y-2">
              {[
  { name: 'About Us', url: '/pages/AboutUs' },
  { name: 'Case Studies', url: '/pages/CaseStudies' },
  { name: 'Blog', url: '/pages/Blog' },
  { name: 'Contact', url: '#contact' }
].map((item, index) => (
  <li key={index}>
    <a href={item.url} className="text-gray-400 hover:text-white transition-colors text-sm">
      {item.name}
    </a>
  </li>
))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-mono font-semibold text-white">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="text-purple-400" size={16} />
                <span className="text-gray-400 text-sm">growth@agentryinc.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-purple-400" size={16} />
                <span className="text-gray-400 text-sm">+91 7338752688</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-purple-400" size={16} />
                <span className="text-gray-400 text-sm">Jaipur, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Agentry Inc. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        {/* Schema Markup for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Agentry Inc",
            "description": "AI automation agency specializing in sales workflow automation",
            "url": "https://agentryinc.com",
            "logo": "/assets/agentry-logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-555-123-4567",
              "contactType": "customer service",
              "email": "hello@agentryinc.com"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "San Francisco",
              "addressRegion": "CA",
              "addressCountry": "US"
            },
            "sameAs": [
              "https://linkedin.com/company/agentryinc",
              "https://twitter.com/agentryinc"
            ]
          })}
        </script>
      </div>
    </footer>
  );
};

export default Footer;

