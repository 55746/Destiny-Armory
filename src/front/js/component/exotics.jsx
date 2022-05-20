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
      <div className="row" style={{ justifyContent: "center" }}>
        {store.legendaryWeapons &&
          store.legendaryWeapons.map((list, index) => {
            return (
              <div
                key={index}
                className="card"
                style={{ width: "16rem", margin: "5px" }}
              >
                {/* <img
                src={store.img + list.uid + ".jpg"}
                className="card-img-top"
                alt="..."
              /> */}
                <div className="card-body">
                  <h5 className="card-title">{list.weapon_name}</h5>
                  {/* <Link to={"/exotics/" + list.uid}>
                  <button
                    style={{ float: "right" }}
                    onClick={() => {
                      actions.singleCharacter(list.uid);
                    }}
                    className="btn btn-primary"
                  >
                    Learn More
                  </button>
                </Link> */}
                  {/* <button
                  to="/Details"
                  // href="#"
                  className="btn btn-primary"
                  style={{ display: "inline-block" }}
                  onClick={() => {
                    if (store.favourites.includes(list)) {
                      return alert("You cant do that Jimbo!");
                    } else {
                      actions.addingFavourites(list);
                    }
                    // <h1>"clicked"</h1>
                  }}
                > */}
                  {/* this heart has to be connected to the favourites and dropdown */}
                  {/* <i className="fa fa-heart" aria-hidden="true"></i>
                </button> */}
                </div>
              </div>
            );
          })}
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
