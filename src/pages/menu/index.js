import React, { useEffect, useReducer, useState } from "react";
import Menu from "../../component/Menu";
import Layout from "../../component/Layout";
import { getItem } from "../../helper";
import { menuReducer } from "./reducers";
import { loadingAction, productAction } from "./actions";
import Cookies from "js-cookie";

const MenuPage = (props) => {
  // const [product, setProduct] = useState([]);
  // const [loading, setLoading] = useState();
  const [state, dispatch] = useReducer(menuReducer, menuReducer());

  const addNewItem = (item) => {
    const dataItem = Cookies.get("CartCookie");
    if (dataItem) {
      let product_data = JSON.parse(dataItem);
      let data = product_data;
      const findData = product_data.find((x) => x.id === item.id);
      if (findData) {
        const index = product_data.indexOf(findData);
        data[index].quantity = data[index].quantity + 1;
        Cookies.set("CartCookie", JSON.stringify(data));
      } else {
        if (!item?.quantity) {
          item.quantity = 1;
        }
        data.push(item);
        // setProductData(finalData);
        Cookies.set("CartCookie", JSON.stringify(data));
      }
    } else {
      if (!item?.quantity) {
        item.quantity = 1;
      }
      Cookies.set("CartCookie", JSON.stringify([item]));
      // setProductData([item]);
    }
  };

  const handleProduct = (val) => {
    productAction(dispatch, val);
  };

  const handleGetItem = async () => {
    loadingAction(dispatch, true);

    console.log("propsssssss", props);
    if (state.product !== []) {
      try {
        const result = await getItem();
        handleProduct(result);
        loadingAction(dispatch, false);
      } catch (error) {
        console.log(error);
      }
    } else {
    }
  };

  useEffect(() => {
    handleGetItem();
  }, []);

  return (
    <Layout>
      <Menu
        carts={props.carts}
        setCarts={props.setCarts}
        product={state.product}
        loading={state.loading}
        addNewItem={addNewItem}
      />
    </Layout>
  );
};

export default MenuPage;
