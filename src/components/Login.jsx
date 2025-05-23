import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router';
import { toast } from 'react-toastify';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../Firebase/firebase.config';
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success('Logged in successfully!');
        navigate(from, { replace: true });
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        toast.success('Google sign-in successful!');
        navigate(from, { replace: true });
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#003366] p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#003366]">Login to SkillBid</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#3DB34B]"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#3DB34B]"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="text-right text-sm text-[#3DB34B] hover:underline">
            <Link to="/auth/forgot-password">Forgot Password?</Link>
          </div>
          <button
            className="w-full bg-[#3DB34B] text-white p-2 rounded hover:bg-[#2b9c3b] transition duration-200"
            type="submit"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center text-sm">
          Don’t have an account?{' '}
          <Link to="/auth/register" className="text-[#3DB34B] hover:underline">
            Register
          </Link>
        </div>
        <div className="mt-6 text-center">
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700 transition duration-200"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
