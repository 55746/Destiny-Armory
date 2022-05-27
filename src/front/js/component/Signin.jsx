import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import Images from "../../img/main2.jpg";
// IF YOU USE FLUX, YOU USE USECONTEXT, BECAUSE YOU ARE USEING THE STORE
export const SignIn = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { store, actions } = useContext(Context);
  const [passLogin, setPasslogin] = useState(false);
  let history = useHistory();
  let blob = [Images];

  return (
    <div>
      <form
        className="text-dark bg-light text-center"
        style={{
          position: "absolute",
          left: "25%",
          marginTop: "5%",
          width: "40%",
          borderRadius: "2%",
          height: "30%",
        }}
      >
        <img
          src={blob}
          className="img-fluid"
          style={{ width: "100%" }}
          alt="..."
        />
        <div style={{ marginTop: "1%" }}>
          <div className="mb-3">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              style={{ width: "50%" }}
              placeholder="Email Address"
              type="email"
              className="form-control move"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />

            <div id="emailHelp" className="form-text text-light">
              LETS LOGIN
            </div>
            <div className="mb-3">
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                style={{ width: "50%" }}
                placeholder="Password"
                type="password"
                className="form-control move"
                id="exampleInputPassword1"
              />
            </div>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              if (email === "" || password === "") {
                alert("The input cannot be empty");
              }
              //NEED ANOTHER IF STATEMENT
              else {
                actions.signIn(email, password);
                history.push("/all");
              }
            }}
            formtype="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
          <Link to="/all">
            <button className="btn btn-primary">Back home</button>
          </Link>
        </div>
      </form>
    </div>
  );
};
