import React, { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/home.css";
// import { Exotics } from "../exotics";

export const Home = () => {
  // const Search = async () => {
  //   let data = await fetch("/exotics");
  //   let changecode = data.json();
  // };
  const { store, actions } = useContext(Context);
  console.log(store.user);
  return (
    <div>
      {store.user ? (
        <>
          <div
            style={{
              position: "absolute",
              left: "40%",
              marginTop: "15%",
              width: "50%",
            }}
            className="input-group"
          >
            <div className="form-outline">
              <input type="search" id="form1" className="form-control" />
              <label className="form-label" for="form1"></label>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              style={{ position: "absolute", left: "25%" }}
            >
              search
            </button>
          </div>
          <div>
            <img
              src={Marcus}
              // className="img-fluid"
              style={{ width: "100%", height: "100%" }}
              alt="..."
            />
          </div>
        </>
      ) : (
        <h1>You are not logged in</h1>
      )}
    </div>
  );
};
