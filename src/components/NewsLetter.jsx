import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email.includes('@')) {
      toast.error('Please enter a valid email!');
      return;
    }

    try {
      const res = await fetch('https://skillbid-server-site.vercel.app/newsletter', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success('Subscribed successfully!');
        setEmail('');
      } else {
        toast.error(data.message || 'Subscription failed.');
      }
    } catch (err) {
      toast.error('Server error. Try again later.');
      console.error(err);
    }
  };

  return (
    <div className="bg-base py-16 px-4 md:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#5f5a7c] mb-4">Stay Updated</h2>
        <p className="text-gray-600 mb-6">
          Subscribe to our newsletter and never miss updates, tips, and exclusive offers.
        </p>

        <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="email"
            className="w-full md:w-auto px-4 py-2 rounded border border-gray-300 focus:outline-none"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-[#bbb5dd] text-white font-semibold rounded hover:bg-[#a79bd8] transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
