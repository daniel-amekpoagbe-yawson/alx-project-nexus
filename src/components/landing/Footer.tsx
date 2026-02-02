
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 py-6 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        
        {/* Left: Built by */}
        <div className="flex justify-center md:justify-start">
          <p className="text-sm text-gray-400">
            Built by <a href="https://github.com/daniel-amekpoagbe-yawson" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors font-medium">Daniel Amekpoagbe</a>
          </p>
        </div>

        {/* Center: Copyright */}
        <div className="flex justify-center text-xs sm:text-sm text-gray-500">
          <p>© {currentYear} All rights reserved.</p>
        </div>

        {/* Right: Portfolio */}
        <div className="flex justify-center md:justify-end text-xs sm:text-sm text-gray-500">
          <a 
            href="https://github.com/daniel-amekpoagbe-yawson" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Portfolio
          </a>
        </div>
      </div>
    </footer>
  );
}
