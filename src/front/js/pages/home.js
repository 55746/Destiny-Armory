import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div
        style={{ position: "absolute", left: "40%", marginTop: "5%" }}
        className="input-group"
      >
        <div className="form-outline">
          <input type="search" id="form1" className="form-control" />
          <label className="form-label" for="form1"></label>
        </div>
        <button type="button" className="btn btn-primary">
          search
        </button>
      </div>
      <div>
        <img
          src="src/front/img/media_screenshot_thumb_1.jpg"
          className="img-fluid"
          alt="..."
        />
      </div>
    </>
  );
};
