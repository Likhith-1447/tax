// src/Components/Dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { testimonialsData } from "../data/testimonials";
import {
  
  FileText,
  Upload,
  PhoneCall,
  BadgeCheck,
  CheckCircle,
  BarChart3,
  Calculator,
  ChevronLeft,
  ChevronRight,
  Building2,
  TrendingUp,
} from "lucide-react";
const testimonials = testimonialsData || [];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 py-24 relative overflow-hidden">
  {/* Abstract background shapes */}
  <div className="absolute top-0 left-0 w-full h-full opacity-10">
    <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-blue-400 blur-3xl"></div>
    <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-blue-300 blur-3xl"></div>
    <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full bg-indigo-500 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
  </div>
  
  <div className="container mx-auto px-4 text-center relative z-10">
    <div className="animate-fade-in">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
        Nothing is certain except <span className="text-blue-300">death and taxes.</span>
      </h1>
      <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 font-light">
        India's largest tax and financial services software platform
      </p>
      <div className="w-24 h-1 bg-blue-400 mx-auto mt-8 mb-16"></div>
    </div>
    
    {/* Service Cards */}
    <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
      {/* Card 1 */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-900/30 hover:shadow-xl border border-slate-700/50 group">
        <div className="bg-blue-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transform transition-all duration-300 group-hover:bg-blue-800">
          <BarChart3 className="text-blue-300 w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Individual Services</h3>
        <p className="text-blue-200/80 mb-6">
          Simplified Tax Filing for You
        </p>
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-3 rounded-md w-full font-medium transition-all duration-300 shadow-lg shadow-blue-900/30">
        Get Started with Tax Filing
        </button>
      </div>
      
      {/* Card 2 */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-900/30 hover:shadow-xl border border-slate-700/50 group">
        <div className="bg-blue-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transform transition-all duration-300 group-hover:bg-blue-800">
          <Building2 className="text-blue-300 w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">
          Business Services
        </h3>
        <p className="text-blue-200/80 mb-6">
          Smart Tax Solutions for Businesses
        </p>
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-3 rounded-md w-full font-medium transition-all duration-300 shadow-lg shadow-blue-900/30">
        Discover Business Tax Solutions
        </button>
      </div>
      
      {/* Card 3 */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-900/30 hover:shadow-xl border border-slate-700/50 group">
        <div className="bg-blue-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transform transition-all duration-300 group-hover:bg-blue-800">
          <Calculator className="text-blue-300 w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">
          Calculate Tax Liability
        </h3>
        <p className="text-blue-200/80 mb-6">
          Know your tax liability as per the latest budget updates
        </p>
        <Link
          to="/tax-calculators"
          className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-3 rounded-md w-full font-medium transition-all duration-300 block text-center shadow-lg shadow-blue-900/30"
        >
          Calculate Now
        </Link>
      </div>
    </div>
  </div>
</section>


<section className="py-20 bg-gradient-to-br from-black via-blue-900 to-black">
      <div className="container mx-auto px-4 text-center">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          TaxTruth – Your All-in-One Tax Partner
        </motion.h2>
        <motion.p
          className="text-blue-300 mb-16 text-xl max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Smart, Accurate & Hassle-Free Tax Solutions for Everyone
        </motion.p>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {/* Solution 1 */}
          <motion.div
            className="bg-gradient-to-br from-gray-900 via-blue-900/40 to-gray-900 rounded-2xl shadow-2xl p-6 border border-blue-800/30 hover:border-blue-500/50 transition-all duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5, scale: 1.05 }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-900/20 p-3 rounded-lg mr-3 backdrop-blur-sm">
                <FileText className="text-blue-400 w-6 h-6" />
              </div>
              <h3 className="font-bold text-blue-300">TaxShield</h3>
            </div>
            <p className="text-sm text-gray-300 mb-2">
            Secure ITR Filing for Tax Professionals
            </p>
            <a
              href="#"
              className="text-blue-400 text-sm font-medium hover:underline inline-flex items-center"
            >
              Learn more
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </motion.div>

          {/* Solution 2 */}
          <motion.div
            className="bg-gradient-to-br from-gray-900 via-blue-900/40 to-gray-900 rounded-2xl shadow-2xl p-6 border border-blue-800/30 hover:border-blue-500/50 transition-all duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -5, scale: 1.05 }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-900/20 p-3 rounded-lg mr-3 backdrop-blur-sm">
                <Building2 className="text-blue-400 w-6 h-6" />
              </div>
              <h3 className="font-bold text-blue-300">BizGST</h3>
            </div>
            <p className="text-sm text-gray-300 mb-2">
            Enterprise-Grade GST & Compliance Suite
            </p>
            <a
              href="#"
              className="text-blue-400 text-sm font-medium hover:underline inline-flex items-center"
            >
              Learn more
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </motion.div>

          {/* Solution 3 */}
          <motion.div
            className="bg-gradient-to-br from-gray-900 via-blue-900/40 to-gray-900 rounded-2xl shadow-2xl p-6 border border-blue-800/30 hover:border-blue-500/50 transition-all duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ y: -5, scale: 1.05 }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-900/20 p-3 rounded-lg mr-3 backdrop-blur-sm">
                <TrendingUp className="text-blue-400 w-6 h-6" />
              </div>
              <h3 className="font-bold text-blue-300">CA Assist Pro</h3>
            </div>
            <p className="text-sm text-gray-300 mb-2">
            GST Filing Made Smarter
            </p>
            <a
              href="#"
              className="text-blue-400 text-sm font-medium hover:underline inline-flex items-center"
            >
              Learn more
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </motion.div>

          {/* Solution 4 */}
          <motion.div
            className="bg-gradient-to-br from-gray-900 via-blue-900/40 to-gray-900 rounded-2xl shadow-2xl p-6 border border-blue-800/30 hover:border-blue-500/50 transition-all duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ y: -5, scale: 1.05 }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-900/20 p-3 rounded-lg mr-3 backdrop-blur-sm">
                <Calculator className="text-blue-400 w-6 h-6" />
              </div>
              <h3 className="font-bold text-blue-300">TDSManager </h3>
            </div>
            <p className="text-sm text-gray-300 mb-2">
            Stay Compliant 
            </p>
            <a
              href="#"
              className="text-blue-400 text-sm font-medium hover:underline inline-flex items-center"
            >
              Learn more
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>



    <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl md:text-5xl font-bold text-blue-400 text-center mb-16 tracking-tight">
      How Income Tax Filing Process Works
    </h2>

    <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {/* Step 1 */}
      <div className="bg-black bg-opacity-60 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-blue-900 hover:border-blue-500">
        <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
          <FileText className="text-blue-300 w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-blue-300 mb-4">Choose your Plan</h3>
        <ul className="text-gray-300 space-y-3">
          {['Salaried', 'Capital Gains (Stock Investor)', 'Foreign Income', 'NRIs', 'Business'].map((item) => (
            <li key={item} className="flex items-center">
              <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Step 2 */}
      <div className="bg-black bg-opacity-60 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-blue-900 hover:border-blue-500">
        <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
          <Upload className="text-blue-300 w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-blue-300 mb-4">Upload/Mail Documents</h3>
        <p className="text-gray-300 mb-4">
          You can either upload the documents on our portal or E-mail them to us
        </p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition-colors shadow-lg">
          Upload Documents
        </button>
      </div>

      {/* Step 3 */}
      <div className="bg-black bg-opacity-60 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-blue-900 hover:border-blue-500">
        <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
          <PhoneCall className="text-blue-300 w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-blue-300 mb-4">Expert Consultation</h3>
        <p className="text-gray-300">
          Our experts will listen to your queries and solve them in no time
        </p>
        <div className="mt-6 p-4 bg-blue-900 bg-opacity-40 rounded-lg">
          <p className="text-sm text-blue-300">
            Average response time: <span className="font-bold">15 minutes</span>
          </p>
        </div>
      </div>

      {/* Step 4 */}
      <div className="bg-black bg-opacity-60 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-blue-900 hover:border-blue-500">
        <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
          <BadgeCheck className="text-blue-300 w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-blue-300 mb-4">Complete e-Filing</h3>
        <p className="text-gray-300 mb-4">
          A Tax Expert will be assigned to process and verify your return
        </p>
        <div className="flex items-center mt-6">
          <div className="flex-1 border-t-2 border-blue-900"></div>
          <span className="px-4 text-blue-400 font-medium">100% Secure</span>
          <div className="flex-1 border-t-2 border-blue-900"></div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Stats Section */}
<section className="py-24 bg-gradient-to-r from-black to-blue-950 text-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-blue-400">
        Trusted by businesses across India
      </h2>
      <p className="text-blue-200 max-w-2xl mx-auto text-lg">
        Join thousands of businesses and tax professionals who trust
        TaxTruth for their tax compliance needs
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
      <div className="text-center p-8 bg-blue-900 bg-opacity-20 rounded-2xl backdrop-blur-sm">
        <div className="text-5xl md:text-6xl font-bold mb-3 text-blue-300">60,000+</div>
        <p className="text-blue-100 text-lg">Tax Experts</p>
      </div>
      <div className="text-center p-8 bg-blue-900 bg-opacity-20 rounded-2xl backdrop-blur-sm">
        <div className="text-5xl md:text-6xl font-bold mb-3 text-blue-300">
          600,000+
        </div>
        <p className="text-blue-100 text-lg">Businesses</p>
      </div>
      <div className="text-center p-8 bg-blue-900 bg-opacity-20 rounded-2xl backdrop-blur-sm">
        <div className="text-5xl md:text-6xl font-bold mb-3 text-blue-300">99.9%</div>
        <p className="text-blue-100 text-lg">Uptime</p>
      </div>
    </div>
  </div>
</section>

{/* CTA Section */}
<section className="py-24 bg-black">
  <div className="container mx-auto px-4 text-center">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-blue-400 mb-8">
        Ready to simplify your tax compliance?
      </h2>
      <p className="text-xl text-gray-300 mb-10">
        Join thousands of businesses and tax professionals who trust
        TaxTruth
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-md font-medium transition-colors duration-300 text-lg shadow-lg">
          Get started for free
        </button>
        <button className="bg-transparent border-2 border-blue-600 text-blue-400 hover:border-blue-400 hover:text-blue-300 px-10 py-4 rounded-md font-medium transition-colors duration-300 text-lg">
          Schedule a demo
        </button>
      </div>
    </div>
  </div>
</section>
<section className="py-20 bg-gradient-to-br from-black to-indigo-950">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-indigo-100 text-center mb-12">
      Top Comments
    </h2>

    <div className="relative overflow-hidden group">
      <div className="flex animate-marquee-infinite hover:pause-animation space-x-8">
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            className="w-[300px] h-[320px] bg-gradient-to-br from-indigo-900 to-blue-900 rounded-xl p-6 shadow-xl shadow-black/30 flex flex-col flex-shrink-0"
          >
            {/* Author Section */}
            <div className="flex items-start mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-indigo-400"
              />
              <div>
                <h3 className="font-bold text-blue-300 text-lg">
                  {testimonial.author}
                </h3>
                <p className="text-sm text-gray-300">{testimonial.role}</p>
              </div>
            </div>

            {/* Comment Content */}
            <div className="flex-1 overflow-hidden">
              <p className="text-gray-200 text-base leading-relaxed line-clamp-5">
                "{testimonial.content}"
              </p>
            </div>

            {/* Company Info */}
            <div className="mt-4 flex items-center text-blue-400">
              <CheckCircle className="w-5 h-5 mr-2 text-blue-400" />
              <span className="text-sm font-medium">
                {testimonial.company}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10"></div>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TaxTruth</h3>
              <p className="text-gray-400 mb-4">
                India's largest tax and financial services platform
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Products</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    MaxiTC
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Enterprise
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    TaxCloud
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    E-Invoicing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    GST Software
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Webinars
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    API Documentation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Partners
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} TaxTruth. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;