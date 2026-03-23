import React, { useContext } from "react";
import "./Bag.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";
import Grocery from "../Context/Context";
import bag from '../assets/basket.png';
import toast from "react-hot-toast";

export default function Bag() {
  const { cart, quantity, fncQntyDec, fncQntyInc, fncCart } =
    useContext(Grocery);

  const getSubtotal =()=>{
    return cart.reduce((total, item) => {
      const qty = quantity[item.id] || 1;
      return total + item.amount * qty;
    }, 0);
  };

  return (
    <div className="cart-page">
      <h1>My Shopping Cart</h1>
      {cart.length === 0 ? (<div className="no-cart-container"> <img src={bag} alt="bag" /> <h3>Add Item to Buy :)</h3></div>) : (<div className="cart-layout">
    
        <div className="cart-items">
          <div className="cart-header">
            <p>Product</p>
            <p>Price</p>
            <p>Qty</p>
            <p></p>
          </div>

          {cart.map((item) => {
            const qty = quantity[item.id] || 1;

            return (
              <div className="cart-row" key={item.id}>
                <div className="product-info">
                  <img src={item.photo} alt={item.name} />
                  <span>{item.name}</span>
                </div>

                <p className="actual-price">${item.amount}</p>

                <div className="qty-container"><div className="qty-box">
                  <button onClick={() => fncQntyDec(item.id)}>
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <span>{qty}</span>
                  <button onClick={() => fncQntyInc(item.id)}>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>

                <p className="final-price">${(item.amount * qty).toFixed(2)}</p></div>

                <button
                  className="remove-btn"
                  onClick={() => fncCart(item)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            );
          })}
        </div>

        <div className="cart-summary">
          <h3>Order Summary</h3>

          <div className="summary-items"><div className="summary-row">
            <span>Subtotal</span>
            <span>${getSubtotal().toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>$5.00</span>
          </div>

          <div className="summary-row total">
            <span>Total</span>
            <span>${(getSubtotal() + 5).toFixed(2)}</span>
          </div></div>

          <button className="checkout-btn" onClick={()=>{toast.success("Order Placed successfully")}}> 
            Proceed to Checkout
          </button>
        </div>
      </div>)}
    </div>
  );
}