import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
  {
    title: 'Post Your Task Effortlessly',
    description: 'Easily create and share your freelancing tasks with our streamlined task submission form.',
    image: '/banner4.png',
  },
  {
    title: 'Connect with Skilled Freelancers',
    description: 'Browse freelancer profiles and choose the right expert to get your job done efficiently.',
    image: '/banner3.png',
  },
  {
    title: 'Manage & Update Tasks Anytime',
    description: 'Stay in control — update or remove tasks as your requirements evolve.',
    image: 'https://i.ibb.co/6JTJZhBh/20250607-1617-image.png',
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
          <div key={index} className="relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-[#003366] text-shadow-amber-600 text-center p-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">{slide.title}</h2>
              <p className="max-w-xl text-sm md:text-base">{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
