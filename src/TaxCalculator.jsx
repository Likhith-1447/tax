import React from "react";
import { Link } from "react-router-dom";
import { testimonialsData } from "./data/testimonials"; // Ensure this path is correct
import { CheckCircle } from "lucide-react";

const TaxCalculatorPage = () => {
  const calculators = [
    { name: "Interest Calculator", link: "interest-calculator" },
    { name: "Income Tax Calculator", link: "/tax-calculators/income-tax-calculator" },
    { name: "Gratuity Calculator", link: "/tax-calculators/Gratuitycalculator" },
    { name: "SIP Calculator", link: "/tax-calculators/sip-calculator" },
    { name: "HRA Calculator", link: "/tax-calculators/hra-calculator" },
    { name: "FD Calculator", link: "/tax-calculators/fd-calculator" },
    { name: "Home Loan EMI Calculator", link: "/tax-calculators/home-loan-emi-calculator" },
    { name: "Crypto Tax Calculator", link: "/tax-calculators/crypto-tax-calculator" },
    { name: "Capital Gains Calculator", link: "tax-calculators/capital-gains-calculator" },
  ];

  // Add a fallback for undefined testimonialsData
  const testimonials = testimonialsData || [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">
            Tax Calculators
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Choose a calculator to get started
          </p>

          {/* Calculator Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {calculators.map((calculator, index) => (
              <Link
                key={index}
                to={calculator.link}
                className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-blue-600 text-2xl font-bold">
                    {calculator.name[0]}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {calculator.name}
                </h3>
                <p className="text-gray-600">Calculate {calculator.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
            Top Comments
          </h2>

          <div className="relative overflow-hidden group">
            <div className="flex animate-marquee-infinite hover:pause-animation space-x-8">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={index}
                  className="w-[300px] h-[320px] bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg flex flex-col flex-shrink-0"
                >
                  {/* Author Section */}
                  <div className="flex items-start mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-bold text-blue-900 text-lg">
                        {testimonial.author}
                      </h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>

                  {/* Comment Content */}
                  <div className="flex-1 overflow-hidden">
                    <p className="text-gray-700 text-base leading-relaxed line-clamp-5">
                      "{testimonial.content}"
                    </p>
                  </div>

                  {/* Company Info */}
                  <div className="mt-4 flex items-center text-blue-600">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span className="text-sm font-medium">
                      {testimonial.company}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaxCalculatorPage;