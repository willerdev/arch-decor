import React from 'react';

const About = () => {
  const leaders = [
    {
      name: "Nelson Mandela",
      years: "1918-2013",
      country: "South Africa",
      legacy: "Leader of the anti-apartheid movement, first Black president of South Africa, and champion of reconciliation."
    },
    {
      name: "Kwame Nkrumah",
      years: "1909-1972",
      country: "Ghana",
      legacy: "Ghanas first president, a champion of pan-Africanism, and key figure in establishing the African Union."
    },
    {
      name: "Queen Nzinga",
      years: "1583-1663",
      country: "Ndongo and Matamba (modern-day Angola)",
      legacy: "Warrior queen who resisted Portuguese colonization and fought for freedom."
    },
    {
      name: "Patrice Lumumba",
      years: "1925-1961",
      country: "Democratic Republic of Congo",
      legacy: "Congos first prime minister and a martyr for African unity."
    },
    {
      name: "Samori Toure",
      years: "1830-1900",
      country: "West Africa (Guinea, Mali, Cote dIvoire)",
      legacy: "Military leader and founder of the Wassoulou Empire who resisted French colonization."
    },
    {
      name: "Haile Selassie I",
      years: "1892-1975",
      country: "Ethiopia",
      legacy: "Ethiopian emperor, anti-colonial leader, and founding figure of the African Union."
    },
    {
      name: "Thomas Sankara",
      years: "1949-1987",
      country: "Burkina Faso",
      legacy: "Revolutionary leader who championed self-reliance, womens rights, and anti-corruption."
    },
    {
      name: "Wangari Maathai",
      years: "1940-2011",
      country: "Kenya",
      legacy: "Nobel laureate and environmental activist who founded the Green Belt Movement."
    },
    {
      name: "Desmond Tutu",
      years: "1931-2021",
      country: "South Africa",
      legacy: "Anti-apartheid cleric and advocate for restorative justice and healing."
    },
    {
      name: "Julius Nyerere",
      years: "1922-1999",
      country: "Tanzania",
      legacy: "Tanzanias first president and a proponent of African socialism and unity."
    },
    {
      name: "Shaka Zulu",
      years: "1787-1828",
      country: "Zulu Kingdom (modern-day South Africa)",
      legacy: "Military innovator who transformed the Zulu Kingdom into a formidable power."
    },
    {
      name: "Steve Biko",
      years: "1946-1977",
      country: "South Africa",
      legacy: "Leader of the Black Consciousness Movement and a symbol of resistance during apartheid."
    },
    {
      name: "Yaa Asantewaa",
      years: "1840-1921",
      country: "Ashanti Empire (modern-day Ghana)",
      legacy: "Queen Mother who led the War of the Golden Stool against British forces."
    },
    {
      name: "Chinua Achebe",
      years: "1930-2013",
      country: "Nigeria",
      legacy: "Author of Things Fall Apart, a seminal work on African society and colonialism."
    }
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
                and excellence. The name <span className="font-semibold text-yellow-600">KMT</span>, 
                derived from <span className="font-semibold text-yellow-600">Kamite</span>, honors 
                the identity and dignity of African people before the era of colonialism...
              </p>
            </div>
          </section>

          {/* Historical Figures Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">African History</h2>
            <p className="text-gray-700 mb-8">
              Africas history is filled with courageous individuals who shaped the continents legacy
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
              This section will keep you informed about Africas current achievements...
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;