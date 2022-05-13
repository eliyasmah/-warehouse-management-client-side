import React from "react";
import { useNavigate } from "react-router-dom";
import HomeInventory from "../HomeInventory/HomeInventory";
import TopSupplier from "../TopSupplier/TopSupplier";
import Banner from "./../Banner/Banner";

const Home = () => {
  const navigate = useNavigate();
  const manageInventories = () => {
    navigate("/manage");
  };
  return (
    <>
      <h1 className="text-primary text-center mt-3">Hello Organic</h1>
      <Banner></Banner>
      <HomeInventory></HomeInventory>
      <button
        onClick={() => manageInventories()}
        className="btn btn-primary d-block mx-auto px-3"
      >
        Manage Inventories
      </button>
      <TopSupplier></TopSupplier>
    </>
  );
};

export default Home;
