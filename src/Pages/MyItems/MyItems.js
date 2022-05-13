import React from "react";
import useData from "../../hooks/useData";
import MyInventories from "../MyInventories/MyInventories";

const MyItems = () => {
  const [inventories, setInventories] = useData();

  return (
    <div>
      <div className="home-inventory-container">
        {inventories.map((inventory) => (
          <MyInventories
            key={inventory._id}
            inventory={inventory}
          ></MyInventories>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
