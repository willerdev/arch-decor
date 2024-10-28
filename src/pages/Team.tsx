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
    image: "https://lh4.googleusercontent.com/G61bDX-SG5GQ7snXivXuj2WTIWWbDMOR67vrzy33h7yCJ0g2JrFDbvAibiuC_8nLhhP6eKUrBtoKSmtnAaKqp4IpnLYBOEfD9YUp4_3QtV7pBwCkbBjBXpJpBvff-lgKlQ=w1280"
  },
  {
    name: "Christian",
    role: "Entrepreneur",
    description: "Entrepreneur dynamique et visionnaire, Christian a une connaissance approfondie du marché rwandais et des opportunités qu'il offre. Il est le moteur de notre développement et de notre ancrage local. Sa connaissance des enjeux locaux est également au cœur de notre approche.",
    image: "https://lh5.googleusercontent.com/zxgql9qbnt0YFB2TyrXrqTm-ELkl7eZoxmsLEmJLjd9E-xf1dklzSzTB2roMjrhCfYMg2j3RMyt7WiLmDzp91rqztNGFxetR07tnd17A18n-TMFNaYiX6IymkAotoLWo8w=w1280"
  },
  {
    name: "Barbara",
    image: "https://lh5.googleusercontent.com/z07sOIv4eprGyQ8HcskRjdf2HRW-8Xi56Ul_QJzJMhiDWYgXJL8Yien0pD6goRDMBSvBnORh_cB3z6yP4iMAV7h2bfl9MWq1VOnxqh_ZMvP34KVRuKGsZxfPJRZhDv3B9g=w1280"
  },
  {
    name: "Brice",
    image: "https://static.vecteezy.com/system/resources/thumbnails/004/511/281/small_2x/default-avatar-photo-placeholder-profile-picture-vector.jpg"
  },
  {
    name: "Ernest",
    image: "https://static.vecteezy.com/system/resources/thumbnails/004/511/281/small_2x/default-avatar-photo-placeholder-profile-picture-vector.jpg"
  },
  {
    name: "Alain",
    image: "https://lh5.googleusercontent.com/uODoJQC947z2XO3jtzAOK5Q0lWsErHMc5o0-xtHFJjVqDmVtOEhRtkQ1PObYpfyM6eoh9hUJpnLCbsH5sF5ax5bHLJJmOAHVkrMth0wGFGRmL8j7htDONrJum-AzFUTxyw=w1280"
  },
  {
    name: "Katia",
    image: "https://static.vecteezy.com/system/resources/thumbnails/004/511/281/small_2x/default-avatar-photo-placeholder-profile-picture-vector.jpg"
  },
  {
    name: "Noussi",
    image: "https://lh5.googleusercontent.com/raTMzPivMnBrL0xp-S2mJOUEMNgu_RTVEbWKdUgCEI8oE1XZjyK2x0G4Xw7NvwFEonhoDw1YGVSN4j4xp2Rpy2g=w1280"
  },
  {
    name: "Tommy",
    image: "https://static.vecteezy.com/system/resources/thumbnails/004/511/281/small_2x/default-avatar-photo-placeholder-profile-picture-vector.jpg"
  },
  {
    name: "Xuan",
    image: "https://static.vecteezy.com/system/resources/thumbnails/004/511/281/small_2x/default-avatar-photo-placeholder-profile-picture-vector.jpg"
  },
  {
    name: "KONGNI Colince",
    image: "https://static.vecteezy.com/system/resources/thumbnails/004/511/281/small_2x/default-avatar-photo-placeholder-profile-picture-vector.jpg"
  },
  {
    name: "Benrardin",
    image: "https://static.vecteezy.com/system/resources/thumbnails/004/511/281/small_2x/default-avatar-photo-placeholder-profile-picture-vector.jpg"
  },
  {
    name: "Rosine",
    image: "https://static.vecteezy.com/system/resources/thumbnails/004/511/281/small_2x/default-avatar-photo-placeholder-profile-picture-vector.jpg"
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
