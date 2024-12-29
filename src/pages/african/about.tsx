import React from 'react';

const About = () => {
  const leaders = [
    {
      name: "Nelson Mandela",
      years: "1918–2013",
      country: "South Africa",
      legacy: "Leader of the anti-apartheid movement..."
    },
    {
      name: "Kwame Nkrumah",
      years: "1909–1972",
      country: "Ghana",
      legacy: "Ghana's first president, a champion of pan-Africanism, and key figure in establishing the African Union."
    },
    // ... other leaders data
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About <span className="text-yellow-500">KMT</span>
            </h1>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          </div>

          {/* Why KMT Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Why KMT?</h2>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <p className="text-gray-700 leading-relaxed">
                KMT Shop is more than an e-commerce platform; it is a celebration of African heritage
                and excellence. The name <span className="font-semibold text-yellow-600">"KMT"</span>, 
                derived from <span className="font-semibold text-yellow-600">"Kamite"</span>, honors 
                the identity and dignity of African people before the era of colonialism...
              </p>
            </div>
          </section>

          {/* Historical Figures Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">African History</h2>
            <p className="text-gray-700 mb-8">
              Africa's history is filled with courageous individuals who shaped the continent's legacy
              through their sacrifices, leadership, and vision. Below, we honor some of the most notable figures:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {leaders.map((leader, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                  <div className="p-6">
                    <div className="flex flex-col">
                      <h3 className="text-xl font-bold text-gray-900 hover:text-yellow-600 transition-colors">
                        {leader.name}
                        <span className="text-sm font-normal text-gray-500 ml-2">
                          ({leader.years})
                        </span>
                      </h3>
                      <div className="mt-2 space-y-2">
                        <p className="text-sm text-gray-600">
                          <span className="font-medium text-gray-700">Country:</span> {leader.country}
                        </p>
                        <p className="text-sm text-gray-600">
                          <span className="font-medium text-gray-700">Legacy:</span> {leader.legacy}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Updates Section */}
          <section className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">African Updates</h3>
            <p className="text-gray-700">
              This section will keep you informed about Africa's current achievements...
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;