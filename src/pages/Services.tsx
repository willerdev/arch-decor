import React from 'react';

interface Service {
  title: string;
  description: string;
}

const Services = (): JSX.Element => {
  const servicesList: Service[] = [
    {
      title: "Product Catalogs",
      description: "Explore a wide variety of authentic African products, from handcrafted items to contemporary goods."
    },
    {
      title: "Secure Payment Gateways",
      description: "Enjoy peace of mind with secure and versatile payment options, including credit cards, mobile money, and more."
    },
    {
      title: "Global Shipping",
      description: "We deliver African excellence to your doorstep, wherever you are."
    },
    {
      title: "Customer Accounts",
      description: "Easily track orders, manage wish lists, and access personalized recommendations."
    },
    {
      title: "Mobile-Friendly Shopping",
      description: "Experience convenient browsing and shopping across all devices."
    },
    {
      title: "Search Engine Optimization (SEO)",
      description: "Our platform ensures easy discoverability for African brands and products."
    },
    {
      title: "Product Reviews",
      description: "Share and read reviews to help our community make informed decisions."
    },
    {
      title: "24/7 Customer Support",
      description: "Our dedicated team is here to assist you anytime."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;