import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default App;
