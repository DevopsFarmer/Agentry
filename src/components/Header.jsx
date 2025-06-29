import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/agentry-logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity" style={{ textDecoration: 'none' }}>
  <img src={logo} alt="Agentry Inc Logo" className="w-8 h-8 rounded-lg shadow-lg" />
  <span className="text-xl font-mono font-bold gradient-text">Agentry Inc</span>
</Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
  <a href="#services" className="text-gray-300 hover:text-white transition-colors relative group">
    Services
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
  </a>
  <a href="#solutions" className="text-gray-300 hover:text-white transition-colors relative group">
    Solutions
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
  </a>
  <a href="/pages/CaseStudies" className="text-gray-300 hover:text-white transition-colors relative group">
    Case Studies
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
  </a>
  <a href="/pages/AboutUs" className="text-gray-300 hover:text-white transition-colors relative group">
    About Us
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
  </a>
  <a href="/pages/Blog" className="text-gray-300 hover:text-white transition-colors relative group">
    Blog
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
  </a>
  <a href="#contact" className="text-gray-300 hover:text-white transition-colors relative group">
    Contact
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
  </a>
</nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button onClick={() => {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
    const input = contactSection.querySelector("input, textarea, select, button");
    if (input) input.focus();
  }
}} className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold px-6 py-2 rounded-lg magnetic animate-glow">
  Book a Demo
</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
  <nav className="md:hidden mt-4 pb-4 border-t border-gray-700">
    <div className="flex flex-col space-y-4 pt-4">
      <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
      <a href="#solutions" className="text-gray-300 hover:text-white transition-colors">Solutions</a>
      <a href="/pages/CaseStudies" className="text-gray-300 hover:text-white transition-colors">Case Studies</a>
      <a href="/pages/AboutUs" className="text-gray-300 hover:text-white transition-colors">About Us</a>
      <a href="/pages/Blog" className="text-gray-300 hover:text-white transition-colors">Blog</a>
      <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
      <Button onClick={() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
          const input = contactSection.querySelector("input, textarea, select, button");
          if (input) input.focus();
        }
      }} className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold px-6 py-2 rounded-lg w-full">
        Book a Demo
      </Button>
    </div>
  </nav>
)}
      </div>
    </header>
  );
};

export default Header;

