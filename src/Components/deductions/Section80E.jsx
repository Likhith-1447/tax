import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, BookOpen, Clock, Users } from 'lucide-react';

const Section80E = () => {
  const [headerRef, headerInView] = useInView({ triggerOnce: true });
  const [contentRef, contentInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const features = [
    {
      icon: <BookOpen className="w-6 h-6 text-blue-400" />,
      title: "Eligible Courses",
      items: [
        "Graduate and Post-Graduate programs",
        "Professional courses after Class 12",
        "Research programs in scientific field",
        "Vocational studies"
      ]
    },
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: "Eligible Relations",
      items: [
        "Self",
        "Spouse",
        "Children",
        "Student for whom you are legal guardian"
      ]
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-400" />,
      title: "Time Period",
      items: [
        "Deduction available for 8 years",
        "Starts from the year you begin paying interest",
        "Or until interest is fully paid",
        "Whichever is earlier"
      ]
    }
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
          Section 80E - Education Loan Interest
        </h1>
        <div className="flex justify-center items-center gap-4 mb-8">
          <GraduationCap className="w-12 h-12 text-blue-400" />
          <p className="text-2xl text-gray-300">No Maximum Limit on Deduction</p>
        </div>
      </motion.div>

      <motion.div
        ref={contentRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: contentInView ? 1 : 0 }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: contentInView ? 1 : 0, y: contentInView ? 0 : 20 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="bg-gray-700 p-4 rounded-full inline-block mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-blue-400 mb-4">
                  {feature.title}
                </h3>
                <ul className="space-y-3 text-left">
                  {feature.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: contentInView ? 1 : 0, x: contentInView ? 0 : -10 }}
                      transition={{ delay: index * 0.1 + itemIndex * 0.1 }}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
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
          <h2 className="text-2xl font-semibold text-blue-400 mb-6">Key Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2" />
                <p className="text-gray-300">No upper limit on the amount of interest that can be claimed</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2" />
                <p className="text-gray-300">Covers both domestic and foreign education</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2" />
                <p className="text-gray-300">Principal repayment not eligible for deduction</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2" />
                <p className="text-gray-300">Loan must be taken from approved financial institution</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Section80E;