import { Star } from 'lucide-react';

export function StatsSection() {
  const stats = [
    { value: '50K+', label: 'Daily Searches' },
    { value: '99.9%', label: 'Uptime' },
    { value: '<200ms', label: 'Response Time' },
    { value: '4.9', label: 'User Rating', icon: <Star className="w-4 h-4 inline-block fill-current" /> },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 md:mt-16 max-w-7xl mx-auto px-4 sm:px-6">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {stat.value}
            {stat.icon}
          </div>
          <div className="text-gray-600 text-sm sm:text-base">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
