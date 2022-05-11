import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Exotics = () => {
  // const par = list.results.uid;
  const { store, actions } = useContext(Context);
  console.log(store);
  return { list };
};
