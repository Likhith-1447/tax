import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PiggyBank, Calculator, AlertCircle } from 'lucide-react';

const Section80TTA = () => {
  const [headerRef, headerInView] = useInView({ triggerOnce: true });
  const [contentRef, contentInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const eligibilityItems = [
    "Individual taxpayers (below 60 years)",
    "Hindu Undivided Families (HUFs)",
    "Savings account interest only",
    "Both single and joint accounts"
  ];

  const exclusions = [
    "Fixed deposit interest",
    "Recurring deposit interest",
    "Corporate/business accounts",
    "NRO/NRE account interest"
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
          Section 80TTA - Savings Account Interest
        </h1>
        <div className="flex justify-center items-center gap-4 mb-8">
          <PiggyBank className="w-12 h-12 text-blue-400" />
          <p className="text-2xl text-gray-300">Maximum Deduction: ₹10,000</p>
        </div>
      </motion.div>

      <motion.div
        ref={contentRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: contentInView ? 1 : 0 }}
        className="max-w-6xl mx-auto grid gap-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: contentInView ? 1 : 0, y: contentInView ? 0 : 20 }}
          className="bg-gray-800 rounded-xl p-8 border border-gray-700"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-blue-400 mb-6 flex items-center gap-3">
                <Calculator className="w-6 h-6" />
                Eligibility Criteria
              </h2>
              <div className="space-y-4">
                {eligibilityItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: contentInView ? 1 : 0, x: contentInView ? 0 : -20 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    <p className="text-gray-300">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-blue-400 mb-6 flex items-center gap-3">
                <AlertCircle className="w-6 h-6" />
                Not Covered
              </h2>
              <div className="space-y-4">
                {exclusions.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: contentInView ? 1 : 0, x: contentInView ? 0 : 20 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-red-400 rounded-full" />
                    <p className="text-gray-300">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: contentInView ? 1 : 0, y: contentInView ? 0 : 20 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-800 rounded-xl p-8 border border-gray-700"
        >
          <h2 className="text-2xl font-semibold text-blue-400 mb-6">How to Claim</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2" />
                <p className="text-gray-300">Submit Form 26AS or bank statement showing interest earned</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2" />
                <p className="text-gray-300">Claim deduction in ITR under Section 80TTA</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2" />
                <p className="text-gray-300">Deduction limited to actual interest or ₹10,000, whichever is lower</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2" />
                <p className="text-gray-300">TDS will be deducted if interest exceeds ₹40,000 in a year</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Section80TTA;