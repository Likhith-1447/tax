import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Wallet, Briefcase, Building, PiggyBank, Home, Heart } from 'lucide-react';

const investmentTypes = [
  {
    icon: <PiggyBank className="w-6 h-6 text-blue-400" />,
    title: "PPF & EPF",
    description: "Public Provident Fund and Employee Provident Fund contributions",
    limit: "Combined limit of ₹1.5 lakh"
  },
  {
    icon: <Building className="w-6 h-6 text-blue-400" />,
    title: "ELSS Funds",
    description: "Equity Linked Savings Scheme with 3-year lock-in",
    limit: "Part of ₹1.5 lakh limit"
  },
  {
    icon: <Home className="w-6 h-6 text-blue-400" />,
    title: "Home Loan Principal",
    description: "Principal repayment of housing loan",
    limit: "Part of ₹1.5 lakh limit"
  },
  {
    icon: <Heart className="w-6 h-6 text-blue-400" />,
    title: "Life Insurance",
    description: "Premium paid for life insurance policies",
    limit: "Part of ₹1.5 lakh limit"
  }
];

const Section80C = () => {
  const [headerRef, headerInView] = useInView({ triggerOnce: true });
  const [contentRef, contentInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 md:px-16">
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: headerInView ? 1 : 0, y: headerInView ? 0 : 20 }}
        className="max-w-6xl mx-auto mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 text-center">
          Section 80C Deductions
        </h1>
        <div className="flex justify-center items-center gap-4 mb-8">
          <Wallet className="w-12 h-12 text-blue-400" />
          <p className="text-2xl text-gray-300">Maximum Deduction: ₹1,50,000</p>
        </div>
      </motion.div>

      <motion.div
        ref={contentRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: contentInView ? 1 : 0 }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {investmentTypes.map((investment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: contentInView ? 1 : 0, y: contentInView ? 0 : 20 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-gray-700 p-3 rounded-lg">
                  {investment.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">
                    {investment.title}
                  </h3>
                  <p className="text-gray-300 mb-2">{investment.description}</p>
                  <p className="text-sm text-gray-400">{investment.limit}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: contentInView ? 1 : 0, y: contentInView ? 0 : 20 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-800 rounded-xl p-8 border border-gray-700"
        >
          <h2 className="text-2xl font-semibold text-blue-400 mb-6">Important Notes</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2" />
              <p className="text-gray-300">Combined limit of ₹1.5 lakh for all investments under Section 80C, 80CCC, and 80CCD(1)</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2" />
              <p className="text-gray-300">Additional ₹50,000 deduction available under Section 80CCD(1B) for NPS contributions</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2" />
              <p className="text-gray-300">Investments must be made within the financial year to claim deduction</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Section80C;