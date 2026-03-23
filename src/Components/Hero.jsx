import React from "react";
import "./Hero.css";
import basket from "../assets/grocery.png";
import Category from "./Category";
import { useNavigate } from "react-router-dom";

export default function Hero() {
   const navigate = useNavigate();
  return (
    <>
    <div className="hero-container">
      <div className="heading">
        <span className="export">Export Best Quality...</span>
        <h1>Tasty Organic <br /><span>Fruits</span> & <span>Veggies</span><br /> In Your City</h1>
        <p>
          Bred for a high content of beneficial substances. Our products are all
          fresh and healthy.
        </p>
        <button className="shop-now"  onClick={() => navigate("/allproducts")}>Shop Now</button>
      </div>
      <div className="basket-img-container">
        <img src={basket} alt="basket" />
      </div>
    </div>

    <Category/>
    </>
  );
}
