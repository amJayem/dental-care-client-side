import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const AddService = () => {

    const handleSubmit = e => {
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
            img, price, description
        };

        fetch('http://localhost:5000/services/',{
            method: "POST",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            if(data.acknowledged){
                form.reset();
                toast.success('Order places successfully..');
            }
        })
        .catch(e=>console.error('add service error => ', e));
    };

  return (
    <div>
      <form onSubmit={handleSubmit} className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <input
            type="number"
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder=" Service id"
            name="service_id"
          />
          <input
            type="text"
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="Service Title"
            name="title"
          />
          <input
            type="text"
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="img link"
            name="img"
          />
          <input
            type="number"
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="Service Price"
            name="price"
          />
          <input
            type="text"
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="description"
            name="description"
          />
        </div>
        <div>
            <button className="btn my-3">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddService;
