import { Plane } from 'lucide-react';
import { Button } from '../ui/Button';
import { useNavigate } from '@tanstack/react-router';

export function Navbar() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate({ to: '/search' });
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-black rounded-lg flex items-center justify-center">
              <Plane className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="font-bold text-lg sm:text-xl">FlightSearch</span>
          </div>
          
          {/* Desktop Navigation */}
         

          {/* CTA Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button 
              onClick={handleGetStarted}
              size="sm"
              className="bg-black text-white hover:bg-gray-900 text-xs sm:text-sm px-2 sm:px-4 py-1.5 sm:py-2.5 shadow-md hover:shadow-lg transition-all duration-200"
            >
              Try Now
            </Button>
            
         
          </div>
        </div>

      
      </div>
    </nav>
  );
}
