import React, { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";

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
      {homeInventory.slice(0, 6).map((inventory) => (
        <div key={inventory._id}>
          <div>total name: {inventory.name}</div>

          <CardGroup>
            <Card>
              <Card.Img variant="top" src={inventory.img} />
              <Card.Body>
                <Card.Title>{inventory.name}</Card.Title>
                <p>Price:{inventory.price}</p>
                <p>Quantity:{inventory.quantity}</p>
                <p>Supplier Name:{inventory.supplier}</p>
                <p>Description:{inventory.description}</p>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        </div>
      ))}
    </div>
  );
};

export default HomeInventory;
