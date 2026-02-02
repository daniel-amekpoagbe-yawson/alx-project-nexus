import { HeroSection } from './HeroSection';
import { StatsSection } from './StatsSection';
import { FeaturesSection } from './FeaturesSection';
import { TechStackSection } from './TechStackSection';
import { DemoSection } from './DemoSection';
import { CTASection } from './CTASection';
import { Footer } from './Footer';

import { useNavigate } from '@tanstack/react-router';

// ... imports

function LandingPage() {
  const navigate = useNavigate();
  
  const handleGetStarted = () => {
    navigate({ to: '/search' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar moved to __root.tsx */}
      <HeroSection onGetStarted={handleGetStarted} />
      <StatsSection />
      <FeaturesSection />
      <TechStackSection />
      <DemoSection onGetStarted={handleGetStarted} />
      <CTASection onGetStarted={handleGetStarted} />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

export { LandingPage };
