import { Button } from '../ui/Button';

interface CTASectionProps {
  onGetStarted: () => void;
}

export function CTASection({ onGetStarted }: CTASectionProps) {
  return (
    <section id="contact" className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full mr-2"></span>
          Join 50K+ Happy Travelers
        </div>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-6">
          Ready to Find Your 
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Perfect Flight?</span>
        </h2>
        <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
          Join thousands of users who trust our platform for their travel needs.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <Button 
            onClick={onGetStarted}
            size="lg"
            className="w-full sm:w-auto bg-white text-black hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Start Searching Now
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-200"
          >
            View Documentation
          </Button>
        </div>
      </div>
    </section>
  );
}
