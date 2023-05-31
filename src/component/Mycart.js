import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from "react-router-dom";
import { cartdata } from "../data/menuData";
import NofoundPage from '../pages/nofound';
import Cookies from 'js-cookie';

const Mycart = (props) => {
  const [Final, setFinal] = useState([])
  const cartArea=()=>{
    const getCart = Cookies.get("CartCookie")
    setFinal(getCart && JSON.parse(getCart));
  }
 

  useEffect(()=>{
    cartArea()
  },[])
  
  const RemoveData=()=>{
Cookies.remove("CartCookie");
setFinal("")
  };

// const RemoveData=()=>{
//   const removeItem=Cookies.remove("CartCookie");
//   if (removeItem){
//     const findIndex=removeItem.find((x)=>x.id===Final[index]);
//     if(findIndex){
//       removeItem()
//     }
//   }
// }

// const RemoveData = () => {
//   const removeItem = Cookies.getJSON("CartCookie");

//   if (removeItem) {
//     const getCart = Cookies.get("CartCookie")
//     const findData = getCart.find((x) => x.id === Final.id);
//     if (findData) {
//       // Remove the item from the cart cookie
//       const updatedItems = removeItem.filter((item) => item.id !== Final.id);
//       Cookies.set("CartCookie", updatedItems);

//       setFinal("");
//       // You can also update the state or perform any other necessary actions
//     } else {
//       // Item not found in the cart
//     }
//   }
// };


// const RemoveData = () => {
//   const removeItem = Cookies.remove("CartCookie");

//   if (removeItem) {
//     const getCart = Cookies.get("CartCookie");
//     const findData = getCart.find((x) => x.id === Final.id);

//     if (findData) {
//       const index = getCart.findIndex(findData);
//       getCart[index].quantity = getCart[index].quantity - 1;

//       // Update the cookie with the modified cart data
//       Cookies.set("CartCookie", getCart);
//     } else {
//       if (Final.quantity === 1) {
//         Cookies.remove("CartCookie");
//         setFinal("");
//       }
//     }
  
//   }
// };


// const RemoveData=()=>{
//   const removeItem=Cookies.remove("CartCookie")

//   if(removeItem){
//     const getCart = Cookies.get("CartCookie")
//     const findData=getCart.find((x)=>x.id===Final.id);
//     if(findData){
//     //  return removeItem
//     //  setFinal("")
//       const index=removeItem.indexOf(findData)
//       removeItem[index].quantity=removeItem[index].quantity - 1
//       Cookies.remove("CartCookies")
//     }else{
//         if(Final.quantity==1){
//         Cookies.remove("CartCookies")
//         setFinal("")
//       }
//     }
//   }
// }
console.log("finallllllll ",Final)

  return (
    <div className='container'>
    {Final? (
      <div className=" row menu-card-class row-cols-3 g-5 mb-5">
       {Final?.map((item, index)=>{
        return(
          <div className="col" key={index}>
          <div className="menu-div-class px-2 py-3 mt-5" >
            <img src={item?.image} alt=""height={200}  />
            <div className="menu-title-class mt-4 card-body">
              <h6>{item?.title}</h6>
              <p>{item?.description}</p>
              <div className="menu-btn-class mt-2">
                <h5> Price: ${item.price}</h5>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => RemoveData()}
                >
                  Remove Item
                </button>
                
              </div>
              <h6 className='quantity-class mt-2'> quantity: {item?.quantity}</h6>
            </div>
          </div>
        </div>
        )
       })}
      </div>
    ):<NofoundPage/>}
  </div>
  )
 }

export default Mycart;
