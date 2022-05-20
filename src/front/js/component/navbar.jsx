import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-light text-light bg-dark">
        {/* <img src="src/front/img/3396e642ba214821b01dde9d23292526.png" /> */}
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
            {/* <button
            onClick={(e) => {
              // validateInput();
              e.preventDefault();
              actions.logout();
              history.push("/signin");
            }}
          ></button> */}
          </div>
        </div>

        <div>
          <ul
            style={{ position: "absolute", left: "25%" }}
            className="nav justify-content-center"
          >
            <li className="nav-item">
              <Link to="/exotics">
                <button className="nav-link active" aria-current="page">
                  Exotic
                </button>
              </Link>
            </li>
            <li className="nav-item">
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
              <Link to="/uncommon">
                <button className="nav-link">Uncommon</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/common">
                <button className="nav-link">Common</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/all">
                <button className="nav-link">All</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
