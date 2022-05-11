import React from "react";
import { Table } from "react-bootstrap";
import useData from "../../../hooks/useData";

const ManageInventory = () => {
  const [inventories, setInventories] = useData();
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
                  <button className="btn btn-outline-danger">
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
