import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { 
  Wallet, 
  GraduationCap, 
  Home, 
  Coins, 
  PiggyBank, 
  Building,
  Users,
  Calculator
} from 'lucide-react';

const deductionSections = [
  {
    id: '80c',
    title: 'Section 80C – Investment Deductions',
    description: 'Maximum deduction limit of ₹1.5 lakh under sections 80C, 80CCC, 80CCD(1), 80CCE',
    icon: <Wallet className="w-8 h-8 text-blue-400" />,
    link: '/deductions/80c',
    items: [
      'Life Insurance Premium',
      'Public Provident Fund (PPF)',
      'Equity Linked Savings Scheme (ELSS)',
      'National Savings Certificate (NSC)',
      'Tax Saving Fixed Deposits',
      'Home Loan Principal Repayment'
    ]
  },
  {
    id: '80e',
    title: 'Section 80E – Education Loan Interest',
    description: 'Deduction for interest paid on education loan with no upper limit',
    icon: <GraduationCap className="w-8 h-8 text-blue-400" />,
    link: '/deductions/80e',
    items: [
      'Higher Education Loan Interest',
      'No Maximum Limit',
      'Available for 8 Years',
      'Covers Self, Spouse, Children'
    ]
  },
  {
    id: '80gg',
    title: 'Section 80GG – House Rent',
    description: 'Deduction for rent paid when HRA is not received from employer',
    icon: <Home className="w-8 h-8 text-blue-400" />,
    link: '/deductions/80gg',
    items: [
      'Minimum of:',
      '₹5,000 per month',
      '25% of total income',
      'Excess of rent paid over 10% of total income'
    ]
  },
  {
    id: '80tta',
    title: 'Section 80TTA – Savings Account Interest',
    description: 'Deduction up to ₹10,000 on interest earned from savings account',
    icon: <PiggyBank className="w-8 h-8 text-blue-400" />,
    link: '/deductions/80tta',
    items: [
      'Interest from Savings Account',
      'Maximum ₹10,000 per year',
      'Applicable to Individuals & HUFs',
      'Excludes Fixed Deposit Interest'
    ]
  },
  {
    id: '80ttb',
    title: 'Section 80TTB – Senior Citizens Interest Income',
    description: 'Deduction up to ₹50,000 for senior citizens on interest income',
    icon: <Users className="w-8 h-8 text-blue-400" />,
    link: '/deductions/80ttb',
    items: [
      'Interest from All Deposits',
      'Maximum ₹50,000 per year',
      'Only for Senior Citizens',
      'Includes Bank & Post Office Deposits'
    ]
  }
];

const TaxSavings = () => {
  const [headerRef, headerInView] = useInView({ triggerOnce: true });
  const [calculatorRef, calculatorInView] = useInView({ triggerOnce: true });

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 md:px-16">
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: headerInView ? 1 : 0, y: headerInView ? 0 : 20 }}
        className="max-w-6xl mx-auto mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 text-center">
          Tax Savings & Deductions Guide
        </h1>
        <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
          Maximize your tax savings by understanding various deductions available under different sections of the Income Tax Act.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid gap-8 mb-16">
        {deductionSections.map((section, index) => {
          const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
          
          return (
            <motion.div
              key={section.id}
              ref={ref}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ 
                opacity: inView ? 1 : 0, 
                x: inView ? 0 : (index % 2 === 0 ? -50 : 50)
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300"
            >
              <Link to={section.link} className="block">
                <div className="flex items-start gap-6">
                  <div className="bg-gray-700 p-4 rounded-lg">
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-blue-400 mb-3">
                      {section.title}
                    </h2>
                    <p className="text-gray-300 mb-6">
                      {section.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {section.items.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }}
                          transition={{ delay: index * 0.1 + itemIndex * 0.1 }}
                          className="flex items-center gap-2"
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full" />
                          <span className="text-gray-200">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        ref={calculatorRef}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: calculatorInView ? 1 : 0, y: calculatorInView ? 0 : 30 }}
        className="max-w-3xl mx-auto bg-gray-800 rounded-xl p-8 border border-gray-700"
      >
        <div className="text-center mb-8">
          <Calculator className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-blue-400">
            Need Help Calculating Your Tax Savings?
          </h2>
          <p className="text-gray-300 mt-2">
            Connect with our tax experts to maximize your deductions
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-lg font-semibold shadow-lg"
        >
          Calculate Your Tax Savings
        </motion.button>
      </motion.div>
    </div>
  );
};

export default TaxSavings;