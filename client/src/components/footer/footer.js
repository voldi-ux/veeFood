import { data } from "jquery";
import React from "react";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";
import image from "../../assets/images/footer-app.png";
import Logo from "../../assets/logo/logo.png";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content flex a-hz spb">
        <div className="footer-content-left">
          <h3>Contacts</h3>
          <span className="flex a-hz">
            <AiFillMail className="footer-icon  " />
            <h5>mailVeeEat@gmail.com</h5>
          </span>
          <span className="flex a-hz">
            <AiFillPhone className="footer-icon " />
            <h5>+27 843 4384 444</h5>
          </span>
          <span className="flex a-hz">
            <FaLocationArrow className="footer-icon " />
            <h5>
              Patrick and Scandal str 345 Cape Town, Cape Tower 14th floor
            </h5>
          </span>
        </div>
        <div className="logo-container flex a-hz">
          <img src={Logo} alt="logo" />
          <h3>VeeEat</h3>
        </div>
        <div className="footer-content-right">
          <h3>Get more on the app</h3>
          <img src={image} alt="mobile" />
        </div>
      </div>
      <div className="footer-content-bottom">
        <aside>
          <h3>Privacy Policy</h3>
          <h3>Terms</h3>
          <h3>Pricing</h3>
        </aside>
        <p>&copy;2021 all rights reversed</p>
      </div>
    </footer>
  );
};

export default Footer;
