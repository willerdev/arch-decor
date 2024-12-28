import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-red-600 mb-4">KMT Shop</h3>
            <p className="text-gray-400">
              Excellence en architecture et décoration d'intérieur depuis 2009.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li><Link to="/architecture" className="text-gray-400 hover:text-white">Architecture</Link></li>
              <li><Link to="/decoration" className="text-gray-400 hover:text-white">Décoration</Link></li>
              <li><Link to="/projets" className="text-gray-400 hover:text-white">Nos Projets</Link></li>
              <li><Link to="/boutique" className="text-gray-400 hover:text-white">Boutique</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Phone size={16} className="mr-2" />
                +33 1 23 45 67 89
              </li>
              <li className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2" />
                contact@kmtshop.biz
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin size={16} className="mr-2" />
                123 Avenue des Arts, Paris
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Arch-Decor. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;