import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {getLineup} from './actions/lineup'
import {getBands} from './actions/bands'
import {getVenues} from './actions/venues'
import {getGenres} from './actions/genres'
import Nav from './components/Nav'
import Home from './components/Home'
import Lineup from './components/Lineup'
import Schedule from './components/Schedule'
import ErrorPage from './components/ErrorPage'

class App extends Component {

  componentDidMount() {
    this.props.getLineup()
    this.props.getBands()
    this.props.getGenres()
    this.props.getVenues()
  }

  render() {
    // if (this.props.loading) {
    //   return (
    //     <div className="spinner-border text-info" role="status">
    //       <span className="visually-hidden">Loading...</span>
    //     </div>
    //   )
    // }

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

// const mapStateToProps = state => {
//   return {
//     loading: state.loading
//   }
// }

export default connect(null, {getLineup, getBands, getGenres, getVenues})(App);
