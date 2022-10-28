import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { logIn, registerWithGoogle, registerWithGithub } =
    useContext(AuthContext);

  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handelSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(email, password);
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        form.reset();
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        const errorMessage = error.message;
        setError(errorMessage);
        if (error.message === "Firebase: Error (auth/wrong-password).") {
          setError("wrong password");
        }
        if (error.message === "Firebase: Error (auth/user-disabled).") {
          setError("invalid user");
        }
      });
  };
  const handelGoogleSignUp = () => {
    registerWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  const handelGithubSignUp = () => {
    registerWithGithub()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="form-control mt-4">
              <button onClick={handelGoogleSignUp} className="btn btn-danger">
                <FaGoogle className="text-2xl"> </FaGoogle>{" "}
                <h2 className="ml-2 text-white">Google</h2>
              </button>
            </div>
            <div className="form-control mt-3">
              <button onClick={handelGithubSignUp} className="btn btn-danger">
                <FaGithub className="text-2xl"></FaGithub>{" "}
                <h2 className="ml-2">Github</h2>
              </button>
            </div>
            <div className="text-center">
              <h1>Or</h1>
              <p>Login with</p>
            </div>
            <form onSubmit={handelSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />

                <p className="bg-red-600 text-white my-2">{error}</p>

                <label className="label">
                  <p className="label-text-alt ">
                    Don't Have an Account ? please{" "}
                    <Link to="/register" className="link-hover">
                      Sign Up
                    </Link>
                  </p>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
