import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { FileText, CheckCircle, User, Building, Coins, Briefcase } from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: <FileText className="text-blue-400 w-12 h-12 mb-4" />,
    title: "Pre-fill Details",
    description: "Add your PAN & pre-fill your tax-related details in a single click.",
  },
  {
    id: 2,
    icon: <CheckCircle className="text-blue-400 w-12 h-12 mb-4" />,
    title: "Review Details",
    description: "Review the pre-filled details and make any changes if required.",
  },
  {
    id: 3,
    icon: <FileText className="text-blue-400 w-12 h-12 mb-4" />,
    title: "File ITR",
    description: "Submit your Tax Returns and get the Acknowledgement No from ITD.",
  },
];

const userTypes = [
  {
    id: 1,
    icon: <User className="text-blue-400 w-12 h-12 mb-4" />,
    title: "Salaried Individuals",
    description: "File ITR with Form 16. Claim deductions under Section 80C, 80D, etc.",
    link: "/salaried"
  },
  {
    id: 2,
    icon: <Briefcase className="text-blue-400 w-12 h-12 mb-4" />,
    title: "Freelancers & Professionals",
    description: "File ITR for freelance income, royalties, or professional fees.",
    link: "/freelancers"
  },
  {
    id: 3,
    icon: <Building className="text-blue-400 w-12 h-12 mb-4" />,
    title: "Businesses",
    description: "File ITR for businesses with income from goods, services, or exports.",
    link: "/businesses"
  },
  {
    id: 4,
    icon: <Coins className="text-blue-400 w-12 h-12 mb-4" />,
    title: "Investors",
    description: "File ITR for capital gains from stocks, mutual funds, or property sales.",
    link: "/investors"
  },
];

const pricingPlans = [
  {
    id: 1,
    title: "Basic Plan",
    price: "₹999",
    features: [
      "Auto-selection of ITR type",
      "Pre-filled details",
      "Free notice management",
    ],
  },
  {
    id: 2,
    title: "Advanced Plan",
    price: "₹1,999",
    features: [
      "Everything in Basic Plan",
      "Expert assistance",
      "Deduction optimization",
    ],
  },
  {
    id: 3,
    title: "Premium Plan",
    price: "₹2,999",
    features: [
      "Everything in Advanced Plan",
      "Priority support",
      "Tax audit support",
    ],
  },
];

const Itr = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [stepsRef, stepsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [userTypesRef, userTypesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [pricingRef, pricingInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="bg-black">
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: heroInView ? 1 : 0 }}
        className="bg-gradient-to-r from-black via-blue-900 to-black text-white py-20 px-4 md:px-16 relative"
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ y: 50 }}
            animate={{ y: heroInView ? 0 : 50 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          >
            File Your ITR in 3 Simple Steps
          </motion.h1>
          <motion.h2
            initial={{ y: 50 }}
            animate={{ y: heroInView ? 0 : 50 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-blue-200 mb-8"
          >
            Zero data-entry filing experience with auto-selection of ITR type and regime.
          </motion.h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg"
          >
            Start Filing Now
          </motion.button>
        </div>
      </motion.section>

      <motion.section
        ref={stepsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: stepsInView ? 1 : 0, y: stepsInView ? 0 : 50 }}
        transition={{ duration: 0.5 }}
        className="py-16 bg-gray-900 px-4 md:px-16"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-blue-400">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: stepsInView ? 1 : 0, y: stepsInView ? 0 : 50 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800 shadow-md hover:shadow-xl rounded-xl p-8 border border-gray-700"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-center">
                  {step.icon}
                  <h3 className="text-xl font-medium mb-3 text-blue-300">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        ref={userTypesRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: userTypesInView ? 1 : 0, y: userTypesInView ? 0 : 50 }}
        transition={{ duration: 0.5 }}
        className="bg-black py-16 px-4 md:px-16"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Who Can File ITR?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {userTypes.map((user, index) => (
              <motion.div
                key={user.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: userTypesInView ? 1 : 0, y: userTypesInView ? 0 : 50 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Link to={user.link} className="block">
                  <div className="bg-gray-800 shadow-md hover:shadow-xl rounded-xl p-8 border border-gray-700 h-full transition-all duration-300">
                    <div className="text-center">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {user.icon}
                      </motion.div>
                      <h3 className="text-xl font-medium mb-3 text-blue-300 group-hover:text-blue-400 transition-colors">
                        {user.title}
                      </h3>
                      <p className="text-gray-300">{user.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        ref={pricingRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: pricingInView ? 1 : 0, y: pricingInView ? 0 : 50 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 py-16 px-4 md:px-16"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-blue-400">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: pricingInView ? 1 : 0, y: pricingInView ? 0 : 50 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 shadow-md hover:shadow-xl rounded-xl p-8 border border-gray-700"
              >
                <div className="text-center">
                  <h3 className="text-xl font-medium mb-3 text-blue-300">{plan.title}</h3>
                  <p className="text-2xl font-bold text-purple-400 mb-4">{plan.price}</p>
                  <ul className="text-gray-300 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="mb-2">{feature}</li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium shadow-md"
                  >
                    Choose Plan
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <footer className="bg-black text-white py-12 px-4 md:px-16 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} TruthTax. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Itr;