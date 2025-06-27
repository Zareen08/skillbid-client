import React from 'react';

const AboutUs = () => {
  return (
    <section className="max-w-3xl mx-auto p-10 bg-base rounded-xl shadow-md mt-12 mb-12">
      <h1 className="text-4xl font-extrabold mb-8 text-[#bbb5dd] text-center">About Us</h1>
      <p className="text-lg text-[#5f5a7c] mb-6 leading-relaxed">
        Welcome to our website! We are dedicated to providing the best services and solutions for our customers.
      </p>
      <p className="text-lg text-[#5f5a7c] mb-6 leading-relaxed">
        Our team consists of experienced professionals passionate about technology and innovation. We aim to deliver quality and build long-lasting relationships with our clients.
      </p>
      <p className="text-lg text-[#5f5a7c] leading-relaxed">
        Thank you for visiting us. If you have any questions or want to get in touch, please visit our <a href="/contact" className="text-[#bbb5dd] font-semibold hover:underline">Contact Us</a> page.
      </p>
    </section>
  );
};

export default AboutUs;
