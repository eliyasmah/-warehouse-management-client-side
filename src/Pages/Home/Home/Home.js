import React from "react";
import { useNavigate } from "react-router-dom";
import AboutPage from "../../AboutPage/AboutPage";
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
      <Banner></Banner>
      <HomeInventory></HomeInventory>
      <button
        onClick={() => manageInventories()}
        className="btn btn-primary d-block mx-auto px-3"
      >
        Manage Inventories
      </button>
      <TopSupplier></TopSupplier>
      <AboutPage></AboutPage>
    </>
  );
};

export default Home;
