import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import RightSideNav from "../Pages/RightSideNav/RightSideNav";
import Topic from "../Pages/Topic/Topic";
import Blog from "../Shared/Blog/Blog";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("platform.json"),
      },
      {
        path: "/home",
        element: <Home></Home>,
        loader: () => fetch("platform.json"),
      },
      { path: "/login", element: <Login></Login> },
      { path: "/blog", element: <Blog></Blog> },
      { path: "/rightSideNav", element: <RightSideNav></RightSideNav> },
      { path: "/register", element: <Register></Register> },
      {
        path: "/topic",
        element: <Topic></Topic>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courses/${params.id}`),
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => fetch("http://localhost:5000/"),
      },
    ],
  },
  { path: "*", element: <ErrorPage></ErrorPage> },
]);
