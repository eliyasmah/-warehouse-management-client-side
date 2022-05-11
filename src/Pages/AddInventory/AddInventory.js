import React from "react";
import { useForm } from "react-hook-form";

const AddInventory = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/inventory`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div className="w-50 mx-auto my-4">
      <h2 className="text-center text-primary">Add New Item</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-3"
          placeholder="Item Name"
          type="text"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input
          className="mb-3"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-3"
          placeholder="Quantity"
          type="number"
          {...register("quantity")}
        />
        <input
          className="mb-3"
          placeholder="Supplier Name"
          type="text"
          {...register("supplier")}
        />
        <input
          className="mb-3"
          placeholder="Email Address"
          type="email"
          {...register("supplierName")}
        />
        <input
          className="mb-3"
          placeholder="Image url"
          type="text"
          {...register("img")}
        />
        <textarea
          className="mb-3"
          placeholder="Product Description"
          type="text"
          {...register("description")}
        />
        <input className="btn btn-primary" type="submit" value="Add New Item" />
      </form>
    </div>
  );
};

export default AddInventory;
