import React, { useEffect, useState } from "react";

const HomeInventory = () => {
  const [homeInventory, setHomeInventory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/inventory")
      .then((res) => res.json())
      .then((data) => setHomeInventory(data));
  }, []);
  return (
    <div>
      <h2 className="text-center my-4">Inventory</h2>
      <div className="md:grid grid-cols-3 g-4">
        {homeInventory.slice(0, 6).map((inventory) => (
          <div key={inventory._id}>
            <div className="row row-cols-1 row-cols-md-3 g-4 m-4">
              <div className="h-100">
                <img src={inventory.img} alt="" />
                <div>
                  <h5>{inventory.name}</h5>
                  <p>Price:{inventory.price}</p>
                  <p>Quantity:{inventory.quantity}</p>
                  <p>Supplier Name:{inventory.supplier}</p>
                  <p>
                    Description:{inventory.description}
                    {inventory?.description.slice(0, 20)}[...]
                  </p>
                </div>
                <div className="">
                  <button>Updata</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeInventory;
