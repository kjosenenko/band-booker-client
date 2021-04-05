import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Lineup from './components/Lineup'
import Schedule from './components/Schedule'
import ErrorPage from './components/ErrorPage'

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/lineup" component={Lineup}/>
          <Route exact path="/schedule" component={Schedule}/>
          <Route component={ErrorPage}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
