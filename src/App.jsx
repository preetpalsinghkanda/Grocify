import { useContext } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Wishlist from "./Components/Wishlist.jsx";
import Page from "./Components/Page";
import Bag from "./Components/Bag.jsx";
import { Routes, Route } from "react-router-dom"; 
import Home from "./Components/Home";
import Grocery from "./Context/Context.js";
import { Toaster } from "react-hot-toast";
import { Hamburger } from "./Components/Hamburger.jsx";

function App() {
  const { allproducts  ,searchresults} = useContext(Grocery);

  return (
    <>
    <Hamburger/>
    <Toaster />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/fruits"
          element={
            <Page
              heading="Fruits & Vegetables"
              page="fruit"
              pageName={allproducts.filter(
                (item) =>
                  item.cat === "fruit" || item.cat === "vegetable"
              )}
            />
          }
        />

        <Route
          path="/dairy"
          element={
            <Page
              heading="Dairy"
              page="dairy"
              pageName={allproducts.filter(
                (item) => item.cat === "dairy"
              )}
            />
          }
        />

        <Route
          path="/seafood"
          element={
            <Page
              heading="SeaFood"
              page="seafood"
              pageName={allproducts.filter(
                (item) => item.cat === "seafood"
              )}
            />
          }
        />

        <Route
          path="/allproducts"
          element={
            <Page
              heading="All Products"
              page="allproducts"
              pageName={searchresults.length === 0 ? allproducts : searchresults }
            />
          }
        />

        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/bag" element={<Bag />} />
      </Routes>

      <Footer /> 
    </>
  );
}

export default App;