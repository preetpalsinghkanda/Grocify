import React, { useState } from "react";
import Grocery from "./Context.js";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

//fruits
import banana from "../assets/fruits/banana.png";
import grapes from "../assets/fruits/grapes.png";
import kiwi from "../assets/fruits/kiwi.png";
import pineapple from "../assets/fruits/pineapple.png";
import strawberry from "../assets/fruits/strawberry.png";

//veggies
import broccoli from "../assets/veggies/broccoli.png";
import cabbage from "../assets/veggies/cabbage.png";
import capsicum from "../assets/veggies/capsicum.png";
import eggplant from "../assets/veggies/eggplant.png";
import kale from "../assets/veggies/kale.png";
import lettuce from "../assets/veggies/lettuce.png";

//dairyyy
import cheese from "../assets/dairy/cheese.png";
import butter from "../assets/dairy/butter.png";
import eggs from "../assets/dairy/eggs.png";
import milk from "../assets/dairy/milk.png";
import yogurt from "../assets/dairy/yogurt.png";
import ricottacheese from "../assets/dairy/ricotta-cheese.png";
import condensedmilk from "../assets/dairy/condensed-milk.png";
import slicecheese from "../assets/dairy/slice-cheese.png";

//seafood hai

import beef from "../assets/seafood/beef.png";
import chickenbreast from "../assets/seafood/chicken-breast.png";
import salmon from "../assets/seafood/salmon.png";
import shrimp from "../assets/seafood/shrimp.png";
import tilapia from "../assets/seafood/tilapia.png";

export default function GroceryProvider({ children }) {
  const navigate = useNavigate();
  const allproducts = [
    { id: 1, name: "Broccoli", amount: 2, photo: broccoli, cat: "vegetable" },
    { id: 2, name: "Banana", amount: 2, photo: banana, cat: "fruit" },
    { id: 3, name: "Beef", amount: 8, photo: beef, cat: "seafood" },
    { id: 4, name: "Butter", amount: 3.5, photo: butter, cat: "dairy" },

    { id: 5, name: "Cabbage", amount: 3, photo: cabbage, cat: "vegetable" },
    { id: 6, name: "Grapes", amount: 3, photo: grapes, cat: "fruit" },
    {
      id: 7,
      name: "Chicken Breast",
      amount: 7,
      photo: chickenbreast,
      cat: "seafood",
    },
    { id: 8, name: "Eggs", amount: 2.05, photo: eggs, cat: "dairy" },

    {
      id: 9,
      name: "Capsicum",
      amount: 4.05,
      photo: capsicum,
      cat: "vegetable",
    },
    { id: 10, name: "Kiwi", amount: 2.05, photo: kiwi, cat: "fruit" },
    { id: 11, name: "Tilapia Fish", amount: 3, photo: tilapia, cat: "seafood" },
    { id: 12, name: "Milk Bottle (3)", amount: 8, photo: milk, cat: "dairy" },

    { id: 13, name: "Eggplant", amount: 3, photo: eggplant, cat: "vegetable" },
    { id: 14, name: "Pineapple", amount: 5, photo: pineapple, cat: "fruit" },
    { id: 15, name: "Salmon Filet", amount: 4, photo: salmon, cat: "seafood" },
    { id: 16, name: "Yogurt", amount: 3, photo: yogurt, cat: "dairy" },

    { id: 17, name: "Kale Leaves", amount: 4, photo: kale, cat: "vegetable" },
    { id: 18, name: "Strawberry", amount: 3, photo: strawberry, cat: "fruit" },
    { id: 19, name: "Shrimp", amount: 3.5, photo: shrimp, cat: "seafood" },
    {
      id: 20,
      name: "Condensed Milk",
      amount: 5,
      photo: condensedmilk,
      cat: "dairy",
    },

    {
      id: 21,
      name: "Lettuce Leaf",
      amount: 5,
      photo: lettuce,
      cat: "vegetable",
    },
    { id: 22, name: "Slice Cheese", amount: 5, photo: cheese, cat: "dairy" },
    {
      id: 23,
      name: "Ricotta Cheese",
      amount: 4,
      photo: ricottacheese,
      cat: "dairy",
    },
    {
      id: 24,
      name: "Cheese Slice Pack",
      amount: 3,
      photo: slicecheese,
      cat: "dairy",
    },
  ];

  const [viewActiveBtn, setViewActiveBtn] = useState("All");

  const [scrolled, setScrolled] = useState(false);

  const [liked, setLiked] = useState([]);

  const [cart, setCart] = useState([]);
  

  const [quantity, setQuantity] = useState({});

  const [searchReq, setSearchReq] = useState("")


  const [searchresults, setSearchResults] = useState([]);


  const [hamBurger, setHamBurger] = useState(false);






  function FncLiked(item) {
    const exist = liked.find((i) => i.id === item.id);

    if (exist) {
      setLiked(liked.filter((i) => i.id !== item.id));
    } else {
      setLiked([...liked, item]);
    }
  }

  function fncCart(item) {
    const exist = cart.find((i) => i.id === item.id);

    if (exist) {
      setCart(cart.filter((i) => i.id !== item.id));
    } else {
      setCart([...cart, { ...item, qty: quantity[item.id] || 1 }]);
      toast.success("item added successfully");
    }
  }

  function fncQntyInc(id) {
    setQuantity((prev) => {
      const currentQty = prev[id] || 1;

      if (currentQty >= 9) {
        toast.error("max 9 allowed (hehhee)");
        return prev;
      }

      return {
        ...prev,
        [id]: currentQty + 1,
      };
    });
  }

  function fncQntyDec(id) {
    setQuantity((prev) => {
      const currentQty = prev[id] || 1;

      if (currentQty <= 1) {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));

        const newQty = { ...prev };
        delete newQty[id];
        return newQty;
      }

      return {
        ...prev,
        [id]: currentQty - 1,
      };
    });
  }

  function search() {
    navigate("/allproducts");
    window.scrollTo(0, 400);

    setSearchResults(
      allproducts.filter((i) =>
        i.name.toLowerCase().includes(searchReq.toLowerCase()),
      ),
    );
  }

  return (
    <Grocery.Provider
      value={{
        allproducts,
        viewActiveBtn,
        setViewActiveBtn,
        searchresults,
        liked,
        scrolled,
        setScrolled,
        FncLiked,
        fncCart,
        cart,
        searchReq,
        quantity,
        fncQntyInc,
        fncQntyDec,
        search,
        setSearchReq,
        hamBurger,
        setHamBurger,
      }}
    >
      {children}
    </Grocery.Provider>
  );
}
