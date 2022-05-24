import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  let history = useHistory();
  return (
    <>
      <nav
        className="navbar navbar-dark text-light bg-dark"
        style={{ margin: "0px" }}
      >
        <div className="container">
          <Link to="/home">
            <span className="navbar-brand mb-0 h1 text-light">Destiny</span>
          </Link>
          <div className="ml-auto">
            <Link to="/signin">
              <button
                className="btn btn-primary"
                style={{ marginLeft: "1000%" }}
              >
                Signin
              </button>
            </Link>
          </div>
          {store.user ? (
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
            <Link to="/signup">
              <button className="btn btn-primary">signup</button>
            </Link>
          )}
        </div>
        <ul
          className="nav nav-tabs nav justify-content-center"
          style={{ position: "absolute", left: "25%" }}
        >
          <li className="nav-item">
            <Link to="/home">
              <button className="nav-link">Search</button>
            </Link>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
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
              className="nav-link"
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
              className="nav-link"
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
              className="nav-link"
              onClick={() => {
                actions.pullUncommon();
                history.push("/uncommon");
              }}
            >
              Uncommon
            </button>
          </li>
          <li className="nav-item">
            <Link to="/all">
              <button className="nav-link">all</button>
            </Link>
          </li>
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
    </>
  );
};
