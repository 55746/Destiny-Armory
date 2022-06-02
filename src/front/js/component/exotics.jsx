import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import Load from "../../img/tumblr_nhvhluqUM51tfvxn5o1_500.webp";
import { motion } from "framer-motion";

export const Exotics = () => {
  const { store, actions } = useContext(Context);
  let loadingImg = Load;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      id="topofpage"
    >
      {store.exoticWeapons ? (
        <div
          className="row"
          style={{ marginTop: "1%", justifyContent: "center" }}
        >
          {store.exoticWeapons &&
            store.exoticWeapons.map((list, index) => {
              return (
                <div
                  className="list-group list-group-horizontal w-75 red"
                  style={{ display: "table-row" }}
                  key={index}
                >
                  <p>
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
                  </p>
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
              borderRadius: "50%",
            }}
          />
        </div>
      )}
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
    </motion.div>
  );
};
