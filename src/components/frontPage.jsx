import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Navbar from './Navbar'; // Import the Navbar component
import temporary from "./imageFiles/BIG_GHEE.png";
import heroImage from "./imageFiles/HeroImage.jpeg"; // Add your hero image here
import './front.css';

function FrontPage() {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay">
          <h1 className="hero-title">Experience the Best of Filipino-Chinese, and Chicken Cuisine</h1>
          <p className="hero-subtitle">Delicious dishes crafted with love and tradition, ready to delight your taste buds.</p>
          <button className="hero-button" onClick={() => navigate('/menu')}>Explore Our Menu</button> {/* Navigate to menu */}
        </div>
      </div>

      {/* Main Content */}
      <div className="front-page-content">
        <div className="content-wrapper">
          {/* Welcome Section */}
          <div className="text-section">
            <div className="frame-4">
              <div className="hero-restaurant-name">Welcome to Jay's Chicken</div>
            </div>

            <div className="tagline">Authentic Filipino, Chinese, and Chicken Delights</div>

            <div className="frame-6">
              <div className="description">
                Discover the rich flavors of Filipino classics, the savory taste of Chinese cuisine, and the irresistible appeal of our chicken specialties. Every dish is crafted with love and tradition to bring you a dining experience like no other.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cuisine Highlights Section */}
      <div className="cuisine-section">
        <h2 className="section-title">Explore Our Cuisines</h2>
        <div className="cuisine-wrapper">
          {/* Filipino Cuisine */}
          <div className="cuisine filipino">
            <h3>Filipino Favorites</h3>
            <p>Indulge in classic Filipino dishes like Adobo, Sinigang, and Lechon Kawali. A true taste of home!</p>
          </div>

          {/* Chinese Cuisine */}
          <div className="cuisine chinese">
            <h3>Chinese Delights</h3>
            <p>Enjoy savory Chinese dishes like Sweet and Sour Pork, Dim Sum, and Peking Duck. Perfect for every occasion!</p>
          </div>

          {/* Chicken Specials */}
          <div className="cuisine chicken">
            <h3>Chicken Specials</h3>
            <p>From crispy fried chicken to flavorful chicken inasal, our chicken dishes are sure to satisfy your cravings.</p>
          </div>
        </div>
      </div>

      {/* Featured Dishes Section */}
      <div className="featured-dishes-section">
        <h2 className="section-title">Our Featured Dishes</h2>
        <div className="featured-dishes-wrapper">
          <div className="dish">
            <h3>Kare-Kare</h3>
            <p>A rich and creamy peanut stew with tender oxtail and vegetables, served with bagoong (shrimp paste).</p>
          </div>
          <div className="dish">
            <h3>Yang Chow Fried Rice</h3>
            <p>A flavorful fried rice dish loaded with shrimp, pork, and vegetables. A perfect complement to any meal!</p>
          </div>
          <div className="dish">
            <h3>Chicken Inasal</h3>
            <p>Grilled chicken marinated in a blend of spices and served with garlic rice and dipping sauce.</p>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="cta-section">
        <h2>Order Now!</h2>
        <p>Experience the best of Filipino, Chinese, and chicken dishes. Order online or visit us today!</p>
        <button className="order-button" onClick={() => navigate('/menu')}>View Menu</button> {/* Navigate to menu */}
      </div>

      {/* Footer Section */}
      <div className="section">
        <div className="container">
          <div className="title">© 2023 Jay's Chicken Restaurant</div>
          <div className="title2">Privacy Policy</div>
          <div className="title3">Terms &amp; Conditions</div>
        </div>
      </div>
    </>
  );
}

export default FrontPage;