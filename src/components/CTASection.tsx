import { motion } from 'motion/react';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';

export default function CTASection() {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/919999882898`, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:9999882898';
  };

  const scrollToLeadForm = () => {
    document.getElementById('lead-form-hero')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight"
          >
            Looking to Invest in <span className="text-red-500">High-Return</span> Commercial Property?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 mb-12"
          >
            Get exclusive access to the best retail shops and office spaces in Delhi NCR. Our experts are ready to help you find the perfect investment.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <button 
              onClick={scrollToLeadForm}
              className="bg-red-600 text-white hover:bg-red-700 px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center space-x-3 transition-all shadow-xl shadow-red-600/20"
            >
              <ArrowRight size={24} />
              <span>Get Details</span>
            </button>
            <button 
              onClick={handleCall}
              className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center space-x-3 transition-all shadow-xl shadow-white/10"
            >
              <Phone size={24} />
              <span>Book Site Visit</span>
            </button>
            <button 
              onClick={handleWhatsApp}
              className="bg-green-600 text-white hover:bg-green-700 px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center space-x-3 transition-all shadow-xl shadow-green-600/20"
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
