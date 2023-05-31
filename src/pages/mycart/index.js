import React, { useReducer } from "react";
import Layout from "../../component/Layout";
import Mycart from "../../component/Mycart";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { mycartReducer } from "./reducers";
import { finalAction } from "./actions";

const MycartPage = (props) => {
  const [state, dispatch] = useReducer(mycartReducer, mycartReducer());
  // const [Final, setFinal] = useState([])

  const handleFinal = (val) => {
    finalAction(dispatch, val);
  };
  const cartArea = () => {
    const getCart = Cookies.get("CartCookie");
    handleFinal(getCart && JSON.parse(getCart));
  };

  useEffect(() => {
    cartArea();
  }, []);

  const RemoveData = () => {
    Cookies.remove("CartCookie");
    handleFinal("");
  };

  console.log("checking", props);

  return (
    <div>
      <Layout>
        <Mycart
          carts={props.carts}
          setCarts={props.setCarts}
          RemoveData={RemoveData}
        />
      </Layout>
    </div>
  );
};

export default MycartPage;
