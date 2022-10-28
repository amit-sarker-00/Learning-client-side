import React from "react";

const Course = ({ course }) => {
  const { img, name } = course;
  return (
    <div>
      <div
        data-aos="fade-up"
        className="card card-compact  bg-base-100 shadow-xl"
      >
        <figure>
          <img className="h-52" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
