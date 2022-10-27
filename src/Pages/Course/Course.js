import React from "react";

const Course = ({ course }) => {
  const { img, name } = course;
  return (
    <div>
      <div
        data-aos="fade-up"
        className="card card-compact w-96 bg-base-100 shadow-xl"
      >
        <figure>
          <img className="h-52" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">premium</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
