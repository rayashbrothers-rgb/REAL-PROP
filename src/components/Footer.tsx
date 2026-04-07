import { Link } from 'react-router-dom';
import { Youtube, Phone, Mail, MapPin, MessageCircle, ChevronRight, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const handleLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img 
                src="https://instasize.com/api/image/87e2fdb8828fd9cdfa4566774e9ba73c587ea743872310c777de048c2b9dd4b1.jpeg" 
                alt="REAL PROP Logo" 
                className="h-16 w-16 rounded-full object-cover border-2 border-red-600 shadow-lg mb-2"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Turning Dreams Into Reality. Your trusted property investment partner in Noida, Greater Noida, Ghaziabad & Delhi NCR.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.youtube.com/@RealProp6603" 
                target="_blank" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-all"
              >
                <Youtube size={20} />
              </a>
              <a 
                href="https://www.facebook.com/share/1AoMWkiiLz/" 
                target="_blank" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/real_prop123" 
                target="_blank" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://wa.me/919999882898" 
                target="_blank" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition-all"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Projects', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <button 
                    onClick={() => handleLinkClick(link.toLowerCase())}
                    className="flex items-center space-x-2 hover:text-red-500 transition-colors"
                  >
                    <ChevronRight size={14} />
                    <span>{link}</span>
                  </button>
                </li>
              ))}
              <li>
                <Link to="/admin" className="flex items-center space-x-2 hover:text-red-500 transition-colors">
                  <ChevronRight size={14} />
                  <span>Admin Login</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8">Our Locations</h4>
            <ul className="space-y-4">
              {[
                { name: 'Greater Noida', href: '/greater-noida' },
                { name: 'Noida', href: '/noida' },
                { name: 'Noida Extension', href: '/noida-extension' },
                { name: 'Ghaziabad', href: '/ghaziabad' },
                { name: 'Delhi', href: '/delhi' },
              ].map((loc) => (
                <li key={loc.name}>
                  <Link to={loc.href} className="flex items-center space-x-2 hover:text-red-500 transition-colors">
                    <ChevronRight size={14} />
                    <span>{loc.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <Phone className="text-red-600 shrink-0" size={20} />
                <span>+91 9999882898</span>
              </li>
              <li className="flex items-start space-x-4">
                <MapPin className="text-red-600 shrink-0" size={20} />
                <span>FF 12-A, 1st Floor, Suntwilight Market, Delta 1, Greater Noida, U.P. 201310</span>
              </li>
              <li className="flex items-start space-x-4">
                <Mail className="text-red-600 shrink-0" size={20} />
                <span>info@realprop.online</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8">Best Investment Deals</h4>
            <p className="text-gray-400 mb-6 text-sm">Get the latest property updates and investment opportunities directly in your inbox.</p>
            <div className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-800 border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-red-600 outline-none"
              />
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg text-sm transition-all">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} REAL PROP. All rights reserved. Designed for excellence.</p>
        </div>
      </div>
    </footer>
  );
}
