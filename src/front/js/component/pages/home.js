import React, { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/home.css";
import Marcus from "../../../img/warmindImg.jpg";

export const Home = () => {
  const { store, actions } = useContext(Context);
  console.log(store.user);
  return (
    <div className="text-center mt-5">
      {/* {store.user.email ? ( */}
      <div>
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
              className="img-fluid"
              style={{ width: "100%" }}
              alt="..."
            />
          </div>
        </>
      </div>
      {/* ) : (
        <h1>Not Logged in</h1>
      )} */}
    </div>
  );
};
