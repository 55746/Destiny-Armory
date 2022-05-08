import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <img src="src/front/img/3396e642ba214821b01dde9d23292526.png" />
        <div className="container">
          <Link to="/">
            <span className="navbar-brand mb-0 h1">Louis Alert</span>
          </Link>
          <div className="ml-auto">
            <Link to="/demo">
              <button className="btn btn-primary">Contact</button>
            </Link>
            <Link to="/create">
              <button className="btn btn-primary">Create</button>
            </Link>
            <button
              className="fa fa-share-alt"
              style={{ fontSize: "36px" }}
            ></button>
          </div>
        </div>

        <div>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link to="/statistics">
                <a className="nav-link active" aria-current="page" href="#">
                  Statistics
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Louise Alert
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
