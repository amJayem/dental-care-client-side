import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const EditReview = () => {
  const [review, setReview] = useState({});
  const router = useParams();
  const { id } = router;

  const navigate = useNavigate();
  // console.log(router);

  // const {comment, rating} = review?.data;
  // console.log(review);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      })
      .catch((e) => console.error("review loading error, edit review => ", e));
  }, [id]);

  // update review
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const comment = form.comment.value;
    const rating = form.rating.value;
    const updateReview = { comment, rating };

    console.log(updateReview);

    fetch(`http://localhost:5000/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.acknowledged){
          toast.success('Review updated.');
          navigate('/my-reviews');
        }
      })
      .catch((e) => console.error("review update error => ", e));
  };

  return (
    <div>
      <form onSubmit={handleUpdate}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Comments</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            name="comment"
            defaultValue={review?.data?.comment}
          ></textarea>
        </div>
        <br />
        <input
          type="text"
          placeholder="Type here"
          className="input w-full max-w-xs"
          name="rating"
          defaultValue={review?.data?.rating}
        />
        <div>
          <button className="btn" type="submit">
            Update review
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditReview;
