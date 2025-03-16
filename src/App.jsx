import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import TaxCalculatorPage from "./TaxCalculator";
import Login from "./Components/pages/login";
import Signup from "./Components/pages/Signup";
import InterestCalculator from "./calculators/InterestCalculator";
import IncomeTaxCalculator from "./calculators/IncomeTaxCalculator";
import GratuityCalculator from "./calculators/GratuityCalculator";
import SIPCalculator from "./calculators/SipCalculator";
import HRACalculator from "./calculators/HRACalculator";
import FDCalculator from "./calculators/FDCalculator";
import HomeLoanEMICalculator from "./calculators/HomeLoanCalculator";
import CryptoTaxCalculator from "./calculators/CryptoCalculator";
import Tds from "./Components/Tds";
import Itr from "./Components/Itr";
import Salaried from "./Components/pages/Salaried.jsx";
import Freelancers from "./Components/pages/Freelancers.jsx";
import Businesses from "./Components/pages/businesses.jsx"; 
import Investors from "./Components/pages/investors.jsx";
import TaxSavings from "./Components/TaxSavings.jsx";
import Section80C from "./Components/deductions/Section80C.jsx";
import Section80E from "./Components/deductions/Section80E.jsx";
import Section80GG from "./Components/deductions/Section80GG.jsx";
import Section80TTA from "./Components/deductions/Section80TTA.jsx";
import Section80TTB from "./Components/deductions/Section80TTB.jsx";
import CapitalGain from "./Components/pages/CapitalGains.jsx";
import FreelancerConsultant from "./Components/pages/FreeLancerConsultant.jsx";
import Tdsb from "./Components/Tdsb.jsx";
import Itrb from "./Components/Itrb.jsx";
import Contacts from "./Components/Contacts.jsx";
import Gstb from "./Components/gstb.jsx";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white animate-fade-in-up">
            <span
              className="inline-block animate-slide-up opacity-0"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              Tax
            </span>
            <span
              className="inline-block animate-slide-up opacity-0 text-blue-300"
              style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
            >
              Truth
            </span>
          </h1>
          <div className="mt-4 animate-pulse">
            <div className="w-16 h-1 bg-blue-300 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Navbar />
      <Routes>
                     <Route path="/" element={<Dashboard />} />
                     <Route path="/tax-calculators" element={<TaxCalculatorPage />} />

                     <Route path="/tax-savings" element={<TaxSavings />} />

<Route path="/tax-calculators/interest-calculator" element={<InterestCalculator />} />
<Route path="/tax-calculators/income-tax-calculator" element={<IncomeTaxCalculator />}/>
<Route path="/tax-calculators/GratuityCalculator" element={<GratuityCalculator />} />
<Route path="/tax-calculators/sip-calculator" element={<SIPCalculator />} />
<Route path="/tax-calculators/hra-Calculator" element={<HRACalculator />} />
<Route path="/tax-calculators/fd-calculator" element={<FDCalculator />} />
<Route path="/tax-calculators/home-loan-emi-calculator" element={<HomeLoanEMICalculator />} />
<Route path="/tax-calculators/crypto-tax-calculator" element={<CryptoTaxCalculator />} />
<Route path="/Components/Tds" element={<Tds />} />
<Route path="/Components/Itr" element={<Itr />} />
<Route path="/salaried" element={<Salaried />} />
<Route path="/freelancers" element={<Freelancers />} />
<Route path="/businesses" element={<Businesses />} />
<Route path="/investors" element={<Investors />} />
<Route path="/deductions/80c" element={<Section80C />} />
          <Route path="/deductions/80e" element={<Section80E />} />
          <Route path="/deductions/80tta" element={<Section80TTA />} />
          <Route path="/deductions/80ttb" element={<Section80TTB />} />
          <Route path="/deductions/80gg" element={<Section80GG />} />
<Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} />
<Route path="/Tdsb" element={<Tdsb />} />
<Route path="/Itrb" element={<Itrb />} />
<Route path="/Contacts" element={<Contacts />} />
<Route path="/gstb" element={<Gstb />} />
<Route path="/pages/capital-gains" element={<CapitalGain />} />
<Route path="/pages/freelancer" element={<FreelancerConsultant />} />

      </Routes>
</Router>
  );
}

export default App;
