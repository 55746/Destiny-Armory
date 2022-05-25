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
      {store.singleRareWeaponPage.weapon_name}
      <br />
      {store.singleRareWeaponPage.weapon_lore}
      <br />
      {store.singleRareWeaponPage.location_information}
      <br />
      {store.singleRareWeaponPage.weapon_type}
      <br />
      {store.singleRareWeaponPage.weapon_class}
    </div>
  );
};
