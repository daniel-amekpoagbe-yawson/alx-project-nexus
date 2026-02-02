
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-4 text-center">
        
        {/* Brand/Attribution */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-gray-400">
            Built by <a href="https://github.com/daniel-amekpoagbe-yawson" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">Daniel Amekpoagbe</a>
          </p>
        </div>

        {/* Links & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-xs sm:text-sm text-gray-500">
          <p>© {currentYear} All rights reserved.</p>
          <div className="hidden sm:block w-1 h-1 bg-gray-700 rounded-full" />
          <a 
            href="https://github.com/daniel-amekpoagbe-yawson" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            Portfolio
          </a>
        </div>
      </div>
    </footer>
  );
}
