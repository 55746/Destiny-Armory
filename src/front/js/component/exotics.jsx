import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import StarRating from "./starRating.jsx";
import { Link } from "react-router-dom";

export const Exotics = () => {
  const { store, actions } = useContext(Context);
  console.log(store);
  return (
    <div>
      <div className="row" style={{ justifyContent: "center" }}>
        {store.exoticWeapons &&
          store.exoticWeapons.map((list, index) => {
            return (
              <div key={index}>
                <div className="card mb-3" style={{ "max-width": "540px" }}>
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img src="..." className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{list.weapon_name}</h5>
                        <p className="card-text">
                          {list.weapon_type}
                          {list.weapon_className}
                        </p>
                        <p style={{}}>
                          SignUp to Vote
                          <StarRating />
                        </p>
                        <Link to={"/exoticweaponpage/" + list.id}>
                          <button
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

// WHEN I ENCOUNTER THE psycopg2.errors.UndefinedTable ERROR
// 1. delete migrations folder
// 2. run pipenv run init
// 2. go to gitpod.yml file
// 3. past this command into the terminal  psql -U gitpod -c 'DROP DATABASE example;'
// 4. past this command into the terminal psql -U gitpod -c 'CREATE DATABASE example;'
// 5. run pipenv run migrate
// 6. run pipenv run upgrade
// 7. run pipenv run start
