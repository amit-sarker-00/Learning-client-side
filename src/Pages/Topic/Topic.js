import React from "react";
import { useLoaderData } from "react-router-dom";

const Topic = () => {
  const topicDetails = useLoaderData();
  console.log(topicDetails);
  const { name, img, details } = topicDetails;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{details}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;
