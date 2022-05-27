import React from "react";
import { Exotics } from "./exotics.jsx";
import { Legendary } from "././legendary.jsx";
import { Rare } from "././rare.jsx";
import { Uncommon } from "././uncommon.jsx";
import Images from "../../img/main.jpg";
export const All = () => {
  let blob = [Images];
  return (
    <div>
      <img src={blob} style={{ width: "100%", height: "100%" }} />
      <div
        className="container-fluid"
        style={{ width: "20%", marginLeft: "30%", marginBottom: "80%" }}
      >
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
      <Exotics />
      <Legendary />
      <Rare />
      <Uncommon />
    </div>
  );
};
