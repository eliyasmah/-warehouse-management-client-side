import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateInventory = () => {
  const { updateId } = useParams();
  const [inventory, setInventory] = useState({});
  let { img, name, price, quantity, description, supplier } = inventory;
  useEffect(() => {
    fetch(`https://mighty-tor-18710.herokuapp.com/inventory/${updateId}`)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);

  const handleUpdateQuantity = (event) => {
    event.preventDefault();
    let updatedQuantity =
      parseFloat(+inventory.quantity) + parseFloat(event.target.update.value);
    let updateItem = {
      img,
      name,
      price,
      quantity: updatedQuantity,
      description,
      supplier,
    };
    setInventory(updateItem);
    const url = `https://mighty-tor-18710.herokuapp.com/inventory/${updateId}`;

    fetch(url, {
      method: "PUT",
      body: JSON.stringify(updateItem),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        event.target.reset();
        toast("Restock Success");
      });
  };

  const handleDelivered = () => {
    if (quantity >= 1) {
      let Remaining = parseFloat(+inventory.quantity) - 1;
      let updateItem = {
        img,
        name,
        price,
        quantity: Remaining,
        description,
        supplier,
      };
      setInventory(updateItem);
      fetch(`https://mighty-tor-18710.herokuapp.com/inventory/${updateId}`, {
        method: "PUT",
        body: JSON.stringify(updateItem),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          toast("Delivered Success");
        });
    } else {
      toast("Already Out of Stock");
    }
  };

  return (
    <div className="min-vw-100 my-5 ">
      <div className="d-md-flex flex-row justify-content-evenly w-75 mx-auto border p-4 rounded">
        <div>
          <img className="img-fluid rounded mb-2" src={img} alt="" />
        </div>
        <div className="mx-3">
          <h4>{name}</h4>
          <h5>Supplier: {supplier}</h5>
          <p>Price: {price} kg</p>
          <p>Quantity: {quantity} kg</p>
          <p>Description: {description}</p>
          <button
            onClick={() => handleDelivered(quantity)}
            className="btn btn-primary"
          >
            Delivered
          </button>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-evenly mt-3">
        <form onSubmit={handleUpdateQuantity}>
          <input type="number" name="update" placeholder="Add Quantity"></input>
          <input
            className="btn btn-primary mx-3"
            type="submit"
            value="Add"
            required
          />
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UpdateInventory;
