import React from "react";
import { Table } from "react-bootstrap";
import useData from "../../../hooks/useData";

const ManageInventory = () => {
  const [inventories, setInventories] = useData();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure?");
    if (proceed) {
      const url = `http://localhost:5000/inventory/${id}`;
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
    <div className="mt-4">
      {inventories.map((inventory) => (
        <div className="w-75 mx-auto my-2" key={inventory._id}>
          <Table striped bordered hover variant="blue">
            <tbody className="text-left">
              <tr>
                <td>{inventory.name}</td>
                <td>{inventory.quantity}</td>
                <td>
                  <button className="btn btn-outline-primary">
                    Update Item
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => handleDelete(inventory._id)}
                  >
                    Delete Item
                  </button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      ))}
    </div>
  );
};

export default ManageInventory;
