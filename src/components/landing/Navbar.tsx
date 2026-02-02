import { useState } from 'react';
import { Plane, Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { useNavigate, useRouterState } from '@tanstack/react-router';

export function Navbar() {
  const navigate = useNavigate();
  const routerState = useRouterState();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Features', id: 'features' },
    { label: 'Technology', id: 'tech-stack' },
    { label: 'Demo', id: 'demo' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    
    // If we are on the home page, scroll to section
    if (routerState.location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home first, then ideally scroll (simplified to just nav home for now)
      navigate({ to: '/' });
      // Optional: Logic to scroll after nav could be added here or via hash
      setTimeout(() => {
         const element = document.getElementById(sectionId);
         if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleGetStarted = () => {
    navigate({ to: '/search' });
    setIsMobileMenuOpen(false);
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
          <div className="hidden lg:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-gray-600 hover:text-black transition-colors duration-200 text-sm sm:text-base font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button 
              onClick={handleGetStarted}
              size="sm"
              className="bg-black text-white hover:bg-gray-900 text-xs sm:text-sm px-2 sm:px-4 py-1.5 sm:py-2.5 shadow-md hover:shadow-lg transition-all duration-200"
            >
              Try Now
            </Button>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-black transition-colors"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 mobile-menu">
            <div className="flex flex-col space-y-3 pt-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="text-gray-600 hover:text-black transition-colors duration-200 text-base font-medium text-left py-2"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
