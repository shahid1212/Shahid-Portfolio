import React from "react";
import "./Contact.css";
import theme from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d77a9ba6-c06e-4e0a-b101-a062b1df18a9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("email Sent Successfully");
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I am always open for Internship Position in Mern Stack Development.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>abbaspcr3@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+92 300 5076319</p>
            </div>
            <div className="contact-detail">
              <img src={location} alt="" />
              <p>Islamabad, Pakistan</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter Your Name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter Your Email" name="email" />
          <label htmlFor="">Your Message</label>
          <textarea
            name="message"
            rows="10"
            placeholder="Enter Your Message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
