import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Building2, Paintbrush, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://visit-detroit.imgix.net/images/main-images/woodward-avenue-shopping.jpg?auto=compress%2Cformat&crop=focalpoint&fit=min&fp-x=0.3395&fp-y=0.4766&h=630&q=80&w=1200&s=b53276c5435023f48022136ec59423fa",
      title: "KMT Shop",
      subtitle: "Simplifying Shopping, Elevating Style"
    },
    {
      image: "https://hogfurniture.co/cdn/shop/articles/istockphoto-176961787-612x612.jpg?v=1680265453",
      title: "Quality Design",
      subtitle: "Creating Spaces You'll Love"
    },
    {
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04",
      title: "Modern Style",
      subtitle: "Experience the Difference"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url("${slide.image}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
                <p className="text-xl mb-8">{slide.subtitle}</p>
                <Link 
                  to="/contact"
                  className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition duration-300"
                >
                  Contactez-nous
                </Link>
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
        >
          <ArrowRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? 'bg-white w-6' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Building2 className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Architecture</h3>
              <p className="text-gray-600 mb-4">Conception et réalisation de projets architecturaux innovants et durables.</p>
              <Link to="/architecture" className="text-red-600 flex items-center hover:text-red-700">
                En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Paintbrush className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Décoration</h3>
              <p className="text-gray-600 mb-4">Design d'intérieur personnalisé pour créer des espaces uniques et élégants.</p>
              <Link to="/decoration" className="text-red-600 flex items-center hover:text-red-700">
                En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Consultation</h3>
              <p className="text-gray-600 mb-4">Conseils experts pour transformer votre vision en réalité.</p>
              <Link to="/contact" className="text-red-600 flex items-center hover:text-red-700">
                En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
              <p className="text-gray-600 mb-6">
                Arch-Deco est le fruit d'une rencontre entre deux cultures, deux passions et une vision commune : créer des espaces de vie et de travail qui transcendent les frontières. Notre fondateur, architecte français passionné par l'Afrique, a uni ses forces avec un entrepreneur rwandais visionnaire, pour donner naissance à une entreprise unique en son genre.
              </p>
              <p className="text-gray-600 mb-6">
                Ensemble, ils ont bâti une équipe multiculturelle d'architectes, de designers et de constructeurs, partageant la même ambition : concevoir des projets qui allient l'élégance européenne à la richesse culturelle et à la vitalité de l'Afrique.
              </p>
              <Link 
                to="/projets"
                className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition duration-300 inline-block"
              >
                Découvrez nos projets
              </Link>
            </div>
            <div className="relative h-[400px]">
              <img 
                src="https://hogfurniture.co/cdn/shop/articles/istockphoto-176961787-612x612.jpg?v=1680265453" 
                alt="Notre équipe" 
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;