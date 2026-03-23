import { useContext, React } from "react";
import Hero from "./Hero";
import OurValue from "./OurValue";
import FirstOrder from "./FirstOrder";
import OurProcess from "./OurProcess";
import Reviews from "./Reviews";
import Grocery from "../Context/Context.js";
import OurProduct from "../Components/OurProduct.jsx";

function Home() {
  const { allproducts, viewActiveBtn } = useContext(Grocery);

 
  const filteredProducts =
    viewActiveBtn === "All"
      ? allproducts
      : allproducts.filter((item) => item.cat === viewActiveBtn);

  return (
    <>
       <Hero />
      <OurValue />
       <FirstOrder />
     <OurProcess />
 
    

     <OurProduct pageName={filteredProducts} />
     <Reviews /> 
    </>
  );
}

export default Home;
