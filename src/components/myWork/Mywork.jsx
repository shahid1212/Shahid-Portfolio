import React from "react";
import theme from "../../assets/theme_pattern.svg";
import "../myWork/Mywork.css";
import arrowicon from "../../assets/arrow_icon.svg";
import mywork_data from "../../assets/mywork_data";
const Mywork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Work</h1>
        <img src={theme} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} />;
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrowicon} alt="" />
      </div>
    </div>
  );
};

export default Mywork;
