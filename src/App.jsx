import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";

import Layout from "./Layout";

// Pages
import Home from "./pages/Home";
import Plan from "./pages/Plan";
import Step1 from "./pages/steps/Step1";
import Step2 from "./pages/steps/Step2";
import Step3 from "./pages/steps/Step3";
import Receipt from "./pages/Receipt";
import HowItsWork from "./pages/HowItsWork";
import Contact from "./pages/Contact";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import Dashboard from "./pages/dashboard/Dashboard";
import Internet from "./pages/Internet";
import Activation2 from "./pages/internet-activation/Activation2";
import Activation3 from "./pages/internet-activation/Activation3";
import Activation4 from "./pages/internet-activation/Activation4";
import Activation5 from "./pages/internet-activation/Activation5";
import Active from "./pages/Active";


function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />

      <Header />

      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>

            {/* WRAPPED ROUTES (ANIMATED) */}
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/internet" element={<Internet />} />
              <Route path="/plan" element={<Plan />} />
              <Route path="/step1" element={<Step1 />} />
              <Route path="/step2" element={<Step2 />} />
              <Route path="/step3" element={<Step3 />} />
              <Route path="/receipt" element={<Receipt />} />
              <Route path="/how-its-work" element={<HowItsWork />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>

            {/* AUTH (NO LAYOUT ANIMATION IF YOU WANT CLEAN SEPARATION) */}
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />


            {/* <Route path="/services1" element={<Services1 />} /> */}
            <Route path="/activation-2" element={<Activation2 />} />
            <Route path="/activation-3" element={<Activation3 />} />
            <Route path="/activation-4" element={<Activation4 />} />
            <Route path="/activation-5" element={<Activation5 />} />


            <Route path="/active" element={<Active />} />

          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </>
  );
}

export default App;