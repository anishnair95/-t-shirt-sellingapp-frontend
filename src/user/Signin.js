import React, { useState } from "react";
import Base from "../core/Base";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { signin, authenticate, isAuthenticated } from "../auth/helper";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const navigate = useNavigate();
  const { email, password, error, loading, didRedirect } = values;
  //holding the jwt
  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    //this function will set fields for all kind of member present inside object
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true,
            });

            //navigating to dashboard after successful signin
            navigate("/");
          });

          //clear all values
          // setValues({
          //   ...values,
          //   email: "",
          //   password: "",
          //   error: "",
          //   loading: false,
          //   didRedirect: false,
          // });
        }
      })
      .catch((err) => console.log("Sign in request failed"));
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
    );
  };
  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left ">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  //TODO: we will not be returning because we will be protecting the routes so we will redirect it later
  const performRedirect = () => {
    if (didRedirect) {
      if (user && user.role === 1) {
        return <p>Redirect to Admin page</p>;
      } else {
        return <p>Redirect to user dashboard</p>;
      }
    }
    // //we can also redirect to specific page based on role instead of redirecting to home page
    if (isAuthenticated()) {
      return <Navigate to="/" />;
    }
  };
  const signInForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left ">
          <form>
            <div className="form-group">
              <label className="text-light">Email</label>
              <input
                onChange={handleChange("email")}
                value={email}
                className="form-control"
                type="email"
              />
            </div>
            <div className="form-group">
              <label className="text-light">Password</label>
              <input
                onChange={handleChange("password")}
                value={password}
                className="form-control"
                type="password"
              />
            </div>

            <button onClick={onSubmit} className="btn btn-success btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <Base title="Sign in page" description="A page for user to sign in!">
      {loadingMessage()}
      {errorMessage()}
      {signInForm()}
      {performRedirect()}
      <p className="text-white text-center">{JSON.stringify(values)}</p>
    </Base>
  );
};

export default Signin;
