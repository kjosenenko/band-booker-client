import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
