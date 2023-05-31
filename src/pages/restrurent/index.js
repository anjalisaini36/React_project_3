import React, { useEffect, useReducer, useState } from "react";
import Restrurent from "../../component/Restrurent";
import Layout from "../../component/Layout";
import { getItem } from "../../helper";
import { shopReducer } from "./reducers";
import { loadingAction, productAction, productsAction } from "./actions";

const Restrurentpage = (props) => {
  const [state, dispatch] = useReducer(shopReducer, shopReducer());
  // const [products, setProducts] = useState([]);
  // const [product, setProduct] = useState([]);
  // const [loading, setLoading] = useState();

  const handleProduct = (val) => {
    productAction(dispatch, val);
  };

  const handleProducts = (val) => {
    productsAction(dispatch, val);
  };

  const manageGetItem = async () => {
    loadingAction(dispatch, true);

    console.log("propsssssss", props);
    if (state.product !== [] && state.products !== []) {
      try {
        const result = await getItem();
        console.log(result);
        handleProduct(result);
        handleProducts(result);
        loadingAction(dispatch, false);
      } catch (error) {
        console.log(error);
      }
    } else {
    }
  };

  useEffect(() => {
    manageGetItem();
  }, []);

  const lessPrice = () => {
    const filterData = state.product.filter((item) => item.price < 300);
    console.log(filterData);
    handleProduct(filterData);
  };

  const between_300_700 = () => {
    const filteredData = state.product.filter(
      (item) => item.price >= 300 && item.price <= 700
    );
    console.log(filteredData);
    handleProduct(filteredData);
  };
  return (
    <Layout>
      <Restrurent
        section1_h1="Order Product"
        section1_h2="Online in Chandigarh"
        section1_img1="https://supplier.meesho.com/images/Desktop-Pic_2.png"
        section2_h1="What's on your mind?"
        section3_h1="Available online product delivery in Chandigarh"
        section4_h1="Fuction culture in Chandigarh"
        section4_h2="ONLINE PRODUCT DELIVERY SERVICES IN CHANDIGARH"
        section4_para="Our generation has been evidence of this fastest surge in tech-enabled food delivery online. And we find it a blessing! Who doesn’t like to receive steaming hot rice with curry and mouth-watering sweets, summoned with a few clicks, from their favourite food joints? Not only has Swiggy been serving satisfaction through the delivery of fresh food on time, but it is also helping the market identify consumer behaviour. "
        products={state.products}
        product={state.product}
        loading={state.loading}
        lessPrice={lessPrice}
        between_300_700={between_300_700}
      />
    </Layout>
  );
};

export default Restrurentpage;
