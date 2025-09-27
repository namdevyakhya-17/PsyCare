import { useEffect } from 'react';
import HeroSection from '../components/Hero.jsx';
import TestimonialsSection from '../components/Testimonial.jsx';
import FeaturesSection from '../components/Features.jsx';
import FAQSection from '../components/FAQ.jsx';


const LandingPage = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    document.body.className = 'font-poppins';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <main className="min-h-screen relative bg-white">
      <div className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <FAQSection />
      </div>
    </main>
  );
};

export default LandingPage;
