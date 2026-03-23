import React, { useContext } from "react";
import "./OurProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faHeart  , faMinus } from "@fortawesome/free-solid-svg-icons";
import Grocery from "../Context/Context";
import { useNavigate } from "react-router-dom";

export default function OurProduct(props) {
  const { viewActiveBtn, setViewActiveBtn ,FncLiked , liked , cart , fncQntyInc ,fncQntyDec , quantity , fncCart } = useContext(Grocery);
  const navigate = useNavigate();


  
  return (
    <div className="our-product-container">
      <h2>
        <span>Our</span> Products
      </h2>
      <hr />

      <ul className="all-options">
        <li
          className={viewActiveBtn === "All" ? "option-active" : "option"}
          onClick={() => setViewActiveBtn("All")}
        >
          All
        </li>
        <li
          className={viewActiveBtn === "fruit" ? "option-active" : "option"}
          onClick={() => setViewActiveBtn("fruit")}
        >
          Fruits
        </li>
        <li
          className={viewActiveBtn === "vegetable" ? "option-active" : "option"}
          onClick={() => setViewActiveBtn("vegetable")}
        >
          Vegetables
        </li>
        <li
          className={viewActiveBtn === "dairy" ? "option-active" : "option"}
          onClick={() => setViewActiveBtn("dairy")}
        >
          Dairy
        </li>
        <li
          className={viewActiveBtn === "seafood" ? "option-active" : "option"}
          onClick={() => setViewActiveBtn("seafood")}
        >
          SeaFood
        </li>
      </ul>

      <div className="card-container allproduct-card">
        {props.pageName.map((item) => (
          <div className="card" key={item.id}>
            <div className="action-card-icon">
              <FontAwesomeIcon icon={faHeart} className={`heart ${liked.some((i) => i.id === item.id) ? "heart-active" : ""}`}  onClick={()=>FncLiked(item)}/>
             
            </div>

            <div className="card-info">
              <img src={item.photo} alt={item.name} />
              <h4>{item.name}</h4>
              <p>${item.amount}</p>
              {cart.find((i)=>i.id === item.id) ? (<div className="btn-container">
                              <button className="added" >Added</button>
                              <div className="add-sub-box">
                                <button onClick={() => fncQntyDec(item.id)} ><FontAwesomeIcon icon={faMinus} /></button>
                                <p>{quantity[item.id] || 1}</p>
                                <button  onClick={() => fncQntyInc(item.id)}><FontAwesomeIcon icon={faPlus} disabled={(quantity[item.id]) >= 9} /></button>
                              </div>
                              </div>): (<button className="add-btn" onClick={() => fncCart(item)} >Add</button>)}
            </div>
          </div>
        ))}
      </div>

      <button className="view-all-btn" onClick={()=>{
        if(viewActiveBtn==="All"){
          navigate("/allproducts");
          
        }else if(viewActiveBtn==="fruit" || viewActiveBtn ==="vegetable"){
          navigate("/fruits");
        }else if(viewActiveBtn==="dairy"){
          navigate("/dairy")

        }else{
           navigate("/seafood")
        }
        window.scrollTo(0, 0);
      }} >View All</button>
    </div>
  );
}
