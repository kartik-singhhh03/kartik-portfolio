import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, ExternalLink, DollarSign, Package } from 'lucide-react';

interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  url: string;
}

const DigitalStore = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Since BuyMeACoffee doesn't have a public API, we'll use mock data
    // In a real implementation, you'd need to scrape or use their API if available
    const mockProducts: Product[] = [
      {
        id: '1',
        title: 'React.js Complete Course',
        description: 'Master React.js from basics to advanced concepts with hands-on projects and real-world examples.',
        price: '$29',
        image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=500',
        url: 'https://coffe.ee/kartiksinghh03'
      },
      {
        id: '2',
        title: 'Full Stack Development Guide',
        description: 'Complete roadmap and resources for becoming a full-stack developer with modern technologies.',
        price: '$49',
        image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=500',
        url: 'https://coffe.ee/kartiksinghh03'
      },
      {
        id: '3',
        title: 'JavaScript Mastery Bundle',
        description: 'Everything you need to master JavaScript, from ES6+ features to advanced patterns and best practices.',
        price: '$39',
        image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=500',
        url: 'https://coffe.ee/kartiksinghh03'
      },
      {
        id: '4',
        title: 'Portfolio Website Template',
        description: 'Professional portfolio website template with modern design and responsive layout.',
        price: '$19',
        image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500',
        url: 'https://coffe.ee/kartiksinghh03'
      }
    ];

    // Simulate API call
    setTimeout(() => {
      setProducts(mockProducts);
      setLoading(false);
    }, 1000);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  if (loading) {
    return (
      <section id="store" className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Digital Store
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="glass rounded-xl p-6 animate-pulse">
                <div className="h-48 bg-gray-600 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-600 rounded mb-2"></div>
                <div className="h-3 bg-gray-700 rounded mb-4"></div>
                <div className="h-10 bg-gray-600 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="store" className="py-20 px-4 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Digital Store
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Premium courses, templates, and resources to accelerate your development journey.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="glass rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 bg-green-600 text-white px-2 py-1 rounded-full text-sm font-semibold">
                    <DollarSign className="w-4 h-4" />
                    <span>{product.price.replace('$', '')}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm line-clamp-3">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-green-400 font-bold text-lg">
                    <DollarSign className="w-5 h-5" />
                    <span>{product.price.replace('$', '')}</span>
                  </div>
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 group/btn"
                  >
                    <ShoppingCart className="w-4 h-4 group-hover/btn:animate-bounce" />
                    <span>Buy Now</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://coffe.ee/kartiksinghh03"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 glow group"
          >
            <Package className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>View All Products</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalStore;