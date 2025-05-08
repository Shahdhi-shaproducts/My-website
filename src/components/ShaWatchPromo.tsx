import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

const ShaWatchPromo = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check user's motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-black/90"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&q=80&w=2560')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-[980px] mx-auto px-4 min-h-screen flex flex-col items-center justify-center text-center">
        {/* Top Bar with Logo and Time */}
        <div className="absolute top-8 w-full flex justify-between items-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Zap className="w-8 h-8 text-[#0066FF] animate-glow-pulse" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-mono text-xl text-white/80"
          >
            {formattedTime}
          </motion.div>
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-6xl md:text-8xl font-[300] tracking-[0.5px] text-white uppercase">
            SHAWATCH
          </h2>
          <p className="text-2xl md:text-3xl text-[#86868B] font-[300]">
            UURA2
          </p>
          <p className="text-xl md:text-2xl text-white/90 font-[300] mt-4">
            Built for the storm.
          </p>

          {/* CTAs */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={!prefersReducedMotion ? { scale: 1.05 } : {}}
              whileTap={!prefersReducedMotion ? { scale: 0.95 } : {}}
              className="bg-[#0066FF] text-white px-8 py-3 rounded-full font-medium min-w-[140px]"
            >
              Buy
            </motion.button>
            <motion.button
              whileHover={!prefersReducedMotion ? { scale: 1.05 } : {}}
              whileTap={!prefersReducedMotion ? { scale: 0.95 } : {}}
              className="border border-[#0066FF] text-[#0066FF] px-8 py-3 rounded-full font-medium min-w-[140px] hover:bg-[#0066FF] hover:text-white transition-colors duration-300"
            >
              Learn more →
            </motion.button>
          </div>
        </motion.div>

        {/* Lightning Effect (Disabled when reduced motion is preferred) */}
        {!prefersReducedMotion && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF]/0 via-[#0066FF]/5 to-[#0066FF]/0 animate-pulse" />
          </div>
        )}
      </div>
    </section>
  );
};

export default ShaWatchPromo;