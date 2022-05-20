import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import StarRating from "./starRating.jsx";

export const Exotics = () => {
  const { store, actions } = useContext(Context);
  console.log(store);
  return (
    <div>
      <StarRating />
      <div className="row" style={{ justifyContent: "center" }}>
        {/* {store.ExoticWeapon &&
        store.ExoticWeapon.map((list, index) => { */}
        {/* return <div key={index}> */}
        {store.list}
        {/* oksodk */}
        {/* </div>; */}
        {/* })} */}
      </div>
    </div>
  );
};

// WHEN I ENCOUNTER THE psycopg2.errors.UndefinedTable ERROR
// 1. delete migrations folder
// 2. run pipenv run init
// 2. go to gitpod.yml file
// 3. past this command into the terminal  psql -U gitpod -c 'DROP DATABASE example;'
// 4. past this command into the terminal psql -U gitpod -c 'CREATE DATABASE example;'
// 5. run pipenv run migrate
// 6. run pipenv run upgrade
// 7. run pipenv run start
