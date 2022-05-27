import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
// import Images from "../../img/warmindImg.jpg";
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
  // let blob = [Images];

  // const validateInput = () => {
  //   if (value === "") alert("The input cannot be empty");
  //   else alert("All perfect!");
  //   if (value === "email") {
  //     console.log(print("email validation"));
  //   }
  // };

  return (
    // <div>
    //   <form
    //     className="text-dark bg-light text-center"
    //     style={{
    //       position: "absolute",
    //       left: "25%",
    //       marginTop: "5%",
    //       width: "40%",
    //       borderRadius: "2%",
    //       height: "50%",
    //     }}
    //   >
    //     <div style={{ marginTop: "12%" }}>
    //       <div className="mb-3">
    //         <input
    //           onChange={(e) => setEmail(e.target.value)}
    //           value={email}
    //           style={{ width: "50%" }}
    //           placeholder="Email Address"
    //           type="email"
    //           className="form-control move"
    //           id="exampleInputEmail1"
    //           aria-describedby="emailHelp"
    //         />
    //       </div>
    //       <div className="mb-3">
    //         <input
    //           onChange={(e) => setFirst_name(e.target.value)}
    //           value={first_name}
    //           style={{ width: "50%" }}
    //           placeholder="First Name"
    //           type="first_name"
    //           className="form-control move"
    //           id="first_name_input"
    //           aria-describedby="first_name"
    //         />
    //       </div>
    //       <div className="mb-3">
    //         <input
    //           onChange={(e) => setLast_name(e.target.value)}
    //           value={last_name}
    //           style={{ width: "50%" }}
    //           placeholder="Last Name"
    //           type="last_name"
    //           className="form-control move"
    //           id="last_name_input"
    //           aria-describedby="last_name"
    //         />
    //       </div>
    //       <div className="mb-3">
    //         <input
    //           onChange={(e) => setDob(e.target.value)}
    //           value={dob}
    //           style={{ width: "50%" }}
    //           placeholder="Date of Birth"
    //           type="dob"
    //           className="form-control move"
    //           id="dob"
    //           aria-describedby="dob"
    //         />
    //       </div>
    //       <div className="mb-3">
    //         <input
    //           onChange={(e) => setPassword(e.target.value)}
    //           value={password}
    //           style={{ width: "50%" }}
    //           placeholder="Password"
    //           type="password"
    //           className="form-control move"
    //           id="exampleInputPassword1"
    //         />
    //       </div>
    //     </div>
    //     <button
    //       onClick={(e) => {
    //         e.preventDefault();
    //         actions.signUp({
    //           email: email,
    //           password: password,
    //           first_name: first_name,
    //           last_name: last_name,
    //           dob: dob,
    //         });
    //         history.push("/signin");
    //       }}
    //       type="submit"
    //       className="btn btn-primary"
    //     >
    //       Submit
    //     </button>
    //   </form>
    // </div><>
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
  );
};
