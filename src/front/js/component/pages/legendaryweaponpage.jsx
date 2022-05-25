import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import Images from "../../../img/ExoticJadeRabbit.webp";

// import StarRating from "./starRating.jsx";

export const LegendaryWeaponPage = () => {
  let blob = [Images];
  const { store, actions } = useContext(Context);
  console.log(store);
  return (
    <div>
      <img className="w-100 h-100" src={blob} />
      {store.singleLegendaryWeapon.weapon_name}
      <br />
      {store.singleLegendaryWeapon.weapon_lore}
      <br />
      {store.singleLegendaryWeapon.location_description}
      <br />
      {store.singleLegendaryWeapon.weapon_type}
      <br />
      {store.singleLegendaryWeapon.weapon_class}
    </div>
  );
};
