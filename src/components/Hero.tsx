import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle, Calendar, ChevronRight, CheckCircle2, Loader2, X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { db, handleFirestoreError, OperationType } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

interface HeroLeadFormData {
  name: string;
  phone: string;
}

export default function Hero() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<HeroLeadFormData>();

  const onSubmit = async (data: HeroLeadFormData) => {
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'leads'), {
        ...data,
        source: 'Hero Banner Form',
        createdAt: serverTimestamp(),
      });
      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'leads');
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section className="relative min-h-[500px] lg:h-[580px] flex items-center pt-24 pb-10 overflow-hidden bg-gray-950">
      {/* Background Image with Premium Night Skyline */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt="Premium commercial building at night"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        {/* Gradient Overlay (Black to Transparent) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-transparent z-10" />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT SIDE CONTENT */}
          <div className="lg:col-span-7 space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-5"
            >
              {/* Small Top Tag */}
              <div className="inline-block bg-yellow-500/10 border border-yellow-500/30 px-3 py-1 rounded text-yellow-500 font-bold text-[10px] md:text-xs uppercase tracking-[0.2em]">
                High ROI Commercial Investment
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
                Premium Commercial <br />
                <span className="text-red-600">Property in <span className="text-yellow-500">Delhi NCR</span></span>
              </h1>

              {/* Subtext */}
              <p className="text-base md:text-lg text-gray-300 font-medium tracking-wide">
                Retail Shops | Office Space | Studio Units | Residential Flats
              </p>

              {/* Features Row */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-white/90 text-xs md:text-sm font-bold">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 size={16} className="text-red-600" />
                  <span>High Rental Income</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 size={16} className="text-red-600" />
                  <span>Prime Locations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 size={16} className="text-red-600" />
                  <span>Verified Projects</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={scrollToLeadForm}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded font-black text-sm transition-all shadow-lg shadow-red-600/30 uppercase tracking-wider"
                >
                  Get Details
                </button>
                <button
                  onClick={handleCall}
                  className="bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-3.5 rounded font-black text-sm transition-all uppercase tracking-wider"
                >
                  Book Site Visit
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 rounded font-black text-sm transition-all shadow-lg shadow-green-600/30 flex items-center space-x-2 uppercase tracking-wider"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp Now</span>
                </button>
              </div>

              {/* Location Strip */}
              <div className="text-[10px] md:text-xs text-gray-500 font-bold pt-4 uppercase tracking-[0.3em] border-t border-white/10 w-full">
                Greater Noida | Noida | Ghaziabad | Delhi
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center lg:text-right space-y-1"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white flex items-center justify-center lg:justify-end space-x-3">
                <span className="text-red-600">📞</span>
                <span className="tracking-tighter">99998 2898</span>
              </div>
              <p className="text-yellow-500 font-black text-xs uppercase tracking-[0.4em]">Real Estate Consultant</p>
              
              <button 
                onClick={handleWhatsApp}
                className="inline-flex items-center space-x-2 text-green-500 font-black text-sm hover:text-green-400 transition-colors uppercase tracking-widest"
              >
                <MessageCircle size={20} />
                <span>Chat on WhatsApp</span>
              </button>
            </motion.div>

            {/* Small 2-field form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full max-w-[340px] bg-white/5 backdrop-blur-2xl p-6 rounded-2xl border border-white/10 shadow-2xl relative"
            >
              <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="py-6 text-center"
                  >
                    <div className="w-12 h-12 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle2 size={24} />
                    </div>
                    <p className="text-white font-black text-sm uppercase tracking-widest">Request Sent!</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="space-y-3">
                      <input
                        {...register('name', { required: 'Name is required' })}
                        placeholder="Your Name"
                        className="w-full px-4 py-3 rounded bg-white/5 border border-white/10 focus:border-red-500 outline-none text-white transition-all placeholder:text-gray-600 text-sm font-bold"
                      />
                      <input
                        {...register('phone', { required: 'Phone is required' })}
                        placeholder="Phone Number"
                        className="w-full px-4 py-3 rounded bg-white/5 border border-white/10 focus:border-red-500 outline-none text-white transition-all placeholder:text-gray-600 text-sm font-bold"
                      />
                    </div>
                    <button
                      disabled={isSubmitting}
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 rounded transition-all flex items-center justify-center space-x-2 disabled:opacity-70 text-xs uppercase tracking-[0.2em]"
                    >
                      {isSubmitting ? (
                        <Loader2 className="animate-spin" size={18} />
                      ) : (
                        <>
                          <span>Get Details</span>
                          <ChevronRight size={18} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
