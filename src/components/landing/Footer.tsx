import { Plane, Twitter, Linkedin, Github, Heart } from 'lucide-react';

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

export function Footer({ scrollToSection }: FooterProps) {
  const productLinks = [
    { label: 'Features', onClick: () => scrollToSection('features') },
    { label: 'Live Demo', onClick: () => scrollToSection('demo') },
    { label: 'Technology', onClick: () => scrollToSection('tech-stack') },
    { label: 'API Docs', href: '#' },
  ];

  const companyLinks = [
    { label: 'About Us', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', onClick: () => scrollToSection('contact') },
  ];

  const socialLinks = [
    { icon: <Twitter className="w-4 h-4" />, href: '#', hoverColor: 'hover:bg-blue-500' },
    { icon: <Linkedin className="w-4 h-4" />, href: '#', hoverColor: 'hover:bg-blue-700' },
    { icon: <Github className="w-4 h-4" />, href: '#', hoverColor: 'hover:bg-gray-600' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center">
                <Plane className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
              </div>
              <span className="font-bold text-lg sm:text-xl text-white">FlightSearch</span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-gray-400">
              Modern flight search engine built with cutting-edge web technology.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Product</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {productLinks.map((link, index) => (
                <li key={index}>
                  {link.onClick ? (
                    <button 
                      onClick={link.onClick}
                      className="hover:text-white transition-colors duration-200 text-left w-full"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a href={link.href} className="hover:text-white transition-colors duration-200">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  {link.onClick ? (
                    <button 
                      onClick={link.onClick}
                      className="hover:text-white transition-colors duration-200 text-left w-full"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a href={link.href} className="hover:text-white transition-colors duration-200">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Connect</h4>
            <div className="flex space-x-3 sm:space-x-4 mb-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className={`social-link w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center ${social.hoverColor} transition-all duration-200`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-xs sm:text-sm">
              Questions? <a href="mailto:hello@flightsearch.app" className="text-blue-400 hover:text-blue-300 transition-colors underline">hello@flightsearch.app</a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-400 flex items-center justify-center gap-1">
            © 2024 FlightSearch. Built with <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 fill-current" /> for modern web.
          </p>
        </div>
      </div>
    </footer>
  );
}
