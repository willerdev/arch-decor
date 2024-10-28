import React from 'react';
import DesignCard from '../components/architecture/DesignCard';

const architectureDesigns = [
  {
    title: "Villa Contemporaine",
    description: "Une approche moderne de l'habitat résidentiel avec des lignes épurées et des espaces ouverts.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: [
      "Grandes baies vitrées",
      "Matériaux durables",
      "Efficacité énergétique"
    ]
  },
  {
    title: "Loft Industriel",
    description: "Transformation d'espaces industriels en habitations modernes et fonctionnelles.",
    image: "https://images.unsplash.com/photo-1574958269340-fa927503f3dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: [
      "Hauts plafonds",
      "Éléments métalliques",
      "Espaces décloisonnés"
    ]
  },
  {
    title: "Éco-Habitat",
    description: "Conception écologique intégrant les dernières innovations en matière de développement durable.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: [
      "Panneaux solaires",
      "Récupération d'eau",
      "Isolation naturelle"
    ]
  },
  {
    title: "Résidence Minimaliste",
    description: "L'art de créer des espaces épurés où chaque élément a sa place et sa fonction.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: [
      "Design épuré",
      "Rangements intégrés",
      "Lumière naturelle optimisée"
    ]
  },
  {
    title: "Maison Méditerranéenne",
    description: "Un style architectural qui célèbre la vie en plein air et la lumière naturelle.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: [
      "Terrasses spacieuses",
      "Patios intérieurs",
      "Matériaux naturels"
    ]
  },
  {
    title: "Penthouse Urbain",
    description: "Des espaces luxueux en hauteur offrant des vues panoramiques sur la ville.",
    image: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: [
      "Terrasses panoramiques",
      "Double hauteur",
      "Finitions premium"
    ]
  },
  {
    title: "Maison Passive",
    description: "Une architecture qui minimise l'empreinte énergétique sans compromis sur le confort.",
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: [
      "Consommation minimale",
      "Ventilation optimisée",
      "Orientation solaire"
    ]
  },
  {
    title: "Villa d'Architecte",
    description: "Des créations uniques qui repoussent les limites du design architectural.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: [
      "Design signature",
      "Volumes atypiques",
      "Matériaux nobles"
    ]
  },
  {
    title: "Micro-Habitat",
    description: "Solutions innovantes pour optimiser les petits espaces urbains.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: [
      "Mobilier modulable",
      "Espaces multifonctions",
      "Solutions gain de place"
    ]
  },
  {
    title: "Rénovation Historique",
    description: "Restauration et modernisation de bâtiments historiques dans le respect du patrimoine.",
    image: "https://images.unsplash.com/photo-1577493340887-b7bfff550145?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: [
      "Préservation patrimoniale",
      "Confort moderne",
      "Matériaux d'époque"
    ]
  }
];

const Architecture = () => {
  return (
    <div className="pt-16 bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-black">
        <img 
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Architecture"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Designs Architecturaux</h1>
            <p className="text-xl">Découvrez notre collection de concepts innovants</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {architectureDesigns.map((design, index) => (
            <DesignCard
              key={index}
              title={design.title}
              description={design.description}
              image={design.image}
              features={design.features}
            />
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Intéressé par nos designs ?</h2>
          <p className="text-gray-600 mb-8">Contactez-nous pour discuter de votre projet architectural</p>
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

export default Architecture;