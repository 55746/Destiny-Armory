import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { CreatePage } from "./component/create";
import { Exotics } from "./component/exotics";
import { Legendary } from "./component/legendary";
import { Rare } from "./component/rare";
import { Uncommon } from "./component/uncommon";
import { Common } from "./component/common";
import { All } from "./component/all";
import { MissingPersons } from "./component/missingpersons";

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

          <Switch>
            <Route exact path="/create">
              <CreatePage />
            </Route>
            <Route exact path="/exotics">
              <Exotics />
            </Route>
            <Route exact path="/legendary">
              <Legendary />
            </Route>
            <Route exact path="/rare">
              <Rare />
            </Route>
            <Route exact path="/uncommon">
              <Uncommon />
            </Route>
            <Route exact path="/common">
              <Common />
            </Route>
            <Route exact path="/all">
              <All />
            </Route>
            <Route exact path="/missingper">
              <MissingPersons />
            </Route>
            {/* THIS IS REQUIRED TO CONNECT YOUR PAGES AND MAKE THEM FOUND */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/demo">
              <Demo />
            </Route>
            <Route exact path="/single/:theid">
              <Single />
            </Route>
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
