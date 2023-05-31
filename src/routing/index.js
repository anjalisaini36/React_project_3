import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/login";
import SignupPage from "../pages/signin";
import Homepage from "../pages/home";
import Restrurentpage from "../pages/restrurent";
import MenuPage from "../pages/menu";
import MycartPage from "../pages/mycart";
import NofoundPage from "../pages/nofound";
import Auth from "../component/Auth";

const Routing = () => {
  const [carts, setCarts] = useState("");

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="*" element={<NofoundPage />} />

          {/* Private Routes */}
          <Route exact path="/" element={<Auth />}>
            <Route
              path="/menu"
              element={<MenuPage carts={carts} setCarts={setCarts} />}
            />
            <Route path="/restrurent" element={<Restrurentpage />} />
            <Route
              path="/mycart"
              element={<MycartPage carts={carts} setCarts={setCarts} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
