import React from "react";
import { Exotics } from "./exotics.jsx";
import { Legendary } from "././legendary.jsx";
import { Rare } from "././rare.jsx";
import { Uncommon } from "././uncommon.jsx";
import Images from "../../img/destiny_nightfall_weapon_adept.jpg";
export const All = () => {
  let blob = [Images];
  return (
    <div>
      <img src={blob} style={{ width: "100%", height: "100%" }} />
      <div
        style={{
          position: "absolute",
          left: "40%",
          marginTop: "-35%",
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
      <Exotics />
      <Legendary />
      <Rare />
      <Uncommon />
    </div>
  );
};
