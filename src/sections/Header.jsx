import React, { useState } from 'react';
import Logo from "../assets/images/logo.png";

const Header = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
    document.body.classList.toggle("nav-active");
  };

  return (
    <header className="header" data-header>
      <div className="container">

        <a href="#" className="logo">
          <img src={Logo} width="136" height="40" alt="Hospital home" />
        </a>

        <nav className={`navbar ${isNavActive ? 'active' : ''}`} data-navbar>

          <div className="navbar-top">

            <a href="#" className="logo">
              <img src={Logo} width="136" height="46" alt="Hospital home" />
            </a>

            <button className="nav-close-btn" onClick={toggleNav} aria-label="close menu" data-nav-toggler>
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
            </button>

          </div>

          <ul className="navbar-list">

            <li className="navbar-item">
              <a href="#" className="navbar-link title-md">Home</a>
            </li>

            <li className="navbar-item">
              <a href="#" className="navbar-link title-md">Doctors</a>
            </li>

            <li className="navbar-item">
              <a href="#" className="navbar-link title-md">Services</a>
            </li>

            <li className="navbar-item">
              <a href="#" className="navbar-link title-md">Blog</a>
            </li>

            <li className="navbar-item">
              <a href="#" className="navbar-link title-md">Contact</a>
            </li>

          </ul>

          <ul className="social-list">

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-pinterest"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-youtube"></ion-icon>
              </a>
            </li>

          </ul>

        </nav>

        <button className="nav-open-btn" aria-label="open menu" onClick={toggleNav} data-nav-toggler>
          <ion-icon name="menu-outline"></ion-icon>
        </button>

        <a href="#" className="btn has-before title-md">Make Appointment</a>

        <div className={`overlay ${isNavActive ? 'active' : ''}`} data-nav-toggler data-overlay></div>

      </div>
    </header>
  );
};

export default Header;
