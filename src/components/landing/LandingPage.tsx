import { useState } from 'react'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'

function LandingPage() {
  const [email, setEmail] = useState('')

  const handleGetStarted = () => {
    // For now, navigate to search - will update after routing is fixed
    window.location.href = '/home';
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Newsletter signup:', email)
    // Handle newsletter signup here
    setEmail('')
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
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center bg-black text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-up">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Live Demo Available Now
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up animation-delay-200">
            Find Your Perfect Flight
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"> Smarter</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            Modern flight search engine with real-time data, intelligent filtering, and beautiful visualizations. 
            Built with cutting-edge web technology for an exceptional user experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
            <Button 
              onClick={handleGetStarted}
              size="lg"
              className="bg-black text-white hover:bg-gray-900 px-8 py-4 text-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Searching Now
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-200"
            >
              View Demo
            </Button>
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            <div className="text-center animate-fade-in-up animation-delay-800">
              <div className="text-4xl font-bold text-gray-900 mb-2 counter">50K+</div>
              <div className="text-gray-600 font-medium">Daily Searches</div>
            </div>
            <div className="text-center animate-fade-in-up animation-delay-1000">
              <div className="text-4xl font-bold text-gray-900 mb-2 counter">99.9%</div>
              <div className="text-gray-600 font-medium">Uptime</div>
            </div>
            <div className="text-center animate-fade-in-up animation-delay-1200">
              <div className="text-4xl font-bold text-gray-900 mb-2 counter">&lt;200ms</div>
              <div className="text-gray-600 font-medium">Response Time</div>
            </div>
            <div className="text-center animate-fade-in-up animation-delay-1400">
              <div className="text-4xl font-bold text-gray-900 mb-2 counter">4.9★</div>
              <div className="text-gray-600 font-medium">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for seamless flight search and booking experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group cursor-pointer">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Real-Time Search</h3>
              <p className="text-gray-600 leading-relaxed">
                Instant access to live flight data from Amadeus API with intelligent caching and auto-refresh.
              </p>
            </div>

            <div className="feature-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group cursor-pointer">
              <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">Price Analytics</h3>
              <p className="text-gray-600 leading-relaxed">
                Interactive price charts and trend analysis to help you find the best deals and optimal booking times.
              </p>
            </div>

            <div className="feature-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group cursor-pointer">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">Smart Filtering</h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced filtering by price, stops, airlines, and time ranges with instant visual updates.
              </p>
            </div>

            <div className="feature-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group cursor-pointer">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">Mobile Optimized</h3>
              <p className="text-gray-600 leading-relaxed">
                Fully responsive design that works flawlessly on all devices with touch-friendly interactions.
              </p>
            </div>

            <div className="feature-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group cursor-pointer">
              <div className="w-14 h-14 bg-gradient-to-br from-red-400 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">Lightning Fast</h3>
              <p className="text-gray-600 leading-relaxed">
                Optimized performance with React Query caching, virtual scrolling, and code splitting.
              </p>
            </div>

            <div className="feature-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group cursor-pointer">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">Type Safe</h3>
              <p className="text-gray-600 leading-relaxed">
                Built with TypeScript for robust type safety and better developer experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-20 px-6 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Modern Technology Stack</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with cutting-edge tools and frameworks for optimal performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="grid grid-cols-3 gap-6">
                <div className="tech-card text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  <div className="text-4xl mb-3 animate-float">⚛️</div>
                  <div className="font-semibold text-gray-900">React 19</div>
                  <div className="text-sm text-gray-600">UI Library</div>
                </div>
                <div className="tech-card text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  <div className="text-4xl mb-3 animate-float animation-delay-1000">📘</div>
                  <div className="font-semibold text-gray-900">TypeScript</div>
                  <div className="text-sm text-gray-600">Type Safety</div>
                </div>
                <div className="tech-card text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  <div className="text-4xl mb-3 animate-float animation-delay-2000">🎨</div>
                  <div className="font-semibold text-gray-900">Tailwind</div>
                  <div className="text-sm text-gray-600">Styling</div>
                </div>
                <div className="tech-card text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  <div className="text-4xl mb-3 animate-float animation-delay-3000">🚀</div>
                  <div className="font-semibold text-gray-900">Vite</div>
                  <div className="text-sm text-gray-600">Build Tool</div>
                </div>
                <div className="tech-card text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  <div className="text-4xl mb-3 animate-float animation-delay-4000">🔍</div>
                  <div className="font-semibold text-gray-900">React Query</div>
                  <div className="text-sm text-gray-600">Data Fetching</div>
                </div>
                <div className="tech-card text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  <div className="text-4xl mb-3 animate-float animation-delay-5000">📊</div>
                  <div className="font-semibold text-gray-900">Recharts</div>
                  <div className="text-sm text-gray-600">Charts</div>
                </div>
              </div>
            </div>

            <div className="space-y-6 animate-slide-in-right">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Why This Stack?</h3>
              
              <div className="feature-item flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-green-600 transition-colors">Performance First</h4>
                  <p className="text-gray-600 leading-relaxed">Vite's hot module replacement and optimized bundling ensure lightning-fast development and production builds.</p>
                </div>
              </div>

              <div className="feature-item flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">Developer Experience</h4>
                  <p className="text-gray-600 leading-relaxed">TypeScript provides compile-time error checking and excellent IDE support for faster development.</p>
                </div>
              </div>

              <div className="feature-item flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-purple-600 transition-colors">Scalable Architecture</h4>
                  <p className="text-gray-600 leading-relaxed">Component-based design with React Query for server state management scales beautifully with complexity.</p>
                </div>
              </div>

              <div className="feature-item flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-orange-600 transition-colors">Modern Development</h4>
                  <p className="text-gray-600 leading-relaxed">Using the latest React 19 features, TanStack Router, and modern patterns for future-proof code.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">See It In Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the power of modern flight search technology
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 hover:shadow-3xl transition-shadow duration-300">
            <div className="bg-gradient-to-r from-gray-900 to-black text-white px-4 py-3 flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400 transition-colors cursor-pointer"></div>
              <span className="ml-4 text-sm text-gray-300 font-mono">flight-search-engine.app</span>
            </div>
            
            <div className="p-8 bg-gradient-to-b from-gray-50 to-white">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="animate-slide-in-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-blue-600 text-lg">🔍</span>
                    </span>
                    Smart Search Interface
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Our intuitive search form features airport autocomplete, flexible date selection, 
                    and intelligent passenger controls for a seamless booking experience.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 group">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-green-600 transition-colors">Real-time airport suggestions</span>
                    </div>
                    <div className="flex items-center space-x-3 group">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-green-600 transition-colors">Flexible trip configuration</span>
                    </div>
                    <div className="flex items-center space-x-3 group">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-green-600 transition-colors">Mobile-optimized design</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 h-80 flex items-center justify-center animate-fade-in-up animation-delay-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-100 opacity-10"></div>
                  <div className="text-center text-gray-600 relative z-10">
                    <div className="text-6xl mb-4 animate-float">🔍</div>
                    <p className="text-lg font-semibold text-gray-800">Search Form Demo</p>
                    <p className="text-sm text-gray-600 mt-2">Interactive autocomplete • Smart validation • Instant results</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="md:order-2 animate-slide-in-right">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-purple-600 text-lg">📊</span>
                    </span>
                    Advanced Filtering
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Filter results by price range, airlines, number of stops, departure times, 
                    and more - all with instant visual feedback and real-time updates.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 group">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">Price range sliders</span>
                    </div>
                    <div className="flex items-center space-x-3 group">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">Airline multi-select</span>
                    </div>
                    <div className="flex items-center space-x-3 group">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">Time-based filtering</span>
                    </div>
                  </div>
                </div>
                
                <div className="md:order-1">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 h-80 flex items-center justify-center animate-fade-in-up animation-delay-400 relative overflow-hidden">
                    <div className="absolute inset-0 bg-purple-100 opacity-10"></div>
                    <div className="text-center text-gray-600 relative z-10">
                      <div className="text-6xl mb-4 animate-float animation-delay-2000">📊</div>
                      <p className="text-lg font-semibold text-gray-800">Price Charts</p>
                      <p className="text-sm text-gray-600 mt-2">Interactive visualizations • Real-time updates • Trend analysis</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={handleGetStarted}
              size="lg"
              className="bg-black text-white hover:bg-gray-900 px-8 py-4 text-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Try Live Demo Now
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-purple-600/10"></div>
        <div className="absolute top-10 right-20 w-32 h-32 bg-blue-500 rounded-full mix-blend-screen filter blur-2xl opacity-20 animate-float"></div>
        <div className="absolute bottom-10 left-20 w-48 h-48 bg-purple-500 rounded-full mix-blend-screen filter blur-2xl opacity-20 animate-float animation-delay-2000"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-up">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Join 50K+ Happy Travelers
          </div>
          
          <h2 className="text-5xl font-bold mb-6 animate-fade-in-up animation-delay-200">
            Ready to Find Your 
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> Perfect Flight?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            Join thousands of users who trust our platform for their travel needs. 
            Experience the future of flight search today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up animation-delay-600">
            <Button 
              onClick={handleGetStarted}
              size="lg"
              className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg transform hover:scale-105 transition-all duration-200 shadow-2xl hover:shadow-3xl"
            >
              Start Searching Now
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg transform hover:scale-105 transition-all duration-200"
            >
              View Documentation
            </Button>
          </div>

          <div className="max-w-md mx-auto animate-fade-in-up animation-delay-800">
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2 bg-white/5 backdrop-blur-sm p-2 rounded-xl border border-white/10">
              <Input
                type="email"
                placeholder="Enter your email for updates"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/10 border-white/20 text-white placeholder-gray-400 focus:bg-white/20 transition-colors"
              />
              <Button 
                type="submit" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200"
              >
                Subscribe
              </Button>
            </form>
            <p className="text-sm text-gray-400 mt-3 flex items-center justify-center">
              <span className="w-4 h-4 bg-green-400 rounded-full mr-2 flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </span>
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gradient-to-b from-gray-900 to-black text-gray-300 py-16 px-6 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="animate-fade-in-up">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold">✈</span>
                </div>
                <span className="font-bold text-xl text-white">FlightSearch</span>
              </div>
              <p className="text-sm leading-relaxed text-gray-400">
                Modern flight search engine built with cutting-edge web technology for the best user experience.
              </p>
              <div className="flex items-center space-x-2 mt-4">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-xs text-green-400 font-medium">All systems operational</span>
              </div>
            </div>

            <div className="animate-fade-in-up animation-delay-200">
              <h4 className="font-semibold text-white mb-6 text-lg">Product</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#features" className="hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">Features</a></li>
                <li><a href="#demo" className="hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">Live Demo</a></li>
                <li><a href="#tech-stack" className="hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">Technology</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">API Docs</a></li>
              </ul>
            </div>

            <div className="animate-fade-in-up animation-delay-400">
              <h4 className="font-semibold text-white mb-6 text-lg">Company</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">Careers</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">Contact</a></li>
              </ul>
            </div>

            <div className="animate-fade-in-up animation-delay-600">
              <h4 className="font-semibold text-white mb-6 text-lg">Connect</h4>
              <div className="flex space-x-4 mb-6">
                <a href="#" className="social-link w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <span className="text-sm">𝕏</span>
                </a>
                <a href="#" className="social-link w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <span className="text-sm">in</span>
                </a>
                <a href="#" className="social-link w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <span className="text-sm">GH</span>
                </a>
                <a href="#" className="social-link w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <span className="text-sm">YT</span>
                </a>
              </div>
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-3 border border-blue-500/20">
                <p className="text-sm">
                  <span className="text-white font-medium">Questions?</span> <a href="mailto:hello@flightsearch.app" className="text-blue-400 hover:text-blue-300 transition-colors underline">hello@flightsearch.app</a>
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-gray-400">
                &copy; 2024 FlightSearch. Built with <span className="text-red-500">❤️</span> for modern web.
              </p>
              <div className="flex items-center space-x-6 text-sm">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>


    </div>
  )
}

export { LandingPage }