import React from 'react';
import Navbar from './Navbar';
import './aboutUs.css'; // Import the updated CSS file
import AboutUsImage from './imageFiles/AboutUsJAY.png'; // Corrected relative path

function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="about-us-container">
        <div className="about-us-header">
          <h1>About Us</h1>
        </div>
        <div className="about-us-content">
          <p>
            Welcome to <span className="restaurant-name">JAY’S CHICKEN</span> – More Than Just Chicken. It’s Island Heritage on a Plate.
          </p>
          <p>
            It all started in 1960, when three close friends—Julio Santos, Arturo dela Cruz, and Yong Wei Chen—came together with a dream: 
            to share the comforting flavors of their homelands with the people of Guam. Julio and Arturo brought the heart and soul of Filipino cooking, 
            while Yong introduced the bold, savory traditions of Chinese cuisine.
          </p>
          <div className="about-us-image">
            <img src={AboutUsImage} alt="JAY'S CHICKEN" />
          </div>
          <p>
            What began as a small roadside stand in Hagåtña, serving up crispy fried chicken using Julio’s family marinade soon expanded. 
            Customers kept coming back not only for the chicken, but also for pancit, lumpia, sweet and sour pork, and other beloved Filipino-Chinese favorites 
            that reminded them of home.
          </p>
          <p>
            They named the restaurant <span className="restaurant-name">JAY’S CHICKEN</span>, using the first letters of their names. J for Julio, A for Arturo, 
            and Y for Yong as a symbol of their friendship, culture, and shared love for food.
          </p>
          <p>
            Today, <span className="restaurant-name">JAY’S CHICKEN</span> is still proudly local, still family-owned, and still serving up the same flavors that made it 
            a household name more than 60 years ago. From fried chicken to classic island-style lumpia, our menu is a celebration of the Filipino-Chinese spirit 
            that helped shape Guam’s unique food culture.
          </p>
          <p className="thank-you">
            Thanks for making us part of your family meals, celebrations, and memories.
          </p>
          <p className="thank-you">
            <strong>Come hungry. Leave happy. Always feel at home.</strong>
          </p>
        </div>
        <div className="about-us-footer">
          <p>© 2023 JAY’S CHICKEN. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;