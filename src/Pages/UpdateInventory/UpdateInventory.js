import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateInventory = () => {
  const { updateId } = useParams();
  const [inventory, setInventory] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/inventory/${updateId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);

  return (
    <div className="d-flex align-items-center w-50 mx-auto my-5 border p-4 rounded">
      <img className="img-fluid rounded" src={inventory.img} alt="" />
      <div className="m-2">
        <h4>{inventory.name}</h4>
        <h5>Supplier: {inventory.supplier}</h5>
        <p>Price: {inventory.price}</p>
        <p>Quantity: {inventory.quantity}</p>
        <p>Description: {inventory.description}</p>
      </div>
    </div>
  );
};

export default UpdateInventory;
