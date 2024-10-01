import React, {useState, useEffect} from "react";

import axios from '../config/axiosConfig';
// import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function LoginPage({ isLoggedIn, setIsLoggedIn }) {


  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()


  useEffect(() => {
    const token = localStorage.getItem('access_token');
    console.log("Access Token:", token); // Check token
    if (token) {
      setIsLoggedIn(true); // User is logged in if token exists
    } else {
      setIsLoggedIn(false); // User is not logged in
    }
  }, []);
  
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login/', {
        username,
        password,
      });

      // Save JWT token in localStorage or context for future use
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);

      // Redirect to a protected route or dashboard
      console.log('Login successful', response.data);
      setIsLoggedIn(true)
      navigate('/dashboard')
      
    } catch (err) {
      setError('Login failed: Invalid credentials');
    }
  };



  return (
    <section className="flex items-center justify-center">
      <form onSubmit={handleLogin}>
      <div className=" flex items-center font-serif min-h-screen bg-center justify-center">
        <div className=" min-w-[450px] min-h-[400px] px-5 py-5 items-center justify-center rounded-xl mx-10 shadow-md shadow-gray-300 border-t-2">
          <div className="flex flex-col gap-5">
            <h3 className="text-black font-semibold text-2xl text-center shadow-lg py-1">
              Login
            </h3>
            <div className="pt-5">
              <label htmlFor="" className="text-gray-700 text-l font-semibold">
                Userame:
              </label>
              <input
                className="min-w-[300px] px-2 py-1 ml-3 mt-3 rounded-lg focus:outline-none bg-gray-300/50 text-black shadow-md shadow-white/30 text-xl"
                type="text"
                value={username}
                onChange={(e)=> setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="" className="text-gray-700 text-l font-semibold">
                Password:
              </label>
              <input
                className="min-w-[300px] px-2 py-1 ml-3 mt-3 rounded-lg focus:outline-none  bg-gray-300/50 text-black shadow-md shadow-white/30 text-xl"
                type="password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-between pt-3">
              <div>
                <p className="text-blue-800">Create new account!</p>
              </div>
              <div className="">
                <p className="text-red-500">Forgot password?</p>
              </div>
            </div>
            <div>
              {error?<p className="text-red-600">{error}</p>:""}
            </div>
            <div className="w-full text-center mt-3">
              <button
                className="bg-blue-700 rounded-lg items-center text-center px-5 py-2 text-l font-semibold text-white drop-shadow-lg
              hover:bg-blue-900 "
                type="submit"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
      </form>
    </section>
  );
}
