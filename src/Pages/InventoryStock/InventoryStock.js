import React from "react";
import useData from "../../hooks/useData";
import Inventory from "../Home/Inventory/Inventory";

const InventoryStock = () => {
  const [inventories, setInventories] = useData();

  return (
    <div>
      <h2 className="text-center my-5 text-primary">Our Stock</h2>
      <div className="home-inventory-container">
        {inventories.map((inventory) => (
          <Inventory key={inventory._id} inventory={inventory}></Inventory>
        ))}
      </div>
    </div>
  );
};

export default InventoryStock;
