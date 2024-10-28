import React from 'react';
import { Building2, Paintbrush, ShoppingBag, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Building2,
    title: "Architecture",
    description: "Des concepts innovants et audacieux pour des bâtiments qui marquent les esprits.",
    link: "/architecture",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    icon: Paintbrush,
    title: "Décoration",
    description: "Des espaces personnalisés, chaleureux et fonctionnels, où il fait bon vivre et travailler.",
    link: "/decoration",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    icon: ShoppingBag,
    title: "Boutiques",
    description: "Découvrez notre collection exclusive de meubles, luminaires et accessoires de décoration, sélectionnés avec soin auprès des meilleures marques.",
    link: "/boutique",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    icon: GraduationCap,
    title: "Formation",
    description: "Via la formations aux métiers du bâtiment, et aux métiers de l'entreprise, Arch-Deco accompagne les entreprises, les organisations, et les particuliers en les aidant à améliorer leurs performances et à réussir leurs transformations digitale, managériale, commerciale, organisationnelle... grâce à une approche multi spécialiste.",
    link: "/formation",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

const Services = () => {
  return (
    <div className="pt-16 bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-black">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Services"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Services</h1>
            <p className="text-xl">Excellence et Innovation à Votre Service</p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-64">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-red-600 p-3 rounded-full">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
                >
                  En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à Concrétiser Votre Projet ?</h2>
          <p className="text-gray-600 mb-8">Contactez-nous pour discuter de vos besoins et découvrir comment nous pouvons vous aider.</p>
          <Link 
            to="/contact"
            className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition duration-300"
          >
            Contactez-nous
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
