import React, { Component } from 'react';
import './App.css'
import About from '../components/About'
import Home from '../components/Home'
import ShoesPage from '../components/ShoesPage'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
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
            <Route exact path="/" component={Home}/>
            <Route exact path="/shoes" component={ShoesPage}/>
            <Route exact path="/about" component={About}/>
            <Footer />
          </div>
        </Router>
      );
    }
  }




export default App;
