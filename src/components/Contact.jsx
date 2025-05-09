import React from "react";
import Navbar from "./Navbar"; // Import the Navbar component
import "./Contact.css";
import phoneIcon from "./imageFiles/phone0.svg";
import mailIcon from "./imageFiles/mail0.svg";
import instagramIcon from "./imageFiles/instagram0.svg";
import facebookIcon from "./imageFiles/facebook0.svg";

const Contact = () => {
  return (
    <div className="contact-us">
      {/* Navbar */}
      <Navbar />

      {/* Contact Section */}
      <div className="contact-container">
        {/* Left Column */}
        <div className="contact-column">
          <div className="subheader">Contact Us!</div>
          <div className="contact-item">
            <img className="icon" src={phoneIcon} alt="Phone" />
            <span className="contact-text">+1 (671) 983-2352</span>
          </div>
          <div className="contact-item">
            <img className="icon" src={mailIcon} alt="Mail" />
            <span className="contact-text">hello@fujiichybun.com</span>
          </div>
        </div>

        {/* Right Column */}
        <div className="contact-column">
          <div className="subheader">Follow Us!</div>
          <div className="contact-item">
            <img className="icon" src={instagramIcon} alt="Instagram" />
            <span className="contact-text">@TheRealFujiItchyBun</span>
          </div>
          <div className="contact-item">
            <img className="icon" src={facebookIcon} alt="Facebook" />
            <span className="contact-text">@TheRealFujiItchyBun</span>
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div className="location-section">
        <div className="subheader">Location</div>
        <div className="address">1317 Pale San Vitores Rd, Tumon, 96913, Guam</div>
        <div className="landmark">Near Guam Reef Hotel</div>
        <br />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d413.99436475599344!2d144.80257257076408!3d13.43377007536673!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1746693722000!5m2!1sen!2s"
          width="800"
          height="450"
          style={{ border: "2px solid black" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
        ></iframe>
      </div>

      {/* Hours Section */}
      <div className="hours-section">
        <div className="subheader">Hours of Operation</div>
        <div className="hours">
          Monday - Friday: 9:00 AM - 10:00PM
          <br />
          Saturday - Sunday: 10:00 PM - 11:00 PM
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer">
        <div className="footer-text">© 2023 Fuji Ichybun Restaurant</div>
        <div className="footer-text">Privacy Policy</div>
        <div className="footer-text">Terms & Conditions</div>
      </div>
    </div>
  );
};

export default Contact;