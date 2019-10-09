import React, { Component, useState, useEffect } from "react";

import Header from "./Header";
import ThreeColumns from "./ThreeColumns";
import Steps from "./Steps";
import About from "./About";
import Help from "./Help";
import Contact from "./Contact";


const Home = () => {
  const [logged, setLogged] = useState(1);
  const handleOnClick = () => {
    setLogged(logged + 1);
  };

  useEffect(() => {
    console.log("dupa");
  }, [logged]);
  return (
    <>
      <Header />
      <ThreeColumns/>
      <Steps/>
      <About/>
      <Help/>
      <Contact />
    </>
  );
};

export default Home;
