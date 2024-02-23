'use client'

import React, { useState } from 'react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6">{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md" />
          </div>
          {!isLogin && (
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">Confirm Password</label>
              <input type="password" id="confirmPassword" name="confirmPassword" className="mt-1 p-2 w-full border rounded-md" />
            </div>
          )}
          <div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md w-full">
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </div>
        </form>
        <p className="text-sm mt-4">
          {isLogin ? 'Don\'t have an account? ' : 'Already have an account? '}
          <a href="#" onClick={toggleForm} className="text-blue-500"> {isLogin ? 'Sign up' : 'Login'}</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
