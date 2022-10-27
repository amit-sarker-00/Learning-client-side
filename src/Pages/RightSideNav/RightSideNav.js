import React from "react";
import { Link } from "react-router-dom";

const RightSideNav = ({ courses }) => {
  //   console.log(courses);
  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <p className="text-white">
            <Link to="/topic" className="link-hover">
              {course.name}
            </Link>
          </p>
        </div>
      ))}
    </div>
  );
};

export default RightSideNav;
