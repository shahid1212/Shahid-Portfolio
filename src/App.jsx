import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Certificates from "./components/Certificates/Certificates";
import Mywork from "./components/myWork/Mywork";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Certificates />
      <Mywork />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
