import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LayoutDashboard, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar({ isAdmin }: { isAdmin: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLocations, setShowLocations] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/#projects' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ];

  const locations = [
    { name: 'Greater Noida', href: '/greater-noida' },
    { name: 'Noida', href: '/noida' },
    { name: 'Noida Extension', href: '/noida-extension' },
    { name: 'Ghaziabad', href: '/ghaziabad' },
    { name: 'Delhi', href: '/delhi' },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    setShowLocations(false);
    if (href.startsWith('/#')) {
      const id = href.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-16 flex items-center',
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="https://instasize.com/api/image/87e2fdb8828fd9cdfa4566774e9ba73c587ea743872310c777de048c2b9dd4b1.jpeg" 
            alt="REAL PROP Logo" 
            className="h-14 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith('/#')) {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }
              }}
              className={cn(
                'text-sm font-medium hover:text-red-600 transition-colors',
                scrolled ? 'text-gray-700' : 'text-gray-900'
              )}
            >
              {link.name}
            </a>
          ))}

          {/* Locations Dropdown */}
          <div className="relative group">
            <button 
              className={cn(
                'flex items-center space-x-1 text-sm font-medium hover:text-red-600 transition-colors',
                scrolled ? 'text-gray-700' : 'text-gray-900'
              )}
            >
              <span>Locations</span>
              <ChevronDown size={14} />
            </button>
            <div className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
              {locations.map((loc) => (
                <Link
                  key={loc.name}
                  to={loc.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600"
                >
                  {loc.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/admin"
            className="flex items-center space-x-1 text-sm font-medium text-red-600 hover:text-red-700"
          >
            <LayoutDashboard size={16} />
            <span>Admin</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 right-0 bg-white shadow-xl md:hidden py-4 px-4 flex flex-col space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith('/#')) {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  } else {
                    setIsOpen(false);
                  }
                }}
                className="text-lg font-medium text-gray-700 hover:text-red-600"
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Locations */}
            <div className="space-y-2">
              <button 
                onClick={() => setShowLocations(!showLocations)}
                className="flex items-center justify-between w-full text-lg font-medium text-gray-700 hover:text-red-600"
              >
                <span>Locations</span>
                <ChevronDown className={cn('transition-transform', showLocations && 'rotate-180')} size={20} />
              </button>
              <AnimatePresence>
                {showLocations && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden pl-4 flex flex-col space-y-2"
                  >
                    {locations.map((loc) => (
                      <Link
                        key={loc.name}
                        to={loc.href}
                        onClick={() => setIsOpen(false)}
                        className="text-base text-gray-600 hover:text-red-600"
                      >
                        {loc.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {isAdmin && (
              <Link
                to="/admin"
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-2 text-lg font-medium text-red-600"
              >
                <LayoutDashboard size={20} />
                <span>Admin Panel</span>
              </Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
