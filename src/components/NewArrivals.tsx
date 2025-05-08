import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'EcoPhone Pro',
    price: '$999',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'SmartWatch Elite',
    price: '$299',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'PowerBook Air',
    price: '$1299',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  },
];

const NewArrivals = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl font-bold text-center mb-12">New Arrivals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-primary text-white text-sm font-medium px-3 py-1 rounded-full animate-glow-pulse">
                  Just In
                </span>
              </div>
              <div className="mt-4">
                <h3 className="font-display text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;