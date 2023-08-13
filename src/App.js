import logo from "./logo.svg";
import "./App.css";
import Head from "./components/Head";
import Intro from "./components/Intro";
import About from "./components/About";
import Join from "./components/Join";
import Roadmap from "./components/Roadmap";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Section from "./components/Section";
import React, { useEffect, useState } from "react";
import image from "./images/Star 4.svg";

function App() {
  const [dimensions, setDimensions] = useState({
    height: document.body.scrollHeight - 33,
    width: document.body.scrollWidth - 33,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: document.body.scrollHeight - 33,
        width: document.body.scrollWidth - 33,
      });
    }

    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <div className="App">
      {Array.from({ length: 50 }).map((_, index) => (
        <img
          key={index}
          src={image} // Replace with your images' path
          alt={`Random position image ${index + 1}`}
          style={{
            position: "absolute",
            top: Math.random() * dimensions.height,
            left: Math.random() * dimensions.width,
            width: "33px", // You can adjust the size
            height: "33px",
          }}
        />
      ))}
      <Head />
      <Intro />
      <About />
      <Join />
      <Items />
      <Roadmap />
      <Section />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
