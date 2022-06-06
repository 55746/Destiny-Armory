import React, { useState, useContext, useEffect } from "react";
import ReactPlayer from "react-player";
import { Context } from "../../store/appContext";

export const RareWeaponPage = () => {
  const [darkMode, setDarkMode] = React.useState(getInitialMode());

  React.useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    const userPrefersDark = getPrefColorScheme();
    // if mode was saved --> dark / light
    if (isReturningUser) {
      return savedMode;
      // if preferred color scheme is dark --> dark
    } else if (userPrefersDark) {
      return true;
      // otherwise --> light
    } else {
      return false;
    }
    // return savedMode || false;
  }

  function getPrefColorScheme() {
    if (!window.matchMedia) return;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  const { store, actions } = useContext(Context);
  let par = store.singleRareWeapon.location_video;
  const [success, setSuccess] = useState("");
  return (
    <div
      className="card"
      style={{
        position: "relative",
        marginLeft: "10%",
        marginRight: "10%",
      }}
    >
      <img
        style={{ width: "25%", paddingLeft: "2%", paddingTop: "2%" }}
        src={store.singleRareWeapon.weapon_Img}
      />
      <div
        style={{ position: "absolute", paddingLeft: "27%", paddingTop: "3%" }}
      >
        <p>
          <strong>{store.singleRareWeapon.weapon_name}</strong>
        </p>
        <p>{store.singleRareWeapon.weapon_type}</p>
        <p>{store.singleRareWeapon.weapon_lore}</p>
      </div>
      <p style={{ position: "relative", paddingTop: "3%", paddingLeft: "3%" }}>
        {store.singleRareWeapon.location_description}
      </p>
      <div
        style={{
          position: "relative",
          paddingLeft: "25%",
          paddingTop: "5%",
          paddingBottom: "1.5%",
        }}
      >
        {store.singleRareWeapon.location_video == null ? (
          <div>
            <p>No video was found for {store.singleRareWeapon.weapon_name}</p>
          </div>
        ) : (
          <>
            {store.user.email ? (
              <button
                style={{
                  position: "absolute",
                  marginRight: "100px",
                }}
                onClick={() => {
                  navigator.clipboard.writeText(par);
                  {
                    setSuccess("copied");
                  }
                }}
              >
                <i class="fa fa-clone" aria-hidden="true"></i>
                VideoUrl
              </button>
            ) : (
              <button onClick={() => alert("SignUp/Login to Share")}>
                <i class="fa fa-clone" aria-hidden="true"></i>
                copy
              </button>
            )}
            <ReactPlayer controls url={store.singleRareWeapon.location_video} />
            <p style={{ paddingLeft: "25%" }}>
              This video is credited to its original creator.
            </p>
            <p>
              <i>
                <small>{success}</small>
              </i>
            </p>
          </>
        )}
      </div>
      <div
        style={{
          position: "relative",
          paddingLeft: "25%",
          paddingTop: "5%",
          paddingBottom: "",
        }}
      ></div>
    </div>
  );
};
