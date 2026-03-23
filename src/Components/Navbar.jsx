import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/grocifylogo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faHeart,
  faBagShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import Grocery from "../Context/Context";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { setScrolled, scrolled, search, searchReq, setSearchReq , setHamBurger , hamBurger} =
    useContext(Grocery);

  const navigate = useNavigate();

 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>

    
      

     
      <ul className="options">
        <Link to="/">
          <li>Home</li>
        </Link>
        <li >About us</li>
        <li >Process</li>
        <li >Contact Us</li>
        
      </ul>
      
     <div className="search-container">
  <div className="input-search-container">
    <input
      type="text"
      placeholder="Search..."
      value={searchReq}
      onChange={(x) => {
        setSearchReq(x.target.value);
        search();
      }}
    />
    <span className="search-icon" onClick={() => {search()}} >
      <FontAwesomeIcon icon={faMagnifyingGlass} className="search" />
    </span>
  </div>

  <FontAwesomeIcon
    icon={faHeart}
    className="icon-search"
    onClick={() => navigate("/wishlist")}
  />

  <FontAwesomeIcon
    icon={faBagShopping}
    className="icon-search"
    onClick={() => navigate("/bag")}
  />

  <FontAwesomeIcon
    icon={faBars}
    className="hamburger"
    onClick={() => setHamBurger(!hamBurger)}
  />
</div>
    </div>
  );
}