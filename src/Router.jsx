import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import Presentation from "./components/Présentation";
import Projects from "./components/Projects";
// import Admin from "./components/Admin";
import Main from "./components/Main";
import Nav from "./components/Nav";
import "./App.css";


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
            <h1>Projects</h1>
            <Projects />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}