import React, { useContext } from "react";
import "./Hamburger.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Grocery from "../Context/Context";

export const Hamburger = () => {
  
  const { searchReq, setSearchReq, search , setHamBurger , hamBurger} = useContext(Grocery);

  return (
    hamBurger ? (<div className="hamburger-overlay" onClick={() => setHamBurger(false)}>
      <div className="menu-box" onClick={(e) => e.stopPropagation()}>
        
        <ul className="hamburger-options">
          <Link to="/"><li onClick={() => setHamBurger(false)}>Home</li></Link>
          <li onClick={() => setHamBurger(false)}>About us</li>
          <li onClick={() => setHamBurger(false)}>Process</li>
          <li onClick={() => setHamBurger(false)}>Contact Us</li>
        </ul>

        <div className="input-search-container hamburger-search">
          <input
            type="text"
            placeholder="Search..."
            value={searchReq}
            onChange={(x) => {
              setSearchReq(x.target.value);
              search();
            }}
          />
          <span className="search-icon" onClick={() => {search() ; setHamBurger(false)}}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
        </div>

      </div>
    </div>) : null
  );
};