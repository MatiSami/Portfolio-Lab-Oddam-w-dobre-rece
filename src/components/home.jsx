import React, { Component } from "react";
import {
  Link
} from 'react-router-dom';

import HomeHeader from "../components/HomeHeader";
import HomeThreeColumns from "../components/HomeThreeColumns";
import HomeSteps from "../components/HomeSteps";
import HomeAbout from "../components/HomeAbout";
import HomeHelp from "../components/HomeHelp";
import HomeContact from "../components/HomeContact";

class Home extends Component {
  render() {
    return (
      <>
        <Link to="/login">Zaloguj się</Link>
        <Link to="/register">Zarejestruj się</Link>
        <h1>Home</h1>;
        <HomeHeader/>
        <HomeThreeColumns/>
        <HomeSteps/>
        <HomeAbout/>
        <HomeHelp/>
        <HomeContact/>
      </>
    );
  }
}

export default Home;
