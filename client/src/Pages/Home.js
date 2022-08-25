import React from "react";
import Category from "../Components/Category/Category";
import Offer from "../Components/Offer/Offer";
import Products from "../Components/Products/Products";

function Home() {
  return (
    <>
      <Category />
      <Products />
      <Offer />
    </>
  );
}

export default Home;
