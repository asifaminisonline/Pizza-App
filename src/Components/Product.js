import React from "react";

function Product() {
  return (
    <div className="bg-gray-100 p-1 text-center">
      <img src="/images/pizza1.png" alt="pizza" style={{ margin: "auto" }} />
      <h2 className="text-lg font-bold py-2">Havana special</h2>
      <span className="bg-gray-200 py-1 rounded-full text-sm px-4">small</span>
      <div className="flex justify-between items-center mt-4 p-2 bg-gray-300">
        <span>₹500</span>
        <button className="bg-yellow-400 hover:bg-yellow-500 py-1 px-4 rounded-full font-bold">
          ADD
        </button>
      </div>
    </div>
  );
}

export default Product;
