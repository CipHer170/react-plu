import React from "react";
import ButtonComponent from "../mixin/ButtonComponent";
import Footer from "../mixin/Footer";
import Header from "../mixin/Header";

function Business() {
  return (
    <div className="business bg-blue-500 h-screen flex flex-col align-center justify-between ">
      <Header />
      <div className="adding-form text-center  w-full h-[300px]">
        <p className="add-name">Name</p>
        <input type="text" />
        <p className="add-plu">Plu</p>
        <input type="text" />
        <p className="add-code">Code</p>
        <input type="text" />
      </div>
      <div className="buttons flex w-full justify-around">
        <button
          type="submit"
          className="bg-[#18c52f] w-12 rounded-[15px] px-24 py-2"
        >
          Item
        </button>
        <button
          type="submit"
          className="bg-[#0efa84] w-12 rounded-[15px] px-24 py-2"
        >
          List
        </button>
      </div>

      <ButtonComponent />
      <Footer />
    </div>
  );
}

export default Business;
