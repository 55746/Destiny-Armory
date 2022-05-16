// import React, { useContext, useState } from "react";
// import { Context } from "../store/appContext";

// export const Exotics = () => {
//   const { store, actions } = useContext(Context);
//   console.log(store);
//   return <span>{store.exotics}</span>;
// };

import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

// import { Link } from "react-router-dom";

// import {LearnMore} from ""

export const Exotics = () => {
  // const par = list.results.uid;
  const { store, actions } = useContext(Context);
  console.log(store);
  return (
    <div className="row" style={{ justifyContent: "center" }}>
      {store.list &&
        store.list.map((list, index) => {
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
  );
};
