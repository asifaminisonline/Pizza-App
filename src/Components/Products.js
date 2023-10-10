import React from "react";
import Product from "../Components/Product";
function Products() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-20 mt-10 text-center">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 my-8 gap-24">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default Products;
