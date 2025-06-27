import React from 'react';

const TrustedBy = () => {
  
  const brands = [
    { 
      name: "Upwork", 
      logo: "https://cdn.worldvectorlogo.com/logos/upwork-1.svg",
      url: "https://www.upwork.com"
    },
    { 
      name: "Fiverr", 
      logo: "https://cdn.worldvectorlogo.com/logos/fiverr-1.svg",
      url: "https://www.fiverr.com"
    },
    { 
      name: "Toptal", 
      logo: "https://cdn.worldvectorlogo.com/logos/toptal-1.svg",
      url: "https://www.toptal.com"
    },
    { 
      name: "Freelancer.com", 
      logo: "https://cdn.worldvectorlogo.com/logos/freelancer-1.svg",
      url: "https://www.freelancer.com"
    },
    { 
      name: "PeoplePerHour", 
      logo: "https://cdn.worldvectorlogo.com/logos/peopleperhour-1.svg",
      url: "https://www.peopleperhour.com"
    },
    { 
      name: "Guru", 
      logo: "https://cdn.worldvectorlogo.com/logos/guru-1.svg",
      url: "https://www.guru.com"
    }
  ];

  return (
    <section className="bg-base dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#5f5a7c] dark:text-purple-200 mb-4">
            Trusted By Leading Platforms
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
            We partner with the most respected platforms in the freelance industry
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-center">
          {brands.map((brand, index) => (
            <a 
              key={index}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center"
              aria-label={`Visit ${brand.name}`}
            >
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 h-24 flex items-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-10 object-contain max-w-full grayscale hover:grayscale-0 transition duration-500"
                  loading="lazy"
                />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            All trademarks are the property of their respective owners
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;