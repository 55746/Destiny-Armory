import React, { useState, useContext } from "react";
import ReactPlayer from "react-player";
import { Context } from "../../store/appContext";

export const ExoticWeaponPage = () => {
  const { store, actions } = useContext(Context);
  let par = store.singleExoticWeapon.location_video;
  const [success, setSuccess] = useState("");
  console.log(store.searchWeapon);
  return (
    <div
      className="card"
      // style={{
      //   position: "relative",
      //   marginLeft: "10%",
      //   marginRight: "10%",
      // }}
    >
      <img
        className="image"
        // style={{ width: "25%", paddingLeft: "2%", paddingTop: "2%" }}
        src={store.singleExoticWeapon.weapon_Img}
      />
      <div
        style={{ position: "absolute", paddingLeft: "27%", paddingTop: "3%" }}
      >
        <p>
          <strong>{store.singleExoticWeapon.weapon_name}</strong>
        </p>
        <p>{store.singleExoticWeapon.weapon_type}</p>
        <p>{store.singleExoticWeapon.weapon_lore}</p>
      </div>
      <p style={{ position: "relative", paddingTop: "3%", paddingLeft: "3%" }}>
        {store.singleExoticWeapon.location_description}
      </p>
      <div
        style={{
          position: "relative",
          paddingLeft: "25%",
          paddingTop: "5%",
          paddingBottom: "1.5%",
        }}
      >
        {store.singleExoticWeapon.location_video == null ? (
          <div>
            <p>No video was found for {store.singleExoticWeapon.weapon_name}</p>
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
            <ReactPlayer
              controls
              url={store.singleExoticWeapon.location_video}
            />
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
