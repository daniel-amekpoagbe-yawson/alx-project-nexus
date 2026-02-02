
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 py-6 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Brand/Attribution */}
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-400">
            Built by <a href="https://github.com/daniel-amekpoagbe-yawson" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors font-medium">Daniel Amekpoagbe</a>
          </p>
        </div>

        {/* Links & Copyright */}
        <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-500">
          <p>© {currentYear} All rights reserved.</p>
          <div className="w-1 h-1 bg-gray-700 rounded-full" />
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
