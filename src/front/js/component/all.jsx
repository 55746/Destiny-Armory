import React from "react";
import Marcus from "../../img/4k-destiny-2-warmind-dlc-screenshot-wallpaper-preview.jpg";

export const All = () => {
  return (
    <div>
      <ul class="list-group list-group-horizontal">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">
          <button
            className="fa fa-share-alt"
            style={{ fontSize: "36px" }}
          ></button>
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
