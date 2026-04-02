import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';
import { generateHeroImage } from '../services/imageService';

const LOGO_URL = "https://instasize.com/api/image/87e2fdb8828fd9cdfa4566774e9ba73c587ea743872310c777de048c2b9dd4b1.jpeg";

export default function Hero() {
  const [bgImage, setBgImage] = useState("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop");

  useEffect(() => {
    const fetchAndGenerate = async () => {
      const cached = localStorage.getItem('hero_bg_image');
      if (cached) {
        setBgImage(cached);
        return;
      }

      try {
        const response = await fetch(LOGO_URL);
        const blob = await response.blob();
        const reader = new FileReader();
        reader.onloadend = async () => {
          const base64 = (reader.result as string).split(',')[1];
          const generated = await generateHeroImage(base64);
          if (generated) {
            setBgImage(generated);
            localStorage.setItem('hero_bg_image', generated);
          }
        };
        reader.readAsDataURL(blob);
      } catch (error) {
        console.error("Error generating hero image:", error);
      }
    };
    
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;
    if (apiKey) {
      fetchAndGenerate();
    }
  }, []);

  const handleWhatsApp = () => {
    window.open(`https://wa.me/919999882898`, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:9999882898';
  };

  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Modern commercial buildings"
          className="w-full h-full object-cover brightness-50"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
              Commercial Property <br />
              <span className="text-red-500 italic">in Delhi NCR</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light max-w-2xl">
              Expert Real Estate Consultant for Commercial Property Investment in Delhi NCR. Buy property and office space for sale with high rental yields.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCall}
                className="flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg shadow-red-600/30"
              >
                <Phone size={20} />
                <span>Call Now</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsApp}
                className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg shadow-green-600/30"
              >
                <MessageCircle size={20} />
                <span>WhatsApp Now</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white opacity-50 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
