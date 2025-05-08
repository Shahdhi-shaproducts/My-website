import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Recycle, Clock, Truck } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { Link } from 'react-router-dom';

const carouselSlides = [
  {
    title: "ShaPhone 15 Pro",
    subtitle: "Charge Faster. Last Longer.",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2560",
  },
  {
    title: "ShaBook Air",
    subtitle: "Thunderbolt Speed. All-Day Power.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2560",
  },
];

const featuredProducts = [
  {
    name: "ShaWatch UURA2",
    tagline: "Lightning-Fast Performance",
    price: "From $599",
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&q=80&w=2560",
  },
  {
    name: "ShaPad Pro",
    tagline: "Create Without Limits",
    price: "From $799",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=2560",
  },
  {
    name: "ShaPhone 15",
    tagline: "Power Meets Innovation",
    price: "From $999",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&q=80&w=2560",
  },
  {
    name: "ShaBook Pro",
    tagline: "Revolutionary Performance",
    price: "From $1299",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=2560",
  },
];

const Store = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  React.useEffect(() => {
    if (emblaApi) {
      const interval = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [emblaApi]);

  return (
    <main className="bg-black text-white">
      {/* Hero Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {carouselSlides.map((slide, index) => (
            <div key={index} className="relative min-w-full">
              <div
                className="h-screen relative flex items-center"
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="container mx-auto px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-3xl"
                  >
                    <h1 className="text-6xl md:text-8xl font-bold mb-4">{slide.title}</h1>
                    <p className="text-2xl md:text-3xl mb-8">{slide.subtitle}</p>
                    <div className="flex gap-6">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-primary hover:bg-primary-light px-8 py-4 rounded-full font-medium"
                      >
                        Buy
                      </motion.button>
                      <button className="text-primary hover:text-primary-light flex items-center gap-2 group">
                        Learn more
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products Grid */}
      <section className="py-20 bg-[#1d1d1f]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-black rounded-2xl overflow-hidden group"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-400 mb-2">{product.tagline}</p>
                  <p className="text-primary mb-4">{product.price}</p>
                  <div className="flex gap-4">
                    <button className="bg-primary hover:bg-primary-light px-6 py-2 rounded-full text-sm">
                      Buy
                    </button>
                    <button className="text-primary hover:text-primary-light text-sm flex items-center gap-1">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banners */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-[#1d1d1f] rounded-2xl p-8"
            >
              <h3 className="text-2xl font-semibold mb-4">Trade In & Save</h3>
              <p className="text-gray-400 mb-6">
                Get $200–800 credit when you trade in a ShaPhone 12 or higher. ◊
              </p>
              <Link to="/trade-in" className="text-primary hover:text-primary-light flex items-center gap-2">
                Check trade-in value <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-[#1d1d1f] rounded-2xl p-8"
            >
              <h3 className="text-2xl font-semibold mb-4">ShaRewards Card</h3>
              <p className="text-gray-400 mb-6">
                5% back in ShaSpark Points on every purchase.
              </p>
              <Link to="/rewards" className="text-primary hover:text-primary-light flex items-center gap-2">
                Apply now <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why ShaVolts */}
      <section className="py-20 bg-[#1d1d1f]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">Why ShaVolts</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Recycle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">100% Recyclable Materials</h3>
              <p className="text-gray-400">Committed to environmental sustainability</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 ShaCare+ Support</h3>
              <p className="text-gray-400">Expert help, whenever you need it</p>
            </div>
            <div className="text-center">
              <Truck className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Free 2-Day Shipping</h3>
              <p className="text-gray-400">Fast and reliable delivery</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Store;