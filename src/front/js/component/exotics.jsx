import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
// import StarRating from "./starRating.jsx";
import { Link } from "react-router-dom";
import Images from "../../img/ExoticJadeRabbit.webp";
import "../../styles/home.css";

// THIS IS WHERE WE PUT ALL THE IMAGES FOR THE GUNS

export const Exotics = () => {
  const { store, actions } = useContext(Context);
  console.log(store);
  let blob = Images;

  return (
    <div>
      <div className="row" style={{ justifyContent: "center" }}>
        {store.exoticWeapons &&
          store.exoticWeapons.map((list, index) => {
            return (
              <div
                className="list-group list-group-horizontal w-75"
                style={{ display: "flex", width: "100px" }}
                key={index}
              >
                <div className="card">
                  <div className="row">
                    <div className="col-md-3">
                      <img className="w-100 h-100" src={blob} />
                    </div>
                    <div className=" w-25">
                      <div
                        className="card-body"
                        // style={{ display: "inline-block", width: "100%" }}
                      >
                        <h5>{list.weapon_name}</h5>
                        <p style={{ width: "100%" }}>
                          <br />
                          {list.weapon_lore}
                        </p>
                        {/* <p onClick={() => {}}>
                          SignUp to Vote
                          <StarRating />
                        </p> */}
                        <Link to={"/exoticweaponpage/" + list.id}>
                          <button
                            style={{ float: "right" }}
                            className="btn btn-primary"
                            onClick={() => {
                              actions.singleExoticWeapon(list.id);
                            }}
                          >
                            Location Info
                          </button>
                        </Link>
                        {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

// WHEN I ENCOUNTER THE    psycopg2.errors.UndefinedTable ERROR
// 1. delete migrations folder
// 2. run pipenv run init
// 2. go to gitpod.yml file
// 3. past this command into the terminal  psql -U gitpod -c 'DROP DATABASE example;'
// 4. past this command into the terminal psql -U gitpod -c 'CREATE DATABASE example;'
// 5. run pipenv run migrate
// 6. run pipenv run upgrade
// 7. run pipenv run start
