import React from "react";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import { Navbar } from "./component/navbar.jsx";
import { AnimatedRoutes } from "../js/component/animatedroutes.js";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <AnimatedRoutes />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);

// WHEN NO module named flask_jwt_extended pipenv run shell
// when CORS policy: No 'Access-Control-Allow-Origin', mode: no-cors in you flux function
// Every time i reopen the workspace the url for the flux and on postman changes, use simple browser url and copy paste

// WHEN I ENCOUNTER THE    psycopg2.errors.UndefinedTable ERROR
// 1. delete migrations folder
// 2. run pipenv run init
// 2. go to gitpod.yml file
// 3. past this command into the terminal  psql -U gitpod -c 'DROP DATABASE example;'
// 4. past this command into the terminal psql -U gitpod -c 'CREATE DATABASE example;'
// 5. run pipenv run migrate
// 6. run pipenv run upgrade
// 7. run pipenv run start
