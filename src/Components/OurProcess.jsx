import React from "react";
import "./OurProcess.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSeedling,
  faIndustry,
  faMedal,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

export default function OurProcess() {
  return (
    <div className="our-process-container">
      <h2>
        <span>Our</span> Process
      </h2>
      <hr />
      <div className="our-process-main">
        <div className="our-process-box Sourcing">
          <div className="doted-circle">
            <span className="line-circle">
              <span>1</span>
            </span>
          </div>
          <div className="values">
            <span className="values-icon-container">
              <FontAwesomeIcon icon={faSeedling} className="value-icon" />
            </span>
            <div className="value-details ">
              <h5>Sourcing</h5>
              <p>It is a long established fact that a reader.</p>
            </div>
          </div>
        </div>

        <div className="our-process-box Manufacturing">
          <div className="doted-circle">
            <span className="line-circle">
              <span>2</span>
            </span>
          </div>
          <div className="values">
            <span className="values-icon-container">
              <FontAwesomeIcon icon={faIndustry} className="value-icon" />
            </span>
            <div className="value-details ">
              <h5>Manufacturing</h5>
              <p>It is a long established fact that a reader</p>
            </div>
          </div>
        </div>

        <div className="our-process-box Quality">
          <div className="doted-circle">
            <span className="line-circle">
              <span>3</span>
            </span>
          </div>
          <div className="values">
            <span className="values-icon-container">
              <FontAwesomeIcon icon={faMedal} className="value-icon" />
            </span>
            <div className="value-details ">
              <h5>Quality Control</h5>
              <p>It is a long established fact that a reader.</p>
            </div>
          </div>
        </div>
        <div className="our-process-box Logistics">
          <div className="doted-circle">
            <span className="line-circle">
              <span>4</span>
            </span>
          </div>
          <div className="values">
            <span className="values-icon-container">
              <FontAwesomeIcon icon={faTruck} className="value-icon" />
            </span>
            <div className="value-details ">
              <h5>Logistics</h5>
              <p>It is a long established fact that a mader.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
