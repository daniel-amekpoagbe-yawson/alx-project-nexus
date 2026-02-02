import { HeroSection } from './HeroSection';
import { useNavigate } from '@tanstack/react-router';

function LandingPage() {
  const navigate = useNavigate();
  
  const handleGetStarted = () => {
    navigate({ to: '/search' });
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection onGetStarted={handleGetStarted} />
    </div>
  );
}

export { LandingPage };
