import React from "react";
import { useRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const Topic = () => {
  const topicDetails = useLoaderData();
  const { id, name, img, details } = topicDetails;

  const componentRef = useRef();
  const handelPdf = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Your-Course",
    onAfterprint: () => alert("good job"),
  });

  return (
    <div>
      <div className="text-center my-10">
        <button onClick={handelPdf} className="btn btn-primary">
          Download pdf
        </button>
      </div>
      <div
        ref={componentRef}
        className="card sm:w-80 bg-base-100 shadow-xl mx-auto"
      >
        <figure>
          <img src={img} alt="" className=" rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl">{name}</h2>
          <p>{details}</p>
          <div className="card-actions card-compact">
            <button className="btn btn-primary my-10">
              <Link to={`/checkout/${id}`}>Get premium access</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;
