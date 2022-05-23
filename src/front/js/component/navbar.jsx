import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
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
            <Link to="/create">
              <button className="btn btn-primary">Create</button>
            </Link>
            <button
              className="fa fa-share-alt"
              style={{ fontSize: "36px" }}
            ></button>
            <Link to="/signup">
              <button className="navbar-brand">Signup</button>
            </Link>
          </div>
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
            <Link to="/exotics">
              <button className="nav-link">Exotic</button>
            </Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link to="/legendary">
              <button className="nav-link">Legendary</button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/rare">
              <button className="nav-link">Rare</button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/common">
              <button className="nav-link">Common</button>
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
