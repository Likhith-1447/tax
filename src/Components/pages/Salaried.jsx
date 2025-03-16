import { motion } from 'framer-motion';
import { FileText, Calculator, Download, ChevronRight, Layers, ClipboardCheck, ShieldCheck, Calendar, AlertCircle, Gift, HelpCircle } from 'lucide-react';

const Salaried = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header Section */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 text-center"
        >
          Salaried Individual ITR Filing
        </motion.h1>

        {/* Key Dates Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800 p-6 rounded-xl border border-blue-400/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-8 h-8 text-blue-400" />
              <h2 className="text-2xl font-semibold text-blue-300">Key Dates & Deadlines</h2>
            </div>
            <ul className="space-y-3">
              {keyDates.map((date, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
                >
                  <ChevronRight className="w-4 h-4 text-blue-400" />
                  <span className="font-medium">{date.title}:</span>
                  <span className="text-gray-300">{date.date}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Common Mistakes Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-800 p-6 rounded-xl border border-red-400/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-8 h-8 text-red-400" />
              <h2 className="text-2xl font-semibold text-red-300">Common Mistakes to Avoid</h2>
            </div>
            <ul className="space-y-3">
              {commonMistakes.map((mistake, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-2 p-2 hover:bg-gray-700 rounded"
                >
                  <ChevronRight className="w-4 h-4 text-red-400 mt-1" />
                  {mistake}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-800 p-8 rounded-2xl border border-green-400/20 mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <Gift className="w-10 h-10 text-green-400" />
            <h2 className="text-3xl font-semibold text-green-300">Benefits of Timely Filing</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-3 p-4 hover:bg-gray-750 rounded-xl"
              >
                <div className="bg-green-400/20 p-2 rounded-lg">
                  <ChevronRight className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-700 shadow-2xl">
            <motion.h2
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              className="text-3xl font-bold mb-8 flex items-center gap-3 text-blue-300"
            >
              <Layers className="w-8 h-8" />
              Step-by-Step Filing Process
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gray-800 p-6 rounded-xl hover:bg-gray-750 transition-all duration-300 group"
                >
                  <div className="flex gap-4 items-start">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 3 }}
                      className="bg-blue-400/20 p-3 rounded-lg"
                    >
                      <step.icon className="w-6 h-6 text-blue-400" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-100">{step.title}</h3>
                      <ul className="space-y-2 text-gray-300">
                        {step.points.map((point, pIndex) => (
                          <motion.li 
                            key={pIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.2 + pIndex * 0.1 }}
                            className="flex items-start gap-2"
                          >
                            <ChevronRight className="w-4 h-4 mt-1 text-blue-400 flex-shrink-0" />
                            {point}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-gray-800 p-8 rounded-2xl border border-purple-400/20 mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="w-10 h-10 text-purple-400" />
            <h2 className="text-3xl font-semibold text-purple-300">FAQs</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="p-4 hover:bg-gray-750 rounded-xl"
              >
                <h3 className="text-lg font-medium mb-2 text-purple-100">Q: {faq.question}</h3>
                <p className="text-gray-300">A: {faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Documents & Deductions Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", delay: 0.4 }}
            className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-400/30 transition-all"
          >
            <h2 className="text-xl font-semibold mb-4 text-blue-300 flex items-center gap-2">
              <FileText className="w-6 h-6" />
              Required Documents
            </h2>
            <ul className="space-y-3">
              {documents.map((doc, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
                >
                  <ChevronRight className="w-4 h-4 text-blue-400" />
                  {doc}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", delay: 0.6 }}
            className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-400/30 transition-all"
          >
            <h2 className="text-xl font-semibold mb-4 text-purple-300 flex items-center gap-2">
              <Calculator className="w-6 h-6" />
              Available Deductions
            </h2>
            <ul className="space-y-3">
              {deductions.map((deduction, index) => (
                <motion.li
                  key={index}
                  initial={{ x: 20 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
                >
                  <ChevronRight className="w-4 h-4 text-purple-400" />
                  {deduction}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: 0.8
        }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-4"
      >
        <div className="relative group w-fit mx-auto">
          {/* Animated background */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-xl blur-3xl group-hover:blur-4xl transition-all duration-300"
          />
          
          {/* Main button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              background: [
                'linear-gradient(45deg, #2563eb, #9333ea)',
                'linear-gradient(60deg, #2563eb, #9333ea, #2563eb)'
              ],
              boxShadow: '0 0 40px rgba(59, 130, 246, 0.5)'
            }}
            whileTap={{ scale: 0.95 }}
            transition={{
              duration: 0.3,
              background: {
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse'
              }
            }}
            className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-6 rounded-xl font-bold text-2xl shadow-2xl transition-all duration-300 overflow-hidden"
          >
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity" />
            
            {/* Animated border */}
            <div className="absolute inset-0 rounded-xl border-2 border-white/10 group-hover:border-white/20 transition-all" />
            
            {/* Button content */}
            <div className="flex items-center gap-4 relative z-10">
              <motion.span
                animate={{
                  y: [0, -5, 0],
                  transition: {
                    duration: 1.5,
                    repeat: Infinity
                  }
                }}
              >
                <Download className="w-8 h-8 animate-pulse" />
              </motion.span>
              <span>Start Filing Now</span>
            </div>
          </motion.button>
        </div>
      </motion.div>
      </motion.div>
    </div>
  );
};

// Data Arrays
const keyDates = [
  { title: "FY 2023-24 End", date: "31st March 2024" },
  { title: "Original Due Date", date: "31st July 2024" },
  { title: "Revised Due Date", date: "31st December 2024" },
  { title: "Belated Return", date: "31st December 2024" },
];

const commonMistakes = [
  "Not verifying Form 26AS before filing",
  "Missing out on eligible deductions",
  "Incorrect HRA calculation",
  "Not reporting interest income",
  "Filing under wrong ITR form"
];

const benefits = [
  {
    title: "Avoid Penalties",
    description: "Save up to ₹10,000 in late filing fees and interest charges"
  },
  {
    title: "Faster Refunds",
    description: "Get tax refunds processed quicker with timely filing"
  },
  {
    title: "Loan Approvals",
    description: "Maintain clean financial records for better creditworthiness"
  },
  {
    title: "Carry Forward Losses",
    description: "Preserve your right to carry forward capital losses"
  }
];

const faqs = [
  {
    question: "Can I file ITR without Form 16?",
    answer: "Yes, but you'll need to manually enter all salary details and TDS information"
  },
  {
    question: "Is ITR filing mandatory for salary below ₹7.5 lakh?",
    answer: "Mandatory if TDS was deducted, otherwise optional under Section 194B"
  },
  {
    question: "How long to keep ITR documents?",
    answer: "Recommended to maintain records for at least 6 years from filing date"
  },
  {
    question: "Can I revise my ITR after filing?",
    answer: "Yes, revisions allowed up to 3 months before assessment year end"
  }
];

const processSteps = [
  {
    icon: ClipboardCheck,
    title: "Document Preparation",
    points: [
      "Collect Form 16 from employer",
      "Gather investment proofs (80C, 80D, etc.)",
      "Compile bank statements & interest certificates",
      "Organize home loan documents (if applicable)"
    ]
  },
  {
    icon: ShieldCheck,
    title: "Income Verification",
    points: [
      "Verify salary details from Form 16",
      "Declare additional income sources",
      "Reconcile TDS with Form 26AS",
      "Cross-verify tax deductions"
    ]
  },
  {
    icon: FileText,
    title: "ITR Form Selection",
    points: [
      "Choose ITR-1 for basic salary income",
      "Use ITR-2 for capital gains or multiple houses",
      "Check applicability for ITR-3/4 if needed",
      "Confirm form version for current AY"
    ]
  },
  {
    icon: Calculator,
    title: "Tax Calculation",
    points: [
      "Compute gross total income",
      "Apply eligible deductions",
      "Calculate final taxable income",
      "Determine tax liability/refund status"
    ]
  }
];

const documents = [
  "Form 16 from employer",
  "Bank statements (salary account)",
  "Investment proofs (80C, 80D, etc.)",
  "Home loan interest certificate",
  "Rent receipts (if claiming HRA)"
];

const deductions = [
  "Section 80C (₹1.5 Lakh limit)",
  "Section 80D (Health Insurance)",
  "HRA Exemption",
  "Education Loan Interest (80E)",
  "NPS Contributions (80CCD)"
];

export default Salaried;