import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import Images from "../../../img/ExoticJadeRabbit.webp";

// import StarRating from "./starRating.jsx";

export const CommonWeaponPage = () => {
  let blob = [Images];
  const { store, actions } = useContext(Context);
  console.log(store);
  return (
    <div>
      <img className="w-100 h-100" src={blob} />
      {store.singleExoticWeapon.weapon_name}
      <br />
      {store.singleExoticWeapon.weapon_lore}
      <br />
      {store.singleExoticWeapon.location_information}
      <br />
      {store.singleExoticWeapon.weapon_type}
      <br />
      {store.singleExoticWeapon.weapon_class}
    </div>
  );
};
