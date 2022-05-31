import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import Load from "../../img/tumblr_nhvhluqUM51tfvxn5o1_500.webp";
import { motion } from "framer-motion";
// THIS IS WHERE WE PUT ALL THE IMAGES FOR THE GUNS

export const Exotics = () => {
  const { store, actions } = useContext(Context);
  console.log(store);
  let loadingImg = Load;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      id="topofpage"
    >
      {store.exoticWeapons ? (
        <div className="row" style={{ justifyContent: "center" }}>
          {store.exoticWeapons &&
            store.exoticWeapons.map((list, index) => {
              return (
                <div
                  className="list-group list-group-horizontal w-75 red"
                  style={{ display: "table-row" }}
                  key={index}
                >
                  <div className="card">
                    <div className="row" data-aos="fade-up">
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      ) : (
        <div style={{ justifyContent: "center", marginLeft: "50%" }}>
          <img
            src={loadingImg}
            style={{
              width: "100px",
              height: "100px",
              // background: red;
              borderRadius: "50%",
            }}
          />
        </div>
      )}
      <a href="#" class="btt">
        <i
          style={{
            position: "fixed" /* Fixed/sticky position */,
            bottom: "20px" /* Place the button at the bottom of the page */,
            right: "15px" /* Place the button 30px from the right */,
            backgroundColor: "gray" /* Set a background color */,
            color: "black" /* Text color */,
            padding: "15px" /* Some padding */,
            borderRadius: "10px" /* Rounded corners */,
          }}
          class="fa fa-arrow-circle-up"
          aria-hidden="true"
        ></i>
      </a>
    </motion.div>
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
