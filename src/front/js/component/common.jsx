import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import StarRating from "./starRating.jsx";
import { Link } from "react-router-dom";
import Images from "../../img/ExoticJadeRabbit.webp";
// THIS IS WHERE WE PUT ALL THE IMAGES FOR THE GUNS

export const Common = () => {
  const { store, actions } = useContext(Context);
  console.log(store);
  let blob = [Images];

  return (
    <div>
      <div className="row" style={{ justifyContent: "center" }}>
        {store.commonWeapons &&
          store.commonWeapons.map((list, index) => {
            return (
              <div
                className="list-group list-group-horizontal w-75"
                style={{ display: "table-row" }}
                key={index}
              >
                <div className="card">
                  <div className="row">
                    <div className="col-md-3">
                      <img className="w-100 h-100" src={blob} />
                    </div>
                    <div className="col-md-8 w-25">
                      <div className="card-body h-25">
                        <h5 className="card-title">{list.weapon_name}</h5>
                        <p className="card-text">
                          {list.weapon_type}
                          <br />
                          {list.weapon_lore}
                        </p>
                        <p onClick={() => {}}>
                          {/* ONCLICK WE WANT IT TO MAKE SURE YOU ARE SIGNED IN<, IF NOT ASK IF THEYD LIKE TO SIGN UP OR BRING TO SIGN UP PAGE */}
                          SignUp to Vote
                          <StarRating />
                        </p>
                        <Link to={"/commonweaponpage/" + list.id}>
                          <button
                            className="btn btn-primary"
                            onClick={() => {
                              actions.singleCommonWeapon(list.id);
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
      <ul
        className="list-group list-group-horizontal"
        style={{
          position: "absolute",
          left: "40%",
          marginTop: "15%",
          width: "50%",
        }}
      >
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">
          <button
            className="fa fa-share-alt"
            style={{ fontSize: "36px" }}
          ></button>
        </li>
        <li className="list-group-item">
          <StarRating />
        </li>
      </ul>
      <img
        src={Marcus}
        className="img-fluid"
        style={{ width: "100%" }}
        alt="..."
      />
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
