import { useState } from 'react'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import Demo from '../ui/Demo'

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

      
      {/* Demo Section */}
      <span>
        <Demo/>
      </span>


      

    </div>
  )
}

export { LandingPage }