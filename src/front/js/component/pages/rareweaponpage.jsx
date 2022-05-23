import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import Images from "../../../img/ExoticJadeRabbit.webp";

// import StarRating from "./starRating.jsx";

export const RareWeaponPage = () => {
  let blob = [Images];
  const { store, actions } = useContext(Context);
  console.log(store);
  return (
    <div>
      <img className="w-100 h-100" src={blob} />
      {store.singleRareWeapon.weapon_name}
      <br />
      {store.singleRareWeapon.weapon_lore}
      <br />
      {store.singleRareWeapon.location_information}
      <br />
      {store.singleRareWeapon.weapon_type}
      <br />
      {store.singleRareWeapon.weapon_class}
    </div>
  );
};
