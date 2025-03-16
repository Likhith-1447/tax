import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  DollarSign, 
  Calculator, 
  FileText, 
  Clock, 
  BarChart as ChartBar, 
  ArrowRight, 
  CheckCircle2, 
  Shield, 
  BookOpen,
  Gift,
  Zap,
  HelpCircle,
  FileCheck
} from 'lucide-react';

const CapitalGains = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [formRef, formInView] = useInView({ triggerOnce: true });
  const [pricingRef, pricingInView] = useInView({ triggerOnce: true });
  const [faqRef, faqInView] = useInView({ triggerOnce: true });
  const [selectedAssetType, setSelectedAssetType] = useState('stocks');
  const [selectedPlan, setSelectedPlan] = useState('');

  const assetTypes = [
    { id: 'stocks', label: 'Stocks & Mutual Funds', description: 'For equity shares and mutual fund investments' },
    { id: 'crypto', label: 'Cryptocurrency', description: 'For Bitcoin, Ethereum, and other digital assets' },
    { id: 'property', label: 'Real Estate', description: 'For property sale and purchase transactions' },
    { id: 'bonds', label: 'Bonds & Debentures', description: 'For government and corporate bonds' },
    { id: 'gold', label: 'Gold & Precious Metals', description: 'For physical gold and digital gold investments' },
    { id: 'forex', label: 'Foreign Exchange', description: 'For currency trading gains and losses' }
  ];

  const features = [
    {
      icon: <Calculator className="w-8 h-8 text-blue-400" />,
      title: "Automatic Calculations",
      description: "Our smart system calculates your capital gains tax instantly"
    },
    {
      icon: <ChartBar className="w-8 h-8 text-blue-400" />,
      title: "Investment Analytics",
      description: "Get detailed insights into your investment performance"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-400" />,
      title: "Tax Planning",
      description: "Strategic advice to minimize your tax liability"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: "Security First",
      description: "Bank-grade encryption for your financial data"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-400" />,
      title: "Educational Resources",
      description: "Learn about tax laws and investment strategies"
    },
    {
      icon: <FileCheck className="w-8 h-8 text-blue-400" />,
      title: "Compliance Check",
      description: "Automatic verification of tax compliance"
    }
  ];

  const pricingPlans = [
    {
      id: 'basic',
      title: 'Basic',
      price: '₹999',
      description: 'Perfect for small investors',
      features: [
        'Basic capital gains calculation',
        'Single asset type support',
        'Email support',
        'Basic tax reports',
        'Standard processing time'
      ]
    },
    {
      id: 'pro',
      title: 'Professional',
      price: '₹2,499',
      description: 'Ideal for active investors',
      features: [
        'All Basic features',
        'Multiple asset types support',
        'Priority support',
        'Advanced tax optimization',
        'Faster processing',
        'Historical transaction analysis'
      ]
    },
    {
      id: 'enterprise',
      title: 'Enterprise',
      price: '₹4,999',
      description: 'For professional traders',
      features: [
        'All Professional features',
        'Dedicated tax expert',
        '24/7 priority support',
        'Custom tax strategies',
        'Instant processing',
        'API access',
        'Multi-portfolio management'
      ]
    }
  ];

  const faqs = [
    {
      question: "How are capital gains calculated?",
      answer: "Capital gains are calculated by subtracting the purchase price (cost basis) from the sale price. The tax rate depends on whether it's a short-term or long-term gain."
    },
    {
      question: "What's the difference between short-term and long-term capital gains?",
      answer: "Short-term gains apply to assets held for less than 12 months and are taxed at your regular income tax rate. Long-term gains (assets held longer than 12 months) typically have lower tax rates."
    },
    {
      question: "Do I need to report cryptocurrency gains?",
      answer: "Yes, cryptocurrency gains must be reported as capital gains. Each trade or conversion between cryptocurrencies is a taxable event."
    },
    {
      question: "How do I calculate property capital gains?",
      answer: "Property capital gains consider the purchase price, improvement costs, and selling expenses. Various deductions and exemptions may apply based on the property type and holding period."
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
              <Link to="/capital-gains" className="text-blue-400 hover:text-blue-300">Capital Gains</Link>
              <Link to="/freelancer-consultant" className="text-gray-300 hover:text-white">Freelancer & Consultant</Link>
            </div>
          </nav>

          <motion.div
            initial={{ y: 50 }}
            animate={{ y: heroInView ? 0 : 50 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Capital Gains Tax Filing Made Simple
            </h1>
            <p className="text-xl text-blue-200 mb-8">
              File your capital gains tax returns with confidence. Expert guidance at every step.
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
                Watch Demo
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
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">Select Your Asset Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {assetTypes.map((type) => (
              <motion.button
                key={type.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedAssetType(type.id)}
                className={`p-6 rounded-lg border ${
                  selectedAssetType === type.id
                    ? 'border-blue-500 bg-blue-900/20'
                    : 'border-gray-700 bg-gray-800'
                } hover:border-blue-400 transition-all duration-300`}
              >
                <div className="flex items-center space-x-4">
                  <TrendingUp className={`w-6 h-6 ${
                    selectedAssetType === type.id ? 'text-blue-400' : 'text-gray-400'
                  }`} />
                  <div className="text-left">
                    <span className={`block font-semibold ${selectedAssetType === type.id ? 'text-blue-400' : 'text-gray-300'}`}>
                      {type.label}
                    </span>
                    <span className="text-sm text-gray-400">{type.description}</span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-semibold mb-6 text-blue-300">Enter Transaction Details</h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Purchase Date</label>
                  <input
                    type="date"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Sale Date</label>
                  <input
                    type="date"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Purchase Price</label>
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
                  <label className="block text-sm font-medium text-gray-300 mb-2">Sale Price</label>
                  <div className="relative">
                    <span className="absolute left-3 top-2 text-gray-400">₹</span>
                    <input
                      type="number"
                      placeholder="Enter amount"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-8 pr-4 py-2 text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Additional Expenses</label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-gray-400">₹</span>
                  <input
                    type="number"
                    placeholder="Brokerage, fees, etc."
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-8 pr-4 py-2 text-white focus:outline-none focus:border-blue-500"
                  />
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
            Why Choose Our Platform?
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
          <p className="text-center text-gray-400 mb-12">Choose the perfect plan for your investment needs</p>
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

export default CapitalGains;