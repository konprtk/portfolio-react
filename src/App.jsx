import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Skills from "./components/Skills";
import Test from "./components/Test";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { useEffect } from "react";

function App() {
  return (
    <>
      

      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/education" element={<Education/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/projects" element={<Projects/>} />
        </Routes>
      </BrowserRouter> */}
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
