import React from 'react';
import { Calendar, Globe, Newspaper, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const updates = [
  {
    title: "Cultural Festival 2024",
    date: "March 15, 2024",
    description: "Join us for a celebration of African arts, music, and culture in Paris.",
    image: "https://images.unsplash.com/photo-1533669955142-6a73332af4db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Events"
  },
  {
    title: "New Trade Partnership",
    date: "February 28, 2024",
    description: "KMT establishes new trade routes connecting East African artisans with European markets.",
    image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Business"
  },
  {
    title: "Educational Initiative",
    date: "January 10, 2024",
    description: "Launch of our new program teaching traditional African crafts to young artisans.",
    image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Education"
  }
];

const AfricanUpdates = () => {
  return (
    <div className="pt-16 bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-black">
        <img 
          src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="African Updates"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">African Updates</h1>
            <p className="text-xl">Stay Connected with Africa's Latest Developments</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Updates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {updates.map((update, index) => (
            <motion.div
              key={update.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img 
                src={update.image} 
                alt={update.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-red-600">{update.category}</span>
                  <span className="text-sm text-gray-500">{update.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{update.title}</h3>
                <p className="text-gray-600 mb-4">{update.description}</p>
                <Link to="#" className="text-red-600 hover:text-red-700 flex items-center">
                  Read more <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8">Subscribe to our newsletter for the latest African news and updates</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfricanUpdates;