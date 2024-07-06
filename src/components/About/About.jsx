import React from "react";
import "./About.css";
import profile from "../../assets/theme.png";
import theme_pattern from "../../assets/theme_pattern.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="theme" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile} alt="profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a full-stack developer with a passion for creating beautiful
              and functional websites. I have experience in both front-end and
              back-end development, and I am always looking to learn new
              technologies and improve my skills. I am proficient in HTML, CSS,
              JavaScript, React, Node.js, Express, MongoDB, and more. I am
              currently seeking new opportunities to work on exciting projects
              and collaborate with other developers. Please feel free to contact
              me if you would like to work together or if you have any
              questions.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>React Js</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScrip</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Next JS</p>
              <hr style={{ width: "30%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>5</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>1</h1>
          <p>FINANCE RELATED INTERNSHIP</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>2</h1>
          <p>AI PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  );
};

export default About;
