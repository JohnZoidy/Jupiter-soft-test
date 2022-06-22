import React from 'react';
import logo from '../../assets/img/Logo.png';

const Header = () => (
  <div className="header">
    <div className="container">
      <div className="navbar">
        <div>
          <img src={logo} alt="Agency logo" />
        </div>
        <ul className="header__menu">
          <li>About</li>
          <li>Services</li>
          <li>Pricing</li>
          <li>Blog</li>
        </ul>
        <button type="button">contact</button>
      </div>
      <div className="header__label">
        <h1>Portfolio</h1>
        <p>
          Agency provides a full service range including technical skills,
          design, business understanding.
        </p>
      </div>
    </div>
  </div>
);

export default Header;
