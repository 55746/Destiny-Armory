import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
// import Images from "../../../img/ExoticJadeRabbit.webp";

// import StarRating from "./starRating.jsx";

export const ExoticWeaponPage = () => {
  // let blob = [Images];
  const { store, actions } = useContext(Context);
  console.log(store);
  return (
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
        src={store.singleExoticWeapon.weapon_Img}
      />
      <div
        style={{ position: "absolute", paddingLeft: "27%", paddingTop: "3%" }}
      >
        <p>{store.singleExoticWeapon.weapon_name}</p>
        <p>{store.singleExoticWeapon.weapon_lore}</p>
        <p>{store.singleExoticWeapon.weapon_type}</p>
      </div>
      <p style={{ position: "relative", paddingTop: "3%", paddingLeft: "3%" }}>
        {store.singleExoticWeapon.location_description}
      </p>
      <div
        style={{
          position: "relative",
          paddingLeft: "65.5%",
          paddingTop: "5%",
          paddingBottom: "",
        }}
      >
        <video width="400" controls>
          <source src={store.singleExoticWeapon.location_video} />
        </video>
      </div>
      <p style={{ paddingLeft: "73%" }}>
        {store.singleExoticWeapon.video_credit}
      </p>
    </div>
  );
};
