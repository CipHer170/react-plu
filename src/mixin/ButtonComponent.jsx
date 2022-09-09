import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

function Button() {
  return (
    <Link to="/">
      <buttton className="bg-yellow-300 rounded-[15px] px-24 py-2">Back</buttton>
    </Link>
  );
}

export default Button;
