import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
// import Images from "../../img/warmindImg.jpg";
// IF YOU USE FLUX, YOU USE USECONTEXT, BECAUSE YOU ARE USEING THE STORE
export const SignIn = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { store, actions } = useContext(Context);
  const [passLogin, setPasslogin] = useState(false);
  let history = useHistory();
  // let blob = [Images];

  return (
    <>
      <div className="container-fluid">
        <div className="row main-content bg-success text-center">
          <div className="col-md-4 text-center company__info">
            <span className="company__logo">
              <h2>
                <span className="fa fa-android"></span>
              </h2>
            </span>
            <h4 className="company_title">Your Company Logo</h4>
          </div>
          <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
            <div className="container-fluid">
              <div className="row">
                <h2>Log In</h2>
              </div>
              <div className="row">
                <form control="" className="form-group">
                  <div className="row">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="form__input"
                      placeholder="Username"
                    />
                  </div>
                  <div className="row">
                    <span className="fa fa-lock"></span>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form__input"
                      placeholder="Password"
                    />
                  </div>
                  <div className="row">
                    <input
                      type="checkbox"
                      name="remember_me"
                      id="remember_me"
                      className=""
                    />
                    <label for="remember_me">Remember Me!</label>
                  </div>
                  <div className="row">
                    <input type="submit" value="Submit" className="btn" />
                  </div>
                </form>
              </div>
              <div className="row">
                <p>
                  Don't have an account? <a href="#">Register Here</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
