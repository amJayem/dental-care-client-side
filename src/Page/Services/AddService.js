import React from "react";
import toast from "react-hot-toast";
import SetTitle from "../../hooks/setTitle";

const AddService = () => {
  SetTitle("Add service");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const service_id = form.service_id.value;
    const title = form.title.value;
    const img = form.img.value;
    const price = form.price.value;
    const description = form.description.value;

    const service = {
      service_id,
      title,
      img,
      price,
      description,
    };

    fetch("https://11-dental-care-server.vercel.app/services/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          form.reset();
          toast.success("Service added successfully..");
        }
      })
      .catch((e) => console.error("add service error => ", e));
  };

  return (
    <div>
      <h1 className="text-4xl font-bold my-5">Add a service</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 justify-items-center">
          <input
            required
            type="number"
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder=" Service id"
            name="service_id"
          />
          <input
            required
            type="text"
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="Service Title"
            name="title"
          />
          <input
            required
            type="text"
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="img link"
            name="img"
          />
          <input
            required
            type="number"
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="Service Price"
            name="price"
          />
          <input
            required
            type="text"
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="description"
            name="description"
          />
          <div>
            <button className="btn w-36 my-3">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddService;
