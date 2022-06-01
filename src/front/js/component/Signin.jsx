import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import "../../styles/signup.css";
import Image from "../../img/971421753-061c38c1fdfa681d822bd7f6c51fdd6a.gif";

export const SignIn = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { store, actions } = useContext(Context);
  const [passLogin, setPasslogin] = useState(false);
  let history = useHistory();

  return (
    <div className="container-fluid">
      <form>
        <div className="row main-content bg-success text-center">
          <div className="col-md-4 text-center company__info">
            <span className="company__logo">
              <h2>
                <span className="fa fa-android"></span>
              </h2>
            </span>
            <img src={Image} />
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
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      style={{ width: "50%" }}
                      placeholder="Email Address"
                      type="email"
                      className="form__input"
                      id="username"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      style={{ width: "52%" }}
                      placeholder="Password"
                      type="password"
                      className="form__input"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      if (email === "" || password === "") {
                        alert("The input cannot be empty");
                      } else {
                        actions.signIn(email, password);
                        history.push("/");
                      }
                    }}
                    formtype="submit"
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                  <Link to="/">
                    <button className="btn btn-primary">Back home</button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
