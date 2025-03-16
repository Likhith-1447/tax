import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Landmark, Calculator, AlertCircle } from 'lucide-react';

const Section80TTB = () => {
  const [headerRef, headerInView] = useInView({ triggerOnce: true });
  const [contentRef, contentInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const eligibleDeposits = [
    "Fixed Deposits",
    "Savings Account",
    "Post Office Deposits",
    "Recurring Deposits"
  ];

  const requirements = [
    "Age 60 years or above",
    "Resident in India",
    "Interest from bank or post office",
    "Maximum limit ₹50,000"
  ];

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 md:px-16">
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: headerInView ? 1 : 0, y: headerInView ? 0 : 20 }}
        className="max-w-6xl mx-auto mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 text-center">
          Section 80TTB - Senior Citizens Interest Income
        </h1>
        <div className="flex justify-center items-center gap-4 mb-8">
          <Users className="w-12 h-12 text-blue-400" />
          <p className="text-2xl text-gray-300">Maximum Deduction: ₹50,000</p>
        </div>
      </motion.div>

      <motion.div
        ref={contentRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: contentInView ? 1 : 0 }}
        className="max-w-6xl mx-auto grid gap-8"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: contentInView ? 1 : 0, x: contentInView ? 0 : -20 }}
            className="bg-gray-800 rounded-xl p-8 border border-gray-700"
          >
            <h2 className="text-2xl font-semibold text-blue-400 mb-6 flex items-center gap-3">
              <Landmark className="w-6 h-6" />
              Eligible Deposits
            </h2>
            <div className="space-y-4">
              {eligibleDeposits.map((deposit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: contentInView ? 1 : 0, x: contentInView ? 0 : -10 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  <p className="text-gray-300">{deposit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: contentInView ? 1 : 0, x: contentInView ? 0 : 20 }}
            className="bg-gray-800 rounded-xl p-8 border border-gray-700"
          >
            <h2 className="text-2xl font-semibold text-blue-400 mb-6 flex items-center gap-3">
              <Calculator className="w-6 h-6" />
              Requirements
            </h2>
            <div className="space-y-4">
              {requirements.map((req, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: contentInView ? 1 : 0, x: contentInView ? 0 : 10 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  <p className="text-gray-300">{req}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: contentInView ? 1 : 0, y: contentInView ? 0 : 20 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-800 rounded-xl p-8 border border-gray-700"
        >
          <h2 className="text-2xl font-semibold text-blue-400 mb-6 flex items-center gap-3">
            <AlertCircle className="w-6 h-6" />
            Important Notes
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2" />
                <p className="text-gray-300">TDS exemption up to ₹50,000 under section 194A</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2" />
                <p className="text-gray-300">Form 15H can be submitted to avoid TDS</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2" />
                <p className="text-gray-300">Replaces Section 80TTA for senior citizens</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2" />
                <p className="text-gray-300">Interest from all deposit types is eligible</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Section80TTB;