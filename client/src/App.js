import React from 'react';

import Home from './Home';
import Articles from './Articles';
import logo from './logo-vcg.png';

import { Navbar, NavItem, Icon } from 'react-materialize';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
       <Navbar
        alignLinks="left"
        brand={<a className="brand-logo" href="/">
          <img src={logo} alt="logo-vcg" />
        </a>}
        centerLogo
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: 'left',
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true
        }}
      >
        <NavItem href='/articles'>
          Articles
        </NavItem>
        <NavItem href="">
          Components
        </NavItem>
      </Navbar>
      <Router>
        <div className="page">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/articles">
              <Articles />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
