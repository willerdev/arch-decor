import React from 'react';
import ProjectSection from '../components/decoration/ProjectSection';

const igorProjects = [
  {
    title: "Appartement Haussmannien",
    description: "Rénovation complète respectant le charme historique tout en intégrant des éléments contemporains.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    style: "Classique Moderne"
  },
  {
    title: "Loft Artistique",
    description: "Espace ouvert avec une touche industrielle et des œuvres d'art contemporaines.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    style: "Industriel"
  },
  {
    title: "Villa Côtière",
    description: "Intérieur lumineux inspiré par la mer, utilisant des tons naturels et des matériaux locaux.",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    style: "Méditerranéen"
  }
];

const christianProjects = [
  {
    title: "Penthouse Moderne",
    description: "Design minimaliste avec des touches de luxe et une vue panoramique sur la ville.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    style: "Contemporain"
  },
  {
    title: "Maison de Campagne",
    description: "Intérieur chaleureux mêlant style rustique et confort moderne.",
    image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    style: "Rustique Chic"
  },
  {
    title: "Studio Urbain",
    description: "Optimisation intelligente de l'espace avec un design scandinave épuré.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    style: "Scandinave"
  }
];

const Decoration = () => {
  return (
    <div className="pt-16 bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-black">
        <img 
          src="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Décoration"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Décoration d'Intérieur</h1>
            <p className="text-xl">Des espaces uniques créés par nos experts</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectSection designer="Mr. Igor" projects={igorProjects} />
        <div className="border-t border-gray-200"></div>
        <ProjectSection designer="Christian" projects={christianProjects} />
      </div>

      {/* Contact Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Envie de transformer votre espace ?</h2>
          <p className="text-gray-600 mb-8">Nos décorateurs sont là pour donner vie à vos idées</p>
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

export default Decoration;