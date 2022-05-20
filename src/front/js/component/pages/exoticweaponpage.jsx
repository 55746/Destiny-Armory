import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
// import StarRating from "./starRating.jsx";

export const ExoticWeaponPage = () => {
  const { store, actions } = useContext(Context);
  console.log(store);
  return <div>{store.singleExoticWeapon.weapon_name}</div>;
};
