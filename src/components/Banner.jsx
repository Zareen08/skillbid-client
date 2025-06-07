import React from 'react';
import Slider from 'react-slick';
import { Typewriter } from 'react-simple-typewriter';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
  {
    titleWords: ['Post Your Task Effortlessly', 'Easily Create Tasks', 'Share Your Projects'],
    description: 'Streamline your freelancing workflow with ease and speed.',
    image: '/banner1.png',
  },
  {
    titleWords: ['Find Skilled Freelancers', 'Connect with Experts', 'Hire the Best Talent'],
    description: 'Choose the right expert to get your job done efficiently.',
    image: '/banner2.png',
  },
  {
    titleWords: ['Manage & Update Tasks', 'Stay in Control', 'Edit Anytime'],
    description: 'Update or remove tasks as your requirements evolve.',
    image: '/banner4.png',
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
  };

  return (
    <div className="max-w-6xl mx-auto mt-6 rounded-xl overflow-hidden shadow-lg">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[400px]">
            <div
              className="absolute inset-0 flex flex-col justify-center items-center text-[#003366] text-shadow-2xs text-center p-6 z-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
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
              <p className="max-w-xl text-sm md:text-base">{slide.description}</p>
            </div>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
