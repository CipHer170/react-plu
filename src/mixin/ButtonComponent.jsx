import React from "react";
import { Link } from "react-router-dom";

function Button() {
  return (
    <Link to="/">
      <buttton className="bg-yellow-300">Back</buttton>
    </Link>
  );
}

export default Button;
