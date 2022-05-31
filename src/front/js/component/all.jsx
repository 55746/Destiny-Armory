import React, { useState } from "react";
import { Exotics } from "./exotics.jsx";
import { Legendary } from "././legendary.jsx";
import { Rare } from "././rare.jsx";
import { Uncommon } from "././uncommon.jsx";
import Images from "../../img/destiny_nightfall_weapon_adept.jpg";
import { motion } from "framer-motion";

export const All = () => {
  const [visible, setVisible] = useState(false);
  let blob = [Images];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <img src={blob} style={{ width: "100%", height: "100%" }} />
      <form
        className="d-flex"
        role="search"
        style={{
          position: "absolute",
          left: "40%",
          marginTop: "-35%",
          width: "20%",
          height: "5%",
        }}
      >
        <input
          className="form-control me-2"
          type="search"
          // placeholder="Search"
          aria-label="Search"
        />
        <button
          type="button"
          className="btn-primary bt"
          style={{
            width: "40%",
          }}
        >
          Search
        </button>
      </form>
      <div>
        {/* <button
          className="btn-primary bt"
          style={{
            position: "absolute",
            left: "40%",
            marginTop: "-15%",
            width: "20%",
            height: "5%",
          }}
          onClick={() => setVisible(!visible)}
        >
          {visible ? "Hide" : "Show"}
        </button> */}
        {visible && (
          <div>
            <p>
              <Exotics />
            </p>
            <p>
              <Legendary />
            </p>
            <p>
              <Rare />
            </p>
            <p>
              <Uncommon />
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};
