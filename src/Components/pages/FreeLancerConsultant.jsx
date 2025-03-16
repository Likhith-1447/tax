import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Calculator, 
  FileText, 
  Clock, 
  BarChart as ChartBar, 
  ArrowRight, 
  CheckCircle2, 
  DollarSign,
  Shield,
  BookOpen,
  HelpCircle,
  FileCheck,
  Zap,
  Gift
} from 'lucide-react';

const FreelancerConsultant = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [formRef, formInView] = useInView({ triggerOnce: true });
  const [pricingRef, pricingInView] = useInView({ triggerOnce: true });
  const [faqRef, faqInView] = useInView({ triggerOnce: true });
  const [selectedCategory, setSelectedCategory] = useState('freelancer');
  const [selectedPlan, setSelectedPlan] = useState('');

  const categories = [
    { 
      id: 'freelancer', 
      label: 'Freelancer',
      description: 'For independent contractors and gig workers'
    },
    { 
      id: 'consultant', 
      label: 'Consultant',
      description: 'For business and technical consultants'
    },
    { 
      id: 'professional', 
      label: 'Professional',
      description: 'For doctors, lawyers, and other professionals'
    },
    { 
      id: 'digital-creator', 
      label: 'Digital Creator',
      description: 'For content creators and online entrepreneurs'
    },
    { 
      id: 'service-provider', 
      label: 'Service Provider',
      description: 'For service-based businesses and agencies'
    },
    { 
      id: 'startup-founder', 
      label: 'Startup Founder',
      description: 'For early-stage startup entrepreneurs'
    }
  ];

  const features = [
    {
      icon: <Calculator className="w-8 h-8 text-blue-400" />,
      title: "Income Tracking",
      description: "Easily track multiple income sources and expenses"
    },
    {
      icon: <ChartBar className="w-8 h-8 text-blue-400" />,
      title: "Deduction Optimizer",
      description: "Maximize your tax savings with smart deduction suggestions"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-400" />,
      title: "GST Integration",
      description: "Seamless GST filing integration with your tax returns"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: "Compliance Assurance",
      description: "Stay compliant with all tax regulations"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-400" />,
      title: "Tax Education",
      description: "Access to tax planning resources and guides"
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-400" />,
      title: "Quick Filing",
      description: "File your returns in minutes, not hours"
    }
  ];

  const pricingPlans = [
    {
      id: 'starter',
      title: 'Starter',
      price: '₹1,499',
      description: 'Perfect for beginners',
      features: [
        'Basic income tracking',
        'Standard deductions',
        'Email support',
        'Basic tax reports',
        'GST filing assistance'
      ]
    },
    {
      id: 'growth',
      title: 'Growth',
      price: '₹2,999',
      description: 'For growing businesses',
      features: [
        'All Starter features',
        'Advanced income tracking',
        'Priority support',
        'Tax planning consultation',
        'Multiple business support',
        'Advanced analytics'
      ]
    },
    {
      id: 'premium',
      title: 'Premium',
      price: '₹5,999',
      description: 'For established businesses',
      features: [
        'All Growth features',
        'Dedicated tax expert',
        '24/7 priority support',
        'Custom tax strategies',
        'International income support',
        'API access',
        'Multi-user access'
      ]
    }
  ];

  const faqs = [
    {
      question: "How do I calculate my taxable income as a freelancer?",
      answer: "Your taxable income is calculated by subtracting your business expenses from your gross income. We help you identify all eligible deductions to minimize your tax liability."
    },
    {
      question: "Do I need to register for GST?",
      answer: "If your annual turnover exceeds ₹20 lakhs (₹10 lakhs for special category states), you must register for GST. Our platform helps you determine if you need to register and assists with the registration process."
    },
    {
      question: "What expenses can I claim as deductions?",
      answer: "Common deductions include home office expenses, internet and phone bills, professional development costs, and travel expenses related to work. Our platform helps identify all eligible deductions."
    },
    {
      question: "How often should I pay advance tax?",
      answer: "Advance tax should be paid quarterly if your tax liability exceeds ₹10,000 in a financial year. We provide reminders and calculations for your advance tax payments."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <motion.header
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: heroInView ? 1 : 0 }}
        className="bg-gradient-to-r from-black via-blue-900 to-black py-20 px-4 md:px-16"
      >
        <div className="max-w-6xl mx-auto">
          <nav className="mb-16 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-blue-400">TaxFiler</Link>
            <div className="space-x-6">
              <Link to="/capital-gains" className="text-gray-300 hover:text-white">Capital Gains</Link>
              <Link to="/freelancer-consultant" className="text-blue-400 hover:text-blue-300">Freelancer & Consultant</Link>
            </div>
          </nav>

          <motion.div
            initial={{ y: 50 }}
            animate={{ y: heroInView ? 0 : 50 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Freelancer & Consultant Tax Filing
            </h1>
            <p className="text-xl text-blue-200 mb-8">
              Simplify your tax filing process with our specialized platform for freelancers and consultants.
            </p>
            <div className="flex justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg"
              >
                Start Filing Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 px-8 py-4 rounded-lg font-semibold"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.header>

      <motion.section
        ref={formRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: formInView ? 1 : 0, y: formInView ? 0 : 50 }}
        className="py-16 px-4 md:px-16 bg-gray-900"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">Select Your Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-6 rounded-lg border ${
                  selectedCategory === category.id
                    ? 'border-blue-500 bg-blue-900/20'
                    : 'border-gray-700 bg-gray-800'
                } hover:border-blue-400 transition-all duration-300`}
              >
                <div className="flex items-center space-x-4">
                  <Briefcase className={`w-6 h-6 ${
                    selectedCategory === category.id ? 'text-blue-400' : 'text-gray-400'
                  }`} />
                  <div className="text-left">
                    <span className={`block font-semibold ${selectedCategory === category.id ? 'text-blue-400' : 'text-gray-300'}`}>
                      {category.label}
                    </span>
                    <span className="text-sm text-gray-400">{category.description}</span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-semibold mb-6 text-blue-300">Income & Expense Details</h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Professional Income</label>
                  <div className="relative">
                    <span className="absolute left-3 top-2 text-gray-400">₹</span>
                    <input
                      type="number"
                      placeholder="Enter annual income"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-8 pr-4 py-2 text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Business Expenses</label>
                  <div className="relative">
                    <span className="absolute left-3 top-2 text-gray-400">₹</span>
                    
                    <input
                      type="number"
                      placeholder="Enter total expenses"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-8 pr-4 py-2 text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">GST Registration Number</label>
                <input
                  type="text"
                  placeholder="Enter GST number (if applicable)"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Professional Tax Paid</label>
                  <div className="relative">
                    <span className="absolute left-3 top-2 text-gray-400">₹</span>
                    <input
                      type="number"
                      placeholder="Enter amount"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-8 pr-4 py-2 text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">TDS Deducted</label>
                  <div className="relative">
                    <span className="absolute left-3 top-2 text-gray-400">₹</span>
                    <input
                      type="number"
                      placeholder="Enter TDS amount"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-8 pr-4 py-2 text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg"
              >
                Calculate Tax Liability
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

      <section className="py-16 px-4 md:px-16 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Platform Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: formInView ? 1 : 0, y: formInView ? 0 : 50 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-blue-300">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <motion.section
        ref={pricingRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: pricingInView ? 1 : 0, y: pricingInView ? 0 : 50 }}
        className="py-16 px-4 md:px-16 bg-gray-900"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-blue-400">Pricing Plans</h2>
          <p className="text-center text-gray-400 mb-12">Choose the perfect plan for your business needs</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: pricingInView ? 1 : 0, y: pricingInView ? 0 : 50 }}
                transition={{ delay: index * 0.2 }}
                className={`bg-gray-800 rounded-xl p-8 border ${
                  selectedPlan === plan.id ? 'border-blue-500' : 'border-gray-700'
                } hover:border-blue-400 transition-all duration-300`}
              >
                <h3 className="text-2xl font-bold text-blue-300 mb-2">{plan.title}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">/year</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full py-3 px-6 rounded-lg font-semibold ${
                    selectedPlan === plan.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  Choose Plan
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        ref={faqRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: faqInView ? 1 : 0, y: faqInView ? 0 : 50 }}
        className="py-16 px-4 md:px-16 bg-black"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: faqInView ? 1 : 0, y: faqInView ? 0 : 20 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700"
              >
                <h3 className="text-lg font-semibold mb-2 text-blue-300 flex items-center">
                  <HelpCircle className="w-5 h-5 mr-2" />
                  {faq.question}
                </h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <footer className="bg-gray-900 text-white py-12 px-4 md:px-16 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} TaxFiler. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default FreelancerConsultant;