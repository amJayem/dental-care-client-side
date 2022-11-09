import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import { Toaster } from 'react-hot-toast';


const Main = () => {
  return (
    <div>
      <Header />
      <div className=" mx-20">
        <Outlet />
      </div>
      <Footer />
      <Toaster/>
    </div>
  );
};

export default Main;
