import React, { Component } from 'react';
import './App.css'
import Shoes from './Shoes'
import { BrowserRouter as Router, Route } from 'react-router-dom';









class App extends Component {


  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <h1 className="app-title">Soccer Shop</h1>
          </header>
          <Shoes />
        </div>
      </Router>
    );
  }
}




export default App;
