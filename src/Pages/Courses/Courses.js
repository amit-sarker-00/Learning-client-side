import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "../Course/Course";

const Courses = () => {
  const courses = useLoaderData();

  console.log(courses);
  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-10 justify-center my-20 ">
      {courses.map((course) => (
        <Course key={course.id} course={course}></Course>
      ))}
    </div>
  );
};

export default Courses;
