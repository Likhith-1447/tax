import { motion } from 'framer-motion';
import { Briefcase, Calculator, Download, ChevronRight, Layers, ClipboardCheck, ShieldCheck, Calendar, AlertCircle, Gift, HelpCircle, Receipt, FileSpreadsheet, Wallet } from 'lucide-react';

const Freelancer = () => {
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
          className="text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-400 text-center"
        >
          Freelancer ITR Filing
        </motion.h1>

        {/* Key Dates Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800 p-6 rounded-xl border border-orange-400/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-8 h-8 text-orange-400" />
              <h2 className="text-2xl font-semibold text-orange-300">Important Deadlines</h2>
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
                  <ChevronRight className="w-4 h-4 text-orange-400" />
                  <span className="font-medium">{date.title}:</span>
                  <span className="text-gray-300">{date.date}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Compliance Checklist Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-800 p-6 rounded-xl border border-amber-400/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <ClipboardCheck className="w-8 h-8 text-amber-400" />
              <h2 className="text-2xl font-semibold text-amber-300">Compliance Checklist</h2>
            </div>
            <ul className="space-y-3">
              {complianceChecklist.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-2 p-2 hover:bg-gray-700 rounded"
                >
                  <ChevronRight className="w-4 h-4 text-amber-400 mt-1" />
                  {item}
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
          className="bg-gray-800 p-8 rounded-2xl border border-orange-400/20 mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <Gift className="w-10 h-10 text-orange-400" />
            <h2 className="text-3xl font-semibold text-orange-300">Freelancer Tax Benefits</h2>
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
                <div className="bg-orange-400/20 p-2 rounded-lg">
                  <ChevronRight className="w-6 h-6 text-orange-400" />
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
              className="text-3xl font-bold mb-8 flex items-center gap-3 text-orange-300"
            >
              <Layers className="w-8 h-8" />
              Filing Process
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
                      className="bg-orange-400/20 p-3 rounded-lg"
                    >
                      <step.icon className="w-6 h-6 text-orange-400" />
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
                            <ChevronRight className="w-4 h-4 mt-1 text-orange-400 flex-shrink-0" />
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
          className="bg-gray-800 p-8 rounded-2xl border border-amber-400/20 mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="w-10 h-10 text-amber-400" />
            <h2 className="text-3xl font-semibold text-amber-300">Freelancer Tax FAQs</h2>
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
                <h3 className="text-lg font-medium mb-2 text-amber-100">Q: {faq.question}</h3>
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
            className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-orange-400/30 transition-all"
          >
            <h2 className="text-xl font-semibold mb-4 text-orange-300 flex items-center gap-2">
              <FileSpreadsheet className="w-6 h-6" />
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
                  <ChevronRight className="w-4 h-4 text-orange-400" />
                  {doc}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", delay: 0.6 }}
            className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-amber-400/30 transition-all"
          >
            <h2 className="text-xl font-semibold mb-4 text-amber-300 flex items-center gap-2">
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
                  <ChevronRight className="w-4 h-4 text-amber-400" />
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
              className="absolute inset-0 bg-gradient-to-r from-orange-600/30 to-amber-600/30 rounded-xl blur-3xl group-hover:blur-4xl transition-all duration-300"
            />
            
            {/* Main button */}
            <motion.button
              whileHover={{
                scale: 1.05,
                background: [
                  'linear-gradient(45deg, #f97316, #f59e0b)',
                  'linear-gradient(60deg, #f97316, #f59e0b, #f97316)'
                ],
                boxShadow: '0 0 40px rgba(249, 115, 22, 0.5)'
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
              className="relative bg-gradient-to-r from-orange-600 to-amber-600 text-white px-12 py-6 rounded-xl font-bold text-2xl shadow-2xl transition-all duration-300 overflow-hidden"
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
                <span>File Freelancer Return</span>
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
  { title: "Financial Year End", date: "31st March 2024" },
  { title: "Advance Tax Due (Q1)", date: "15th June 2024" },
  { title: "ITR Filing Deadline", date: "31st July 2024" },
  { title: "Revised Return", date: "31st December 2024" },
];

const complianceChecklist = [
  "Register as a professional",
  "Maintain income & expense records",
  "Track client payments & GST",
  "Calculate advance tax liability",
  "Keep project contracts safe"
];

const benefits = [
  {
    title: "Home Office Deduction",
    description: "Claim expenses for your home workspace and utilities"
  },
  {
    title: "Professional Development",
    description: "Deduct costs for courses, certifications, and skill upgrades"
  },
  {
    title: "Equipment Write-offs",
    description: "Claim depreciation on work-related equipment and tools"
  },
  {
    title: "Flexible Tax Planning",
    description: "Optimize between different tax regimes for better savings"
  }
];

const faqs = [
  {
    question: "Do I need GST registration as a freelancer?",
    answer: "Required if annual turnover exceeds ₹20 lakhs (₹10 lakhs for specified states)"
  },
  {
    question: "How to handle international client payments?",
    answer: "Report foreign income and claim DTAA benefits where applicable"
  },
  {
    question: "Can I claim both HRA and home office expenses?",
    answer: "Yes, but with proper segregation and documentation of spaces"
  },
  {
    question: "What about retirement planning?",
    answer: "Consider NPS, PPF, or other tax-saving investment options"
  }
];

const processSteps = [
  {
    icon: Briefcase,
    title: "Income Documentation",
    points: [
      "Organize client invoices",
      "Compile bank statements",
      "Track foreign remittances",
      "Document project contracts"
    ]
  },
  {
    icon: Receipt,
    title: "Expense Management",
    points: [
      "Categorize business expenses",
      "Record equipment purchases",
      "Track subscription costs",
      "Document travel expenses"
    ]
  },
  {
    icon: Wallet,
    title: "Payment Reconciliation",
    points: [
      "Match invoices with payments",
      "Verify foreign currency conversions",
      "Track pending payments",
      "Reconcile GST records"
    ]
  },
  {
    icon: Calculator,
    title: "Tax Computation",
    points: [
      "Calculate gross income",
      "Apply eligible deductions",
      "Compute advance tax",
      "Determine final liability"
    ]
  }
];

const documents = [
  "Client invoices and contracts",
  "Bank statements (all accounts)",
  "Expense receipts and bills",
  "Asset purchase documents",
  "Previous year's ITR copy"
];

const deductions = [
  "Professional development costs",
  "Home office expenses",
  "Internet and phone bills",
  "Equipment depreciation",
  "Professional insurance"
];

export default Freelancer;