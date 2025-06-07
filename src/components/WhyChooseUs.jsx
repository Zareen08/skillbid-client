import React from 'react';
import { Briefcase, UserCheck, Clock } from 'lucide-react';
import { Fade, Zoom } from 'react-awesome-reveal';

const features = [
  {
    icon: <Briefcase size={32} className="text-[#3DB34B]" />,
    title: 'Easy Task Posting',
    description: 'Create and share tasks in just a few clicks. Our platform is intuitive and user-friendly.',
  },
  {
    icon: <UserCheck size={32} className="text-[#3DB34B]" />,
    title: 'Verified Freelancers',
    description: 'Choose from a pool of trusted and skilled freelancers ready to deliver quality work.',
  },
  {
    icon: <Clock size={32} className="text-[#3DB34B]" />,
    title: 'Flexible Deadlines',
    description: 'Manage and update your tasks anytime. Stay in full control of your project timeline.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <Fade cascade damping={0.2}>
          <h2 className="text-4xl md:text-6xl mb-4">Why Choose SkillBid?</h2>
          <p className="text-gray-600 mb-10">
            We make freelancing easy, reliable, and efficient for everyone.
          </p>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, id) => (
            <Zoom key={id} triggerOnce delay={id * 100}>
              <div className="p-6 border border-gray-200 rounded-xl shadow hover:shadow-md transition">
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </Zoom>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
