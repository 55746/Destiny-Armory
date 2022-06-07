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
  return (
    <>
      <nav className=" container navbar navbar-dark text-dark d-flex justify-content-between">
        <div className="d-flex">
          <div
            style={{
              positon: "relative",
              display: "inline-flex",
              width: "4rem",
              height: "2rem",
            }}
          >
            <img src={Images} className="img-fluid" />
          </div>
          <Link to="/">
            <div>
              <span className="navbar-brand h1 text-dark top move">
                Destiny
              </span>
            </div>
          </Link>
        </div>
        <div className="d-flex">
          {store.user.email ? (
            <div className="">
              <button
                onClick={() => {
                  actions.logout();
                }}
                className="bt1 btn-danger"
                style={{ width: "100%" }}
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link to="/signin">
                <button className="btn btn-primary" style={{ width: "100%" }}>
                  Signin
                </button>
              </Link>
              <Link to="/signup">
                <button className="btn btn-primary" style={{ width: "100%" }}>
                  signup
                </button>
              </Link>
            </>
          )}
        </div>
      </nav>
      <nav aria-label="Page navigation example">
        <ul className="nav nav-tabs nav justify-content-center">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link top2 button5"
              onClick={() => {
                history.push("/");
              }}
            >
              Search
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
