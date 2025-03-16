import React, { useState ,useEffect} from 'react';
import { FaFileAlt, FaCheckCircle, FaUserTie, FaUser, FaBuilding, FaCoins } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import {motion} from 'framer-motion';



const Contacts = () => {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
    const toggleMobileMenu = () => {
      setMobileMenuOpen(!mobileMenuOpen);
    };

    
  return (
    <>
   

          <section >
          <div className="relative h-screen flex flex-col items-center justify-center text-center bg-black text-white px-6 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 z-0">
        {/* Radial Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        {/* Animated Blue Gradient Orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-600/20 filter blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.2, 0.15] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-500/20 filter blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.15, 0.2] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDYwaDYwVjBoLTYweiIvPjxyZWN0IHN0cm9rZT0iIzJmNGJmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgeD0iLjUiIHk9Ii41IiB3aWR0aD0iNTkiIGhlaWdodD0iNTkiIHJ4PSIxIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      </div>
      
      {/* Content Container with Z-index */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Decorative Element */}
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mb-8"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 96, opacity: 1 }}
          transition={{ duration: 1 }}
        />
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1 rounded-full bg-blue-900/30 border border-blue-700/50 text-blue-400 text-sm font-medium tracking-wider mb-6"
        >
          24/7 CUSTOMER SUPPORT
        </motion.div>
        
        {/* Enhanced Headline with Glow */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-500 bg-clip-text text-transparent leading-tight">
            Got Questions?<br/>We're Here to Help!
          </h1>
          <div className="absolute -inset-1 bg-blue-500/10 blur-xl rounded-full z-[-1]"></div>
        </motion.div>
        
        {/* Enhanced Subtext */}
        <motion.p
          className="mt-6 text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Our support team is available <span className="text-cyan-400 font-medium">24/7</span> to assist you with any questions. 
          Expect a response within 24 hours. Let's get your queries sorted!
        </motion.p>
        
        {/* Call-to-Action Button with Shine Effect */}
        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-500 group-hover:duration-200"></div>
            
            {/* Button */}
            <a
              href="#contact"
              className="relative flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-black font-semibold text-lg rounded-xl shadow-lg transition-all duration-300 hover:shadow-blue-500/50 group-hover:shadow-lg"
            >
              Contact Us Now
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              
              {/* Shine Effect */}
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
            </a>
          </div>
        </motion.div>
        
        {/* Subtle Stats/Trust Indicators */}
        <motion.div 
          className="mt-16 flex flex-wrap justify-center gap-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-cyan-400">98%</span>
            <span className="text-sm text-blue-200/70">Satisfaction Rate</span>
          </div>
          <div className="w-px h-12 bg-blue-900/50"></div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-cyan-400">&lt; 4h</span>
            <span className="text-sm text-blue-200/70">Average Response</span>
          </div>
          <div className="w-px h-12 bg-blue-900/50"></div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-cyan-400">24/7</span>
            <span className="text-sm text-blue-200/70">Support Coverage</span>
          </div>
        </motion.div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-10 w-4 h-4 bg-blue-500 rounded-full"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-16 w-3 h-3 bg-cyan-300 rounded-full"
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-2/3 left-1/4 w-2 h-2 bg-blue-400 rounded-full"
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
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

export default Contacts