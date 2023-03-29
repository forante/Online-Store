import React from "react";
import logo from "../img/header/Logo.png";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephoneOutbound } from "react-icons/bs";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer__row">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="footer_adress footer__contacts">
              <IoLocationOutline className="footer__icons location" />
              <p>70 West Buckingham Ave. Farmingdale, NY 11735</p>
            </div>
            <div className="footer_email footer__contacts">
              <HiOutlineMail className="footer__icons" />
              <p>contact@greenshop.com</p>
            </div>
            <div className="footer_tel footer__contacts">
              <BsTelephoneOutbound className="footer__icons" />
              <p>+88 01911 717 490</p>
            </div>
          </div>
          <div className="footer__end">
            <p>© 2023 GreenShop. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
