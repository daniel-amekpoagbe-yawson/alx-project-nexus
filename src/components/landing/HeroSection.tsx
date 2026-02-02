import { Button } from '../ui/Button';
import { Zap, SlidersHorizontal, BarChart3 } from 'lucide-react';

interface HeroSectionProps {
  onGetStarted: () => void;
}

export function HeroSection({ onGetStarted }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center bg-gray-50 border border-gray-200 text-gray-800 px-3 py-1.5 rounded-full text-xs font-medium mb-6  mt-10">
          <span className="w-2 h-2 bg-black rounded-full mr-2 animate-pulse"></span>
          Powered by Amadeus API
        </div>
        
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 leading-tight tracking-tight">
          Find Your Perfect Flight,
          <br />
          <span className="text-gray-black/60">
            Instantly
          </span>
        </h1>
        
        {/* Description */}
        <p className="text-sm sm:text-base text-gray-500 mb-8 max-w-2xl mx-auto">
          Real-time search • Smart filters • Live price charts 
        </p>
        
        {/* CTA Button */}
        <Button 
          onClick={onGetStarted}
          size="lg"
          className="bg-black text-white hover:bg-gray-800 px-8 py-3.5 text-lg shadow-xl transition-all duration-300 transform flex items-center gap-2 mx-auto"
        >
          Search Flights Now 
        </Button>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 text-left">
          <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-gray-200 transition-colors">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-100 mb-4 shadow-sm">
              <Zap className="w-5 h-5 text-black" />
            </div>
            <h3 className="font-semibold text-black mb-1">Real-Time Search</h3>
            <p className="text-sm text-gray-500">Instant results from live flight data via Amadeus</p>
          </div>
          
          <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-gray-200 transition-colors">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-100 mb-4 shadow-sm">
              <SlidersHorizontal className="w-5 h-5 text-black" />
            </div>
            <h3 className="font-semibold text-black mb-1">Smart Filtering</h3>
            <p className="text-sm text-gray-500">Filter easily by price, stops, and favorite airlines</p>
          </div>
          
          <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-gray-200 transition-colors">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-100 mb-4 shadow-sm">
              <BarChart3 className="w-5 h-5 text-black" />
            </div>
            <h3 className="font-semibold text-black mb-1">Price Analytics</h3>
            <p className="text-sm text-gray-500">Visual price trends to help you find the best deal</p>
          </div>
        </div>
      </div>
    </section>
  );
}