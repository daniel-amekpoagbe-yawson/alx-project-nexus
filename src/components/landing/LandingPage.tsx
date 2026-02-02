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
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">✈</span>
              </div>
              <span className="font-bold text-xl">FlightSearch</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-black transition-colors">Features</a>
              <a href="#tech-stack" className="text-gray-600 hover:text-black transition-colors">Technology</a>
              <a href="#demo" className="text-gray-600 hover:text-black transition-colors">Demo</a>
              <a href="#contact" className="text-gray-600 hover:text-black transition-colors">Contact</a>
            </div>

            <Button 
              onClick={handleGetStarted}
              size="sm"
              className="bg-black text-white hover:bg-gray-900"
            >
              Try Now
            </Button>
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
      <section id="tech-stack" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Modern Technology Stack</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with cutting-edge tools and frameworks for optimal performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl mb-3">⚛️</div>
                  <div className="font-semibold text-gray-900">React 19</div>
                  <div className="text-sm text-gray-600">UI Library</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl mb-3">📘</div>
                  <div className="font-semibold text-gray-900">TypeScript</div>
                  <div className="text-sm text-gray-600">Type Safety</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl mb-3">🎨</div>
                  <div className="font-semibold text-gray-900">Tailwind</div>
                  <div className="text-sm text-gray-600">Styling</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl mb-3">🚀</div>
                  <div className="font-semibold text-gray-900">Vite</div>
                  <div className="text-sm text-gray-600">Build Tool</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl mb-3">🔍</div>
                  <div className="font-semibold text-gray-900">React Query</div>
                  <div className="text-sm text-gray-600">Data Fetching</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl mb-3">📊</div>
                  <div className="font-semibold text-gray-900">Recharts</div>
                  <div className="text-sm text-gray-600">Charts</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why This Stack?</h3>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Performance First</h4>
                  <p className="text-gray-600">Vite's hot module replacement and optimized bundling ensure lightning-fast development and production builds.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Developer Experience</h4>
                  <p className="text-gray-600">TypeScript provides compile-time error checking and excellent IDE support for faster development.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Scalable Architecture</h4>
                  <p className="text-gray-600">Component-based design with React Query for server state management scales beautifully with complexity.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Modern Development</h4>
                  <p className="text-gray-600">Using the latest React 19 features, TanStack Router, and modern patterns for future-proof code.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">See It In Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the power of modern flight search technology
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="bg-black text-white px-4 py-3 flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="ml-4 text-sm text-gray-400">flight-search-engine.app</span>
            </div>
            
            <div className="p-8 bg-gradient-to-b from-gray-50 to-white">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Search Interface</h3>
                  <p className="text-gray-600 mb-6">
                    Our intuitive search form features airport autocomplete, flexible date selection, 
                    and intelligent passenger controls for a seamless booking experience.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 text-xs">✓</span>
                      </span>
                      <span className="text-gray-700">Real-time airport suggestions</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 text-xs">✓</span>
                      </span>
                      <span className="text-gray-700">Flexible trip configuration</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 text-xs">✓</span>
                      </span>
                      <span className="text-gray-700">Mobile-optimized design</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-100 rounded-lg p-6 h-64 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-6xl mb-4">🔍</div>
                    <p className="text-lg font-medium">Search Form Demo</p>
                    <p className="text-sm">Try the live application!</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="md:order-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Filtering</h3>
                  <p className="text-gray-600 mb-6">
                    Filter results by price range, airlines, number of stops, departure times, 
                    and more - all with instant visual feedback and real-time updates.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 text-xs">✓</span>
                      </span>
                      <span className="text-gray-700">Price range sliders</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 text-xs">✓</span>
                      </span>
                      <span className="text-gray-700">Airline multi-select</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 text-xs">✓</span>
                      </span>
                      <span className="text-gray-700">Time-based filtering</span>
                    </li>
                  </ul>
                </div>
                
                <div className="md:order-1">
                  <div className="bg-gray-100 rounded-lg p-6 h-64 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <div className="text-6xl mb-4">📊</div>
                      <p className="text-lg font-medium">Price Charts</p>
                      <p className="text-sm">Interactive visualizations</p>
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
              className="bg-black text-white hover:bg-gray-900 px-8 py-4 text-lg"
            >
              Try Live Demo
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Find Your Perfect Flight?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of users who trust our platform for their travel needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              onClick={handleGetStarted}
              size="lg"
              className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg"
            >
              Start Searching Now
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg"
            >
              View Documentation
            </Button>
          </div>

          <div className="max-w-md mx-auto">
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email for updates"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/10 border-white/20 text-white placeholder-gray-400"
              />
              <Button type="submit" className="bg-white text-black hover:bg-gray-100">
                Subscribe
              </Button>
            </form>
            <p className="text-sm text-gray-400 mt-2">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-sm">✈</span>
                </div>
                <span className="font-bold text-xl text-white">FlightSearch</span>
              </div>
              <p className="text-sm leading-relaxed">
                Modern flight search engine built with cutting-edge web technology for the best user experience.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#demo" className="hover:text-white transition-colors">Demo</a></li>
                <li><a href="#tech-stack" className="hover:text-white transition-colors">Technology</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Connect</h4>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <span className="text-xs">𝕏</span>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <span className="text-xs">in</span>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <span className="text-xs">GH</span>
                </a>
              </div>
              <p className="text-sm">
                Questions? <a href="mailto:hello@flightsearch.app" className="text-white hover:underline">hello@flightsearch.app</a>
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 FlightSearch. Built with ❤️ for the modern web.</p>
          </div>
        </div>
      </footer>


    </div>
  )
}

export { LandingPage }