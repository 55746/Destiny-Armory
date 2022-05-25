import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import Images from "../../../img/ExoticJadeRabbit.webp";

// import StarRating from "./starRating.jsx";

export const UncommonWeaponPage = () => {
  let blob = [Images];
  const { store, actions } = useContext(Context);
  console.log(store);
  return (
    <div>
      <img className="w-100 h-100" src={blob} />
      {store.singleUncommonWeaponPage.weapon_name}
      <br />
      {store.singleUncommonWeaponPage.weapon_lore}
      <br />
      {store.singleUncommonWeaponPage.location_description}
      <br />
      {store.singleUncommonWeaponPage.weapon_type}
      <br />
      {store.singleUncommonWeaponPage.weapon_class}
    </div>
  );
};
