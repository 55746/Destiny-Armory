import React from "react";
import { Home } from "./pages/home";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { Footer } from "./footer.jsx";
import { CreatePage } from "./create.jsx";
import { Exotics } from "./exotics.jsx";
import { ExoticWeaponPage } from "./pages/exoticweaponpage.jsx";
import { Legendary } from "./legendary.jsx";
import { LegendaryWeaponPage } from "./pages/legendaryweaponpage.jsx";
import { Rare } from "./rare.jsx";
import { RareWeaponPage } from "./pages/rareweaponpage.jsx";
import { Uncommon } from "./uncommon.jsx";
import { UncommonWeaponPage } from "./pages/uncommonweaponpage.jsx";
import { All } from "./all.jsx";
import { SignUp } from "./signup.jsx";
import { SignIn } from "./Signin.jsx";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <div>
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/create">
            <CreatePage />
          </Route>
          <Route exact path="/exotics">
            <Exotics />
          </Route>
          <Route exact path="/exoticweaponpage/:theid">
            <ExoticWeaponPage />
          </Route>
          <Route exact path="/legendary">
            <Legendary />
          </Route>
          <Route exact path="/legendaryweaponpage/:theid">
            <LegendaryWeaponPage />
          </Route>
          <Route exact path="/rare">
            <Rare />
          </Route>
          <Route exact path="/rareweaponpage/:theid">
            <RareWeaponPage />
          </Route>
          <Route exact path="/uncommon">
            <Uncommon />
          </Route>
          <Route exact path="/uncommonweaponpage/:theid">
            <UncommonWeaponPage />
          </Route>
          <Route exact path="/all">
            <All />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/all">
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedRoutes;
