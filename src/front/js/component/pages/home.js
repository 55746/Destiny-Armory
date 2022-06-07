import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Context } from "../../store/appContext.js";
export const Home = () => {
  const { store, actions } = useContext(Context);
  const [weapon, setWeapon] = useState("");
  const [search, setSearch] = useState("");
  useEffect(() => {
    actions.deleteSearch();
  }, []);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* <img src={blob} style={{ width: "100%", height: "50%" }} /> */}
        <form className="d-flex" role="search" style={{ marginTop: "3%" }}>
          <input
            className="form-control me-2"
            type="search"
            // placeholder="Search"
            aria-label="Search"
            onChange={(e) => setWeapon(e.target.value)}
            value={weapon}
            style={{ padding: "1%", fontSize: "20px" }}
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
        {store.searchWeapon.info ? (
          <div
            className="card"
            style={{
              position: "relative",
              marginLeft: "10%",
              marginRight: "10%",
              marginTop: "1%",
            }}
          >
            <img
              style={{ width: "25%", paddingLeft: "2%", paddingTop: "2%" }}
              src={store.searchWeapon.info.weapon_Img}
            />
            <div
              style={{
                position: "absolute",
                paddingLeft: "27%",
                paddingTop: "3%",
              }}
            >
              <p>
                <strong>{store.searchWeapon.info.weapon_name}</strong>
              </p>
              <p>{store.searchWeapon.info.weapon_type}</p>
              <p>{store.searchWeapon.info.weapon_lore}</p>

              <Link
                style={{
                  marginBottom: "2px",
                  marginLeft: "2%",
                  position: "relative",
                  zIndex: "1",
                }}
                to={`/${store.searchWeapon.type}/` + store.searchWeapon.info.id}
              >
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    actions.singleUncommonWeapon(store.searchWeapon.info.id);
                    actions.singleRareWeapon(store.searchWeapon.info.id);
                    actions.singleExoticWeapon(store.searchWeapon.info.id);
                    actions.singleLegendaryeWeapon(store.searchWeapon.info.id);
                  }}
                >
                  Location Info
                </button>
              </Link>
            </div>
            <p
              style={{
                position: "relative",
                paddingTop: "3%",
                paddingLeft: "3%",
              }}
            >
              {store.searchWeapon.info.location_description}
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
