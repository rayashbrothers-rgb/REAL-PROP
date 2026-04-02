import { motion } from 'motion/react';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';

export default function CTASection() {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/919999882898`, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:9999882898';
  };

  return (
    <section className="py-20 bg-red-600 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight"
          >
            Ready to Invest in the Best Commercial Property in Delhi NCR?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-red-100 mb-12"
          >
            Get expert guidance from REAL PROP, your trusted real estate consultant. Call or WhatsApp us today for exclusive deals on office spaces and retail shops.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <button 
              onClick={handleCall}
              className="bg-white text-red-600 hover:bg-gray-100 px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center space-x-3 transition-all shadow-xl shadow-red-900/20"
            >
              <Phone size={24} />
              <span>Call +91 99998 82898</span>
            </button>
            <button 
              onClick={handleWhatsApp}
              className="bg-green-500 text-white hover:bg-green-600 px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center space-x-3 transition-all shadow-xl shadow-green-900/20"
            >
              <MessageCircle size={24} />
              <span>WhatsApp Now</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
