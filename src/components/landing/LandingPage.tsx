import { HeroSection } from './HeroSection';
import { StatsSection } from './StatsSection';
import { FeaturesSection } from './FeaturesSection';
import { Footer } from './Footer';

import { useNavigate } from '@tanstack/react-router';

// ... imports

function LandingPage() {
  const navigate = useNavigate();
  
  const handleGetStarted = () => {
    navigate({ to: '/search' });
  };



  return (
    <div className="min-h-screen bg-white">
      {/* Navbar moved to __root.tsx */}
      <HeroSection onGetStarted={handleGetStarted} />
      <StatsSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
}

export { LandingPage };
