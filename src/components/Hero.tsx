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
        source: 'Hero Form',
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
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Premium Night Skyline */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt="Premium commercial building at night"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Dramatic Left-to-Right Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20 z-10" />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        {/* Centered Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-12 md:mb-16"
        >
          <div className="bg-white/95 p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-md border border-white/20">
            <img 
              src="https://instasize.com/api/image/87e2fdb8828fd9cdfa4566774e9ba73c587ea743872310c777de048c2b9dd4b1.jpeg" 
              alt="REAL PROP Logo" 
              className="h-20 md:h-28 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          {/* Left Content: Dominant Headline & CTAs */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-10"
            >
              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center space-x-2 bg-red-600/20 border border-red-600/30 px-4 py-2 rounded-full text-red-500 font-black text-xs uppercase tracking-[0.2em]"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                  <span>Limited Inventory Available</span>
                </motion.div>
                
                <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black text-white leading-[0.8] tracking-tighter uppercase">
                  COMMERCIAL <br />
                  <span className="text-red-600 drop-shadow-[0_0_30px_rgba(220,38,38,0.7)]">INVESTMENT</span> <br />
                  <span className="text-white/90">DELHI NCR</span>
                </h1>
                <p className="text-xl md:text-3xl text-gray-300 font-bold tracking-wide border-l-8 border-red-600 pl-8 max-w-2xl">
                  Retail Shops | Office Space | Studio Units | Residential Flats
                </p>
              </div>

              {/* Highlight Points */}
              <div className="flex flex-wrap gap-x-12 gap-y-6 pt-4">
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
                    className="flex items-center space-x-4 text-white/95"
                  >
                    <CheckCircle2 size={32} className="text-red-600" />
                    <span className="font-extrabold tracking-wide text-xl">{point}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-10 pt-10">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: '#dc2626', boxShadow: '0 0 50px rgba(220,38,38,0.8)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToLeadForm}
                  className="bg-red-600 text-white px-16 py-8 rounded-2xl font-black text-2xl transition-all shadow-[0_30px_60px_rgba(220,38,38,0.6)] flex items-center space-x-4 group"
                >
                  <span>GET DETAILS</span>
                  <ChevronRight size={32} className="group-hover:translate-x-2 transition-transform" />
                </motion.button>
                
                <div className="flex flex-wrap gap-6">
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCall}
                    className="bg-white/10 text-white backdrop-blur-md border border-white/20 px-12 py-8 rounded-2xl font-black text-xl transition-all flex items-center space-x-3"
                  >
                    <Calendar size={28} />
                    <span>Book Visit</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: '#16a34a', boxShadow: '0 0 50px rgba(22,163,74,0.6)' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleWhatsApp}
                    className="bg-green-600 text-white px-12 py-8 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-green-600/50 flex items-center space-x-3 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                    <MessageCircle size={28} />
                    <span>WhatsApp</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content: Stand-out Lead Form */}
          <div className="lg:col-span-5" id="lead-form-hero">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white p-12 rounded-[3.5rem] shadow-[0_50px_150px_rgba(0,0,0,0.7)] border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-5 bg-red-600" />
              
              <div className="mb-10">
                <h3 className="text-4xl font-black text-gray-900 mb-3 tracking-tight">Get Project Details</h3>
                <p className="text-gray-500 font-bold text-lg">Receive exclusive pricing and floor plans instantly.</p>
              </div>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="py-24 flex flex-col items-center text-center"
                  >
                    <div className="w-28 h-28 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8">
                      <CheckCircle2 size={56} />
                    </div>
                    <h4 className="text-3xl font-black text-gray-900 mb-3">Request Sent!</h4>
                    <p className="text-gray-600 text-xl font-medium">Our expert will contact you shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    <div className="space-y-3">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-[0.4em]">Full Name</label>
                      <input
                        {...register('name', { required: 'Name is required' })}
                        placeholder="Enter your name"
                        className="w-full px-8 py-6 rounded-2xl border-4 border-gray-50 focus:border-red-500 focus:ring-0 outline-none transition-all text-xl font-bold placeholder:text-gray-300 bg-gray-50/50"
                      />
                      {errors.name && <p className="text-sm text-red-500 font-black mt-2">{errors.name.message}</p>}
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-[0.4em]">Phone Number</label>
                      <input
                        {...register('phone', { required: 'Phone is required' })}
                        placeholder="Enter your phone"
                        className="w-full px-8 py-6 rounded-2xl border-4 border-gray-50 focus:border-red-500 focus:ring-0 outline-none transition-all text-xl font-bold placeholder:text-gray-300 bg-gray-50/50"
                      />
                      {errors.phone && <p className="text-sm text-red-500 font-black mt-2">{errors.phone.message}</p>}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSubmitting}
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-7 rounded-2xl shadow-[0_25px_50px_rgba(220,38,38,0.4)] flex items-center justify-center space-x-4 disabled:opacity-70 transition-all mt-6 text-2xl"
                    >
                      {isSubmitting ? (
                        <Loader2 className="animate-spin" size={32} />
                      ) : (
                        <>
                          <span>GET DETAILS NOW</span>
                          <ChevronRight size={32} />
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </AnimatePresence>

              <div className="mt-12 pt-10 border-t border-gray-100 flex items-center justify-center space-x-12 text-gray-400">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 size={24} className="text-green-500" />
                  <span className="text-[13px] font-black uppercase tracking-[0.3em]">Verified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 size={24} className="text-green-500" />
                  <span className="text-[13px] font-black uppercase tracking-[0.3em]">Secure</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 hidden md:block z-20"
      >
        <div className="w-8 h-12 border-4 border-white/20 rounded-full flex justify-center p-2">
          <div className="w-1.5 h-3 bg-white/30 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
