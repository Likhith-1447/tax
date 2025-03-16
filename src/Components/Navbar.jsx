// src/Components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Settings, BookOpen, Phone, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-gray-900 shadow-sm sticky top-0 z-50 border-b border-purple-900">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Tax<span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Truth</span>
          </span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <Link 
            to="/" 
            className="text-gray-300 hover:text-purple-400 font-medium flex items-center transition-colors"
          >
            <Home className="w-5 h-5 mr-2 text-purple-400" />
            Home
          </Link>

          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="text-gray-300 hover:text-purple-400 font-medium flex items-center transition-colors">
              <Settings className="w-5 h-5 mr-2 text-purple-400" />
              Services <ChevronDown className="ml-1" />
            </button>

            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-64 bg-gray-800 shadow-xl rounded-lg z-10 border border-purple-800">
                <div className="py-4">
                  <h3 className="font-bold text-purple-400 px-6 mb-2">INDIVIDUAL Services</h3>
                  <ul className="mb-4">
                    {[
                      { name: 'Income Tax Return (ITR) Filing', link: '/Components/Itr' },
                      { name: 'Tax Savings and Deductions', link: '/tax-savings' },
                      { name: 'Capital Gains Tax Filing', link: '/pages/capital-gains' },
                      { name: 'Freelancer & Consultant Tax Filing', link: '/pages/freelancer' },
                      { name: 'TDS', link: '/Components/Tds' },
                    ].map((item) => (
                      <Link
                        key={item.name}
                        to={item.link}
                        className="block px-6 py-2 hover:bg-purple-900/50 cursor-pointer transition-colors text-gray-300 hover:text-purple-400"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </ul>

                  <h3 className="font-bold text-purple-400 px-6 mb-2 mt-4">Business Services</h3>
                  <ul>
                    {[
                      { name: 'GST Registration & Filing ', link: '/Gstb' },
                      { name: ' Business ITR Filing', link: '/Itrb' },
                      { name: 'TDS Compliance & Filing', link: '/Tdsb' },
                    ].map((item) => (
                      <Link
                        key={item.name}
                        to={item.link}
                        className="block px-6 py-2 hover:bg-purple-900/50 cursor-pointer transition-colors text-gray-300 hover:text-purple-400"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          <Link 
            to="/blogs" 
            className="text-gray-300 hover:text-purple-400 font-medium flex items-center transition-colors"
          >
            <BookOpen className="w-5 h-5 mr-2 text-purple-400" />
            Blogs
          </Link>

          <Link 
            to="/contacts" 
            className="text-gray-300 hover:text-purple-400 font-medium flex items-center transition-colors"
          >
            <Phone className="w-5 h-5 mr-2 text-purple-400" />
            Contact
          </Link>
        </nav>

        <div className="flex gap-4">
          <Link 
            to="/signup" 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-5 py-2 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
          >
            Signup
          </Link>
          
          <Link 
            to="/login" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-5 py-2 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;