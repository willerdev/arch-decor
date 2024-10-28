import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  image: string;
  style: string;
}

interface ProjectSectionProps {
  designer: string;
  projects: Project[];
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ designer, projects }) => {
  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Réalisations de {designer}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="h-64 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
                {project.style}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;