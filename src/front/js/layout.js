import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./component/pages/home";
import { Single } from "./component/pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";
import { CreatePage } from "./component/create.jsx";
import { Exotics } from "./component/exotics.jsx";
import { Legendary } from "./component/legendary.jsx";
import { Rare } from "./component/rare.jsx";
import { Uncommon } from "./component/uncommon.jsx";
import { Common } from "./component/common.jsx";
import { All } from "./component/all.jsx";
import { SignUp } from "./component/pages/signup.jsx";
import { SignIn } from "./component/Signin.jsx";

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
            <Route exact path="/">
              <SignUp />
            </Route>
            <Route exact path="/signin">
              <SignIn />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            {/* THIS IS REQUIRED TO CONNECT YOUR PAGES AND MAKE THEM FOUND */}
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
