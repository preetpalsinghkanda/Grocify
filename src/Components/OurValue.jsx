import React from "react";
import "./OurValue.css";
import BasketFull from "../assets/basket-full-vegetables.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandSparkles,
  faShieldHalved,
  faHeart,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";

export default function OurValue() {
  return (
    <div className="ourvalue-container">
      <h2>
        <span>Our</span> Value
      </h2>
      <hr />

      <div className="value-container">
        <div className="trust">
          <div className="values trust-div ">
            <div className="value-details left-value">
              <h5>Trust</h5>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable.
              </p>
            </div>
            <span className="values-icon-container">
              <FontAwesomeIcon icon={faHeart} className="value-icon" />
            </span>
          </div>
        </div>

        <div className="values fresh">
          <div className="value-details left-value">
            <h5>Always Fresh</h5>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable
            </p>
          </div>
          <span className="values-icon-container">
            <FontAwesomeIcon icon={faLeaf} className="value-icon" />
          </span>
        </div>

        <div className="full-basket-container">
          <img src={BasketFull} alt="basket of fruits and vegetables" />
        </div>

        <div className="values food">
          <span className="values-icon-container">
            <FontAwesomeIcon icon={faShieldHalved} className="value-icon" />
          </span>
          <div className="value-details right">
            <h5>Food Safety</h5>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable.
            </p>
          </div>
        </div>

        <div className="values organic">
          <span className="values-icon-container">
            <FontAwesomeIcon icon={faHandSparkles} className="value-icon" />
          </span>
          <div className="value-details right">
            <h5>100% Organic</h5>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
