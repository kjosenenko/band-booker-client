import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {getLineup} from './actions/lineup'
import Nav from './components/Nav'
import Home from './components/Home'
import Lineup from './components/Lineup'
import Schedule from './components/Schedule'
import ErrorPage from './components/ErrorPage'

class App extends Component {

  componentDidMount() {
    this.props.getLineup()
  }

  render() {
    if (this.props.loading) {
      return (
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )
    }

    return (
      <Router>
        <Nav />
          <div className="container">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/lineup" component={Lineup}/>
            <Route exact path="/schedule" component={Schedule}/>
            <Route component={ErrorPage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps, {getLineup})(App);
