import React from "react";
import "./Hero.css";
import profileimg from "../../assets/profile.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div className="hero">
      <img src={profileimg} alt="profile" />
      <h1>
        <span>I'm Shahid Abbas,</span> Frontend Developer (React js)
      </h1>
      <p>
        I am frontend developer from Islamabad, I am looking for internship in
        Frontend development using React js. I have done my graduation in
        Bachelors of Computer Science from The University of Agriculture
        Peshawar.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
