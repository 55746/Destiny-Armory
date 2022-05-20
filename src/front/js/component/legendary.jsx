import React from "react";
import Marcus from "../../img/warmindImg.jpg";
import StarRating from "./starRating.jsx";

export const Legendary = () => {
  return (
    <div>
      <ul className="list-group list-group-horizontal">
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
