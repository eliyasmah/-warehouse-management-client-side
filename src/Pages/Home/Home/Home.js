import React from "react";
import HomeInventory from "../HomeInventory/HomeInventory";
import TopSupplier from "../TopSupplier/TopSupplier";
import Banner from "./../Banner/Banner";

const Home = () => {
  return (
    <>
      <h1 className="text-primary text-center mt-3">Hello Organic</h1>
      <Banner></Banner>
      <HomeInventory></HomeInventory>
      <TopSupplier></TopSupplier>
    </>
  );
};

export default Home;
