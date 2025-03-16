import React from 'react';
import { FaFileAlt, FaCloudUploadAlt, FaCheckCircle } from "react-icons/fa";
import { FaChartLine, FaBuilding, FaRocket } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from 'react';

const steps = [
  {
    id: 1,
    icon: <FaFileAlt className="text-blue-400 text-4xl mb-4" />,
    title: "Prepare Documents",
    description: "Gather essential tax deduction details and payment records for a smooth filing process.",
  },
  {
    id: 2,
    icon: <FaCloudUploadAlt className="text-blue-400 text-4xl mb-4" />,
    title: "Submit Online",
    description: "Upload TDS details securely on the official tax filing portal with ease.",
  },
  {
    id: 3,
    icon: <FaCheckCircle className="text-blue-400 text-4xl mb-4" />,
    title: "Receive Confirmation",
    description: "Obtain your TDS certificate and ensure full compliance effortlessly.",
  },
];

const solutions = [
  {
    id: 1,
    icon: <FaChartLine className="text-blue-400 text-4xl mb-4" />,
    title: "CFOs",
    description: "Achieve seamless financial compliance with automated and stress-free TDS filing.",
    bgColor: "from-purple-900 to-blue-900",
    hoverEffect: "hover:from-purple-800 hover:to-blue-800",
  },
  {
    id: 2,
    icon: <FaBuilding className="text-blue-400 text-4xl mb-4" />,
    title: "FMCG",
    description: "Streamline tax compliance for FMCG businesses with a smart, integrated financial ecosystem.",
    bgColor: "from-blue-900 to-indigo-900",
    hoverEffect: "hover:from-blue-800 hover:to-indigo-800",
  },
  {
    id: 3,
    icon: <FaRocket className="text-blue-400 text-4xl mb-4" />,
    title: "Startups",
    description: "Effortless, tech-driven tax compliance solutions designed to support growing startups.",
    bgColor: "from-indigo-900 to-purple-900",
    hoverEffect: "hover:from-indigo-800 hover:to-purple-800",
  },
];

const faqs = [
  {
    question: 'Who should file TDS returns?',
    answer: 'Any person or entity responsible for making specified payments such as salaries, interest, commission, etc., is required to deduct tax at source (TDS) and must file TDS returns quarterly. This includes employers, businesses, and organizations making such payments.',
  },
  {
    question: 'What is the penalty for late TDS filing?',
    answer: 'A late fee of ₹200 per day is imposed under Section 234E for failing to file TDS returns on time, up to the total TDS amount. Additionally, a penalty ranging from ₹10,000 to ₹1,00,000 may be levied under Section 271H for delays beyond one year or for incorrect filing.',
  },
  {
    question: 'How do I get a TDS certificate?',
    answer: 'After filing TDS returns, deductors can download TDS certificates (Form 16/16A) from the TRACES portal. Deductees can obtain these certificates from the deductors to verify the tax deducted and deposited on their behalf.',
  },
];

const Tds = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State to manage form step
  const [step, setStep] = useState(1);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log('Form submitted:', formData);
    // Reset form fields after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    // Reset to the first step
    setStep(1);
  };

  // Proceed to the next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Go back to the previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  // Render form fields based on the current step
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-white"
              required
            />
          </div>
        );
      case 2:
        return (
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-white"
              required
            />
          </div>
        );
      case 3:
        return (
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-white"
              rows="5"
              required
            />
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <>
      

      <div className="bg-gradient-to-r from-black via-blue-900 to-black text-white py-16 px-4 md:px-16 space-y-6 mb-8 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">TDS Return Filing Made Easy</h1>
          <h2 className="text-lg md:text-xl text-blue-200 mb-8">File your TDS return hassle-free with expert guidance and compliance assurance.</h2>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Start Your Hassle-Free Filing
          </button>
        </div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-700 via-transparent to-transparent"></div>
      </div>

      <section className="py-16 bg-gray-900 px-4 md:px-16 mb-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-blue-400">How to File TDS Return?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step) => (
              <div
                key={step.id}
                className="bg-gray-800 shadow-md hover:shadow-xl rounded-xl p-8 transition-all duration-300 transform hover:-translate-y-1 border border-gray-700">
                <div className="text-center">
                  {step.icon}
                  <h3 className="text-xl font-medium mb-3 text-blue-300">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-16 px-4 md:px-16 mb-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Tailored Tax Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {solutions.map((solution) => (
              <div
                key={solution.id}
                className={`bg-gradient-to-br ${solution.bgColor} ${solution.hoverEffect} shadow-lg hover:shadow-2xl rounded-xl p-8 transition-all duration-500 transform hover:-translate-y-2 border border-gray-700 group`}
              >
                <div className="text-center">
                  <div className="inline-block p-4 rounded-full bg-black/30 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-300 mb-3">{solution.title}</h3>
                  <p className="text-gray-200">{solution.description}</p>
                  <button className="mt-6 bg-black/30 hover:bg-black/50 text-blue-300 border border-blue-500/30 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-16 px-4 md:px-16 mb-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-blue-400">Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-700">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-6 text-left text-lg font-medium text-blue-300 focus:outline-none"
                aria-expanded={activeIndex === index}
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-blue-400 transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-6 text-gray-300 transition-all duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black py-16 px-4 md:px-16 mb-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Need Help? Contact Us</h2>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg p-8 rounded-xl border border-gray-700 mx-auto max-w-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              {renderStep()}
              <div className="flex justify-between mt-6">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="bg-gray-700 text-gray-200 font-semibold px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-300 shadow-md"
                  >
                    Previous
                  </button>
                )}
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors duration-300 shadow-md ml-auto"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:from-green-700 hover:to-blue-700 transition-colors duration-300 shadow-md ml-auto"
                  >
                    Send Message
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
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

export default Tds;