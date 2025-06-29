import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudiesPage from './pages/CaseStudies';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutUsPage from './pages/AboutUs';
import BlogPage from './pages/Blog';
import MagneticCursor from './components/MagneticCursor';
import FloatingParticles from './components/FloatingParticles';
import SEOHead from './components/SEOHead';
import './App.css';

const Home = () => (
  <>
    <Hero />
    <Services />
    <CaseStudiesPage />
    <Process />
    <FAQ />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <SEOHead />
        <MagneticCursor />
        <FloatingParticles count={30} />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/AboutUs" element={<AboutUsPage />} />
          <Route path="/pages/CaseStudies" element={<CaseStudiesPage />} />
          <Route path="/pages/Blog" element={<BlogPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
