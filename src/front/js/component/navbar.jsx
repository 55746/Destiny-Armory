import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-light text-light bg-dark">
        {/* <img src="src/front/img/3396e642ba214821b01dde9d23292526.png" /> */}
        <div className="container">
          <Link to="/">
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
            <Link to="/signUp">
              <button className="navbar-brand">Signup</button>
            </Link>
          </div>
        </div>

        <div>
          <ul
            style={{ position: "absolute", left: "25%" }}
            className="nav justify-content-center"
          >
            <li className="nav-item">
              <Link to="/exotics">
                <a className="nav-link active" aria-current="page" href="#">
                  Exotic
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/legendary">
                <a className="nav-link" href="#">
                  Legendary
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/rare">
                <a className="nav-link" href="#">
                  Rare
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/uncommon">
                <a className="nav-link" href="#">
                  Uncommon
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/common">
                <a className="nav-link" href="#">
                  Common
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/all">
                <a className="nav-link" href="#">
                  All
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
