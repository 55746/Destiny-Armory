import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <div className="card text-center">
        <div className="card-body">
          <h1 className="card-title">LOUIS ALERT</h1>
          <p className="card-text">Public missing brodcast alert system</p>
          <a href="#" className="btn btn-primary">
            Missing Persons Page
          </a>
        </div>
      </div>
      <div>
        <h2> Sign up to report missing persons</h2>
        <Link to="/signUp">
          <button type="button" className="btn btn-primary">
            Sign up
          </button>
        </Link>
      </div>
      <div className="alert alert-info">
        {store.message ||
          "make sure to make a loading screen or img when the website is loading"}
      </div>
    </div>
  );
};
