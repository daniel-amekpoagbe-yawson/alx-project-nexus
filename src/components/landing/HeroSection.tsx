import { Button } from '../ui/Button';

interface HeroSectionProps {
  onGetStarted: () => void;
}

export function HeroSection({ onGetStarted }: HeroSectionProps) {
  return (
    <section id="hero" className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center bg-black text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full mr-2"></span>
          Live Demo Available
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
          Find Your Perfect Flight
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Smarter</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
          Modern flight search engine with real-time data, intelligent filtering, and beautiful visualizations. 
          Built with cutting-edge web technology for an exceptional user experience.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <Button 
            onClick={onGetStarted}
            size="lg"
            className="w-full sm:w-auto bg-black text-white hover:bg-gray-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-md hover:shadow-lg transition-all duration-200"
          >
            Start Searching
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-200"
          >
            View Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
