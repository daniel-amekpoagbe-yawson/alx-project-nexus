import { Button } from '../ui/Button'

function LandingPage() {
  const handleGetStarted = () => {
    // Navigate to main search page
    window.location.href = '/';
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs sm:text-sm">✈</span>
              </div>
              <span className="font-bold text-lg sm:text-xl">FlightSearch</span>
            </div>
            
            <div className="hidden lg:flex items-center space-x-6 lg:space-x-8">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-gray-600 hover:text-black transition-colors duration-200 text-sm sm:text-base font-medium"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('tech-stack')}
                className="text-gray-600 hover:text-black transition-colors duration-200 text-sm sm:text-base font-medium"
              >
                Technology
              </button>
              <button 
                onClick={() => scrollToSection('demo')}
                className="text-gray-600 hover:text-black transition-colors duration-200 text-sm sm:text-base font-medium"
              >
                Demo
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 hover:text-black transition-colors duration-200 text-sm sm:text-base font-medium"
              >
                Contact
              </button>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <Button 
                onClick={handleGetStarted}
                size="sm"
                className="bg-black text-white hover:bg-gray-900 text-xs sm:text-sm px-2 sm:px-4 py-1.5 sm:py-2.5 shadow-md hover:shadow-lg transition-all duration-200"
              >
                Try Now
              </Button>
              
              {/* Mobile menu button */}
              <button className="lg:hidden p-2 text-gray-600 hover:text-black transition-colors">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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
              onClick={handleGetStarted}
              size="lg"
              className="bg-black text-white hover:bg-gray-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              Start Searching
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-200"
            >
              View Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 md:mt-16">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">50K+</div>
              <div className="text-gray-600 text-sm sm:text-base">Daily Searches</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">99.9%</div>
              <div className="text-gray-600 text-sm sm:text-base">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">&lt;200ms</div>
              <div className="text-gray-600 text-sm sm:text-base">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">4.9★</div>
              <div className="text-gray-600 text-sm sm:text-base">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Powerful Features</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need for seamless flight search and booking
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="feature-card bg-white p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 sm:mb-6">
                <span className="text-xl sm:text-2xl md:text-3xl">🔍</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Real-Time Search</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Instant access to live flight data with intelligent caching and auto-refresh.
              </p>
            </div>

            <div className="feature-card bg-white p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3 sm:mb-6">
                <span className="text-xl sm:text-2xl md:text-3xl">📊</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Price Analytics</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Interactive price charts and trend analysis to help you find best deals.
              </p>
            </div>

            <div className="feature-card bg-white p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3 sm:mb-6">
                <span className="text-xl sm:text-2xl md:text-3xl">🎯</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Smart Filtering</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Advanced filtering by price, stops, airlines, and time ranges with instant updates.
              </p>
            </div>

            <div className="feature-card bg-white p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-3 sm:mb-6">
                <span className="text-xl sm:text-2xl md:text-3xl">📱</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Mobile Optimized</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Fully responsive design that works flawlessly on all devices.
              </p>
            </div>

            <div className="feature-card bg-white p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg flex items-center justify-center mb-3 sm:mb-6">
                <span className="text-xl sm:text-2xl md:text-3xl">⚡</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Lightning Fast</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Optimized performance with React Query caching and code splitting.
              </p>
            </div>

            <div className="feature-card bg-white p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-3 sm:mb-6">
                <span className="text-xl sm:text-2xl md:text-3xl">🔒</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Type Safe</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Built with TypeScript for robust type safety and better developer experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
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
                <div className="tech-card text-center p-3 sm:p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="text-2xl sm:text-3xl mb-2">⚛️</div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">React 19</div>
                  <div className="text-xs sm:text-sm text-gray-600">UI Library</div>
                </div>
                <div className="tech-card text-center p-3 sm:p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="text-2xl sm:text-3xl mb-2">📘</div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">TypeScript</div>
                  <div className="text-xs sm:text-sm text-gray-600">Type Safety</div>
                </div>
                <div className="tech-card text-center p-3 sm:p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="text-2xl sm:text-3xl mb-2">🎨</div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Tailwind</div>
                  <div className="text-xs sm:text-sm text-gray-600">Styling</div>
                </div>
                <div className="tech-card text-center p-3 sm:p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="text-2xl sm:text-3xl mb-2">🚀</div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Vite</div>
                  <div className="text-xs sm:text-sm text-gray-600">Build Tool</div>
                </div>
                <div className="tech-card text-center p-3 sm:p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="text-2xl sm:text-3xl mb-2">🔍</div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">React Query</div>
                  <div className="text-xs sm:text-sm text-gray-600">Data Fetching</div>
                </div>
                <div className="tech-card text-center p-3 sm:p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="text-2xl sm:text-3xl mb-2">📊</div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Recharts</div>
                  <div className="text-xs sm:text-sm text-gray-600">Charts</div>
                </div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Why This Stack?</h3>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">Performance First</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Vite's optimized bundling ensures lightning-fast builds.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">Developer Experience</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">TypeScript provides excellent IDE support and error checking.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">Scalable Architecture</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Component-based design scales beautifully with complexity.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">Modern Development</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Latest React 19 features for future-proof code.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">See It In Action</h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto">
            Experience the power of modern flight search technology
          </p>
          
          <Button 
            onClick={handleGetStarted}
            size="lg"
            className="bg-black text-white hover:bg-gray-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-md hover:shadow-lg"
          >
            Try Live Demo Now
          </Button>
        </div>
      </section>

      {/* CTA Section */}
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
              onClick={handleGetStarted}
              size="lg"
              className="bg-white text-black hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Start Searching Now
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-200"
            >
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div>
              <div className="flex items-center space-x-2 sm:space-x-3 mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-sm">✈</span>
                </div>
                <span className="font-bold text-lg sm:text-xl text-white">FlightSearch</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-gray-400">
                Modern flight search engine built with cutting-edge web technology.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Product</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li><button onClick={() => scrollToSection('features')} className="hover:text-white transition-colors duration-200 text-left w-full">Features</button></li>
                <li><button onClick={() => scrollToSection('demo')} className="hover:text-white transition-colors duration-200 text-left w-full">Live Demo</button></li>
                <li><button onClick={() => scrollToSection('tech-stack')} className="hover:text-white transition-colors duration-200 text-left w-full">Technology</button></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">API Docs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li><a href="#" className="hover:text-white transition-colors duration-200">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Careers</a></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors duration-200 text-left w-full">Contact</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Connect</h4>
              <div className="flex space-x-3 sm:space-x-4 mb-4">
                <a href="#" className="social-link w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-200">
                  <span className="text-xs sm:text-sm">𝕏</span>
                </a>
                <a href="#" className="social-link w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-all duration-200">
                  <span className="text-xs sm:text-sm">in</span>
                </a>
                <a href="#" className="social-link w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-all duration-200">
                  <span className="text-xs sm:text-sm">GH</span>
                </a>
              </div>
              <p className="text-xs sm:text-sm">
                Questions? <a href="mailto:hello@flightsearch.app" className="text-blue-400 hover:text-blue-300 transition-colors underline">hello@flightsearch.app</a>
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center">
            <p className="text-xs sm:text-sm text-gray-400">
              &copy; 2024 FlightSearch. Built with <span className="text-red-500">❤️</span> for modern web.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export { LandingPage }