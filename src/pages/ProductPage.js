import React from "react";
import Products from "../Components/Products";
import Footer from "../Components/Footer";
function ProductPage() {
  return (
    <>
      <div className="container mx-auto pb-24 text-center">
        <Products />
      </div>
      <div className=" mx-auto text-center text-white">
        <Footer />
      </div>
    </>
  );
}

export default ProductPage;
