import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateInventory = () => {
  const { updateId } = useParams();
  const [inventory, setInventory] = useState({});
  useEffect(() => {
    const url = `https://mighty-tor-18710.herokuapp.com/inventory/${updateId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);

  const handleUpdateQuantity = (event) => {
    event.preventDefault();
    let updatedQuantity =
      parseFloat(+inventory.quantity) + parseFloat(event.target.update.value);
    let updateItem = { updatedQuantity };
    // setInventory(updateItem);
    let data = {
      name: inventory.name,
      description: inventory.description,
      price: inventory.price,
      supplier: inventory.supplier,
      img: inventory.img,
      quantity: updateItem,
    };
    const url = `https://mighty-tor-18710.herokuapp.com/inventory/${updateId}`;

    fetch(url, {
      method: "PUT",

      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setInventory(data);
        event.target.reset();
        toast("Restock Success");
      });
  };
  return (
    <div className="d-flex align-items-center w-50 mx-auto my-5 border p-4 rounded">
      <div className="flex-1">
        <img className=" rounded" src={inventory.img} alt="" />
      </div>
      <div className="mx-3 flex-1">
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
