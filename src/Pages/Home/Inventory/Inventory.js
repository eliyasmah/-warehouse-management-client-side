import React from "react";
import { useNavigate } from "react-router-dom";

const Inventory = (props) => {
  const { _id, name, img, price, quantity, supplier, description } =
    props.inventory;

  const navigate = useNavigate();

  const inventoryUpdate = (id) => {
    navigate(`/update/${_id}`);
  };
  return (
    <div className="inventory-container shadow rounded p-3">
      <img className="img-fluid rounded" src={img} alt="" />
      <div>
        <h5>{name}</h5>
        <p>Price: {price}</p>
        <p>Quantity: {quantity}</p>
        <p>Supplier Name: {supplier}</p>
        <p>Description: {description}</p>
      </div>
      <div className="">
        <button
          className="btn btn-primary text-white py-1 px-4"
          onClick={() => inventoryUpdate(_id)}
        >
          Updata
        </button>
      </div>
    </div>
  );
};

export default Inventory;
