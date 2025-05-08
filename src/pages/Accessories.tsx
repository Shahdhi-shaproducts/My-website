import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Search, Laptop, Smartphone, Watch, Tablet, Gamepad, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const productCategories = [
  { name: 'ShaBook', icon: Laptop },
  { name: 'ShaPad', icon: Tablet },
  { name: 'ShaPhone', icon: Smartphone },
  { name: 'ShaWatch', icon: Watch },
  { name: 'ShaVision Pro', icon: Gamepad },
];

const featuredPhoneAccessories = [
  {
    name: 'ShaPower MagSafe Charger',
    price: '$39.00',
    image: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?auto=format&fit=crop&q=80&w=800',
    colors: ['Sky', 'Pink', 'Yellow'],
    isNew: true
  },
  {
    name: 'ShaPhone 16 Pro Clear Case',
    price: '$49.00',
    image: 'https://images.unsplash.com/photo-1587855049254-351f4e55fe2a?auto=format&fit=crop&q=80&w=800',
    colors: ['Clear', 'Black'],
  },
  {
    name: 'ShaPower Battery Pack',
    price: '$99.00',
    image: 'https://images.unsplash.com/photo-1600490722773-35753aea6332?auto=format&fit=crop&q=80&w=800',
    colors: ['White', 'Black'],
    isNew: true
  }
];

const featuredPadAccessories = [
  {
    name: 'ShaPencil (USB-C)',
    price: '$79.00',
    image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Magic Keyboard for ShaPad',
    price: '$249.00',
    image: 'https://images.unsplash.com/photo-1587033411391-5d9e51cce126?auto=format&fit=crop&q=80&w=800',
    colors: ['White', 'Black'],
  },
  {
    name: 'Smart Folio for ShaPad',
    price: '$79.00',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800',
    colors: ['Sky', 'Pink', 'Yellow'],
    isNew: true
  }
];

const Accessories = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('product');

  const MotionLink = motion(Link);

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-[#F5F5F7] to-white">
        <div className="container mx-auto px-4 max-w-4xl py-32">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[48px] md:text-[56px] text-[#1d1d1f] text-center font-semibold mb-12"
          >
            Find the accessories you're looking for.
          </motion.h1>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative mb-12"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#86868b]" />
            <input
              type="text"
              placeholder="Search accessories"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 pl-12 pr-4 rounded-xl border border-[#d2d2d7] text-[17px] placeholder-[#86868b] focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-colors"
            />
          </motion.div>

          {/* Browse Tabs */}
          <div className="flex justify-center mb-12">
            <div className="border-b border-[#d2d2d7]">
              <button
                onClick={() => setActiveTab('product')}
                className={cn(
                  "px-6 py-2 text-[15px] font-medium relative",
                  activeTab === 'product' ? "text-[#1d1d1f]" : "text-[#86868b]"
                )}
              >
                Browse by Product
                {activeTab === 'product' && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1d1d1f]"
                  />
                )}
              </button>
              <button
                onClick={() => setActiveTab('category')}
                className={cn(
                  "px-6 py-2 text-[15px] font-medium relative",
                  activeTab === 'category' ? "text-[#1d1d1f]" : "text-[#86868b]"
                )}
              >
                Browse by Category
                {activeTab === 'category' && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1d1d1f]"
                  />
                )}
              </button>
            </div>
          </div>

          {/* Product Categories */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-3 md:grid-cols-5 gap-8"
          >
            {productCategories.map((category) => (
              <motion.a
                key={category.name}
                href={`#${category.name.toLowerCase()}`}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center group"
              >
                <div className="w-24 h-24 rounded-full bg-[#f5f5f7] flex items-center justify-center mb-4 group-hover:bg-[#e5e5e5] transition-colors">
                  <category.icon className="w-12 h-12 text-[#1d1d1f]" />
                </div>
                <span className="text-[15px] text-[#1d1d1f] text-center">
                  {category.name}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured ShaPhone Accessories */}
      <section className="py-24 bg-[#F5F5F7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[40px] font-[500] leading-tight text-[#1d1d1f] mb-4"
            >
              Featured ShaPhone<br />Accessories
            </motion.h2>
            <MotionLink
              to="/shaphone-accessories"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#0066CC] hover:text-[#0066CC]/80 transition-colors inline-flex items-center gap-1 group"
            >
              Shop all ShaPhone accessories
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </MotionLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPhoneAccessories.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 flex flex-col h-[460px]"
              >
                {product.isNew && (
                  <span className="inline-block bg-[#0066CC] text-white text-xs font-medium px-2 py-1 rounded-full mb-4">
                    New
                  </span>
                )}
                <div className="aspect-square mb-6 overflow-hidden rounded-xl bg-[#F5F5F7]">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <h3 className="text-xl font-medium mb-2">{product.name}</h3>
                <p className="text-[#0066CC] mb-4">{product.price}</p>
                {product.colors && (
                  <div className="flex gap-2 mb-6">
                    {product.colors.map((color) => (
                      <span key={color} className="text-sm text-[#86868B]">{color}</span>
                    ))}
                  </div>
                )}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-auto w-full bg-[#0066CC] hover:bg-[#0066CC]/90 text-white px-6 py-3 rounded-full text-sm font-medium"
                >
                  Buy
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured ShaPad Accessories */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <MotionLink
            to="/shapad-accessories"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#0066CC] hover:text-[#0066CC]/80 transition-colors inline-flex items-center gap-1 group justify-center w-full mb-12"
          >
            Shop all ShaPad accessories
            <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </MotionLink>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPadAccessories.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#F5F5F7] rounded-2xl p-6 flex flex-col h-[460px]"
              >
                {product.isNew && (
                  <span className="inline-block bg-[#0066CC] text-white text-xs font-medium px-2 py-1 rounded-full mb-4">
                    New
                  </span>
                )}
                <div className="aspect-square mb-6 overflow-hidden rounded-xl bg-white">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <h3 className="text-xl font-medium mb-2">{product.name}</h3>
                <p className="text-[#0066CC] mb-4">{product.price}</p>
                {product.colors && (
                  <div className="flex gap-2 mb-6">
                    {product.colors.map((color) => (
                      <span key={color} className="text-sm text-[#86868B]">{color}</span>
                    ))}
                  </div>
                )}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-auto w-full bg-[#0066CC] hover:bg-[#0066CC]/90 text-white px-6 py-3 rounded-full text-sm font-medium"
                >
                  Buy
                </motion.button>
              </motion.div>
            ))}
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[40px] font-[500] leading-tight text-[#1d1d1f] text-center mt-12"
          >
            Featured ShaPad<br />Accessories
          </motion.h2>
        </div>
      </section>
    </main>
  );
};

export default Accessories;