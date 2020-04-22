import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//my imports
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Exp from "./components/exp";
import Portfolio from "./components/portfolio";
import Skills from "./components/skills";
import Tools from "./components/tools";
import Footer from "./components/footer"


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <About />
      <Exp />
      <Portfolio />
      <Skills />
      <Tools />
      <Footer />
    </React.Fragment>
  );
}

export default App;
