import React, { useContext } from 'react';
import { AuthContex } from './AuthContex';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Login = () => {
  const { signInUser } = useContext(AuthContex);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value;

    if (!email || !password) {
      toast.error('Please enter both email and password.');
      return;
    }

    signInUser(email, password)
      .then((result) => {
        const signInInfo = {
            email,
            lastSignInTime: result.user?.metadata?.lastSignInTime
        }
        fetch('http://localhost:4000/users',{
            method: 'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(signInInfo)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('after update', data)
        })
        toast.success('Login successful!');
        console.log(result.user);
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message || 'Login failed!');
      });
  };

  return (
    <div>
      <div className="p-12">
        <h1 className="text-6xl mx-auto text-center">Login</h1>
      </div>
      <div className="hero bg-base-200 my-10">
        <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-xl">
          <div className="card-body">
            <form onSubmit={handleSignIn}>
              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" required />

              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" required />

              <div className="mt-2">
                <a className="link link-hover text-sm">Forgot password?</a>
              </div>

              <button type="submit" className="btn btn-block text-white bg-[#31983d] mt-4">
                Login
              </button>

              <p className="text-sm text-center mt-4">
                Don't have an account?{' '}
                <Link to="/auth/signup" className="text-green-600 hover:underline">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
