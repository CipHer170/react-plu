import React, { useEffect, useState } from "react";
import ButtonComponent from "../mixin/ButtonComponent";
import Header from "../mixin/Header";
import { data } from "../fakeData";

// const URL = "https://jsonplaceholder.typicode.com/photos";
function Customer() {
  const [index, setIndex] = useState([]);



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
          button
        </button>
      </div>
      {data.map(({ name, code, plu, image }) => {
        return (
          <div className="result-form bg-slate-600 flex h-[300px] my-4" key={code}>
            <img
              src={image}
              alt="imageOfItem"
              className="w-[50%]"
            />
            <div className="info w-[50%] bg-red-300 flex flex-col align-center justify-around">
              <div className="name font-semibold text-[25px]">{name}</div>
              <div className="plu">PLU {plu}</div>
              <div className="code">code {code}</div>
            </div>
          </div>
        );
      })}

      <ButtonComponent />
    </div>
  );
}

export default Customer;

  // const [dataF, setDataF] = useState("");

  //   useEffect(() => {
  //     const getData = async () => {
  //       const res = await fetch(data);
  //       const dataF = await res.json();
  //       setDataF(dataF);
  //     };
  //     getData();
  //   }, []);