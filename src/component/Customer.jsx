import React, { useEffect, useState } from "react";
import Button from "../mixin/Button";
import Header from "../mixin/Header";
import { data } from "../fakeData";
function Customer() {
  //   const [dataF, setDataF] = useState("");

  //   useEffect(() => {
  //     const getData = async () => {
  //       const res = await fetch(data);
  //       const dataF = await res.json();
  //       setDataF(dataF);
  //     };
  //     getData();
  //   }, []);

  return (
    <div className="customer">
      <Header />
      <div className="search-form h-[50px] flex align-center justify-center ">
        <input
          type="text"
          className="form-control w-[80%] rounded-[10px]"
          placeholder="  Search ... "
        />
        <button className="btn-search w-[15%] bg-slate-400 rounded-[10px] ">
          Search
        </button>
      </div>
      {data.map(({ name, code, plu, image }) => {
        return (
          <div className="result-form" key={code}>
            <div className="info">
              <div className="name">{name}</div>
              <div className="plu">{plu}</div>
              <div className="code">{code}</div>
            </div>
            <img src={image} alt="imageOfItem" />
          </div>
        );
      })}

      <Button />
    </div>
  );
}

export default Customer;
