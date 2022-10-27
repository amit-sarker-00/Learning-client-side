import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Register = () => {
  const {
    createUser,
    updateUserProfile,
    registerWithGoogle,
    registerWithGithub,
  } = useContext(AuthContext);
  const handelSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photoURL.value;
    // console.log(email, password, photo);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        handelUserUpdateProfile();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handelUserUpdateProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
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
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="form-control mt-4">
                <button onClick={handelGoogleSignUp} className="btn btn-danger">
                  <FaGoogle className="text-2xl"> </FaGoogle>{" "}
                  <h2 className="ml-2">Google</h2>
                </button>
              </div>
              <div className="form-control mt-3">
                <button onClick={handelGithubSignUp} className="btn btn-danger">
                  <FaGithub className="text-2xl"></FaGithub>{" "}
                  <h2 className="ml-2">Github</h2>
                </button>
              </div>
              <div className="text-center">
                <h2 className="text-xl">Or</h2>
                <p>Sign Up with </p>
              </div>
              <form onSubmit={handelSubmit} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="full name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">photoURL</span>
                  </label>
                  <input
                    type="photoURL"
                    name="photoURL"
                    placeholder="photourl"
                    className="input input-bordered"
                    required
                  />
                </div>
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
                  <label className="label">
                    <p className="label-text-alt ">
                      Already Have an Account ? please{" "}
                      <Link to="/login" className="link-hover">
                        Login
                      </Link>
                    </p>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
