import React, { useEffect, useState } from "react";
import { cartdata } from "../data/menuData";
import { getItem } from "../helper";
import NofoundPage from "../pages/nofound";
import Cookies from "js-cookie";
// import { createContext,useContext,useReducer } from 'react';
import { useNavigate } from "react-router-dom";

const Menu = (props) => {
  const navigate = useNavigate();
  const { product, loading, addNewItem } = props;
  const [cartData, SetCartData] = useState();

  let myCartData = [];


  // const addItem = async (data) => {
  //   console.log("dataaaa", data);
  //   const dataItem = Cookies.get("CartCookie");
  //   console.log("getttt cookiesssssss", dataItem);

  //   if (dataItem) {
  //     let myparseValue = JSON.parse(dataItem);
  //     const filterData = myparseValue?.filter((item, index) => {
  //       if (item.id !== data.id) {
  //         return true;
  //       } else {
  //         data.quantity = item.quantity + 1;
  //         return false;
  //       }
  //     });
  //     console.log("filteredddd dataaaa", filterData);
  //     if (data?.quantity) {
  //       filterData.push(data);
  //     } else {
  //       filterData.push({ ...data, quantity: 1 });
  //     }
  //     Cookies.set("CartCookie", JSON.stringify(filterData));
  //   } else {
  //     if (data) {
  //       myCartData.push({ ...data, quantity: 1 });
  //       Cookies.set("CartCookie", JSON.stringify([data]));
  //     }
  //   }
  // };

  return (
    <div>
      <div className="container">
        <h1 className="text-center mt-5">Select your favourite item</h1>

        {!loading ? (
          <div className=" row menu-card-class row-cols-3 g-5 mb-5">
            {product.map((item, index) => {
              return (
                <div className="col" key={index}>
                  <div className="menu-div-class px-2 py-3 mt-5">
                    <img src={item.image} alt="" height={180} width={200} />
                    <div className="menu-title-class mt-4 card-body">
                      <h6>{item.title}</h6>
                      <p className="menu-para-class">{item.description}</p>
                      <div className="menu-btn-class mt-2">
                        <h5> Price: ${item.price}</h5>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => addNewItem(item)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <h1 className="text-center mt-5">loading...</h1>
        )}
      </div>
    </div>
  );
};

export default Menu;
