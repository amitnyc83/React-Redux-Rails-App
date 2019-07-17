import React, { Component } from 'react';
import './App.css'
import Shoes from './Shoes'
import ShoeForm from './ShoeForm'
import About from '../components/About'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { Divider } from 'semantic-ui-react'












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
            <Divider hidden></Divider>
            <Route exact path="/" component={Shoes}/>
            <Route exact path="/shoes" component={ShoeForm}/>
            <Route exact path="/about" component={About}/>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}




export default App;
