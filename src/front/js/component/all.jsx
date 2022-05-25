import React from "react";
import { Exotics } from "./exotics.jsx";
import { Legendary } from "././legendary.jsx";
import { Rare } from "././rare.jsx";
import { Uncommon } from "././uncommon.jsx";

export const All = () => {
  // let blob = [Images];
  return (
    <div>
      <Exotics />
      <Legendary />
      <Rare />
      <Uncommon />
    </div>
  );
};
