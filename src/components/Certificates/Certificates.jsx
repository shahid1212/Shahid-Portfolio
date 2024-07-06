import React from "react";
import theme from "../../assets/theme_pattern.svg";
import services_data from "../../assets/services_data";
import "./Certificates.css";
import arrow_icon from "../../assets/arrow_icon.svg";
const Certificates = () => {
  return (
    <div id="certificates" className="certificates">
      <div className="certificate-title">
        <h1>My Certificates</h1>
        <img src={theme} alt="" />
      </div>
      <div className="certificate-container">
        {services_data.map((services, index) => {
          return (
            <div key={index} className="certificate-format">
              <h3>{services.s_no} </h3>
              <h2>{services.s_name}</h2>
              <p>{services.s_desc}</p>
              <div className="certificate-link">
                <p>verify certificate</p>
                <img src={arrow_icon} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certificates;
