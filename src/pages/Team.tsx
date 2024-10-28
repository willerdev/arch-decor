import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Globe, Users } from 'lucide-react';

interface TeamMember {
  name: string;
  role?: string;
  description?: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Igor Tchinda",
    role: "Economiste, Maitre d'œuvre",
    description: "Fort de 25 années d'expérience en France et à l'international, Igor TCHINDA est un expert en conception architecturale et en gestion de projets complexes. Sa passion pour l'Afrique et sa connaissance des enjeux locaux sont au cœur de notre approche.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Christian",
    role: "Entrepreneur",
    description: "Entrepreneur dynamique et visionnaire, Christian a une connaissance approfondie du marché rwandais et des opportunités qu'il offre. Il est le moteur de notre développement et de notre ancrage local. Sa connaissance des enjeux locaux est également au cœur de notre approche.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Barbara",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Brice",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Ernest",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Alain",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Katia",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Noussi",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Tommy",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Xuan",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "KONGNI Colince",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Benrardin",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Rosine",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const Team = () => {
  return (
    <div className="pt-16 bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-black">
        <img 
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Notre équipe"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Notre Équipe</h1>
            <p className="text-xl">Une équipe multiculturelle passionnée</p>
          </div>
        </div>
      </div>

      {/* Team Introduction */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Chez arch-deco, nous sommes convaincus que la diversité est une source de créativité et d'innovation. 
            Notre équipe réunit des talents venus d'Afrique, d'Europe et d'Asie, chacun apportant sa propre expertise et sa sensibilité.
          </p>
        </div>

        {/* Key Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <Globe className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Diversité Culturelle</h3>
            <p className="text-gray-600">Une équipe internationale riche en perspectives</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <Briefcase className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expertise</h3>
            <p className="text-gray-600">Des professionnels qualifiés et expérimentés</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
            <p className="text-gray-600">Une synergie d'équipe pour des résultats exceptionnels</p>
          </motion.div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                {member.role && (
                  <p className="text-red-600 mb-2">{member.role}</p>
                )}
                {member.description && (
                  <p className="text-gray-600 text-sm">{member.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
