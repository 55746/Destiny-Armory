import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import Images from "../../img/warmindImg.jpg";
import "../../styles/home.css";
// HAD TO IMPORT THE USEHISTORY TO BE ABLE TO BRING YOU TO THE LOGIN PAGE ONCLICK

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [dob, setDob] = useState("");
  const { store, actions } = useContext(Context);
  let history = useHistory();
  let blob = [Images];

  // const validateInput = () => {
  //   if (value === "") alert("The input cannot be empty");
  //   else alert("All perfect!");
  //   if (value === "email") {
  //     console.log(print("email validation"));
  //   }
  // };

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
          height: "50%",
        }}
      >
        <div style={{ marginTop: "12%" }}>
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
          </div>
          <div className="mb-3">
            <input
              onChange={(e) => setFirst_name(e.target.value)}
              value={first_name}
              style={{ width: "50%" }}
              placeholder="First Name"
              type="first_name"
              className="form-control move"
              id="first_name_input"
              aria-describedby="first_name"
            />
          </div>
          <div className="mb-3">
            <input
              onChange={(e) => setLast_name(e.target.value)}
              value={last_name}
              style={{ width: "50%" }}
              placeholder="Last Name"
              type="last_name"
              className="form-control move"
              id="last_name_input"
              aria-describedby="last_name"
            />
          </div>
          <div className="mb-3">
            <input
              onChange={(e) => setDob(e.target.value)}
              value={dob}
              style={{ width: "50%" }}
              placeholder="Date of Birth"
              type="dob"
              className="form-control move"
              id="dob"
              aria-describedby="dob"
            />
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
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
      <img
        src={blob}
        className="img-fluid"
        style={{ width: "100%" }}
        alt="..."
      />
    </div>
  );
};
