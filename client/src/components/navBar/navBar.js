import React, { useEffect } from "react";
import { Navbar, NavDropdown, Nav, FormControl, Form, Button } from "react-bootstrap";
import { AiFillHome, AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { RiAccountCircleFill } from "react-icons/ri";
import Logo from "../../assets/logo/logo.png";
import "./navBar.scss";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
const MainNav = () => {
  const cartItemsCount = useSelector((state) => state.cart.cartItems.length);
  const history = useHistory();
  useEffect(() => {
    const cartContainer = document.querySelector(".side-cart-container");
    const cartContent = document.querySelector(".side-cart-content");
    const nav = document.querySelector(".main-nav");
    const body = document.querySelector("body");

    const showCart = () => {
      cartContainer.style.transform = "translateX(0%)";
      cartContent.style.transform = "translateX(0%)";
    };
    const cart = document.querySelector(".nav-right");
    cart.addEventListener("click", showCart);

    return () => {
      cart.removeEventListener("click", showCart);
    };
  });
  return (
    <div className="main-nav a-hz  spa fl a-center">
      <div className="nav-left flex a-center ">
        <span className="flex a-cl a-center" onClick={() => window.location.assign("/")}>
          <AiFillHome className="icon" />
          <h4>Home</h4>
        </span>
        <span className="flex a-cl a-center" onClick={() => history.push("/profile")}>
          <RiAccountCircleFill className="icon" />
          <h4>You</h4>
        </span>
        <span className="flex a-cl a-center" onClick={() => history.push("/wishlist")}>
          <AiOutlineHeart className="icon" />
          <h4>Whish list</h4>
        </span>
      </div>
      <div className="nav-center flex a-hz" onClick={() => window.location.reload()}>
        <img src={Logo} alt="logo" />
        <h3>VeeEat</h3>
      </div>
      <div className="nav-right flex cart a-center ">
        <AiOutlineShoppingCart className="icon a-hz" />
        <h5> {cartItemsCount}</h5>
      </div>
    </div>
  );
};

export default MainNav;
