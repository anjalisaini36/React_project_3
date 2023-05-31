import React from "react";
import { data } from "../data/homeData";

const Home = (props) => {
  const {
    heading,
    para1,
    para2,
    para3,
    image_food,
    heading1,
    heading2,
    logo1,
    logo2,
    image1,
    image2,
  } = props;
  return (
    <div>
      <section className="header-class">
        <div className="col-6 p-5">
          <h1>{heading}</h1>
          <h4 className="class-h4">{para1}</h4>
         <div className="d-flex">
         <input
            className="input-class"
            type="text"
            placeholder="Enter your delivery location"
          />
          <button className="btn-class" type="button">Find Product</button>
         </div>
          <p>{para2}</p>
          <p>{para3}</p>
        </div>
        <div className="col-6">
          <img src={image_food} alt="" width={"100%"} height={"100%"} />
        </div>
      </section>

      <section>
        <div className="card-section">
          {data.map((item, index) => {
            return (
              <div className="col-3 card-wrapper" key={index}>
                <img className="image-icon" src={item.image} alt="" />
                <h4 className="text-center text-white">{item.name}</h4>
                <p className="text-center text-white">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section-3">
        <div className="section3-content p-5 ">
          <h1>{heading1}</h1>
          <h5>{heading2}</h5>
          
            <img className="logo" src={logo1} alt="" />
            <img className="logo" src={logo2} alt="" />
          
        </div>
        <div >
        <img className="image-class" src={image1} alt="" />
        <img className="image-class" src={image2} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Home;
