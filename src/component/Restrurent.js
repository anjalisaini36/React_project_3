// import { useEffect } from "react";
// import { carddata } from "../data/restrurentData";
// import { slidedata } from "../data/retrurentSection2Data";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Restrurent = (props) => {
  const navtigate = useNavigate();
  // const [data, setData] = useState([]);
  // useEffect(() => {}, []);
  // console.log("data", data);
  const {
    products,
    lessPrice,
    between_300_700,
    product,
    loading,
    section1_h1,
    section1_h2,
    section1_img1,
    section2_h1,
    section3_h1,
    section4_h1,
    section4_h2,
    section4_para,
  } = props;

  return (
    <div>
      <section className="section1-header">
        <div className="col-6 p-5 section1-heading">
          <h1>{section1_h1}</h1>
          <h1>{section1_h2}</h1>
        </div>
        <div className="col-6">
          <img src={section1_img1} alt="" width={"100%"} />
        </div>
      </section>

      <section className="mt-5 mb-5">
        <div className="container">
          <h2>{section2_h1}</h2>
          {!loading ? (
            <div className="section2-slide mt-4">
              {products.map((item, index) => {
                if (index < 9) {
                  return (
                    <div>
                      <img
                        className="R-section2-img"
                        src={item.image}
                        alt=""
                        height={120}
                      />
                    </div>
                  );
                }
              })}
            </div>
          ) : (
            <h1>Loading....</h1>
          )}
        </div>
      </section>

      <section className=" mt-5 mb-5">
        <div className="container">
          <h5>{section3_h1}</h5>
          <div className="R-section3-btn">
            <button className="btn btn-light" type="button">
              Offer
            </button>
            <button className="btn btn-light" type="button">
              Pure Veg
            </button>
            <button className="btn btn-light" type="button">
              Fast Delivery
            </button>
            <button
              className="btn btn-light"
              type="button"
              onClick={() => between_300_700()}
            >
              Rs.300-700
            </button>
            <button
              className="btn btn-light"
              type="button"
              onClick={() => lessPrice()}
            >
              Less than Rs.300
            </button>
          </div>

          {!loading ? (
            <div className=" row menu-card-class row-cols-3 g-5 mb-5">
              {product.map((item, index) => {
                return (
                  <div className="col">
                    <div className="menu-div-class px-2 py-3 mt-5" key={index}>
                      <img src={item.image} alt="" width={"40%"} />
                      <div className="menu-title-class mt-4 card-body">
                        <h6>{item.title}</h6>
                        <p>{item.description}</p>
                        <div className="menu-btn-class mt-2">
                          <h5>{item.price}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <h1 className="text-center mt-5">Loading...</h1>
          )}
        </div>
      </section>

      <section className="mt-5 mb-5">
        <div className="container">
          <h4>{section4_h1}</h4>
          <div className="R-section4-content">
            <h3>{section4_h2}</h3>
            <p>{section4_para}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Restrurent;
