import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "../Course/Course";
import RightSideNav from "../RightSideNav/RightSideNav";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

const Courses = () => {
  const courses = useLoaderData();

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="grid md:grid-cols-5 sm:justify-center">
      <div className="grid grid-cols-1 mt-20 ">
        <RightSideNav courses={courses}></RightSideNav>
      </div>
      <div className="col-span-4">
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-10 justify-center my-20 ">
          {courses.map((course) => (
            <Course key={course.id} course={course}></Course>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
