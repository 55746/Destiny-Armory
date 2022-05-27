import React from "react";
import { Exotics } from "./exotics.jsx";
import { Legendary } from "././legendary.jsx";
import { Rare } from "././rare.jsx";
import { Uncommon } from "././uncommon.jsx";
import TESTIMAGE from "../../img/destiny_nightfall_weapon_adept.jpg";

export const All = () => {
  // let blob = [Images];
  return (
    <div className="row" style={{ justifyContent: "center" }}>
      <img src={TESTIMAGE} />
      <div>
        <Exotics />
        <Legendary />
        <Rare />
        <Uncommon />
      </div>
    </div>
  );
};
