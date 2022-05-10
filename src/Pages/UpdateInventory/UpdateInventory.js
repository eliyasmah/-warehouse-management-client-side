import React from "react";
import { useParams } from "react-router-dom";

const UpdateInventory = () => {
  const { updateId } = useParams();

  return (
    <div>
      <h1>update inventory{updateId}</h1>
    </div>
  );
};

export default UpdateInventory;
