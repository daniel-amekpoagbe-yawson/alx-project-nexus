import { Navbar } from './Navbar';
import { HeroSection } from './HeroSection';
import { StatsSection } from './StatsSection';
import { FeaturesSection } from './FeaturesSection';
import { TechStackSection } from './TechStackSection';
import { DemoSection } from './DemoSection';
import { CTASection } from './CTASection';
import { Footer } from './Footer';

function LandingPage() {
  const handleGetStarted = () => {
    window.location.href = '/';
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onGetStarted={handleGetStarted} scrollToSection={scrollToSection} />
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
