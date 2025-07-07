import React, { useState } from 'react';
import { User, Clock, TrendingUp, Eye, EyeOff } from 'lucide-react';

const Register = () => {
  const [isStudent, setIsStudent] = useState(false); 
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });
      
      const result = await response.text();
      
      if (result === "Success") {
        alert('Login successful!');
       
      } else {
        alert('Incorrect password! Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please try again.');
    }
  };

  const handleGoogleLogin = () => {
    
    console.log('Google login clicked');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex relative">
  
      <div className="flex-1 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 p-8 flex flex-col justify-center items-center text-white relative overflow-hidden rounded-tr-[80px]">
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-md text-center">
          
          <div className="mb-8">
            <div className="bg-white rounded-2xl p-4 inline-block mb-4">
              <div className="flex items-center justify-center">
                <div className="text-blue-600 font-bold text-2xl">
                  CAMPUS
                </div>
              </div>
              <div className="flex items-center justify-center -mt-1">
                <div className="text-blue-600 font-bold text-2xl">
                  C<span className="text-orange-500">O</span>RE
                </div>
              </div>
              <div className="flex justify-center mt-1">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          
          <h1 className="text-3xl font-bold mb-4">
            Welcome to Your Academic Journey
          </h1>
          <p className="text-lg mb-8 opacity-90">
            Manage your courses, track your schedule, and stay organized throughout your academic term with our comprehensive management platform.
          </p>

          
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-2">
                <User className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="font-semibold text-sm">Course Management</h3>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-2">
                <Clock className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="font-semibold text-sm">Schedule Tracking</h3>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-2">
                <TrendingUp className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="font-semibold text-sm">Progress Analytics</h3>
            </div>
          </div>

          
          <div className="flex justify-center space-x-2 mb-8">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-3 h-3 bg-white bg-opacity-50 rounded-full"></div>
            <div className="w-3 h-3 bg-white bg-opacity-50 rounded-full"></div>
          </div>

          <div className="bg-white bg-opacity-20 rounded-lg p-4 text-sm">
            <p className="mb-2">
              "As a professor, I appreciate how simple it is to communicate schedule changes to my students. The platform is intuitive and saves me hours each week."
            </p>
            <p className="font-semibold">- Dr. Michael T., Engineering Faculty</p>
          </div>
        </div>
      </div>

      
      <div className="w-96 bg-white p-8 flex flex-col">
        
        <div className="flex bg-gray-100 rounded-lg p-1 mb-8">
          <button
            onClick={() => setIsStudent(true)}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              isStudent 
                ? 'bg-white text-gray-900 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Student
          </button>
          <button
            onClick={() => setIsStudent(false)}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              !isStudent 
                ? 'bg-blue-600 text-white shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Faculty
          </button>
        </div>

        {/* Login Form */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Logging in as {isStudent ? 'Student' : 'Faculty'}
            </h2>
          </div>

          <div className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                {isStudent ? 'Student ID or Email' : 'Faculty ID or Email'}
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={`Enter your ${isStudent ? 'Student' : 'Faculty'} ID or email`}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                  required
                />
                <User className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
              </div>
            </div>

            
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <button
                  type="button"
                  className="text-sm text-blue-600 hover:text-blue-500"
                  onClick={() => alert('Password reset functionality would go here')}
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

           
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700">
                Remember me
              </label>
            </div>

            
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Login
            </button>

           
            <div className="text-center text-sm text-gray-500 my-4">
              or continue with
            </div>

            {/* Google Login */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Log In with Google</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-8 py-4">
        <div className="flex justify-between items-center text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-sm"></div>
            </div>
            <span>Designed and developed by ZoroTeam</span>
          </div>
          <div className="text-center">
            <span className="font-medium text-gray-900">Priyanshu Dixit</span>
            <div className="text-xs text-gray-500">IIIT NAGPUR</div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">©</span>
            </div>
            <span>2025 Zoro innovations</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;