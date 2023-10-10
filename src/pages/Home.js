import React from "react";
import Products from "../Components/Products";
import Footer from "../Components/Footer";
function Home() {
  return (
    <>
      <div className="hero py-16">
        <div className="container mx-auto flex items-center justify-around">
          <div className="w-1/2 pl-10 sm:pl-30">
            <h6 className="text-lg">
              <em>Are you hungry</em>
            </h6>
            <h1 className="text-3xl md:text-6xl font-bold">Don't wait</h1>
            <button className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-500 hover:bg-yellow-600">
              Order Now
            </button>
          </div>
          <div className="w-1/2">
            <img
              style={{ width: "100%" }}
              src="images/hero.jpg"
              alt="Hero"
            ></img>
          </div>
        </div>
      </div>
      <div className="container mx-auto pb-24 text-center">
        <Products />
      </div>
      <div className=" mx-auto text-center text-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
