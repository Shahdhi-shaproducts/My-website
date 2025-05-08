import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Zap, Battery, Camera, Cpu, Shield, Recycle, ChevronRight, ChevronDown, Smartphone } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

const colors = [
  { name: 'Electric Blue', hex: '#0066FF', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=2560' },
  { name: 'Storm Gray', hex: '#6E6E73', image: 'https://images.unsplash.com/photo-1581993192008-63e896f4f744?auto=format&fit=crop&q=80&w=2560' },
  { name: 'Matte Black', hex: '#1D1D1F', image: 'https://images.unsplash.com/photo-1581993192008-63e896f4f744?auto=format&fit=crop&q=80&w=2560' }
];

const specs = [
  { icon: Cpu, title: 'A17 Thunder Chip', description: '40% faster than previous gen' },
  { icon: Camera, title: '48MP Pro Camera', description: 'Revolutionary lens system' },
  { icon: Battery, title: 'All-Day Battery', description: '27 hours video playback' }
];

const storageOptions = [
  { size: '128GB', price: 999 },
  { size: '256GB', price: 1099 },
  { size: '512GB', price: 1299 },
  { size: '1TB', price: 1499 }
];

const lineup = [
  {
    name: 'ShaPhone 16 Pro',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800',
    isNew: true,
    price: 'From $999',
    features: ['6.7" Super Retina XDR display', 'A17 Thunder chip', 'Pro camera system']
  },
  {
    name: 'ShaPhone 16',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&q=80&w=800',
    isNew: true,
    price: 'From $799',
    features: ['6.1" Retina XDR display', 'A17 chip', 'Advanced dual camera']
  },
  {
    name: 'ShaPhone 16 Lite',
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=800',
    isNew: true,
    price: 'From $699',
    features: ['5.9" Retina display', 'A16 chip', 'Dual camera system']
  }
];

const ShaPhone = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedStorage, setSelectedStorage] = useState(storageOptions[0]);
  const [shaCare, setShaCare] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const lineupRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  const phoneRotation = useTransform(scrollYProgress, [0, 0.2], [0, 5]);
  const phoneScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const phoneY = useTransform(scrollYProgress, [0, 0.2], [0, 50]);

  return (
    <main ref={containerRef} className="bg-black text-white min-h-screen">
      {/* Hero Section with Sticky Specs */}
      <div className="relative min-h-screen">
        <div className="container mx-auto px-4 pt-32 pb-16 flex gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <motion.div
              style={{
                rotateY: phoneRotation,
                scale: phoneScale,
                y: phoneY
              }}
              className="relative"
            >
              <motion.img
                src={selectedColor.image}
                alt="ShaPhone"
                className="w-full rounded-3xl shadow-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>

            {/* Color Selection */}
            <div className="mt-12 flex justify-center gap-6">
              {colors.map((color) => (
                <motion.button
                  key={color.name}
                  onClick={() => setSelectedColor(color)}
                  className={cn(
                    "group relative px-6 py-3 rounded-full",
                    selectedColor.name === color.name && "bg-primary/10"
                  )}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="relative z-10 text-sm font-medium">{color.name}</span>
                  {selectedColor.name === color.name && (
                    <motion.div
                      layoutId="colorSelection"
                      className="absolute inset-0 rounded-full bg-primary/10"
                    />
                  )}
                  <motion.div
                    className="absolute inset-0 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100"
                    initial={false}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Sticky Specs Panel */}
          <div className="w-80 sticky top-32 space-y-6 pt-12">
            {specs.map((spec, index) => (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/5 rounded-2xl p-6 backdrop-blur-lg"
              >
                <spec.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{spec.title}</h3>
                <p className="text-gray-400 text-sm">{spec.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Customization Module */}
      <section className="py-16 bg-gradient-to-b from-black to-[#1D1D1F]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-12">
            Make It Yours
          </h2>

          {/* Storage Selection */}
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-xl mb-6">Choose Your Storage</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {storageOptions.map((option) => (
                <motion.button
                  key={option.size}
                  onClick={() => setSelectedStorage(option)}
                  className={cn(
                    "relative p-4 rounded-xl border-2 transition-colors",
                    selectedStorage.size === option.size
                      ? "border-primary bg-primary/10"
                      : "border-gray-800 hover:border-primary/50"
                  )}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <p className="font-semibold">{option.size}</p>
                  <p className="text-sm text-gray-400">${option.price}</p>
                  {selectedStorage.size === option.size && (
                    <Zap className="absolute top-2 right-2 w-4 h-4 text-primary animate-glow-pulse" />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* ShaCare+ Selection */}
          <div className="max-w-2xl mx-auto">
            <motion.button
              onClick={() => setShaCare(!shaCare)}
              className={cn(
                "w-full p-6 rounded-xl border-2 transition-colors text-left",
                shaCare ? "border-primary bg-primary/10" : "border-gray-800"
              )}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-4">
                <Shield className={cn(
                  "w-8 h-8 transition-colors",
                  shaCare ? "text-primary" : "text-gray-400"
                )} />
                <div>
                  <h3 className="text-xl font-semibold">ShaCare+</h3>
                  <p className="text-sm text-gray-400">Complete protection for your ShaPhone</p>
                </div>
              </div>
            </motion.button>
          </div>
        </div>
      </section>

      {/* Explore the Lineup Section */}
      <section 
        ref={lineupRef}
        className="py-24 bg-[#FBFBFD]"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[32px] text-[#1d1d1f] text-center font-[300] tracking-[-0.01em] uppercase mb-16"
          >
            Explore the Lineup
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {lineup.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1,
                  transition: { 
                    duration: 0.5,
                    delay: index * 0.1 
                  }
                }}
                whileHover={!prefersReducedMotion ? { 
                  scale: 1.03,
                  transition: { duration: 0.3 }
                } : {}}
                viewport={{ once: true }}
                className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-[0_8px_24px_rgba(0,102,255,0.1)] transition-shadow duration-300"
              >
                {product.isNew && (
                  <div className="absolute top-4 right-4">
                    <motion.span
                      animate={!prefersReducedMotion ? {
                        opacity: [0.8, 1],
                        scale: [1, 1.05],
                      } : {}}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                      className="inline-block bg-[#0066FF] text-white text-sm font-medium px-3 py-1 rounded-full"
                    >
                      New
                    </motion.span>
                  </div>
                )}

                <div className="aspect-square mb-6 overflow-hidden rounded-xl bg-[#F5F5F7] relative">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    style={{
                      transform: !prefersReducedMotion ? "perspective(1000px)" : undefined
                    }}
                    whileHover={!prefersReducedMotion ? {
                      rotateX: 2,
                      rotateY: 2,
                      transition: { duration: 0.3 }
                    } : {}}
                  />
                </div>

                <h3 className="text-[24px] font-[500] text-[#1d1d1f] mb-2">
                  {product.name}
                </h3>
                <p className="text-[#86868b] mb-4">{product.price}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-[#1d1d1f]">
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/${product.name.toLowerCase().replace(/\s+/g, '')}`}
                  className="inline-block text-[#0066FF] hover:underline"
                >
                  Learn more →
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              to="/compare"
              className="inline-flex items-center text-[#0066FF] hover:text-[#0066FF]/80 transition-colors group"
            >
              <span className="relative">
                Compare all models
                <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#0066FF] group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out" />
              </span>
              <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SHA Intelligence Section */}
      <section className="py-24 bg-black text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[32px] text-center font-[300] tracking-[0.5px] uppercase mb-16"
          >
            SHA Intelligence
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* ShaPhone 16 Pro Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#1D1D1F] rounded-2xl p-8 transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(0,102,255,0.1)]"
            >
              <h3 className="text-2xl font-semibold mb-6">ShaPhone 16 Pro</h3>
              
              {/* Chipset */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Cpu className="w-6 h-6 text-[#0066FF]" />
                  <h4 className="text-lg font-medium">T18 Pro</h4>
                </div>
                <motion.p 
                  className="text-[14px] text-[#86868B]"
                  initial={{ opacity: 0.6 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  T18 Pro chip with{' '}
                  <span className="text-[#0066FF]">6-core GPU</span>
                </motion.p>
              </div>

              {/* Camera System */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Camera className="w-6 h-6 text-[#0066FF]" />
                  <h4 className="text-lg font-medium">Pro Camera System</h4>
                </div>
                <ul className="space-y-3">
                  {['48MP ThunderFusion', '5x Telephoto', '48MP Ultra Wide'].map((feature, index) => (
                    <motion.li
                      key={feature}
                      className="text-[14px] text-[#86868B] group relative"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="relative">
                        {feature}
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#0066FF] group-hover:w-full transition-all duration-300" />
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* ShaPhone 16 Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#1D1D1F] rounded-2xl p-8 transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(0,102,255,0.1)]"
            >
              <h3 className="text-2xl font-semibold mb-6">ShaPhone 16</h3>
              
              {/* Chipset */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Cpu className="w-6 h-6 text-[#0066FF]" />
                  <h4 className="text-lg font-medium">T18</h4>
                </div>
                <p className="text-[14px] text-[#86868B]">
                  T18 chip with 5-core GPU
                </p>
              </div>

              {/* Camera System */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Camera className="w-6 h-6 text-[#0066FF]" />
                  <h4 className="text-lg font-medium">Advanced Dual Camera</h4>
                </div>
                <ul className="space-y-3">
                  {['48MP ThunderFusion', '2x Telephoto', '12MP Ultra Wide'].map((feature, index) => (
                    <motion.li
                      key={feature}
                      className="text-[14px] text-[#86868B] group relative"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="relative">
                        {feature}
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#0066FF] group-hover:w-full transition-all duration-300" />
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* ShaPhone 16 Lite Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#1D1D1F] rounded-2xl p-8 transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(0,102,255,0.1)]"
            >
              <h3 className="text-2xl font-semibold mb-6">ShaPhone 16 Lite</h3>
              
              {/* Chipset */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Cpu className="w-6 h-6 text-[#0066FF]" />
                  <h4 className="text-lg font-medium">T18</h4>
                </div>
                <p className="text-[14px] text-[#86868B]">
                  T18 chip with 4-core GPU
                </p>
              </div>

              {/* Camera System */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Camera className="w-6 h-6 text-[#0066FF]" />
                  <h4 className="text-lg font-medium">2-in-1 Camera System</h4>
                </div>
                <ul className="space-y-3">
                  {['48MP ThunderFusion', '2x Telephoto'].map((feature, index) => (
                    <motion.li
                      key={feature}
                      className="text-[14px] text-[#86868B] group relative"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="relative">
                        {feature}
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#0066FF] group-hover:w-full transition-all duration-300" />
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Mobile Accordion */}
          <div className="md:hidden mt-8">
            <motion.button
              onClick={() => setActiveAccordion(activeAccordion === 'specs' ? null : 'specs')}
              className="w-full p-6 rounded-xl bg-[#1D1D1F] flex items-center justify-between"
              whileHover={{ backgroundColor: 'rgba(29, 29, 31, 0.8)' }}
            >
              <span className="text-lg font-medium">View Full Specifications</span>
              <ChevronDown
                className={cn(
                  "w-6 h-6 transition-transform",
                  activeAccordion === 'specs' && "rotate-180"
                )}
              />
            </motion.button>
            <AnimatePresence>
              {activeAccordion === 'specs' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  {/* Mobile specs content here */}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Why ShaVolts Accordion */}
      <section className="py-16 bg-[#1D1D1F]">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-8">
            Why ShaVolts
          </h2>

          {/* Sustainability Section */}
          <motion.div
            className="mb-4"
            initial={false}
          >
            <motion.button
              onClick={() => setActiveAccordion(activeAccordion === 'sustainability' ? null : 'sustainability')}
              className="w-full p-6 rounded-t-xl bg-white/5 flex items-center justify-between"
              whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            >
              <div className="flex items-center gap-4">
                <Recycle className="w-6 h-6 text-primary" />
                <span className="text-xl font-semibold">Sustainability</span>
              </div>
              <ChevronRight
                className={cn(
                  "w-6 h-6 transition-transform",
                  activeAccordion === 'sustainability' && "rotate-90"
                )}
              />
            </motion.button>
            <AnimatePresence>
              {activeAccordion === 'sustainability' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden bg-white/5"
                >
                  <div className="p-6">
                    <p className="text-gray-400">
                      100% recycled materials. Zero waste packaging.
                      Leading the charge in sustainable tech.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* ShaCare+ Section */}
          <motion.div
            initial={false}
          >
            <motion.button
              onClick={() => setActiveAccordion(activeAccordion === 'shacare' ? null : 'shacare')}
              className="w-full p-6 rounded-t-xl bg-white/5 flex items-center justify-between"
              whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            >
              <div className="flex items-center gap-4">
                <Shield className="w-6 h-6 text-primary" />
                <span className="text-xl font-semibold">ShaCare+</span>
              </div>
              <ChevronRight
                className={cn(
                  "w-6 h-6 transition-transform",
                  activeAccordion === 'shacare' && "rotate-90"
                )}
              />
            </motion.button>
            <AnimatePresence>
              {activeAccordion === 'shacare' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden bg-white/5"
                >
                  <div className="p-6">
                    <p className="text-gray-400">
                      Complete protection with 24/7 priority support.
                      Includes accidental damage coverage and express replacement.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-t from-primary/20 to-[#1D1D1F]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Power Up Your Life
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Starting from ${selectedStorage.price}
              {shaCare && ' with ShaCare+'}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-primary-light text-white px-12 py-6 rounded-full text-xl font-medium inline-flex items-center gap-2 group"
            >
              Buy Now
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ShaPhone;