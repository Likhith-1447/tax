import React from 'react';
import { FaFileAlt, FaCloudUploadAlt, FaCheckCircle } from "react-icons/fa";
import { FaChartLine, FaBuilding, FaRocket } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from 'react';
import { FaFileInvoice, FaUserTie, FaCalendarAlt, FaPercentage, FaExclamationTriangle } from "react-icons/fa";
import { motion } from "framer-motion";


const Tdsb = () => {
  const [activeIndex, setActiveIndex] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
    const toggleMobileMenu = () => {
      setMobileMenuOpen(!mobileMenuOpen);
    };
  
    const toggleAccordion = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  

    const categories = [
      {
        icon: <FaBuilding className="text-blue-400 text-4xl group-hover:text-blue-300 transition-colors duration-300" />, 
        title: "Companies, LLPs & Partnership Firms",
        description: "All registered business entities are required to comply with TDS regulations regardless of turnover",
      },
      {
        icon: <FaUserTie className="text-blue-400 text-4xl group-hover:text-blue-300 transition-colors duration-300" />, 
        title: "Sole Proprietors & Individuals",
        description: "Required if turnover exceeds ₹1 Cr for business or ₹50L for professionals",
      },
      {
        icon: <FaFileInvoice className="text-blue-400 text-4xl group-hover:text-blue-300 transition-colors duration-300" />, 
        title: "Entities Making Payments",
        description: "Any entity making payments above threshold limits specified under various sections",
      },
    ];
  
   
  
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1
        }
      }
    };
    const tdsData = [
      {
        paymentType: "Salary",
        section: "192",
        rate: "As per Income Tax Slabs",
        threshold: "₹2,50,000 (Basic Exemption)",
      },
      {
        paymentType: "Interest on Securities",
        section: "193",
        rate: "10%",
        threshold: "₹10,000",
      },
      {
        paymentType: "Dividends",
        section: "194",
        rate: "10%",
        threshold: "₹5,000",
      },
      {
        paymentType: "Interest (Other than Securities)",
        section: "194A",
        rate: "10%",
        threshold: "₹40,000 (₹50,000 for Senior Citizens)",
      },
      {
        paymentType: "Rent",
        section: "194I",
        rate: "2% (Machinery) / 10% (Land/Building)",
        threshold: "₹2,40,000",
      },
      {
        paymentType: "Professional Fees",
        section: "194J",
        rate: "10%",
        threshold: "₹30,000",
      },
    ];
    
    // Animation Variants
    const containerVariantss = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
        },
      },
    };
    
    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    };
    const advantages = [
      {
        icon: "📜", // Futuristic document icon
        title: "Ensures Tax Compliance",
        description: "Avoid penalties and legal issues by adhering to TDS regulations.",
      },
      {
        icon: "💼", // Briefcase icon for credibility
        title: "Strengthens Financial Credibility",
        description: "Build trust with lenders and partners for loans and contracts.",
      },
      {
        icon: "💰", // Money bag icon for refunds
        title: "Facilitates Tax Refunds",
        description: "Help employees and vendors claim tax refunds easily.",
      },
      {
        icon: "⏳", // Hourglass icon for avoiding last-minute burdens
        title: "Prevents Last-Minute Burdens",
        description: "Avoid last-minute tax burdens during return filing.",
      },
    ];
  
  
  return (
    <>
     
          
          <div className="bg-gradient-to-r from-black via-blue-900 to-black text-white py-16 px-4 md:px-16 space-y-6  relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">TDS Compliance & Filing for Businesses </h1>
          <h2 className="text-lg md:text-xl text-blue-200 mb-8">Ensure Seamless Tax Compliance & Avoid Penalties </h2>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          Simplify TDS Filing
          </button>
        </div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-700 via-transparent to-transparent"></div>
      </div>
<section>
<div className="min-h-screen bg-gradient-to-b from-black to-gray-900 p-8 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header Section with enhanced styling */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <h2 className="text-4xl md:text-5xl font-bold relative">
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">
                TDS Compliance
              </span>
              <span className="text-white"> & Filing</span>
            </h2>
            <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-blue-300 mt-2 rounded-full"></div>
          </motion.div>
          
          <motion.p 
            className="max-w-3xl mx-auto text-gray-300 mt-6 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            TDS (Tax Deducted at Source) is a crucial tax compliance mechanism where tax is deducted at the time of payment. Ensuring proper TDS compliance helps prevent penalties and maintains financial integrity.
          </motion.p>
        </div>
        
        {/* Who needs to comply section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3 
            className="text-2xl font-bold text-center mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span className="text-blue-400">Who Needs</span> to Comply?
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div 
                key={index} 
                className="group bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 hover:border-blue-500 transition-all duration-300"
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="h-1 w-full bg-blue-600"></div>
                <div className="p-8">
                  <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6 bg-blue-900 bg-opacity-30 rounded-full">
                    {category.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-white text-center mb-3">
                    {category.title}
                  </h4>
                  <p className="text-gray-400 text-center text-sm">
                    {category.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
</section>


<section>
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-6xl">
          {/* Header Section */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold relative inline-block">
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">
                TDS Rates
              </span>
              <span className="text-white ml-2">& Thresholds</span>
              <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-blue-300 mt-2 rounded-full"></div>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Tax Deducted at Source (TDS) rates vary based on payment type and recipient status.
              Here's a comprehensive guide to the most common TDS categories.
            </p>
          </motion.div>

          {/* Table with enhanced styling */}
          <motion.div
            className="overflow-hidden rounded-xl shadow-2xl border border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-900 to-blue-700">
                    <th className="py-4 px-6 text-left text-white font-semibold text-lg">Payment Type</th>
                    <th className="py-4 px-6 text-left text-white font-semibold">Section</th>
                    <th className="py-4 px-6 text-left text-white font-semibold">TDS Rate</th>
                    <th className="py-4 px-6 text-left text-white font-semibold">Threshold</th>
                  </tr>
                </thead>
                <motion.tbody
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {tdsData.map((item, index) => (
                    <motion.tr
                      key={index}
                      variants={itemVariants}
                      className={`border-b border-gray-800 ${
                        index % 2 === 0 ? "bg-gray-900" : "bg-gray-800"
                      } hover:bg-blue-900 hover:bg-opacity-30 transition-colors duration-200`}
                    >
                      <td className="py-4 px-6 text-white font-medium">{item.paymentType}</td>
                      <td className="py-4 px-6">
                        <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                          {item.section}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-blue-300 font-semibold">{item.rate}</td>
                      <td className="py-4 px-6 text-gray-400">{item.threshold}</td>
                    </motion.tr>
                  ))}
                </motion.tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
      </section>
<section className="bg-gradient-to-b from-gray-900 to-black text-white py-16 px-4 md:px-16">
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-6xl">
          {/* Header Section */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold relative inline-block">
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">
                Why is TDS Compliance Important for Businesses?
              </span>
              <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-blue-300 mt-2 rounded-full"></div>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              TDS compliance is not just a legal requirement—it’s a cornerstone of financial health and credibility for businesses.
            </p>
          </motion.div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-900 via-blue-900/40 to-gray-900 p-6 rounded-2xl shadow-2xl border border-blue-800/30 hover:border-blue-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                {/* Futuristic Icon */}
                <div className="text-4xl mb-4 text-cyan-400">{advantage.icon}</div>

                {/* Benefit Title */}
                <h3 className="text-2xl font-bold text-cyan-300 mb-2">{advantage.title}</h3>

                {/* Benefit Description */}
                <p className="text-gray-300 text-lg">{advantage.description}</p>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 animate-rotateGST"></div>
                </div>
              </motion.div>
            ))}
          </div>
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
  )
}

export default Tdsb
