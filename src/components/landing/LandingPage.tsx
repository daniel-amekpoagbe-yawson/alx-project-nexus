import { Button } from '../ui/Button'

function LandingPage() {
  const handleGetStarted = () => {
    // Navigate to main search page
    window.location.href = '/';
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">✈</span>
              </div>
              <span className="font-bold text-xl">FlightSearch</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="nav-link text-gray-600 hover:text-black transition-colors duration-200 relative group">
                Features
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a href="#tech-stack" className="nav-link text-gray-600 hover:text-black transition-colors duration-200 relative group">
                Technology
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a href="#demo" className="nav-link text-gray-600 hover:text-black transition-colors duration-200 relative group">
                Demo
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="nav-link text-gray-600 hover:text-black transition-colors duration-200 relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-200 group-hover:w-full"></span>
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <Button 
                onClick={handleGetStarted}
                size="sm"
                className="bg-black text-white hover:bg-gray-900 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Try Now
              </Button>
              
              {/* Mobile menu button */}
              <button className="md:hidden p-2 text-gray-600 hover:text-black transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-black text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            Live Demo Available
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Find Your Perfect Flight
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Smarter</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Modern flight search engine with real-time data, intelligent filtering, and beautiful visualizations. 
            Built with cutting-edge web technology for an exceptional user experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleGetStarted}
              size="lg"
              className="bg-black text-white hover:bg-gray-900 px-8 py-4 text-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              Start Searching
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-4 text-lg transition-all duration-200"
            >
              View Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">50K+</div>
              <div className="text-gray-600 text-sm md:text-base">Daily Searches</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">99.9%</div>
              <div className="text-gray-600 text-sm md:text-base">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">&lt;200ms</div>
              <div className="text-gray-600 text-sm md:text-base">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">4.9★</div>
              <div className="text-gray-600 text-sm md:text-base">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need for seamless flight search and booking
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="feature-card bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                <span className="text-2xl md:text-3xl">🔍</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Real-Time Search</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Instant access to live flight data with intelligent caching and auto-refresh.
              </p>
            </div>

            <div className="feature-card bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                <span className="text-2xl md:text-3xl">📊</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Price Analytics</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Interactive price charts and trend analysis to find best deals.
              </p>
            </div>

            <div className="feature-card bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                <span className="text-2xl md:text-3xl">🎯</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Smart Filtering</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Advanced filtering by price, stops, airlines, and time ranges.
              </p>
            </div>

            <div className="feature-card bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                <span className="text-2xl md:text-3xl">📱</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Mobile Optimized</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Fully responsive design that works flawlessly on all devices.
              </p>
            </div>

            <div className="feature-card bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                <span className="text-2xl md:text-3xl">⚡</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Lightning Fast</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Optimized performance with React Query caching and code splitting.
              </p>
            </div>

            <div className="feature-card bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                <span className="text-2xl md:text-3xl">🔒</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Type Safe</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Built with TypeScript for robust type safety and better DX.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      {/* Demo Section */}
      <div className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Live Demo Available</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Try the flight search engine in action with real-time data and smooth interactions
          </p>
          <Button 
            onClick={handleGetStarted}
            size="lg"
            className="bg-black text-white hover:bg-gray-900 px-8 py-4 text-lg shadow-md"
          >
            Try Demo Now
          </Button>
        </div>
      </div>


      

    </div>
  )
}

export { LandingPage }