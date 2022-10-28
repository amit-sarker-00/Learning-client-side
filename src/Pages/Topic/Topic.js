import React from "react";
import { useRef } from "react";
import { useLoaderData } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const Topic = () => {
  const topicDetails = useLoaderData();
  const { name, img, details } = topicDetails;

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
        className="card w-96 bg-base-100 shadow-xl mx-auto"
      >
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{details}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Premium</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;
