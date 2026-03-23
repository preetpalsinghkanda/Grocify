import React from "react";
import "./Category.css";
import FruitsAndVeg from '../assets/fruits-and-veggies.png';
import DairyAndEgg from '../assets/dairy-and-eggs.png';
import MeatAndSeaFood from '../assets/meat-and-seafood.png';
import { Link } from "react-router-dom";

export default function Category() {
  return (
    <div className="category-container">
      <h2>
        <span>Shop</span> by Category
      </h2>
      <hr />
      <div className="item-container">
        <div className="item-box first-box">
          <img src={FruitsAndVeg}alt="" />
          <div className="item-details">
            <h4>Fruits & Veggies</h4>
            <p>Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.</p>
            <Link to="/fruits" onClick={() => window.scrollTo(0, 0)}><button className="see-all">See All</button></Link>
          </div>
        </div>
        <div className="item-box second-box">
          <img src={DairyAndEgg}alt=""  />
          <div className="item-details">
            <h4>Dairy & Eggs</h4>
            <p>Wholesome dairy products and free-range eggp From creamy milk and yogurt to artisanal cheeses.</p>
            <Link to="/dairy" onClick={() => window.scrollTo(0, 0)}><button className="see-all">See All</button></Link>
          </div>
        </div>
        <div className="item-box third-box">
          <img src={MeatAndSeaFood}alt="" />
          <div className="item-details">
            <h4>Meat & SeaFood</h4>
            <p>High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.</p>
            <Link to="/seafood" onClick={() => window.scrollTo(0, 0)}><button className="see-all">See All</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
