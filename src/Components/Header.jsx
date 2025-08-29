import React from "react";
import "./Header.css";
import HomeImg from "../assets/home.svg";
import AboutImg from "../assets/about.svg";
import ExpertiseImg from "../assets/expertise.svg";
import ProjectImg from "../assets/project.svg";
import ConnectImg from "../assets/connect.svg";
const Header = () => {
  return (
    <>
      {/* Nav   */}
      <div className="navbar1">
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#expertise">EXPERTISE</a>
        <a href="#project">PROJECT</a>
        <a href="#connect">CONNECT</a>
      </div>
      {/* Mobile nav   */}
      <div className="navbar2">
        <a href="#home" className="navhome">
          <img src={HomeImg} alt="home" />
        </a>
        <a href="#about" className="navhome">
          <img src={AboutImg} alt="about" />
        </a>
        <a href="#expertise" className="navhome">
          <img src={ExpertiseImg} alt="expertise" />
        </a>
        <a href="#project" className="navhome">
          <img src={ProjectImg} alt="project" />
        </a>
        <a href="#connect" className="navhome">
          <img src={ConnectImg} alt="connect" />
        </a>
      </div>
    </>
  );
};

export default Header;
