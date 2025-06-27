import React from 'react';
import Slider from 'react-slick';
import { Typewriter } from 'react-simple-typewriter';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router'; 

const slides = [
  {
    titleWords: ['Post Your Task Effortlessly', 'Easily Create Tasks', 'Share Your Projects'],
    description: 'Streamline your freelancing workflow with ease and speed.',
    image: '/banner1.png',
    overlayColor: 'rgba(187, 181, 221, 0.35)',
  },
  {
    titleWords: ['Find Skilled Freelancers', 'Connect with Experts', 'Hire the Best Talent'],
    description: 'Choose the right expert to get your job done efficiently.',
    image: '/banner2.png',
    overlayColor: 'rgba(187, 181, 221, 0.35)',
  },
  {
    titleWords: ['Manage & Update Tasks', 'Stay in Control', 'Edit Anytime'],
    description: 'Update or remove tasks as your requirements evolve.',
    image: '/banner4.png',
    overlayColor: 'rgba(187, 181, 221, 0.35)',
  },
];

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    arrows: false,
    dotsClass: 'slick-dots custom-dots',
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[450px] rounded-2xl overflow-hidden shadow-xl">
            
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
              aria-hidden="true"
            />

            
            <div
              className="absolute inset-0"
              style={{ backgroundColor: slide.overlayColor }}
              aria-hidden="true"
            />

            
            <div className="relative h-full flex flex-col justify-center items-center text-center px-8 z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 [text-shadow:_1px_1px_2px_rgba(255,255,255,0.8)]">
                <Typewriter
                  words={slide.titleWords}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8 [text-shadow:_1px_1px_2px_rgba(255,255,255,0.8)]">
                {slide.description}
              </p>
              <Link
                to="/browsetask"
                className="bg-[#bbb5dd] text-white hover:bg-[#a7a1c9] px-8 py-3 rounded-full font-semibold text-lg transition-colors duration-300 shadow-md"
                aria-label="Get Started"
              >
                Get Started
              </Link>
            </div>
          </div>
        ))}
      </Slider>

      
      <style jsx="true">{`
        :global(.custom-dots) {
          bottom: 20px;
        }
        :global(.custom-dots li button:before) {
          color: #bbb5dd;
          opacity: 0.5;
          font-size: 10px;
        }
        :global(.custom-dots li.slick-active button:before) {
          color: #8a84b0;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Banner;
