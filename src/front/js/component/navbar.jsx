import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/nav.css";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  let history = useHistory();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-scroll fixed-top shadow-0 border-bottom border-dark">
        <div className="container">
          <Link to="/home">
            <span className="navbar-brand mb-0 h1 text-light">Destiny</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link text-light"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-exotics"
                  type="button"
                  role="tab"
                  aria-controls="nav-exotics"
                  aria-selected="true"
                  onClick={() => {
                    actions.pullExotic();
                    history.push("/exotics");
                  }}
                >
                  Exotics
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light"
                  id="nav-contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-contact"
                  type="button"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                  onClick={() => {
                    actions.pullLegendary();
                    history.push("/legendary");
                  }}
                >
                  Legendary
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light"
                  id="nav-contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-contact"
                  type="button"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                  onClick={() => {
                    actions.pullRare();
                    history.push("/rare");
                  }}
                >
                  Rare
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light"
                  id="nav-contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-contact"
                  type="button"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                  onClick={() => {
                    actions.pullUncommon();
                    history.push("/uncommon");
                  }}
                >
                  Uncommon
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="false"
                  onClick={() => {
                    actions.pullUncommon();
                    history.push("/all");
                  }}
                >
                  All
                </a>
              </li>
              <li className="nav-item">
                <Link to="/signin">
                  <button className="btn btn-dark"> Signin </button>
                </Link>
              </li>
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
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
