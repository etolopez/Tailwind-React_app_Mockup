import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Support from "./components/Support.jsx";
import AllinOne from "./components/AllinOne.jsx";
import Pricing from "./components/Pricing.jsx";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <About />
      <Support />
      <AllinOne />
      <Pricing />
    </div>
  );
}

export default App;
