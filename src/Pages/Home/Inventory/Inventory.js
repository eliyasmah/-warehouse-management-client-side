import React from "react";

const Inventory = (props) => {
  const { name, img, price, quantity, supplier, description } = props.inventory;
  return (
    <div className="inventory-container shadow rounded p-3">
      <img className="img-fluid rounded" src={img} alt="" />
      <div>
        <h5>{name}</h5>
        <p>Price:{price}</p>
        <p>Quantity:{quantity}</p>
        <p>Supplier Name:{supplier}</p>
        <p>Description:{description}</p>
      </div>
      <div className="">
        <button className="btn btn-primary text-white py-1 px-4">Updata</button>
      </div>
    </div>
  );
};

export default Inventory;
