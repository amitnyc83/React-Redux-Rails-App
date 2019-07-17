import React, { Component } from 'react';
import './App.css'
import Shoes from './Shoes'
import ShoeForm from './ShoeForm'
import ShowShoe from './ShowShoe'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';












class App extends Component {


  render() {
    return (
      <Router>
        <React.Fragment>
        <div className="App">
          <NavBar />
          <header>
            <h1 className="app-title">Soccer Shop</h1>
          </header>
          <Route exact path="/" component={Shoes}/>
          <Route exact path="/shoes" component={ShoeForm}/>
          <Route path={`/shoes/:shoeId`} component={ShowShoe}/>
        </div>
        </React.Fragment>
      </Router>
    );
  }
}




export default App;
