import React from "react";
import { Link } from "react-router-dom";
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
      <footer className="w-full h-[150px] flex items-center justify-center">
        <div className="creator">LOGO</div>
        <div className="social flex flex-col items-center justify-center">
          <a href="https://telegram.org/" className="text-[#1877f2]">
            telegram
          </a>
          <a
            href="http://instagram.com"
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#e94df7] to-[#df1b4c]"
          >
            instagram
          </a>
          <a href="http://facebook.com" className="text-[#1877f2]">
            facebook
          </a>
        </div>
      </footer>
    </div>
  );
}

export default HeadPage;
