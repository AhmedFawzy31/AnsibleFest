import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Root = () => {
  return (
    <>
      <Navigation></Navigation>
      <Outlet></Outlet>
      <Footer></Footer>
      <ScrollToTopButton></ScrollToTopButton>
    </>
  );
};

export default Root;
