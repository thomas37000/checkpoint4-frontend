import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import Presentation from "../views/Présentation";
import Projects from "../views/Projects";
import Main from "../views/Home";
import Nav from "../Nav/Nav";
import "../../App.css";

export default function Routter(vinyle) {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            {/* <h1>Mon Portfolio</h1> */}
            <Main />
          </Route>
          <Route path="/admin">
            <h1>Admin</h1>
          </Route>
          <Route path="/présentation">
            <Presentation />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}
