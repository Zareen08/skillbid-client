import React, { useContext } from 'react';
import { AuthContex } from './AuthContex';
import { GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import { Link, useNavigate } from 'react-router'; 
import { toast } from 'react-toastify';
import { auth } from '../firebase/firebase.init';

const SignUp = () => {
  const { createUser } = useContext(AuthContex);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const { email, password, name, photo } = Object.fromEntries(formData.entries());

    if (!name || !email || !photo || !password) {
      toast.error('Please fill out all fields.');
      return;
    }

    const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password);
    if (!isValidPassword) {
      toast.error('Password must be at least 6 characters and include both uppercase and lowercase letters.');
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        return updateProfile(user, {
          displayName: name,
          photoURL: photo,
        }).then(() => {
          
          const userProfile = {
            name,
            email,
            photo,
            creationTime: user?.metadata?.creationTime,
            lastSignInTime: user?.metadata?.lastSignInTime,
          };

         
          return fetch('http://localhost:4000/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userProfile),
          });
        });
      })
      .then((res) => res.json())
      .then((data) => {
        console.log('User saved to DB:', data);
        toast.success('Registration successful!');
        navigate('/');
      })
      .catch((error) => {
        console.error('Signup error:', error);
        toast.error(error.message || 'Something went wrong!');
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
    <div>
      <div className="p-12">
        <h1 className="text-6xl mx-auto text-center">Sign Up</h1>
      </div>
      <div className="hero bg-base-200 my-10">
        <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-xl">
          <div className="card-body">
            <form onSubmit={handleSignUp} className="fieldset space-y-2">
              <label className="label">Name</label>
              <input type="text" className="input" name="name" placeholder="Name" required />

              <label className="label">Email</label>
              <input type="email" className="input" name="email" placeholder="Email" required />

              <label className="label">Photo</label>
              <input type="text" className="input" name="photo" placeholder="Photo URL" required />

              <label className="label">Password</label>
              <input type="password" className="input" name="password" placeholder="Password" required />

              <button type="submit" className="btn btn-block text-white bg-[#31983d] mt-4">
                Sign Up
              </button>

              <p className="text-sm text-center mt-4">
                Already have an account?{' '}
                <Link to="/auth/login" className="text-green-600 hover:underline">
                  Log In
                </Link>
              </p>
            </form>
            <div className="mt-6 text-center">
          <button onClick={handleGoogleRegister} className="w-full bg-[#003366] text-white p-2 rounded hover:bg-red-600">
            Sign up with Google
          </button>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
