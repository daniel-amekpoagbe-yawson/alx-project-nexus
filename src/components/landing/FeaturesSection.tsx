import { Search, BarChart3, Target, Smartphone, Zap, Lock } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
}

export function FeaturesSection() {
  const features: Feature[] = [
    {
      icon: <Search className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />,
      iconBg: 'bg-blue-100',
      title: 'Real-Time Search',
      description: 'Instant access to live flight data with intelligent caching and auto-refresh.',
    },
    {
      icon: <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />,
      iconBg: 'bg-green-100',
      title: 'Price Analytics',
      description: 'Interactive price charts and trend analysis to help you find best deals.',
    },
    {
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />,
      iconBg: 'bg-purple-100',
      title: 'Smart Filtering',
      description: 'Advanced filtering by price, stops, airlines, and time ranges with instant updates.',
    },
    {
      icon: <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />,
      iconBg: 'bg-orange-100',
      title: 'Mobile Optimized',
      description: 'Fully responsive design that works flawlessly on all devices.',
    },
    {
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />,
      iconBg: 'bg-red-100',
      title: 'Lightning Fast',
      description: 'Optimized performance with React Query caching and code splitting.',
    },
    {
      icon: <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />,
      iconBg: 'bg-indigo-100',
      title: 'Type Safe',
      description: 'Built with TypeScript for robust type safety and better developer experience.',
    },
  ];

  return (
    <section id="features" className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Powerful Features</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need for seamless flight search and booking
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card bg-white p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100"
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 ${feature.iconBg} rounded-lg flex items-center justify-center mb-3 sm:mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
