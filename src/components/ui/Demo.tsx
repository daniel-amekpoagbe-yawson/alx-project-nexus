import { Button } from './Button'

const Demo = () => {
  return (
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

          {/* <div className="text-center mt-12">
            <Button 
              onClick={handleGetStarted}
              size="lg"
              className="bg-black text-white hover:bg-gray-900 px-8 py-4 text-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Try Live Demo Now
            </Button>
          </div> */}
        </div>
      </section>
  )
}

export default Demo