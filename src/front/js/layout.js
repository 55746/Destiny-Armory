import React from "react";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import { Navbar } from "./component/navbar.jsx";
import { AnimatedRoutes } from "../js/component/animatedroutes.js";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
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
