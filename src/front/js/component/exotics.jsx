import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Exotics = () => {
  const { store, actions } = useContext(Context);
  console.log(store);
  return <span>{store.exotics}</span>;
};
