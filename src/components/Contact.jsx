import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight, Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    revenue: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      // Google Sheets Integration
      // This will POST form data to a backend endpoint that writes to your Google Sheet using the service account key.
      // To update the integration in the future, edit the backend endpoint or update the Google Sheet ID/key.
      const response = await fetch('/api/submit-to-google-sheets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, timestamp: new Date().toISOString() })
      });
      let data = {};
      try {
        data = await response.json();
      } catch (e) {
        data = {};
      }
      if (!response.ok) {
        setErrorMessage(data.error || 'Something went wrong.');
        setSubmitStatus('error');
        return;
      }
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        revenue: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage(error.message || 'Something went wrong.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section id="contact" className="py-20 relative overflow-hidden animate-gradient">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-cyan-900/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-mono font-bold mb-6 gradient-text">
            Ready to 10x Your Sales Pipeline?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get a free automation audit and discover how AI can transform your sales process. 
            Book your consultation today and start seeing results within 30 days.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-mono font-bold text-white mb-6">
              Schedule Your Free Automation Audit
            </h3>
            
            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center space-x-3">
                <CheckCircle className="text-green-400" size={20} />
                <span className="text-green-300">Thank you! We'll contact you within 24 hours.</span>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center space-x-3">
                <AlertCircle className="text-red-400" size={20} />
                <span className="text-red-300">{errorMessage || 'Something went wrong. Please try again.'}</span>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500"
                  placeholder="Enter your full name"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Business Email *
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500"
                  placeholder="Enter your business email"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Company Name *
                </label>
                <Input
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500"
                  placeholder="Enter your company name"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Revenue Range */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Monthly Revenue Range
                </label>
                <Select onValueChange={(value) => handleInputChange('revenue', value)} disabled={isSubmitting}>
                  <SelectTrigger className="bg-gray-900/50 border-gray-600 text-white">
                    <SelectValue placeholder="Select revenue range" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-gray-600">
                    <SelectItem value="0-10k">$0 - $10k</SelectItem>
                    <SelectItem value="10k-50k">$10k - $50k</SelectItem>
                    <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                    <SelectItem value="100k-500k">$100k - $500k</SelectItem>
                    <SelectItem value="500k+">$500k+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Tell us about your current sales process
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 min-h-[120px]"
                  placeholder="Describe your current sales challenges and what you'd like to automate..."
                  disabled={isSubmitting}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold py-4 rounded-lg text-lg magnetic animate-glow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    Schedule My Free Automation Audit
                    <ArrowRight className="ml-2" size={20} />
                  </>
                )}
              </Button>
            </form>

            {/* Trust Indicators */}
            <div className="mt-6 pt-6 border-t border-gray-700">
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                <span>✓ No commitment required</span>
                <span>✓ 30-minute consultation</span>
                <span>✓ Custom automation plan</span>
              </div>
            </div>
          </div>

          {/* Contact Information & Benefits */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-mono font-bold text-white mb-6">
                Get In Touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-gray-400">growth@agentryinc.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-green-500 rounded-lg flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Phone</div>
                    <div className="text-gray-400">+91 7338752688</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Location</div>
                    <div className="text-gray-400">Jaipur, India</div>
                  </div>
                </div>
              </div>
            </div>

            {/* What You'll Get */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-mono font-bold text-white mb-6">
                What You'll Get in Your Free Audit
              </h3>
              
              <div className="space-y-4">
                {[
                  "Complete sales process analysis",
                  "Automation opportunity identification",
                  "Custom ROI projections",
                  "Technology recommendations",
                  "Implementation roadmap",
                  "No-obligation consultation"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-3xl font-mono font-bold text-purple-400 mb-2">
                &lt; 24 Hours
              </div>
              <div className="text-gray-300">
                Average response time for consultation requests
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

