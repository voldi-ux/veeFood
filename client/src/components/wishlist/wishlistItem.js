import React from "react";
import { Image } from "react-bootstrap";
import "./wishlist.scss";
import { useDispatch } from "react-redux";
import { removeItemFromWishlist } from "../../redux/wishlist/wishlist";
import { addItem } from "../../redux/cart/cart";

//the price should be replaced with an id. NB:
const WishListItem = ({ name, price, image, _id }) => {
  const dispatch = useDispatch();
  const removeFromWishlist = () => {
    dispatch(removeItemFromWishlist(price));
  };

  const moveToCart = () => {
    dispatch(addItem({ name, price, image, qty: 1 }));
    dispatch(removeItemFromWishlist(price));
  };

  return (
    <div className="wishlist-item-container flex spb">
      <img className="wishlist-item-image" src={image.default} alt={name} />
      <div className="wishlist-item-detail">
        <h1>{name}</h1>
        <h2>R {price}</h2>
      </div>
      <div className="wishlist-item-buttons flex">
        <button className="wishlist-item-remove-btn" onClick={removeFromWishlist}>Remove</button>
        <button className="wishlist-item-add-btn" onClick={moveToCart}>Add to cart</button>
      </div>
    </div>
  );
};

export default WishListItem;
