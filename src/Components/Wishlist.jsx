import React, { useContext } from "react";
import "./Wishlist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faHeart, faMinus } from "@fortawesome/free-solid-svg-icons";
import Grocery from "../Context/Context";
import nowishlist from "../assets/no-wishlist.jpg";

export default function Wishlist() {
  const { liked, FncLiked, fncQntyDec, fncQntyInc, fncCart, cart, quantity } =
    useContext(Grocery);
  return (
    <div className="wishlist-container">
      <h2>My Wishlist</h2>

      {liked.length === 0 ? (
        <img className="no-wishlist" src={nowishlist} />
      ) : (
        <div className="card-container">
          {liked.map((item) => (
            <div className="card" key={item.id}>
              <div className="action-card-icon">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="heart heart-active"
                  onClick={() => FncLiked(item)}
                />
              </div>
              <div className="card-info">
                <img src={item.photo} alt={item.name} />
                <h4>{item.name}</h4>
                <p>${item.amount}</p>
                {cart.find((i) => i.id === item.id) ? (
                  <div className="btn-container">
                    <button className="added">Added</button>
                    <div className="add-sub-box">
                      <button onClick={() => fncQntyDec(item.id)}>
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                      <p>{quantity[item.id] || 1}</p>
                      <button onClick={() => fncQntyInc(item.id)}>
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <button className="add-btn" onClick={() => fncCart(item)}>
                    Add
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
