import React from "react";
import { decrementItem,incrementItem, removeItem} from "../../redux/cart/cart";
import "./cart.scss";
import {useDispatch} from 'react-redux'

//price is temporarily used an id for  the item.
const CartItem = ({ name, price, image,qty }) => {
  const dispatch = useDispatch()
  return (
    <div className="side-cart-item flex a-hz ">
      <span className="close" onClick={() => dispatch(removeItem(price))}>
        X
      </span>
      <img src={image.default} />
      <div className="side-cart-item-content">
        <div className="side-cart-item-content-top flex spb">
          <h2>{name.slice(0, 14)}...</h2>
          <h2>
            R{price} &times; {qty}
          </h2>
        </div>
        <div className="side-cart-item-content-bottom">
          <button className="addDecrease remove" onClick={() => dispatch(decrementItem(price))}>
            -
          </button>
          <button className="addDecrease add" onClick={() => dispatch(incrementItem(price))}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
