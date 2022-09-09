import React, { useEffect, useState } from "react";
import ButtonComponent from "../mixin/ButtonComponent";
import Header from "../mixin/Header";
import img from "../images/image_temple.jpg";
import Footer from "../mixin/Footer";
// import { data } from "../fakeData";

function Customer() {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/photos");
        const data = await res.json();
        setData(data);
      } catch (err) {
        alert(err);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (data.length) {
      setNewData([data[index]]);
    }
  }, [data.length, index]);

  return (
    <div className="customer  bg-green-500 h-screen">
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

      {newData?.map((item) => {
        const { id, title, url, thumbnailUrl } = item;
        return (
          <div className="result-form flex h-[300px] my-4 bg-red-500">
            <div className="image-form w-[50%]" key={id}>
              <img src={img} alt="imageOfItem" className="w-56 my-10" />
            </div>
            <div className="info w-[50%] flex flex-col align-center justify-around ">
              <div className="name font-semibold text-[25px] ">{title}</div>
              <div className="plu font-[20px] break-all">PLU {url}</div>
              <div className="code break-all">code {thumbnailUrl}</div>
            </div>
          </div>
        );
      })}

      <ButtonComponent />
      <Footer />
    </div>
  );
}

export default Customer;

////////////
// {data.map(({ name, code, plu, image }) => {
//   return (
//     <div
//       className="result-form  flex h-[300px] my-4"
//       key={code}
//     >
//       <div className="image-form w-[50%]">
//         <img src={image} alt="imageOfItem" className="w-56 my-10" />
//       </div>
//       <div className="info w-[50%] flex flex-col align-center justify-around">
//         <div className="name font-semibold text-[25px]">{name}</div>
//         <div className="plu font-[20px]">PLU {plu}</div>
//         <div className="code">code {code}</div>
//       </div>
//     </div>
//   );
// })}
