import React from "react";
import useData from "../../hooks/useData";

const MyInventories = (props) => {
  const [inventories, setInventories] = useData();
  const { _id, name, img, price, quantity, supplier, description } =
    props.inventory;

  const itemDelete = (id) => {
    const proceed = window.confirm("Do you want to delete item?");
    if (proceed) {
      const url = `https://mighty-tor-18710.herokuapp.com/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = inventories.filter(
            (inventory) => inventory._id !== id
          );
          setInventories(remaining);
        });
    }
  };
  return (
    <div className="inventory-container shadow rounded p-3">
      <img
        className="img-fluid rounded d-block mx-auto mb-2 w-100"
        src={img}
        alt=""
      />
      <div>
        <h5>{name}</h5>
        <p>Price: {price} Kg</p>
        <p>Quantity: {quantity} kg</p>
        <p>Supplier Name: {supplier}</p>
        <p>Description: {description}</p>
      </div>
      <div className="">
        <button
          className="btn btn-primary text-white py-1 px-4"
          onClick={() => itemDelete(_id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MyInventories;
