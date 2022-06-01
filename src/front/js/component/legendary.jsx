import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Load from "../../img/tumblr_nhvhluqUM51tfvxn5o1_500.webp";
import { motion } from "framer-motion";

// THIS IS WHERE WE PUT ALL THE IMAGES FOR THE GUNS

export const Legendary = () => {
  const { store, actions } = useContext(Context);
  let loadingImg = Load;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      id="topofpage"
    >
      {store.legendaryWeapons ? (
        <div className="row" style={{ justifyContent: "center" }}>
          {store.legendaryWeapons &&
            store.legendaryWeapons.map((list, index) => {
              return (
                <div
                  className="list-group list-group-horizontal w-75"
                  style={{ display: "table-row" }}
                  key={index}
                >
                  <p>
                    <div className="card">
                      <div className="row">
                        <div className="col-md-3">
                          <img className="w-100 h-100" src={list.weapon_Img} />
                        </div>
                        <div className="col-md-8 w-25">
                          <div className="card-body h-25">
                            <h5 className="card-title">{list.weapon_name}</h5>
                            <p className="card-text">
                              {list.weapon_type}
                              <br />
                              {list.weapon_lore}
                            </p>
                            <Link to={"/legendaryweaponpage/" + list.id}>
                              <button
                                className="btn btn-primary"
                                onClick={() => {
                                  actions.singleLegendaryWeapon(list.id);
                                }}
                              >
                                Location Info
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </p>
                </div>
              );
            })}
          <a href="#" class="btt">
            <i
              style={{
                position: "fixed",
                bottom: "20px",
                right: "15px",
                backgroundColor: "gray",
                color: "black",
                padding: "15px",
                borderRadius: "10px",
              }}
              class="fa fa-arrow-circle-up"
              aria-hidden="true"
            ></i>
          </a>
        </div>
      ) : (
        <div style={{ postion: "absolute", marginLeft: "50%" }}>
          <img
            src={loadingImg}
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
            }}
          />
        </div>
      )}
    </motion.div>
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
