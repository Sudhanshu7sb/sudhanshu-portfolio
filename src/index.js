import React from "react";
import ReactDOM from "react-dom";
import "../src/style.css";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Blog from "./component/Blog";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Blog />
      <Footer />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
