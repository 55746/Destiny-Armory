import React from "react";
import Marcus from "../../img/warmindImg.jpg";

export const Legendary = () => {
  return (
    <div>
      <div class="container d-flex justify-content-center mt-200">
        <div class="row">
          <div class="col-md-12">
            <div class="stars">
              <form action="">
                <input
                  class="star star-5"
                  id="star-5"
                  type="radio"
                  name="star"
                />

                <label class="star star-5" for="star-5"></label>

                <input
                  class="star star-4"
                  id="star-4"
                  type="radio"
                  name="star"
                />

                <label class="star star-4" for="star-4"></label>

                <input
                  class="star star-3"
                  id="star-3"
                  type="radio"
                  name="star"
                />

                <label class="star star-3" for="star-3"></label>

                <input
                  class="star star-2"
                  id="star-2"
                  type="radio"
                  name="star"
                />

                <label class="star star-2" for="star-2"></label>

                <input
                  class="star star-1"
                  id="star-1"
                  type="radio"
                  name="star"
                />

                <label class="star star-1" for="star-1"></label>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ul className="list-group list-group-horizontal">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">
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
