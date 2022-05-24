import React from "react";
import Images from "../../img/warmindImg.jpg";
import StarRating from "./starRating.jsx";

export const All = () => {
  let blob = [Images];
  return (
    <div>
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
        src={blob}
        className="img-fluid"
        style={{ width: "100%" }}
        alt="..."
      />
    </div>
  );
};
