import React from "react";
import { Link } from "react-router-dom";
import Footer from "../mixin/Footer";
import Header from "../mixin/Header";

function HeadPage() {
  return (
    <div className="bg-[#a7a7a7] h-screen flex flex-col items-center justify-between ">
      <Header />
      <div className="options w-[90%] h-[250px] flex flex-col items-center justify-around ">
        <Link to="/customer">
          <button className="bg-[#e6e6e6] w-72 h-16 rounded-md">
            Customer
          </button>
        </Link>
        <Link to="/business">
          <button className="bg-[#b8b8b8] w-72 h-16 rounded-md">
            Business
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default HeadPage;
