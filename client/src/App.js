import React, { Component } from 'react';
import './App.css';
//import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import SwippingPage from './components/swippingPage'
//import swippingPage from './components/swippingPage'


class App extends Component {
  render() {
    return (
      <div className="App">
        <SwippingPage/>
      </div>
      /*<Router>
      <div>
        <Route exact path="/homepage" component={swippingPage} />
        <Route exact path="/" render={ () => <Redirect to="/homepage" /> } />
      </div>
      </Router>*/

    );
  }
}

export default App;
