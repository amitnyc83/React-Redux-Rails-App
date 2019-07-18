import React, { Component } from 'react';
import './App.css'
import NavBar from '../components/NavBar';
import Home from '../components/Home'
import Shoes from '../containers/Shoes'
import ShoeForm from '../containers/ShoeForm'
import ShowShoe from '../containers/ShowShoe'
import About from '../components/About'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from '../components/Footer';
import { Divider } from 'semantic-ui-react'












class App extends Component {


  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <header>
            <h1 className="app-title">Soccer Shop</h1>
          </header>
          <Divider hidden></ Divider>
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/shoes" component={Shoes}/>
            <Route exact path="/shoes/new" component={ShoeForm}/>
            <Route exact path="/shoes/:shoeId" component={ShowShoe} />
            <Route exact path="/about" component={About}/>
            </Switch>
            <Footer />
          </div>
        </Router>
      );
    }
  }




export default App;
