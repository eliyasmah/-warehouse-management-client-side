import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateInventory = () => {
  const { updateId } = useParams();
  const [inventory, setInventory] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/inventory/${updateId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);

  const handleUpdateQuantity = (event) => {
    event.preventDefault();
    let updatedQuantity =
      parseFloat(+inventory.quantity) + parseFloat(event.target.update.value);
    let updateItem = { quantity: updatedQuantity };
    setInventory(updateItem);

    const url = `http://localhost:5000/inventory/${updateId}`;

    fetch(url, {
      method: "PUT",
      body: JSON.stringify(updateItem),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        event.target.reset();
        toast("Restock Success");
      });
  };
  return (
    <div className="d-flex align-items-center w-50 mx-auto my-5 border p-4 rounded">
      <img className="img-fluid rounded" src={inventory.img} alt="" />
      <div className="mx-3">
        <h4>{inventory.name}</h4>
        <h5>Supplier: {inventory.supplier}</h5>
        <p>Price: {inventory.price}</p>
        <p>Quantity: {inventory.quantity}</p>
        <form onSubmit={handleUpdateQuantity}>
          <input type="number" name="update" placeholder="Add Quantity"></input>
          <input className="btn btn-primary mx-3" type="submit" value="Add" />
        </form>
        <p>Description: {inventory.description}</p>
        <button className="btn btn-primary">Delivered</button>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default UpdateInventory;
