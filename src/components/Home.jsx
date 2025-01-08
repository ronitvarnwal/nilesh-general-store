import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="top">
        <img className="menu-icon" src="menu.svg" />
        <img className="top-logo" src="toplogo.png" />
        <img className="search-icon" src="search.svg"/>
      </div>
      <div className="middle">
        <ul>
          <li>Home</li>
          <li>Men's</li>
          <li>Women's</li>
          <li>Jewelry</li>
          <li>Cosmetics</li>
          <li>Perfume</li>
        </ul>
        <img class="header-image" src="header-image.jpg" />
        <div className="header-product">
        <div className="top-products p1"><img className="example-logo" src="example.png"/><span className="p-name">Fair & Lovely</span><span className="p-category">Cosmetics</span><span className="p-price">₹70</span></div>
        <div className="top-products p2"><img className="example-logo" src="example.png"/><span className="p-name">Fair & Lovely</span><span className="p-category">Cosmetics</span><span className="p-price">₹70</span></div>
          <div className="top-products p3"><img className="example-logo" src="example.png"/><span className="p-name">Fair & Lovely</span><span className="p-category">Cosmetics</span><span className="p-price">₹70</span></div>
          <div className="top-products p4"><img className="example-logo" src="example.png"/><span className="p-name">Fair & Lovely</span><span className="p-category">Cosmetics</span><span className="p-price">₹70</span></div>
        </div>
      </div>
    </div>
  );
};

export default Home;