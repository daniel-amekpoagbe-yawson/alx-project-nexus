import { Atom, FileCode, Palette, Rocket, Search, BarChart3, Check } from 'lucide-react';

interface TechItem {
  icon: React.ReactNode;
  name: string;
  category: string;
}

interface Benefit {
  color: string;
  title: string;
  description: string;
}

export function TechStackSection() {
  const techItems: TechItem[] = [
    { icon: <Atom className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />, name: 'React 19', category: 'UI Library' },
    { icon: <FileCode className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />, name: 'TypeScript', category: 'Type Safety' },
    { icon: <Palette className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-500" />, name: 'Tailwind', category: 'Styling' },
    { icon: <Rocket className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />, name: 'Vite', category: 'Build Tool' },
    { icon: <Search className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />, name: 'React Query', category: 'Data Fetching' },
    { icon: <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />, name: 'Recharts', category: 'Charts' },
  ];

  const benefits: Benefit[] = [
    { color: 'bg-green-500', title: 'Performance First', description: "Vite's optimized bundling ensures lightning-fast builds." },
    { color: 'bg-blue-500', title: 'Developer Experience', description: 'TypeScript provides excellent IDE support and error checking.' },
    { color: 'bg-purple-500', title: 'Scalable Architecture', description: 'Component-based design scales beautifully with complexity.' },
    { color: 'bg-orange-500', title: 'Modern Development', description: 'Latest React 19 features for future-proof code.' },
  ];

  return (
    <section id="tech-stack" className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Modern Technology Stack</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Built with cutting-edge tools and frameworks for optimal performance
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
              {techItems.map((tech, index) => (
                <div key={index} className="tech-card text-center p-3 sm:p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex justify-center mb-2">
                    {tech.icon}
                  </div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">{tech.name}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{tech.category}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Why This Stack?</h3>
            
            <div className="space-y-3 sm:space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`w-5 h-5 sm:w-6 sm:h-6 ${benefit.color} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
