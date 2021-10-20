import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "shards-ui/dist/css/shards.min.css"
import Navi from './components/Navi'
import LoginLanding from './components/LoginLanding'
import RegisterLanding from './components/RegisterLanding';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
ReactDOM.render(
    <>
    <Router>
      <Navi />
      <Switch>
        <Route exact path="/">
          <LoginLanding />
        </Route>
        <Route exact path ="/register">
          <RegisterLanding />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
     
    </Router>
    
    </>
  ,document.getElementById('root')
);