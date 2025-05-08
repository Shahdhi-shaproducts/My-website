import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Cpu, Battery, Monitor, Recycle, ChevronRight, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '../lib/utils';

gsap.registerPlugin(ScrollTrigger);

const colors = [
  { name: 'Storm Gray', hex: '#6E6E73', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2560' },
  { name: 'Electric Blue', hex: '#0066FF', image: 'https://images.unsplash.com/photo-1569770218135-bea267ed7e84?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2560' },
  { name: 'Matte Black', hex: '#1D1D1F', image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2560' }
];

const specs = [
  { icon: Cpu, title: 'T18 Pro Chip', description: '40% faster than previous gen' },
  { icon: Battery, title: '22-Hour Battery', description: 'All-day power, and then some' },
  { icon: Monitor, title: 'Liquid Retina XDR', description: '500 nits of brightness' }
];

const lineup = [
  {
    name: 'ShaBook Pro 16"',
    tagline: 'Ultimate power.',
    price: 'From $1999',
    specs: ['T18 Pro Max chip', '16" Liquid Retina XDR', 'Up to 96GB RAM'],
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2560'
  },
  {
    name: 'ShaBook Air 15"',
    tagline: 'Thin. Light. Powerful.',
    price: 'From $1299',
    specs: ['T18 chip', '15" Liquid Retina', 'Up to 24GB RAM'],
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2560'
  },
  {
    name: 'ShaBook SE',
    tagline: 'Serious capability.',
    price: 'From $999',
    specs: ['T17 chip', '13" Retina', 'Up to 16GB RAM'],
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2560'
  }
];

const ShaBook = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const deviceRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const deviceRotation = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const deviceScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const deviceY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    if (!prefersReducedMotion && deviceRef.current) {
      gsap.to(deviceRef.current, {
        rotationY: 5,
        scrollTrigger: {
          trigger: deviceRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: true
        }
      });
    }

    if (!prefersReducedMotion && videoRef.current) {
      gsap.to(videoRef.current, {
        scale: 1.1,
        scrollTrigger: {
          trigger: videoRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    }
  }, [prefersReducedMotion]);

  return (
    <main className="bg-black text-white">
      <section ref={heroRef} className="min-h-screen relative overflow-hidden">
        <div className="container mx-auto px-4 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-6xl md:text-8xl font-[600] tracking-tight mb-4">
              ShaBook Pro
            </h1>
            <p className="text-2xl md:text-3xl text-gray-400">
              Power. Beauty. Intelligence.
            </p>
          </motion.div>

          <div className="relative flex justify-center items-center">
            <motion.div
              ref={deviceRef}
              style={{
                rotateY: deviceRotation,
                scale: deviceScale,
                y: deviceY
              }}
              className="relative w-full max-w-4xl"
            >
              <motion.img
                src={selectedColor.image}
                alt="ShaBook Pro"
                className="w-full rounded-2xl shadow-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </div>

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
              </motion.button>
            ))}
          </div>
        </div>

        <div className="absolute top-1/2 right-8 -translate-y-1/2 space-y-6 hidden lg:block">
          {specs.map((spec, index) => (
            <motion.div
              key={spec.title}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 w-72"
            >
              <spec.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">{spec.title}</h3>
              <p className="text-gray-400 text-sm">{spec.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative w-full h-screen overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute inset-0"
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://www.apple.com/105/media/us/mac/family/2025/59856fc1-d007-421a-90ee-734ddf3fd25d/anim/welcome/large.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Engineered for Excellence
              </h2>
              <p className="text-lg text-white/90">
                Experience the perfect blend of power and portability with the all-new ShaBook Pro.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold text-center mb-16"
          >
            Explore the ShaBook Family
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {lineup.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1,
                  transition: { delay: index * 0.1 }
                }}
                whileHover={!prefersReducedMotion ? { 
                  scale: 1.03,
                  boxShadow: '0 8px 24px rgba(0, 102, 255, 0.1)'
                } : {}}
                viewport={{ once: true }}
                className="bg-[#1D1D1F] rounded-2xl p-8 transition-shadow duration-300"
              >
                <div className="aspect-square mb-6 overflow-hidden rounded-xl bg-[#F5F5F7]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-400 mb-2">{product.tagline}</p>
                <p className="text-primary mb-4">{product.price}</p>
                <ul className="space-y-2 mb-6">
                  {product.specs.map((spec, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-primary" />
                      {spec}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-full text-sm font-medium w-full"
                >
                  Learn more
                </motion.button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="text-primary hover:text-primary-light flex items-center gap-2 mx-auto group">
              <span className="relative">
                Compare all models
                <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-primary group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out" />
              </span>
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">
              Revolutionary Performance
            </h2>
            <p className="text-xl text-gray-400">
              Powered by the all-new T18 Pro chip
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#1D1D1F] rounded-2xl p-8"
            >
              <Cpu className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-4">T18 Pro Chip</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-primary" />
                  <span>12-core CPU</span>
                </li>
                <li className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-primary" />
                  <span>30-core GPU</span>
                </li>
                <li className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-primary" />
                  <span>16-core Neural Engine</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#1D1D1F] rounded-2xl p-8"
            >
              <Battery className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-4">All-Day Battery</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-primary" />
                  <span>Up to 22 hours</span>
                </li>
                <li className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-primary" />
                  <span>Fast charging support</span>
                </li>
                <li className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-primary" />
                  <span>Advanced power management</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#1D1D1F]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Recycle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">
              Designed for the Planet
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              100% recycled aluminum. Zero waste packaging.
              Leading the charge in sustainable tech.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2"
            >
              <span>Learn about our efforts</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-black to-primary/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Transform Your Workspace
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Starting from $1999
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-full text-xl font-medium"
              >
                Buy Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-primary hover:text-primary-light px-8 py-4 rounded-full text-xl font-medium flex items-center gap-2"
              >
                Learn more
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ShaBook;