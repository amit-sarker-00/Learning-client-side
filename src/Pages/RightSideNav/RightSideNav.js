import React from "react";
import { Link } from "react-router-dom";

const RightSideNav = ({ courses }) => {
  //   console.log(courses);
  return (
    <div className="text-center">
      <h1 className="underline text-2xl my-5">Course categories</h1>
      {courses.map((course) => (
        <div key={course.id}>
          <p className="text-white">
            <Link to={`/topic/${course.id}`} className="link-hover">
              {course.name}
            </Link>
          </p>
        </div>
      ))}
    </div>
  );
};

export default RightSideNav;
