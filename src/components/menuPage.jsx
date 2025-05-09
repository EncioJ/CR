import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import './menuStyle.css';
import Navbar from './Navbar';
import { CartContext } from './CartContext';
import {ToastContainer } from 'react-toastify'; // Import react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS

function Menu() {
  const [categories, setCategories] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "menu"));
        const menuData = {};

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          menuData[data.category] = {
            id: doc.id,
            items: data.items
          };
        });

        setCategories(menuData);
        setSelectedCategory(Object.keys(menuData)[0]);
      } catch (err) {
        console.error("Error fetching menu:", err);
      }
    };

    fetchMenu();
  }, []);

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  if (!selectedCategory || !categories[selectedCategory]) {
    return <div style={{ padding: "100px", textAlign: "center" }}>Loading menu...</div>;
  }

  return (
    <>
      <Navbar />
      <ToastContainer />
      {/* Sidebar menu */}
      <div className="menu_section">
        <div className="menu2" style={{ pointerEvents: 'none', fontWeight: 'bold' }}>MENU</div>
        {Object.keys(categories).map((category, index) => (
          <div
            key={index}
            className={"category " + (selectedCategory === category ? "active highlighted" : "")}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </div>
        ))}
      </div>

      {/* Right Side - Food Items */}
      <div className="food-section">
        <h1 className="category-title">{selectedCategory}</h1>
        <div className="food-grid">
          {categories[selectedCategory]?.items?.map((item, index) => (
            <div key={index} className="food-box">
              <img src={item.image || "path/to/placeholder.jpg"} alt={item.name} className="food-image" />
              <div className="food-info">
                <span className="food-name">{item.name}</span>
                <span className="food-price">${item.price}</span>
              </div>
              <button
                
                className="add-to-cart"
                onClick={() => handleAddToCart({ name: item.name, price: item.price, image: item.image })}
              >
                Add To Cart
                
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer
      <div className="section">
        <div className="container">
          <div className="title">© 2023 Fuji Ichybun Restaurant</div>
          <div className="title2">Privacy Policy</div>
          <div className="title3">Terms & Conditions</div>
        </div>
      </div> */}
    </>
  );
}

export default Menu;