import { motion } from 'motion/react';
import { Phone, MessageCircle, Calendar, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/919999882898`, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:9999882898';
  };

  const scrollToLeadForm = () => {
    const leadSection = document.getElementById('lead-form');
    if (leadSection) {
      leadSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Premium Night Skyline */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop"
          alt="Premium commercial building at night"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Dark Gradient Overlay for Luxury Feel and Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10" />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        {/* Centered Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white/90 p-4 rounded-2xl shadow-2xl backdrop-blur-sm">
            <img 
              src="https://instasize.com/api/image/87e2fdb8828fd9cdfa4566774e9ba73c587ea743872310c777de048c2b9dd4b1.jpeg" 
              alt="REAL PROP Logo" 
              className="h-20 md:h-28 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight">
              Commercial Property <br />
              <span className="text-red-600">Investment</span> <br />
              <span className="text-white/90">in Delhi NCR</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-300 font-medium tracking-wide">
              Retail Shops | Office Space | Studio Units | Residential Flats
            </p>

            {/* Highlight Points */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              {[
                "High Rental Income",
                "Prime Locations",
                "Verified Projects"
              ].map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center space-x-2 text-white/90"
                >
                  <CheckCircle2 size={20} className="text-red-600" />
                  <span className="font-semibold tracking-wide">{point}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-5 pt-8">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#dc2626' }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToLeadForm}
                className="bg-red-600 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-2xl shadow-red-600/40 flex items-center space-x-3"
              >
                <span>Get Details</span>
                <ChevronRight size={22} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCall}
                className="bg-white/10 text-white backdrop-blur-md border border-white/20 px-10 py-5 rounded-xl font-bold text-lg transition-all flex items-center space-x-3"
              >
                <Calendar size={22} />
                <span>Book Site Visit</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#16a34a' }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsApp}
                className="bg-green-600 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-2xl shadow-green-600/40 flex items-center space-x-3"
              >
                <MessageCircle size={22} />
                <span>WhatsApp Now</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 hidden md:block z-20"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1.5">
          <div className="w-1 h-2 bg-white/30 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
