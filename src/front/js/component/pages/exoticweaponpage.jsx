import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import Images from "../../../img/ExoticJadeRabbit.webp";

// import StarRating from "./starRating.jsx";

export const ExoticWeaponPage = () => {
  let blob = [Images];
  const { store, actions } = useContext(Context);
  console.log(store);
  return (
    <div style={{ height: "100%" }}>
      <img className="w-100 h-100" src={store.singleExoticWeapon.weapon_Img} />
      <p>{store.singleExoticWeapon.weapon_name}</p>
      <p>{store.singleExoticWeapon.weapon_lore}</p>
      <p>{store.singleExoticWeapon.location_information}</p>
      <p>{store.singleExoticWeapon.weapon_type}</p>
      <p>{store.singleExoticWeapon.weapon_class}</p>
      <a>{store.singleExoticWeapon.location_video}</a>
    </div>
  );
};
