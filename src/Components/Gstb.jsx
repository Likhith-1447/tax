import React from 'react';
import { FaFileAlt, FaCloudUploadAlt, FaCheckCircle } from "react-icons/fa";
import { FaChartLine, FaBuilding, FaRocket } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState ,useEffect } from 'react';
import { motion } from "framer-motion";
import { CheckCircle, Info, FileText, HelpCircle, ArrowRight } from 'lucide-react';
import { MapPin, Phone } from "lucide-react";
const GST_FEATURES = [
  {
    title: "Unique GSTIN",
    description: "Every registered business gets a unique GST Identification Number (GSTIN) for tracking tax payments and compliance."
  },
  {
    title: "Input Tax Credit",
    description: "Registered businesses can claim Input Tax Credit (ITC) on purchases, reducing their overall tax liability."
  },
  {
    title: "Legal Recognition",
    description: "GST registration gives your business legal recognition and enhances credibility with customers and partners."
  },
  {
    title: "Nationwide Business",
    description: "Enables businesses to sell goods and services across India without state-specific tax complications."
  }
];

const eligibilityCriteria = [
  {
    title: "₹20L+ Turnover",
    description: "Businesses earning ₹20 lakhs or more annually (₹10 lakhs in special states).",
    icon: "💼"
  },
  {
    title: "Online Sellers",
    description: "E-commerce sellers and interstate traders must register for GST.",
    icon: "🛒"
  },
  {
    title: "Service Providers",
    description: "Service providers and manufacturers are required to register under GST.",
    icon: "🔧"
  },
  {
    title: "Casual Businesses",
    description: "Casual and non-resident businesses must also register for GST.",
    icon: "🏬"
  }
];


const plans = [
  {
    name: "Basic Plan",
    price: "₹999/year",
    description: "Self-filing guidance",
    features: ["GST Registration", "Basic Support", "Email Assistance"],
    color: "from-blue-600 to-black",
    buttonColor: "bg-blue-600 hover:bg-blue-500",
  },
  {
    name: "Standard Plan",
    price: "₹1,999/year",
    description: "Expert-assisted filing",
    features: [
      "GST Registration",
      "GST Filing (up to 12 returns/year)",
      "Dedicated Support",
    ],
    color: "from-blue-500 to-black",
    buttonColor: "bg-blue-500 hover:bg-blue-400",
  },
  {
    name: "Premium Plan",
    price: "₹4,999/year",
    description: "End-to-end compliance management",
    features: [
      "GST Registration",
      "Dedicated Account Manager",
      "Priority Support",
    ],
    color: "from-blue-400 to-black",
    buttonColor: "bg-blue-400 hover:bg-blue-300",
  },
];



const Gstb = () => {
  const [activeTab, setActiveTab] = useState('process');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };
  const [activeIndex, setActiveIndex] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const [activeSection, setActiveSection] = useState(null);
  
  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };
  
  useEffect(() => {
    const particleContainer = document.getElementById('particle-container');
    if (!particleContainer) return;
    
    for (let i = 0; i < 40; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute w-1 h-1 rounded-full bg-blue-500/20';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      particleContainer.appendChild(particle);
    }
  }, []);
  const [hoveredIndex, setHoveredIndex] = useState(null);


  const ChevronDownIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  
  );
  return (
    <>
      
      <div className="bg-gradient-to-r from-black via-blue-900 to-black text-white py-16 px-4 md:px-16 space-y-6  relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Power Your Business with Seamless GST Solutions</h1>
          <h2 className="text-lg md:text-xl text-blue-200 mb-8">Your GST, Our Responsibility – Secure & Reliable Filing</h2>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Start Your Hassle-Free Filing
          </button>
        </div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-700 via-transparent to-transparent"></div>
      </div>
      
      <section className="bg-black  ">
        <div className="relative min-h-screen bg-gradient-to-b from-gray-950 to-black flex items-center justify-center p-4 overflow-hidden">
      <div id="particle-container" className="absolute inset-0 z-0 overflow-hidden">
        {/* Particles will be added here via JS */}
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            repeatType: "loop"
          }}
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-blue-700/10 blur-3xl"
        />
        <motion.div 
          animate={{ 
            rotate: -360,
            scale: [1, 1.5, 1]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            repeatType: "loop"
          }}
          className="absolute -bottom-1/4 -left-1/4 w-2/3 h-2/3 rounded-full bg-blue-500/10 blur-3xl"
        />
      </div>

      {/* Main content container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full max-w-6xl mx-auto bg-gradient-to-br from-gray-900/90 to-gray-950/90 text-white rounded-2xl shadow-2xl p-10 border border-blue-500/30 hover:border-blue-500/50 transition-all duration-500 backdrop-blur-lg z-10 relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600"></div>
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600"></div>
        
        {/* Background accent elements */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-blue-500/20 blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute -left-20 -bottom-20 w-40 h-40 rounded-full bg-blue-600/20 blur-3xl"
        />

        {/* Logo/Icon Element */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-xl shadow-blue-500/20">
            <span className="text-3xl font-bold">GST</span>
          </div>
        </motion.div>

        {/* Main headline with animation */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-300 via-blue-200 to-blue-400 bg-clip-text text-transparent leading-tight">
            Business Registration
          </h1>
          <motion.div 
            initial={{ width: "0%" }}
            animate={{ width: "180px" }}
            transition={{ duration: 1, delay: 1 }}
            className="h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto mt-3"
          />
        </motion.div>

        {/* Description with animation */}
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-300 mt-8 text-lg md:text-xl text-center max-w-3xl mx-auto leading-relaxed"
        >
          GST Registration is a mandatory process for businesses to legally collect and pay Goods and Services Tax in India. It provides a unique GSTIN and ensures compliance with tax regulations. Businesses with a turnover exceeding ₹20 lakhs must register under GST.
        </motion.p>

        {/* Animated divider */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center my-12"
        >
          <div className="relative w-24 h-px">
            <motion.div 
              animate={{ x: [-30, 30, -30] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px"
            />
          </div>
        </motion.div>

        {/* Features Section with staggered floating cards */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {GST_FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.15 }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.5)",
                borderColor: "rgba(59, 130, 246, 0.5)"
              }}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 p-7 rounded-xl border border-blue-500/20 transition-all duration-300 backdrop-blur-sm group"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mr-4 group-hover:bg-blue-500/30 transition-colors">
                  <span className="text-blue-400 font-bold">{index + 1}</span>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
                  {feature.title}
                </h3>
              </div>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500/60 to-blue-400/30 rounded-full mb-4 group-hover:w-24 transition-all duration-300"></div>
              <p className="text-gray-300 group-hover:text-white transition-colors text-lg">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action Button with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex justify-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden group"
          >
            {/* Button glow effect */}
            <motion.span
              animate={{ 
                boxShadow: ['0 0 0px rgba(59, 130, 246, 0)', '0 0 30px rgba(59, 130, 246, 0.6)', '0 0 0px rgba(59, 130, 246, 0)']
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-xl"
            />
            
            {/* Button background with gradient */}
            <span className="block relative z-10 px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white text-xl font-bold rounded-xl transition-all duration-300 shadow-xl shadow-blue-600/20">
              <span className="flex items-center space-x-2">
                <span>Register Now</span>
                <motion.svg 
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-6 h-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </motion.svg>
              </span>
            </span>
          </motion.button>
        </motion.div>
        
        {/* Animated footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-12 pt-8 border-t border-blue-500/10 text-center"
        >
          <p className="text-blue-300/80 text-sm">
            Start your business journey with proper GST registration today
          </p>
        </motion.div>
      </motion.div>
    </div>
      </section>

      <section className="bg-gray-900 ">
      <div className="w-full h-screen relative overflow-hidden">
  {/* Enhanced background with multiple layers */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-black to-blue-950 -z-20"></div>
  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIzIDAgMi4xOTguOTY4IDIuMTk4IDIuMTk4djE5LjYwNGMwIDEuMjMtLjk2OCAyLjE5OC0yLjE5OCAyLjE5OEgxMy4xOThDMTEuOTY4IDQyIDExIDQxLjAzMiAxMSAzOS44MDJWMjAuMTk4QzExIDE4Ljk2OCAxMS45NjggMTggMTMuMTk4IDE4SDM2eiIgc3Ryb2tlPSIjMjA0M2IwIiBzdHJva2Utb3BhY2l0eT0iLjEiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMzAgMjRjMS4yMyAwIDIuMTk4Ljk2OCAyLjE5OCAyLjE5OHYxOS42MDRjMCAxLjIzLS45NjggMi4xOTgtMi4xOTggMi4xOThINy4xOThDNS45NjggNDggNSA0Ny4wMzIgNSA0NS44MDJWMjYuMTk4QzUgMjQuOTY4IDUuOTY4IDI0IDcuMTk4IDI0SDMweiIgc3Ryb2tlPSIjMjA0M2IwIiBzdHJva2Utb3BhY2l0eT0iLjEiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNNDggMTZjMS4yMyAwIDIuMTk4Ljk2OCAyLjE5OCAyLjE5OHYxOS42MDRjMCAxLjIzLS45NjggMi4xOTgtMi4xOTggMi4xOThIMjUuMTk4QzIzLjk2OCA0MCAyMyAzOS4wMzIgMjMgMzcuODAyVjE4LjE5OEMyMyAxNi45NjggMjMuOTY4IDE2IDI1LjE5OCAxNkg0OHoiIHN0cm9rZT0iIzIwNDNiMCIgc3Ryb2tlLW9wYWNpdHk9Ii4xIiBzdHJva2Utd2lkdGg9Ii41Ii8+PHBhdGggZD0iTTU0IDEyYzEuMjMgMCAyLjE5OC45NjggMi4xOTggMi4xOTh2MTkuNjA0YzAgMS4yMy0uOTY4IDIuMTk4LTIuMTk4IDIuMTk4SDMxLjE5OEMyOS45NjggMzYgMjkgMzUuMDMyIDI5IDMzLjgwMlYxNC4xOThDMjkgMTIuOTY4IDI5Ljk2OCAxMiAzMS4xOTggMTJINTR6IiBzdHJva2U9IiMyMDQzYjAiIHN0cm9rZS1vcGFjaXR5PSIuMSIgc3Ryb2tlLXdpZHRoPSIuNSIvPjwvZz48L3N2Zz4=')] opacity-30 -z-10"></div>
  
  {/* Enhanced glow effects */}
  <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-blue-600 opacity-10 blur-3xl rounded-full -z-10 animate-pulse"></div>
  <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-indigo-600 opacity-10 blur-3xl rounded-full -z-10 animate-pulse"></div>
  
  {/* Main container with improved border */}
  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm text-white overflow-auto">
    {/* Enhanced animated background lines with synchronized pattern */}
    <div className="absolute inset-0 opacity-20">
      {[...Array(10)].map((_, i) => (
        <div 
          key={`h-${i}`} 
          className="absolute h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent w-full"
          style={{ 
            top: `${i * 10}%`, 
            left: 0,
            animation: `pulseGSTLine ${4 + i * 0.5}s ${i * 0.3}s infinite ease-in-out`,
            animationDirection: i % 2 === 0 ? 'normal' : 'reverse'
          }}
        ></div>
      ))}
      {[...Array(10)].map((_, i) => (
        <div 
          key={`v-${i}`} 
          className="absolute w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent"
          style={{ 
            left: `${i * 10}%`, 
            top: 0,
            animation: `pulseGSTLine ${4 + i * 0.5}s ${i * 0.3}s infinite ease-in-out`,
            animationDirection: i % 2 === 0 ? 'normal' : 'reverse'
          }}
        ></div>
      ))}
    </div>

    {/* Content container */}
    <div className="relative z-10 h-full flex flex-col justify-center px-8 py-12">
      <div className="max-w-6xl mx-auto w-full">
        {/* Enhanced title with better glow effect */}
        <div className="text-center mb-12 relative">
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-blue-300 via-blue-100 to-blue-300 bg-clip-text text-transparent pb-2 drop-shadow-lg">
            Who Needs GST?
          </h2>
          <div className="h-1 w-48 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 rounded-full mx-auto mt-2 relative overflow-hidden shadow-lg shadow-blue-500/20">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-400 animate-flowGST"></div>
          </div>
        </div>

        {/* Enhanced list of Eligibility Criteria with synchronized borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {eligibilityCriteria.map((item, index) => (
            <div 
              key={index}
              className="relative bg-gradient-to-br from-gray-900/80 to-blue-950/80 p-6 rounded-xl backdrop-blur-md transform transition-all duration-300 group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Professional animated border with line synchronization */}
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                {/* Top border that syncs with horizontal grid lines */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-flowGSTBorder" 
                     style={{ animationDelay: `${index * 0.2}s` }}></div>
                
                {/* Right border that syncs with vertical grid lines */}
                <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-flowGSTBorder" 
                     style={{ animationDelay: `${(index * 0.2) + 0.5}s` }}></div>
                
                {/* Bottom border that syncs with horizontal grid lines */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-flowGSTBorder" 
                     style={{ animationDelay: `${(index * 0.2) + 1}s` }}></div>
                
                {/* Left border that syncs with vertical grid lines */}
                <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-flowGSTBorder" 
                     style={{ animationDelay: `${(index * 0.2) + 1.5}s` }}></div>
                
                {/* Animated corner highlights that appear at intersections */}
                <div className="absolute top-0 left-0 w-3 h-3 rounded-tl-xl bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 right-0 w-3 h-3 rounded-tr-xl bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 rounded-bl-xl bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 rounded-br-xl bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Glowing border effect on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 overflow-hidden">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 animate-rotateGST"></div>
              </div>
              
              {/* Enhanced inner content */}
              <div className="relative z-10 flex items-start">
                <div className="mr-4 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full p-3 text-2xl shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow duration-300">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-blue-300 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
              
              {/* Enhanced hover effect with synchronized pulse */}
              {hoveredIndex === index && (
                <div className="absolute inset-0 bg-blue-500/5 rounded-xl animate-pulseGST"></div>
              )}
            </div>
          ))}
        </div>

        {/* Enhanced Call-to-Action Button with synchronized border */}
        <div className="flex justify-center mt-10">
          <button className="relative px-8 py-4 rounded-xl overflow-hidden group">
            {/* Button animated border that syncs with grid lines */}
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              {/* Top border */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-flowGSTBorder"></div>
              
              {/* Right border */}
              <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-flowGSTBorder" 
                   style={{ animationDelay: '0.5s' }}></div>
              
              {/* Bottom border */}
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-flowGSTBorder"
                   style={{ animationDelay: '1s' }}></div>
              
              {/* Left border */}
              <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-flowGSTBorder"
                   style={{ animationDelay: '1.5s' }}></div>
            </div>
            
            {/* Button glowing border effect */}
            <div className="absolute inset-0 rounded-xl opacity-30 group-hover:opacity-70 transition-opacity duration-300 overflow-hidden">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 animate-rotateGST"></div>
            </div>
            
            {/* Button inner background */}
            <div className="absolute inset-0.5 rounded-lg bg-gradient-to-br from-blue-900 to-blue-950 group-hover:from-blue-800 group-hover:to-blue-900 transition-all duration-300"></div>
            
            {/* Button text */}
            <span className="relative z-10 text-lg font-bold bg-gradient-to-r from-blue-200 to-blue-300 bg-clip-text text-transparent group-hover:from-blue-100 group-hover:to-blue-200">
              Check Your Eligibility
            </span>
            
            {/* Enhanced shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700">
                <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent animate-shineGST"></div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
    
    </section>
    <section className="bg-black ">
    <div className="w-full max-w-4xl mx-auto bg-gradient-to-r from-black via-blue-900 to-black text-white rounded-2xl shadow-2xl p-8 border-2 border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm">
      {/* Enhanced Header with Badge */}
      <div className="relative mb-8">
        <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          How to Register for GST with TaxTruth
        </h2>
        <p className="text-center text-blue-300 mt-2">Fast, Reliable, and Compliant Registration Services</p>
      </div>

    

      {/* Content Panels */}
      <div className="transition-all duration-300">
        {/* Registration Process Panel */}
        {activeTab === 'process' && (
          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex items-start space-x-4 bg-gray-800/50 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group">
              <div className="bg-blue-900/50 rounded-full p-2 group-hover:bg-blue-800 transition-colors duration-300">
                <CheckCircle className="w-8 h-8 text-blue-400 flex-shrink-0" />
              </div>
              <div>
                <h3 className="font-semibold text-xl text-blue-300">Step 1: Fill Online Application</h3>
                <p className="text-gray-300 mt-1">Complete our simplified online form with your business details. Our intuitive interface makes it easy to enter all required information accurately.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-4 bg-gray-800/50 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group">
              <div className="bg-blue-900/50 rounded-full p-2 group-hover:bg-blue-800 transition-colors duration-300">
                <FileText className="w-8 h-8 text-blue-400 flex-shrink-0" />
              </div>
              <div>
                <h3 className="font-semibold text-xl text-blue-300">Step 2: Upload Documents</h3>
                <p className="text-gray-300 mt-1">Securely upload all required documents through our encrypted portal. Our system validates document format and quality instantly.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-4 bg-gray-800/50 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group">
              <div className="bg-blue-900/50 rounded-full p-2 group-hover:bg-blue-800 transition-colors duration-300">
                <HelpCircle className="w-8 h-8 text-blue-400 flex-shrink-0" />
              </div>
              <div>
                <h3 className="font-semibold text-xl text-blue-300">Step 3: Verification</h3>
                <p className="text-gray-300 mt-1">Our GST experts review your application and documents, ensuring compliance with the latest regulations. Track your application status in real-time.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start space-x-4 bg-gray-800/50 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group">
              <div className="bg-blue-900/50 rounded-full p-2 group-hover:bg-blue-800 transition-colors duration-300">
                <ArrowRight className="w-8 h-8 text-blue-400 flex-shrink-0" />
              </div>
              <div>
                <h3 className="font-semibold text-xl text-blue-300">Step 4: Get GSTIN</h3>
                <p className="text-gray-300 mt-1">Receive your GST Identification Number (GSTIN) via email and SMS. Access your GST certificate through your TaxTruth dashboard anytime.</p>
              </div>
            </div>
          </div>
        )}

        {/* FAQ Panel */}
        {activeTab === 'faq' && (
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-gray-800/50 rounded-xl border border-blue-500/20 overflow-hidden"
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 text-left flex justify-between items-center"
                >
                  <span className="font-medium text-blue-300">{faq.question}</span>
                  <span className={`transform transition-transform duration-300 ${expandedFaq === index ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div 
                  className={`px-4 transition-all duration-300 ${
                    expandedFaq === index ? 'max-h-40 pb-4 opacity-100' : 'max-h-0 overflow-hidden opacity-0'
                  }`}
                >
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    

      {/* Call-to-Action Button */}
      <div className="flex justify-center mt-8">
        <button className="relative overflow-hidden group px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <span className="relative z-10">Start Your GST Registration</span>
          <span className="absolute inset-0 h-full w-full scale-0 rounded-lg bg-blue-700 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"></span>
        </button>
      </div>
    </div>
      </section>

      <section className="bg-black  ">
      <div className="min-h-screen flex flex-col justify-center items-center bg-black p-6">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-8"
      >
        Choose the Right Plan for Your Business
      </motion.h2>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`bg-gradient-to-b ${plan.color} text-white p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-blue-500/20 hover:border-blue-500/50`}
          >
            {/* Plan Name */}
            <h3 className="text-2xl font-bold mb-4 text-blue-300">
              {plan.name}
            </h3>

            {/* Price */}
            <p className="text-3xl font-extrabold text-cyan-300 mb-4">
              {plan.price}
            </p>

            {/* Description */}
            <p className="text-gray-300 mb-6 flex items-center">
              <FaCheckCircle className="text-green-400 mr-2" /> {plan.description}
            </p>

            {/* Features List */}
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center text-gray-300">
                  <FaCheckCircle className="text-green-400 mr-2" /> {feature}
                </li>
              ))}
            </ul>

            {/* Call-to-Action Button */}
            <button
              className={`w-full ${plan.buttonColor} text-black font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30`}
            >
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </div>
      </section>

<section className="bg-black ">
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.2 }}
  className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-black via-blue-950 to-black py-16 px-4"
>
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, delay: 0.2 }}
    className="bg-gradient-to-br from-black via-blue-900/40 to-black text-white p-10 md:p-12 rounded-3xl shadow-2xl w-full max-w-5xl mx-auto border-2 border-blue-500/30 hover:border-blue-400/60 transition-all duration-500 backdrop-blur-lg relative overflow-hidden"
  >
    {/* Background Effects */}
    <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
    
    {/* Decorative elements */}
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
    
    {/* Content Container */}
    <div className="relative z-10">
      {/* Title with animated underline */}
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent mb-4">
          Get in Touch
        </h2>
        <motion.div 
          className="h-1 w-24 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "6rem" }}
          transition={{ duration: 1.2, delay: 0.8 }}
        ></motion.div>
      </motion.div>

      {/* Two Column Layout for larger screens */}
      <div className="grid md:grid-cols-2 gap-10 md:gap-16">
        {/* Left Column - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-8"
        >
          {/* Phone Numbers */}
          <div className="group hover:translate-x-1 transition-transform duration-300">
            <div className="flex items-center space-x-4 mb-2">
              <div className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center border border-blue-500/30 shadow-lg">
                <span className="text-2xl text-blue-300">📞</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-200">Call Us</h3>
            </div>
            <div className="ml-16 space-y-2">
              <a
                href="tel:+918938829911"
                className="block text-blue-300 hover:text-cyan-300 transition-colors duration-300 hover:underline"
              >
                +91 89388 29911
              </a>
              <a
                href="tel:+919897233327"
                className="block text-blue-300 hover:text-cyan-300 transition-colors duration-300 hover:underline"
              >
                +91 98972 33327
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="group hover:translate-x-1 transition-transform duration-300">
            <div className="flex items-center space-x-4 mb-2">
              <div className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center border border-blue-500/30 shadow-lg">
                <span className="text-2xl text-blue-300">📧</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-200">Email Us</h3>
            </div>
            <div className="ml-16">
              <a
                href="mailto:taxtruths2024@gmail.com"
                className="text-blue-300 hover:text-cyan-300 transition-colors duration-300 hover:underline"
              >
                taxtruths2024@gmail.com
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="group hover:translate-x-1 transition-transform duration-300">
            <div className="flex items-center space-x-4 mb-2">
              <div className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center border border-blue-500/30 shadow-lg">
                <span className="text-2xl text-blue-300">🕒</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-200">Office Hours</h3>
            </div>
            <div className="ml-16 text-gray-300 space-y-2">
              <p>
                Monday - Saturday: <span className="font-medium text-blue-200">10:00 AM – 6:00 PM</span>
              </p>
              <p>
                Sunday: <span className="font-medium text-blue-200">9:00 AM – 12:00 PM</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Location */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="space-y-8"
        >
          {/* Location */}
          <div className="group hover:translate-x-1 transition-transform duration-300">
            <div className="flex items-center space-x-4 mb-2">
              <div className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center border border-blue-500/30 shadow-lg">
                <span className="text-2xl text-blue-300">🏢</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-200">Visit Us</h3>
            </div>
            <div className="ml-16">
              <p className="text-gray-300 mb-3">
                1248, Hira Lal Building, Meerut, Uttar Pradesh 250002, India
              </p>
              <a
                href="https://www.google.com/maps/place/Hira+Lal+Building/@28.990944,77.711712,17z/data=!4m6!3m5!1s0x390c6553340643c3:0x515c8a28d3de7f71!8m2!3d28.9909441!4d77.7117118!16s%2Fg%2F11h4b99j4n?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-blue-900/40 hover:bg-blue-800/60 text-blue-300 hover:text-cyan-300 px-4 py-2 rounded-lg transition-all duration-300 border border-blue-500/30 shadow-md"
              >
                <span>View on Google Maps</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-4 ml-16 rounded-xl overflow-hidden border-2 border-blue-500/30 shadow-xl"
          >
            <div className="w-full h-48 bg-blue-900/20 flex items-center justify-center">
            <div className="w-full max-w-4xl mx-auto">
      <div className="aspect-video relative w-full h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3489.8794173407273!2d77.711712!3d28.990944!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c6553340643c3%3A0x515c8a28d3de7f71!2sHira%20Lal%20Building!5e0!3m2!1sen!2sin!4v1742101762031!5m2!1sen!2sin"
          className="absolute inset-0 w-full h-full border-0 rounded-lg shadow-lg"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Hira Lal Building Map Location"
        />
      </div>
    </div>
            </div>
          </motion.div> 
        </motion.div>
      </div>

      {/* Footer element */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mt-12 pt-6 border-t border-blue-500/20 text-center text-blue-400/70 text-sm"
      >
        We look forward to assisting you with your tax needs
      </motion.div>
    </div>
  </motion.div>
</motion.div>
  </section>

      <footer className="bg-black text-white py-12 px-4 md:px-16 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Tax<span className="text-purple-400">Truth</span></h3>
              <p className="text-gray-400 mb-4">
                India's largest tax and financial services platform
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-blue-400">Products</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">MaxiTC</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Enterprise</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">TaxCloud</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">E-Invoicing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">GST Software</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-blue-400">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Guides</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Webinars</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">API Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-blue-400">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Partners</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} TaxTruth. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Gstb;