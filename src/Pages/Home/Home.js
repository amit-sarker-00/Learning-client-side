import React from "react";
import { useLoaderData } from "react-router-dom";
import HomePage from "../Homepage/HomePage";

import "./Home.css";

const Home = () => {
  const homePage = useLoaderData();
  return (
    <div>
      <div className="text-center my-20">
        <h1 className="text-5xl">Welcome to Our Online University</h1>
        <small className="mt-10">
          A university is an institution of higher education, usually comprising
          a college
          <br /> of liberal arts and sciences and graduate and professional
          schools and having the authority
          <br /> to confer degrees in various fields of study.
        </small>
        <div className="flex justify-center mt-10 mb-20">
          <>
            <button className="btn btn-info mr-5">Contact us</button>
          </>
          <>
            <button className="btn btn-outline">Read More</button>
          </>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 ml-28">
        {homePage.map((home) => (
          <HomePage key={home.id} home={home}></HomePage>
        ))}
      </div>
    </div>
  );
};

export default Home;
