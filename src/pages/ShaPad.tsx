import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, Search, ShoppingBag, ChevronRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import { cn } from '../lib/utils';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    name: 'ShaPad Pro 13"',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=2560',
    isNew: true,
    price: 'From $1099',
    features: ['13" Liquid Retina XDR', 'T18 Pro chip', 'All-day battery']
  },
  {
    name: 'ShaPad Pro 11"',
    image: 'https://images.unsplash.com/photo-1557825835-70d97c4aa567?auto=format&fit=crop&q=80&w=2560',
    price: 'From $899',
    features: ['11" Liquid Retina', 'T18 Pro chip', 'All-day battery']
  },
  {
    name: 'ShaPad Air',
    image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&q=80&w=2560',
    price: 'From $599',
    features: ['10.9" Liquid Retina', 'T17 chip', 'All-day battery']
  },
  {
    name: 'ShaPad',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=2560',
    price: 'From $449',
    features: ['10.2" Retina', 'T16 chip', 'All-day battery']
  },
  {
    name: 'ShaPad Mini',
    image: 'https://images.unsplash.com/photo-1557825835-70d97c4aa567?auto=format&fit=crop&q=80&w=2560',
    price: 'From $499',
    features: ['8.3" Liquid Retina', 'T17 chip', 'All-day battery']
  }
];

const navItems = [
  { name: 'Overview', href: '#overview' },
  { name: 'Why ShaPad', href: '#why-shapad' },
  { name: 'Tech Specs', href: '#tech-specs' },
  { name: 'Compare', href: '#compare' },
  { name: 'Buy', href: '#buy' }
];

const ShaPad = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('overview');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    // Initialize smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // GSAP Animations
    if (!prefersReducedMotion) {
      // Sticky Navigation
      ScrollTrigger.create({
        trigger: navRef.current,
        start: 'top top',
        endTrigger: 'body',
        end: 'bottom top',
        pin: true,
        pinSpacing: false
      });
    }

    return () => {
      lenis.destroy();
    };
  }, [prefersReducedMotion]);

  return (
    <main ref={containerRef} className="bg-white">
      {/* Sticky Navigation */}
      <div
        ref={navRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isNavVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="h-12 bg-white/80 backdrop-blur-[12px] border-b border-[#D2D2D7]">
          <div className="container mx-auto px-4 h-full flex items-center justify-between">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-[#1D1D1F]"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm transition-colors duration-300",
                    activeSection === item.name.toLowerCase()
                      ? "text-[#1D1D1F]"
                      : "text-[#86868B] hover:text-[#1D1D1F]"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="text-[#1D1D1F] hover:scale-110 transition-transform duration-300"
              >
                <Search className="w-5 h-5" />
              </button>
              <Link
                to="/bag"
                className="text-[#1D1D1F] hover:scale-110 transition-transform duration-300"
              >
                <ShoppingBag className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen pt-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[96px] font-[300] tracking-[-0.016em] text-center mb-8"
          >
            SHAPAD PRO
          </motion.h1>

          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-4xl">
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="w-full rounded-2xl shadow-2xl"
              >
                <source
                  src="https://www.apple.com/assets-www/en_WW/ipad/welcome/x1fba949bf_large.mp4"
                  type="video/mp4"
                />
              </video>
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24 bg-[#F5F5F7]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-16">
            Which ShaPad is right for you?
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={!prefersReducedMotion ? {
                  scale: 1.03,
                  boxShadow: '0 12px 32px rgba(0,0,0,0.08)'
                } : {}}
                className="bg-white rounded-2xl p-6 transition-all duration-300 flex flex-col"
              >
                {product.isNew && (
                  <motion.div
                    animate={!prefersReducedMotion ? {
                      opacity: [0.86, 1],
                      scale: [1, 1.05],
                    } : {}}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    className="mb-4"
                  >
                    <span className="inline-block bg-primary text-white text-xs font-medium px-2 py-1 rounded-full">
                      New
                    </span>
                  </motion.div>
                )}

                <div className="aspect-square mb-4 overflow-hidden rounded-xl">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-primary mb-4">{product.price}</p>

                <ul className="space-y-2 mb-6 flex-grow">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-[#86868B] flex items-center gap-2">
                      <Zap className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-full text-sm font-medium mt-auto"
                >
                  Buy
                </motion.button>
              </motion.div>
            ))}

            {/* Compare Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl p-6 flex flex-col justify-center items-center"
            >
              <Link
                to="/compare"
                className="text-primary hover:text-primary-light flex items-center gap-2 group"
              >
                <span className="text-lg font-semibold">Compare</span>
                <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search Overlay */}
      {isSearchOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-white/80 backdrop-blur-[12px]"
        >
          <div className="container max-w-[980px] mx-auto px-4 pt-[44px]">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#86868b]" />
              <input
                type="text"
                placeholder="Search shavolts.com"
                className="w-full h-[44px] pl-12 pr-4 bg-[#1d1d1f]/5 rounded-lg text-[17px] text-[#1d1d1f] placeholder-[#86868b] focus:outline-none"
                autoFocus
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#86868b] hover:text-[#1d1d1f] transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-white"
        >
          <div className="h-full flex flex-col">
            <div className="h-12 px-4 flex items-center justify-between border-b border-[#D2D2D7]">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#1d1d1f] text-[17px]"
              >
                Close
              </button>
            </div>
            <div className="flex-1 overflow-auto py-4">
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="block px-4 py-3 text-[17px] text-[#1d1d1f] hover:bg-[#F5F5F7] transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </main>
  );
};

export default ShaPad;