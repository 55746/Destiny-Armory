import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import Image from "../../img/971421753-061c38c1fdfa681d822bd7f6c51fdd6a.gif";
import "../../styles/signup.css";
// HAD TO IMPORT THE USEHISTORY TO BE ABLE TO BRING YOU TO THE LOGIN PAGE ONCLICK

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [dob, setDob] = useState("");
  const { store, actions } = useContext(Context);
  let history = useHistory();

  return (
    <div className="container-fluid">
      <form>
        <div className="row main-content text-center">
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
                <h2>Sign up</h2>
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
                  <div className="row">
                    <span className="fa fa-lock"></span>
                    <input
                      onChange={(e) => setFirst_name(e.target.value)}
                      value={first_name}
                      style={{ width: "50%" }}
                      placeholder="First Name"
                      type="first_name"
                      className="form__input"
                      id="first_name_input"
                      aria-describedby="first_name"
                    />
                  </div>
                  <div className="row">
                    <input
                      onChange={(e) => setLast_name(e.target.value)}
                      value={last_name}
                      style={{ width: "50%" }}
                      placeholder="Last Name"
                      type="last_name"
                      className="form__input"
                      id="last_name_input"
                      aria-describedby="last_name"
                    />
                  </div>
                  <div>
                    <input
                      onChange={(e) => setDob(e.target.value)}
                      value={dob}
                      style={{ width: "52%" }}
                      placeholder="Date of Birth"
                      type="dob"
                      className="form__input"
                      id="dob"
                      aria-describedby="dob"
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
                      actions.signUp({
                        email: email,
                        password: password,
                        first_name: first_name,
                        last_name: last_name,
                        dob: dob,
                      });
                      history.push("/signin");
                    }}
                    type="submit"
                    className="btn btn-primary row"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
