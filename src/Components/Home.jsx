import React from "react";
import Banner from "./Pages/Banner";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Qualification from "./Pages/Qualification";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Skills />
      <Qualification />
      <Portfolio/>
      <Contact/>
    </div>
  );
};

export default Home;
