import React, { useState, useContext } from "react";
// import Images from "../../../img/destiny_nightfall_weapon_adept.jpg";
import { motion } from "framer-motion";
import { Context } from "../../store/appContext.js";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [weapon, setWeapon] = useState("");
  // const [dat, setDat] = useState([]);
  // let blob = Images;
  // const search = async () => {
  //   let res = await fetch(
  //     "https://3001-55746-destinyarmory-6hgy296ti3e.ws-us46.gitpod.io/api/exotics"
  //   );
  //   let searched = await res.json();
  //   let par = setDat(searched);
  //   console.log(dat);
  // };
  // search();
  // console.log(store.searchWeapon);
  // console.log(weapon);
  // const search = () => {
  //   let par = actions.pullExotic();
  //   console.log(par);
  // };
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* <img src={blob} style={{ width: "100%", height: "50%" }} /> */}
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            // placeholder="Search"
            aria-label="Search"
            onChange={(e) => setWeapon(e.target.value)}
            // data={dat}
            value={weapon}
          />
          <button
            onClick={() => {
              if (weapon !== "") {
                actions.searchWeapon(weapon);
              }
            }}
            type="button"
            className="btn-primary bt"
            style={{
              width: "40%",
            }}
          >
            Search
          </button>
        </form>
        {store.searchWeapon.id ? (
          <div
            className="card"
            style={{
              position: "relative",
              marginLeft: "10%",
              marginRight: "10%",
              // marginBottom: "10%",
            }}
          >
            <img
              style={{ width: "25%", paddingLeft: "2%", paddingTop: "2%" }}
              src={store.searchWeapon.weapon_Img}
            />
            <div
              style={{
                position: "absolute",
                paddingLeft: "27%",
                paddingTop: "3%",
              }}
            >
              <p>
                <strong>{store.searchWeapon.weapon_name}</strong>
              </p>
              <p>{store.searchWeapon.weapon_type}</p>
              <p>{store.searchWeapon.weapon_lore}</p>
            </div>
            <p
              style={{
                position: "relative",
                paddingTop: "3%",
                paddingLeft: "3%",
              }}
            >
              {store.searchWeapon.location_description}
            </p>
          </div>
        ) : (
          <>{store.searchWeapon.not ? <h3>Weapon Not Found</h3> : ""}</>
        )}
      </motion.div>
      {/* <div>
        {dat.map((value, key) => {
          <div>{value.weapon_name}</div>;
        })}
      </div> */}
    </>
  );
};
