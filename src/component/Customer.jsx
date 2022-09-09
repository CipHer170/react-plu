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
    <div className="customer bg-[#72bbd1] h-screen flex flex-col align-center justify-between">
      <Header />
      <div className="search-form h-[50px] w-full flex align-center justify-around ">
        <input
          type="text"
          className="form-control "
          placeholder="  Typing ... "
        />
        <button className="btn-search w-[15%] h-[52px] bg-slate-400 rounded-[10px] ">
          button
        </button>
      </div>

      {newData?.map((item) => {
        const { id, title, url, thumbnailUrl } = item;
        return (
          <div className="result-form h-[300px] flex align-center justify-center">
            <div className="image-form w-[48%] h-[70%]" key={id}>
              <img src={img} alt="imageOfItem" className="w-56 my-10" />
            </div>
            <div className="info w-[48%] h-[70%] flex flex-col align-center justify-around  ">
              <div className="name font-semibold text-[25px] ">
                {title.slice(0, 10)}
              </div>
              <div className="plu font-[20px] break-all">
                PLU {url.slice(0, 10)}
              </div>
              <div className="code break-all">
                code {thumbnailUrl.slice(0, 10)}
              </div>
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
