
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Me', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-3xl font-light tracking-tight italic">
            NP
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isActive(item.path)
                    ? 'text-black border-b-2 border-black pb-1'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Book A Call Button */}
          <div className="hidden md:block">
            <a
              href="mailto:naitikpatel1312@gmail.com"
              className="bg-black text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors duration-300"
            >
              Book A Call
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive(item.path) ? 'text-black' : 'text-gray-600'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="mailto:naitikpatel1312@gmail.com"
              className="block mt-4 bg-black text-white px-6 py-2 rounded-lg text-sm font-medium text-center"
            >
              Book A Call
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
