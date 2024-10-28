import React from 'react';
import DesignCard from '../components/architecture/DesignCard';

const architectureDesigns = [
  {
    title: "Villa Contemporaine",
    description: "Une approche moderne de l'habitat résidentiel avec des lignes épurées et des espaces ouverts.",
    image: "https://lh3.googleusercontent.com/urMY1xMBr8VKXBX0uWNBEQ-nrlxub_eZrnIDYVh6nOUvnGmavNgxEBjDQe_XDeWv4z3nxsRqOC8ihMMYTNJ41VvzX9E1u12ZIleG606XIj4KlmPLXCLkfKhgcrHhD_eFXw=w1280",
    features: [
      "Grandes baies vitrées",
      "Matériaux durables",
      "Efficacité énergétique"
    ]
  },
  {
    title: "Loft Industriel",
    description: "Transformation d'espaces industriels en habitations modernes et fonctionnelles.",
    image: "https://lh5.googleusercontent.com/yEm8J_46BxTRF19CuijDNfm81F8oLYFQjxLnKWY-8HGJzrMV8JxGtOHGunV6RzQVbau4OMWiByDJp8cbG67NQgRKvQiVyCdbitojGXJfgbghiEST09PyPOzBDV24ASzetw=w1280",
    features: [
      "Hauts plafonds",
      "Éléments métalliques",
      "Espaces décloisonnés"
    ]
  },
  {
    title: "Éco-Habitat",
    description: "Conception écologique intégrant les dernières innovations en matière de développement durable.",
    image: "https://lh3.googleusercontent.com/jY_m5G3P0nMb6pDRMfVKBC0TIPhGD9yCPHG_-H4eZKj7hlmOLQ4nTUm3zCR7vL9tfBkLU42UrmTHEFT6s7yjA82dmxQdGuFPKt1528feGulqV7Px50co6nmJGQgmhsIc9Q=w1280",
    features: [
      "Panneaux solaires",
      "Récupération d'eau",
      "Isolation naturelle"
    ]
  },
  {
    title: "Résidence Minimaliste",
    description: "L'art de créer des espaces épurés où chaque élément a sa place et sa fonction.",
    image: "https://lh4.googleusercontent.com/wWObP4Hvno_zhTIaTw0gbTEJv8tyoj5OW7ejNk8gb6-Z68SYwFcUY1AmolSuo92iVFOcWixO3jT6gYZlbqU2Spa6FU2lE65bMGwZHqLAG5TrV66UYU1Chf4k9sFmo4Z8Iw=w1280",
    features: [
      "Design épuré",
      "Rangements intégrés",
      "Lumière naturelle optimisée"
    ]
  },
  {
    title: "Maison Méditerranéenne",
    description: "Un style architectural qui célèbre la vie en plein air et la lumière naturelle.",
    image: "https://lh3.googleusercontent.com/lxa6g03GbL9vFmfeBa1ZRbDM_Nx8FSaKMmOHuubMTcGCHslRGoSYaNXx_PkW_6hEfRAe82GtqVeHqlV-BdJ51NV4J-oVCps82ka_LqMVYd2cIf7-iW1srzDx0IRcYzqFiQ=w1280",
    features: [
      "Terrasses spacieuses",
      "Patios intérieurs",
      "Matériaux naturels"
    ]
  },
  {
    title: "Penthouse Urbain",
    description: "Des espaces luxueux en hauteur offrant des vues panoramiques sur la ville.",
    image: "https://lh4.googleusercontent.com/aGdiY9rjJfElIT6bmU2eYgzX-y2vOAcF2wDpY5rQw237cfJgCZH9o6j391APCwJ31qhKormbPv_k_lZN0AijZdbiDMyIlyvIQdV7AtseGsdG-9OngO9M68MviO-Untw5=w1280",
    features: [
      "Terrasses panoramiques",
      "Double hauteur",
      "Finitions premium"
    ]
  },
  {
    title: "Maison Passive",
    description: "Une architecture qui minimise l'empreinte énergétique sans compromis sur le confort.",
    image: "https://lh4.googleusercontent.com/TTjk0otQMoRqP1kxWex5Wqvs_xK9r0wIxLV7t7dtErRXPO6oYLrlvVOKinSLxsf1BaCA869gmqt-iZ2Razx5A_zxS-MN66eZOZ4wZRZ3wDqn5kPt0nYX3QAxJdVrgDAL_g=w1280",
    features: [
      "Consommation minimale",
      "Ventilation optimisée",
      "Orientation solaire"
    ]
  },
  {
    title: "Villa d'Architecte",
    description: "Des créations uniques qui repoussent les limites du design architectural.",
    image: "https://lh4.googleusercontent.com/U_pqGSJpI28uo0ESJZLiFWUhhpG56UZvJALMIOPoz0UEiBpKkt7mvYNTINfUDUGufwcquKRHnke_1BDWTSGpLOHoe19PmY3zZlnYdjI8R78GYQ81c2CEci0X1l5sP04x-g=w1280",
    features: [
      "Design signature",
      "Volumes atypiques",
      "Matériaux nobles"
    ]
  },
  {
    title: "Micro-Habitat",
    description: "Solutions innovantes pour optimiser les petits espaces urbains.",
    image: "https://lh5.googleusercontent.com/iJK06W868xoP1Ak_Pi2TrZYBmJsuM8zM7OBSILs6IPSE9RTXHkeGT8d833G1xApt17Up438uBOcbBRgAvY4N7ph-ULQZ-AmLj5_zEkGaR2AhLI4pvCARmPI37TCRIFsQhw=w1280",
    features: [
      "Mobilier modulable",
      "Espaces multifonctions",
      "Solutions gain de place"
    ]
  },
  {
    title: "Rénovation Historique",
    description: "Restauration et modernisation de bâtiments historiques dans le respect du patrimoine.",
    image: "https://lh5.googleusercontent.com/Y9aqk_CQ5RO3pH1f1kzrmVZ20NOphl7hK_8Xb-r1vNfJHl_Ykauaz3uElzXpvLCZrn9mrWBMlRDSxVx8W6G2fms9qiA2lOk3PUOdMZbs6fm8jgE5smXi2EaHdZxIBjnF=w1280",
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
          src="https://lh3.googleusercontent.com/OYMZMkMZseEuEHxqgB4YaMCQFo1czsiCdIyQAWUCusJCOlAIw19w5ytIxYuSH7OsK8yBcZd9zgPTdmR6RphxAtGl5HwQbt-e1XIm1tUVwRF8LyWFzt4PvTYcPbS3g0UNLw=w1280"
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