import React, { useContext, useState } from 'react';
import { signInWithPopup, GoogleAuthProvider, getAuth } from 'firebase/auth';
import { useNavigate, Link } from 'react-router';
import { toast } from 'react-toastify';
import app from '../Firebase/firebase.config';
import { AuthCon } from '../Provider/AuthProvider'; 

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Register = () => {
  const { createUser, setUser, updateUser } = useContext(AuthCon);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    
    if (!/[A-Z]/.test(password)) {
      return setError('Password must include at least one uppercase letter');
    }
    if (!/[a-z]/.test(password)) {
      return setError('Password must include at least one lowercase letter');
    }
    if (password.length < 6) {
      return setError('Password must be at least 6 characters long');
    }

    setError('');

    createUser(email, password)
      .then(result => {
        const user = result.user;
        setUser(user);
        updateUser({
          displayName: name,
          photoURL: photo,
        }).then(() => {
          setUser({ ...user, displayName: name, photoURL: photo });
          toast.success('Registered successfully!');
          navigate('/');
        });
      })
      .catch(err => {
        toast.error(err.message);
      });
  };

  const handleGoogleRegister = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        toast.success('Google sign-in successful!');
        navigate('/');
      })
      .catch(err => {
        toast.error(err.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#003366] p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#003366]">Register for SkillBid</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            name="name"
            required
            className="w-full border border-gray-300 p-2 rounded focus:ring-[#3DB34B]"
            placeholder="Full Name"
          />
          <input
            type="email"
            name="email"
            required
            className="w-full border border-gray-300 p-2 rounded focus:ring-[#3DB34B]"
            placeholder="Email"
          />
          <input
            type="text"
            name="photo"
            required
            className="w-full border border-gray-300 p-2 rounded focus:ring-[#3DB34B]"
            placeholder="Photo URL"
          />
          <input
            type="password"
            name="password"
            required
            className="w-full border border-gray-300 p-2 rounded focus:ring-[#3DB34B]"
            placeholder="Password"
          />
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-[#3DB34B] text-white p-2 rounded hover:bg-[#2b9c3b] transition"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <Link to="/auth/login" className="text-[#3DB34B] hover:underline">Login</Link>
        </div>
        <div className="mt-6 text-center">
          <button
            onClick={handleGoogleRegister}
            className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700"
          >
            Sign up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
