import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
// import Images from "../../../img/ExoticJadeRabbit.webp";

// import StarRating from "./starRating.jsx";

export const UncommonWeaponPage = () => {
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
        src={store.singleUncommonWeapon.weapon_Img}
      />
      <div
        style={{ position: "absolute", paddingLeft: "27%", paddingTop: "3%" }}
      >
        <p>{store.singleUncommonWeapon.weapon_name}</p>
        <p>{store.singleUncommonWeapon.weapon_lore}</p>
        <p>{store.singleUncommonWeapon.weapon_type}</p>
      </div>
      <p style={{ position: "relative", paddingTop: "3%", paddingLeft: "3%" }}>
        {store.singleUncommonWeapon.location_description}
      </p>
      <div
        style={{
          position: "relative",
          paddingLeft: "65.5%",
          paddingTop: "5%",
          paddingBottom: "1.5%",
        }}
      >
        <video width="400" controls>
          <source src={store.singleUncommonWeapon.location_video} />
        </video>
      </div>
      <p style={{ paddingLeft: "73%" }}>
        {store.singleUncommonWeapon.video_credit}
      </p>
    </div>
  );
};
