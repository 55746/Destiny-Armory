import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/nav.css";
import "../../styles/logo.css";
import "../../styles/navcolor.css";
import Images from "../../img/symbol.png";
export const Navbar = () => {
  const { store, actions } = useContext(Context);
  let history = useHistory();
  let blob = [Images];

  return (
    <>
      <nav
        className="navbar navbar-dark text-dark"
        style={{ margin: "0px", background: "transparent" }}
      >
        <div className="container">
          <img src={Images} style={{ width: "5%", height: "5%" }} />
          <Link to="/mainpage">
            <span className="navbar-brand mb-0 h1 text-dark top navbar-toggler-icon">
              Destiny
            </span>
          </Link>
          <div className="ml-auto">
            {store.user.email ? (
              <div className="ml-auto">
                <button
                  onClick={() => {
                    actions.logout();
                  }}
                  className="btn btn-danger"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link to="/signin">
                  <button className="btn btn-dark text-light">Signin</button>
                </Link>
                <Link to="/signup">
                  <button className="btn btn-primary">signup</button>
                </Link>
              </>
            )}
          </div>
        </div>
        <ul
          className="nav nav-tabs nav justify-content-center"
          style={{ position: "absolute", left: "25%" }}
        >
          {/* <li className="nav-item">
            <Link to="/home">
              <button className="nav-link">Search</button>
            </Link>
          </li> */}
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          ></div>
          <div
            className="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          ></div>
          <div
            className="tab-pane fade"
            id="contact"
            role="tabpanel"
            aria-labelledby="contact-tab"
          ></div>
        </div>
      </nav>
      <nav aria-label="Page navigation example">
        <ul className="nav nav-tabs nav justify-content-center">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link top2 button5"
              onClick={() => {
                history.push("/all");
              }}
            >
              All
            </button>
          </li>
          <li className="nav-item star" role="presentation">
            <button
              className="nav-link top2 button1"
              onClick={() => {
                actions.pullExotic();
                history.push("/exotics");
              }}
            >
              Exotics
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link top2 button2"
              onClick={() => {
                actions.pullLegendary();
                history.push("/legendary");
              }}
            >
              Legendary
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link top2 button3"
              onClick={() => {
                actions.pullRare();
                history.push("/rare");
              }}
            >
              Rare
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link top2 button4"
              onClick={() => {
                actions.pullUncommon();
                history.push("/uncommon");
              }}
            >
              Uncommon
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};
