import React from "react";
import logo from "../img/header/Logo.png";
import { FiSearch } from "react-icons/fi";
import { GiShoppingCart } from "react-icons/gi";
import { IoLogInOutline } from "react-icons/io5";
import headerImg1 from "../img/header/img1.png";
import headerImg2 from "../img/header/img2.png";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="header__block">
            <div className="logo">
              <a href="*">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <nav className="navbar">
              <ul className="navbar__items">
                <li className="navbar__item active">Home</li>
                <li className="navbar__item">Shop</li>
                <li className="navbar__item">Plant Care</li>
                <li className="navbar__item">Blogs</li>
              </ul>
            </nav>
            <div className="header__icons">
              <div className="header__search">
                <FiSearch className="search-icon" />
              </div>
              <div className="header__cart">
                <GiShoppingCart className="cart-icon" />
              </div>
              <div className="header__login">
                <a href="*" className="login__btn btn">
                  <IoLogInOutline className="login-icon" />
                  Login
                </a>
              </div>
            </div>
          </div>
          <div className="header__presentation">
            <div className="header__content">
              <h4>Welcome to GreenShop</h4>
              <h1>
                Let’s Make a Better <span>Planet</span>
              </h1>
              <p>
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create an unique Urban Jungle.
                Order your favorite plants!
              </p>
              <a href="*" className="header__btn btn">
                shop now
              </a>
            </div>
            <div className="header__images">
              <img
                src={headerImg1}
                alt="flower"
                className="header__image header__image_big"
              />
              <img
                src={headerImg2}
                alt="flower"
                className="header__image header__image_small"
              />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;