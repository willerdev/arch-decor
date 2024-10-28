import React from 'react';
import { ArrowRight } from 'lucide-react';

interface DesignCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
}

const DesignCard: React.FC<DesignCardProps> = ({ title, description, image, features }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-gray-700">
              <ArrowRight className="w-4 h-4 text-red-600 mr-2" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignCard;