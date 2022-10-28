import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Checkout = () => {
  const premium = useLoaderData();
  console.log(premium);
  const { img, name, details } = premium;
  return (
    <div>
      <div className="card sm:w-96 bg-base-100 shadow-xl my-10 mx-auto">
        <figure>
          <img src={img} alt="" className=" rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl">{name}</h2>
          <p>{details}</p>
          <div className="card-actions card-compact">
            <button className="btn btn-primary my-10">
              <Link>Get Now</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
