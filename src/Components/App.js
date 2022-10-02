// React And Hooks
import React, { useState } from "react";
// React And Hooks

// Extra Library
import "../styles/app.scss";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// Extra Library

// Pages Section
import HomePage from "../Pages/HomePage";
import CoursesPage from "../Pages/CoursesPage";
import ErrorPage from "../Pages/ErrorPage";
import Details from "./Details";
import ContactPage from "../Pages/ContactPage";
import data from "./Data";
// Pages Section

const App = () => {
  const location = useLocation();
  const [lessons, setLessons] = useState(data());
  return (
    <div>
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/coursespage" exact>
            <CoursesPage lessons={lessons} />
          </Route>
          <Route path="/coursespage/:id">
            <Details />
          </Route>
          <Route path="/contactpage">
            <ContactPage />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;
