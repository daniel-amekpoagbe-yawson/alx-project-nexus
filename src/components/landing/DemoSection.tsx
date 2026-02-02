import { Button } from '../ui/Button';

interface DemoSectionProps {
  onGetStarted: () => void;
}

export function DemoSection({ onGetStarted }: DemoSectionProps) {
  return (
    <section id="demo" className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">See It In Action</h2>
        <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto">
          Experience the power of modern flight search technology
        </p>
        
        <Button 
          onClick={onGetStarted}
          size="lg"
          className="w-full sm:w-auto bg-black text-white hover:bg-gray-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-md hover:shadow-lg"
        >
          Try Live Demo Now
        </Button>
      </div>
    </section>
  );
}
