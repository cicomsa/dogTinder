import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
//import swippingPage from './components/swippingPage'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="../dog.png" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Dog Tinder</h1>
        </header>
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
