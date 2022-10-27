import React from "react";

const Blog = () => {
  return (
    <div className=" p-10 text-center">
      <div className=" my-5">
        <h1 className="text-2xl underline">What is Cors ? </h1>
        <strong>
          Ans : Cross-Origin Resource Sharing (CORS) is an HTTP-header based
          mechanism <br />
          that allows a server to indicate any origins (domain, scheme, or port){" "}
          <br />
          other than its own from which a browser should permit loading
          resources.{" "}
        </strong>
      </div>
      <div className=" my-5">
        <h1 className="text-2xl underline">Why are you using firebase ? </h1>
        <strong>
          Ans :Firebase provides tools to grow your app and business, for
          startups & global
          <br /> enterprises. Get your app up and running quickly & securely
          with fully
          <br /> managed backend infrastructure. Cross-Platform Solutions.
          Accelerate Development.
          <br /> Monitor App Performance.{" "}
        </strong>
      </div>
      <div className=" my-5">
        <h1 className="text-2xl underline">
          How does the private route work ?{" "}
        </h1>
        <strong>
          Ans : The private route component is similar to the public route, the{" "}
          <br /> only change is that redirect URL and authenticate condition. If
          the user
          <br /> is not authenticated he will be redirected to the login page
          and the
          <br /> user can only access the authenticated routes If
          <br /> he is authenticated (Logged in).
        </strong>
      </div>
      <div className=" my-5">
        <h1 className="text-2xl underline">
          What is Node ? How does node work ?{" "}
        </h1>
        <strong>
          Ans : It is a used as backend service where javascript works on <br />
          the server-side of the application. This way javascript is
          <br /> used on both frontend and backend. Node. js runs on chrome v8
          engine which
          <br /> converts javascript code into machine code, it is highly
          scalable, lightweight, fast, and data-intensive.
        </strong>
      </div>
    </div>
  );
};

export default Blog;
