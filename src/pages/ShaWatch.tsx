import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, ChevronRight, Crown, Palette, CreditCard, ArrowLeftRight, Truck, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const watches = [
  {
    name: 'ShaWatch Series 10',
    image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&q=80&w=800',
    badge: { type: 'new', text: 'New', color: '#0066FF' },
    price: 'From $399'
  },
  {
    name: 'ShaWatch Ultra 2',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=800',
    badge: { type: 'rugged', text: 'Rugged', color: '#000000', border: '#0066FF' },
    price: 'From $799'
  },
  {
    name: 'ShaWatch SE',
    image: 'https://images.unsplash.com/photo-1509386175345-24d4e16ae35f?auto=format&fit=crop&q=80&w=800',
    badge: { type: 'budget', text: 'Budget', color: '#86868B' },
    price: 'From $249'
  },
  {
    name: 'ShaWatch Sport',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800',
    badge: { type: 'sport', icon: Zap, text: 'Sweat-proof' },
    price: 'From $499'
  },
  {
    name: 'ShaWatch Luxe',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=800',
    badge: { type: 'premium', icon: Crown, text: 'Premium' },
    price: 'From $999'
  },
  {
    name: 'ShaWatch Studio',
    image: 'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&q=80&w=800',
    badge: { type: 'studio', icon: Palette, text: 'Customize' },
    price: 'From $599'
  }
];

const secondaryLinks = [
  { name: 'Compare', href: '/compare' },
  { name: 'ShaStraps', href: '/shastraps', icon: Zap },
  { name: 'ShaGear', href: '/shagear' },
  { name: 'ShaFit+', href: '/shafit-plus' },
  { name: 'ShaOS 11', href: '/shaos' }
];

const benefitCards = [
  {
    icon: CreditCard,
    title: "Pay over time, interest-free.",
    description: "When you choose ShaPay Monthly Installments.*",
    href: "/shapay"
  },
  {
    icon: ArrowLeftRight,
    title: "Save with ShaTrade.",
    description: "Get up to $150 toward your next ShaWatch when you trade in an eligible device.*",
    href: "/shatrade"
  },
  {
    icon: Truck,
    title: "Get flexible delivery & easy pickup.",
    description: "Choose 2-hour delivery, free shipping, or in-store pickup.",
    href: "/delivery"
  },
  {
    icon: Video,
    title: "Shop live with a ShaSpecialist.",
    description: "Video chat with our experts for personalized help.",
    href: "/support"
  }
];

const ShaWatch = () => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  return (
    <main className="bg-black min-h-screen">
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-8xl font-[300] tracking-[0.5px] text-white uppercase mb-4">
              SHAWATCH
            </h1>
            <p className="text-[24px] text-[#86868B]">
              The ultimate device for an electrified life.
            </p>
          </motion.div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {watches.map((watch, index) => (
              <motion.div
                key={watch.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={!prefersReducedMotion ? { 
                  scale: 1.03,
                  boxShadow: '0 8px 24px rgba(0, 102, 255, 0.1)'
                } : {}}
                className="relative bg-[#1D1D1F] rounded-2xl p-4 transition-all duration-300"
              >
                {/* Badge */}
                {watch.badge && (
                  <motion.div
                    animate={!prefersReducedMotion ? {
                      opacity: [0.8, 1],
                      scale: [1, 1.05],
                    } : {}}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    className="absolute top-2 right-2 z-10"
                  >
                    {watch.badge.icon ? (
                      <watch.badge.icon className="w-5 h-5 text-primary animate-glow-pulse" />
                    ) : (
                      <span
                        className={cn(
                          "inline-block px-2 py-1 rounded-full text-xs font-medium",
                          watch.badge.type === 'new' && "bg-[#0066FF] text-white animate-glow-pulse",
                          watch.badge.type === 'rugged' && "bg-black text-white border border-[#0066FF]",
                          watch.badge.type === 'budget' && "bg-[#86868B] text-white"
                        )}
                      >
                        {watch.badge.text}
                      </span>
                    )}
                  </motion.div>
                )}

                {/* Product Image */}
                <div className="aspect-square mb-4 overflow-hidden rounded-xl bg-[#000000]">
                  <motion.img
                    src={watch.image}
                    alt={watch.name}
                    className="w-full h-full object-cover"
                    whileHover={!prefersReducedMotion ? { scale: 1.05 } : {}}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Product Info */}
                <div className="text-center">
                  <h3 className="text-white text-lg font-medium mb-1">{watch.name}</h3>
                  <p className="text-[#86868B] text-sm">{watch.price}</p>
                </div>

                {/* Buy Button */}
                <motion.button
                  whileHover={!prefersReducedMotion ? { scale: 1.05 } : {}}
                  whileTap={!prefersReducedMotion ? { scale: 0.95 } : {}}
                  className="w-full mt-4 bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
                >
                  Buy
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Secondary Navigation */}
          <div className="hidden md:flex justify-center items-center gap-8 mb-12">
            {secondaryLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="group relative text-white hover:text-primary transition-colors"
              >
                <span className="flex items-center gap-2">
                  {link.icon && <link.icon className="w-4 h-4" />}
                  {link.name}
                </span>
                <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-primary group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out" />
              </Link>
            ))}
          </div>

          {/* Mobile Accordion */}
          <div className="md:hidden space-y-2">
            {secondaryLinks.map((link) => (
              <motion.button
                key={link.name}
                onClick={() => setActiveAccordion(activeAccordion === link.name ? null : link.name)}
                className="w-full p-4 bg-[#1D1D1F] rounded-xl flex items-center justify-between text-white"
                whileHover={{ backgroundColor: 'rgba(29, 29, 31, 0.8)' }}
              >
                <span className="flex items-center gap-2">
                  {link.icon && <link.icon className="w-4 h-4" />}
                  {link.name}
                </span>
                <ChevronRight
                  className={cn(
                    "w-4 h-4 transition-transform",
                    activeAccordion === link.name && "rotate-90"
                  )}
                />
              </motion.button>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-[#86868B] text-sm mb-4">
              Get 3 months of ShaFit+ with any ShaWatch¹
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors group"
            >
              Shop ShaWatch
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto overflow-hidden rounded-[2.5rem] shadow-2xl"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source
                src="https://www.apple.com/105/media/us/watch/2024/f0b51c31-e8a5-44d7-b23d-51bd2858454a/anim/hero/medium_2x.mp4#t=2.522569"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      </section>

      {/* Why ShaVolts Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[28px] text-center font-[300] tracking-[0.5px] text-[#1d1d1f] uppercase mb-16"
          >
            Why ShaVolts is the best place to buy ShaWatch.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefitCards.map((card, index) => (
              <motion.a
                key={card.title}
                href={card.href}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: index * 0.1 }
                }}
                viewport={{ once: true }}
                whileHover={!prefersReducedMotion ? { 
                  scale: 1.02,
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
                } : {}}
                className="group p-6 rounded-2xl border border-[#D2D2D7] transition-all duration-300"
              >
                <motion.div
                  whileHover={!prefersReducedMotion ? {
                    scale: 1.1,
                    transition: { duration: 0.5 }
                  } : {}}
                  className="mb-4"
                >
                  <card.icon className="w-8 h-8 md:w-10 md:h-10 text-primary group-hover:animate-glow-pulse" />
                </motion.div>
                <h3 className="text-[#1d1d1f] text-lg font-medium mb-2">
                  {card.title}
                </h3>
                <p className="text-[#86868b] text-sm">
                  {card.description}
                </p>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-light group relative"
            >
              <span className="relative">
                Shop ShaWatch
                <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-primary group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out" />
              </span>
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>

          <p className="text-[#86868b] text-xs text-center mt-8">
            * Terms and conditions apply.{' '}
            <Link to="/terms" className="text-primary hover:underline">
              Learn more
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default ShaWatch;