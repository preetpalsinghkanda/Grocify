import React from "react";
import "./FirstOrder.css";
import FreshFruits from "../assets/fresh-fruits.png";

export default function FirstOrder() {
  return (
    <div className="first-order">

      <div className="first-order-left">
        <div className="discount">20%</div>

        <div className="first-order-details">
          <h3>
            <span className="first">First Order</span><span>Discount!</span>
          </h3>

          <p>
            Enjoy an exclusive first order discount on our grocery website!
            Shop fresh essentials and save big on your first purchase. Fast
            delivery and quality guaranteed.
          </p>

          <button className="discount-btn">Get a Discount</button>
        </div>
      </div>

      <div className="first-order-img-container">
        <img src={FreshFruits} alt="Fresh Fruits" />
      </div>

    </div>
  );
}