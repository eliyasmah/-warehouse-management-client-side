import React from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useData from "../../../hooks/useData";

const ManageInventory = () => {
  const [inventories, setInventories] = useData();

  const navigate = useNavigate();

  const inventoryUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  const addNewItem = () => {
    navigate("/add");
  };
  const inventoryDelete = (id) => {
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
    <div>
      <div>
        <button
          onClick={() => addNewItem()}
          className="btn btn-primary d-block mx-auto my-5"
        >
          Add New Item
        </button>
      </div>
      <div className="mt-4">
        {inventories.map((inventory) => (
          <div className=" " key={inventory._id}>
            <Table striped bordered hover variant="blue">
              <tbody className="text-left">
                <tr>
                  <td>{inventory.name}</td>
                  <td>{inventory.quantity}</td>
                  <td className="text-primary">{inventory.email}</td>
                  <td>
                    <button
                      className="btn btn-outline-primary"
                      onClick={() => inventoryUpdate(inventory._id)}
                    >
                      Update Item
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => inventoryDelete(inventory._id)}
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
    </div>
  );
};

export default ManageInventory;
