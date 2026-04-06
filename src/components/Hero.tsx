import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle, Calendar, ChevronRight, CheckCircle2, Loader2, X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { db, handleFirestoreError, OperationType } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { cn } from '../lib/utils';

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
    <section className="relative min-h-[850px] lg:h-[950px] flex items-center pt-24 pb-20 overflow-hidden bg-black font-sans">
      {/* Background: Dark Luxury Gradient & Depth Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Base Black Background */}
        <div className="absolute inset-0 bg-black" />
        
        {/* Building Silhouette on the right */}
        <div className="absolute right-0 top-0 w-full lg:w-3/4 h-full z-0 opacity-30 pointer-events-none select-none overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
            alt=""
            className="w-full h-full object-cover grayscale brightness-[0.15] contrast-[1.8]"
            referrerPolicy="no-referrer"
          />
          {/* Gradient to fade buildings into black */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/90 to-black" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
        </div>

        {/* The "Sun" - Bright Orange/Yellow Disk behind buildings */}
        <div className="absolute top-[20%] right-[12%] w-[220px] h-[220px] bg-gradient-to-b from-orange-500 to-yellow-500 rounded-full blur-[2px] opacity-60 pointer-events-none" />
        <div className="absolute top-[18%] right-[10%] w-[300px] h-[300px] bg-orange-600/30 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute top-[15%] right-[5%] w-[450px] h-[450px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
        
        {/* Intense Red Glow in bottom right - The "Energy" */}
        <div className="absolute bottom-[-15%] right-[-5%] w-[900px] h-[900px] bg-red-600/25 rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute bottom-[5%] right-[15%] w-[400px] h-[400px] bg-red-500/15 rounded-full blur-[120px] pointer-events-none" />
        
        {/* Subtle Red accent on the left */}
        <div className="absolute top-[30%] -left-[15%] w-[700px] h-[700px] bg-red-900/15 rounded-full blur-[200px] pointer-events-none" />

        {/* Watermark Logo - Centered at the top, curved edges, premium feel */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-[8%] md:top-[6%] left-1/2 -translate-x-1/2 w-[75%] md:w-[28%] h-[25%] md:h-[38%] z-0 opacity-[0.25] md:opacity-[0.25] pointer-events-none select-none rounded-[30px] md:rounded-[50px] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(220,38,38,0.2)]"
        >
          <motion.img
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            src="https://instasize.com/api/image/87e2fdb8828fd9cdfa4566774e9ba73c587ea743872310c777de048c2b9dd4b1.jpeg"
            alt=""
            className="w-full h-full object-contain grayscale brightness-[1.1] contrast-[1.3]"
            referrerPolicy="no-referrer"
          />
          {/* Overlay to blend the logo better */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/30" />
        </motion.div>

        {/* Vignette Effect for Depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.95)_100%)] pointer-events-none" />
        
        {/* Noise/Grain Texture - More visible like the reference */}
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* LEFT SIDE CONTENT */}
          <div className="lg:col-span-7 space-y-8 md:space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-6 md:space-y-8"
            >
              {/* Premium Typography Headline */}
              <div className="space-y-3 md:space-y-4">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center space-x-3"
                >
                  <div className="h-[1px] w-12 bg-red-600" />
                  <span className="text-red-500 font-bold text-xs uppercase tracking-[0.4em]">Luxury Real Estate</span>
                </motion.div>
                
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight">
                  Premium Commercial <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-yellow-500">
                    Property in Delhi NCR
                  </span>
                </h1>
              </div>

              {/* Subheading */}
              <p className="text-lg md:text-2xl text-gray-300 font-medium max-w-2xl leading-relaxed">
                Retail Shops <span className="text-red-600/50 mx-1 md:mx-2">|</span> 
                Office Spaces <span className="text-red-600/50 mx-1 md:mx-2">|</span> 
                Studio Units <span className="text-red-600/50 mx-1 md:mx-2">|</span> 
                High ROI Investment
              </p>

              {/* Trust Points with Premium Styling */}
              <div className="flex flex-wrap gap-x-12 gap-y-4 pt-4">
                {[
                  { label: "High Rental Income", color: "bg-red-600" },
                  { label: "Prime Locations", color: "bg-red-600" },
                  { label: "Verified Projects", color: "bg-red-600" }
                ].map((point, i) => (
                  <motion.div 
                    key={point.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="flex items-center space-x-3"
                  >
                    <div className={cn("w-2 h-2 rounded-full", point.color)} />
                    <span className="text-sm font-bold text-gray-200 uppercase tracking-widest">{point.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-6 pt-6">
                <button
                  onClick={scrollToLeadForm}
                  className="group relative px-12 py-5 bg-red-600 hover:bg-red-700 text-white rounded-full font-bold text-sm transition-all overflow-hidden shadow-[0_0_40px_rgba(220,38,38,0.4)]"
                >
                  <span className="relative z-10 flex items-center space-x-3 uppercase tracking-[0.2em]">
                    <span>Get Details</span>
                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </button>

                <button
                  onClick={handleCall}
                  className="px-12 py-5 bg-transparent border border-white/30 hover:border-white text-white rounded-full font-bold text-sm transition-all uppercase tracking-[0.2em] backdrop-blur-md"
                >
                  Book Site Visit
                </button>

                <button
                  onClick={handleWhatsApp}
                  className="px-10 py-5 bg-transparent border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/10 rounded-full font-bold text-sm transition-all flex items-center space-x-3 uppercase tracking-[0.2em]"
                >
                  <MessageCircle size={22} />
                  <span>WhatsApp Now</span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: PREMIUM GLASSMORPHISM FORM */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-full max-w-[440px] relative group"
            >
              {/* Intense Glow behind form */}
              <div className="absolute -inset-10 bg-red-600/10 rounded-[60px] blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
              
              <div className="relative bg-black/40 backdrop-blur-[20px] p-12 rounded-[40px] border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.5)] overflow-hidden">
                {/* Subtle Top Light Edge */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                
                <div className="space-y-10">
                  <div className="text-center space-y-3">
                    <h3 className="text-3xl font-bold text-white tracking-tight">Inquire Now</h3>
                    <p className="text-gray-400 text-sm tracking-wide">Get exclusive pricing & floor plans</p>
                  </div>

                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="py-16 text-center space-y-6"
                      >
                        <div className="w-24 h-24 bg-red-600/20 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-500/30">
                          <CheckCircle2 size={48} />
                        </div>
                        <div className="space-y-3">
                          <h4 className="text-2xl font-bold text-white">Thank You!</h4>
                          <p className="text-gray-400">Our consultant will contact you shortly.</p>
                        </div>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                        <div className="space-y-6">
                          <div className="space-y-3">
                            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.3em] ml-1">Full Name</label>
                            <input
                              {...register('name', { required: 'Name is required' })}
                              placeholder="e.g. John Doe"
                              className="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/10 focus:border-red-600/50 focus:bg-white/[0.08] outline-none text-white transition-all placeholder:text-gray-700 text-base"
                            />
                          </div>
                          <div className="space-y-3">
                            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.3em] ml-1">Phone Number</label>
                            <input
                              {...register('phone', { required: 'Phone is required' })}
                              placeholder="+91 00000 00000"
                              className="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/10 focus:border-red-600/50 focus:bg-white/[0.08] outline-none text-white transition-all placeholder:text-gray-700 text-base"
                            />
                          </div>
                        </div>

                        <button
                          disabled={isSubmitting}
                          className="w-full relative group/btn bg-white text-black hover:bg-red-600 hover:text-white font-bold py-6 rounded-2xl transition-all duration-500 flex items-center justify-center space-x-4 disabled:opacity-70 overflow-hidden"
                        >
                          {isSubmitting ? (
                            <Loader2 className="animate-spin" size={24} />
                          ) : (
                            <>
                              <span className="relative z-10 uppercase tracking-[0.2em] text-xs">Request Callback</span>
                              <ChevronRight size={20} className="relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                            </>
                          )}
                        </button>
                        
                        <p className="text-[10px] text-center text-gray-600 uppercase tracking-[0.3em]">
                          Secure & Confidential Inquiry
                        </p>
                      </form>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
