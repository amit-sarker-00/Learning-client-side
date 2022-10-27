import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Header/Header";
import Footer from "../Shared/Footer/Footer";
import style from "./style.css";
const Main = () => {
  return (
    <div>
      <Header></Header>

      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default Main;
