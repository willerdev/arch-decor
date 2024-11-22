import React from 'react';
import { Book, Globe, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const historicalPeriods = [
  {
    title: "Ancient Kingdoms",
    description: "Discover the great kingdoms of ancient Africa, from Egypt to Nubia, Ghana to Mali.",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    period: "3000 BCE - 1500 CE"
  },
  {
    title: "Trade Routes",
    description: "Explore the trans-Saharan trade routes that connected Africa with the world.",
    image: "https://images.unsplash.com/photo-1590845947676-fa2576f0a67c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    period: "800 CE - 1900 CE"
  },
  {
    title: "Cultural Heritage",
    description: "Learn about the rich cultural traditions that have shaped African societies.",
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    period: "Ongoing"
  }
];

const AfricanHistory = () => {
  return (
    <div className="pt-16 bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-black">
        <img 
          src="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="African History"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">African History</h1>
            <p className="text-xl">Exploring Our Rich Heritage</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Historical Periods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {historicalPeriods.map((period, index) => (
            <motion.div
              key={period.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img 
                src={period.image} 
                alt={period.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{period.title}</h3>
                <p className="text-gray-600 mb-4">{period.description}</p>
                <p className="text-sm text-gray-500">{period.period}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Learn More?</h2>
          <p className="text-gray-600 mb-8">Contact us to discover our educational programs and cultural tours</p>
          <Link 
            to="/contact"
            className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AfricanHistory;