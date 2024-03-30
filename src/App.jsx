import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from './components/Contact'
import Aos from "aos";
import "aos/dist/aos.css"
import About from "./components/About";
import { ToastContainer } from "react-toastify";

const App = () => {
 useEffect(() => {
  Aos.init();
  
 }, [])
 
  return (
    <div>
      <Navbar />
      <div className="container">
        <Home />
        <Experience />
        <Skills />
        <Projects />
        <About/>
        <Contact />
        <ToastContainer/>
      </div>
    </div>
  );
};

export default App;
