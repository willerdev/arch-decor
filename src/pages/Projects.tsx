import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../images/project1.jpeg';
interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  year: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Villa Moderne Côte d'Azur",
    category: "Architecture",
    image: logo,
    description: "Conception moderne avec vue panoramique sur la mer",
    year: "2023"
  },
  {
    id: 2,
    title: "Appartement Haussmannien",
    category: "Décoration",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Rénovation complète dans le respect du style historique",
    year: "2023"
  },
  {
    id: 3,
    title: "Loft New-Yorkais",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1574958269340-fa927503f3dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Transformation d'un espace industriel en habitat moderne",
    year: "2022"
  },
  {
    id: 4,
    title: "Penthouse Paris",
    category: "Décoration",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Design luxueux avec vue sur la Tour Eiffel",
    year: "2022"
  },
  {
    id: 5,
    title: "Éco-Resort Provence",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Complex hôtelier écologique intégré à son environnement",
    year: "2022"
  },
  {
    id: 6,
    title: "Boutique Hôtel",
    category: "Décoration",
    image: "https://images.unsplash.com/photo-1582037928769-49d3d7e1ee3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Design d'intérieur unique pour hôtel de charme",
    year: "2021"
  }
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');
  const categories = ['Tous', 'Architecture', 'Décoration'];

  const filteredProjects = selectedCategory === 'Tous'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="pt-16 bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-black">
        <img 
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Nos Projets"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Projets</h1>
            <p className="text-xl">Découvrez nos réalisations exceptionnelles</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center space-x-4 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition duration-300 ${
                selectedCategory === category
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-red-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">{project.year}</span>
                  <button className="text-red-600 hover:text-red-700 font-medium">
                    En savoir plus
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Vous avez un projet en tête ?</h2>
          <p className="text-gray-600 mb-8">Contactez-nous pour discuter de votre vision</p>
          <a 
            href="/contact" 
            className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition duration-300"
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;