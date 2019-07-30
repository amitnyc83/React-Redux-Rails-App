import React, { Component } from 'react';
import './App.css'
import NavBar from '../components/NavBar';
import Home from '../components/Home'
import Shoes from '../containers/Shoes'
import ShoeForm from '../containers/ShoeForm'
import ShowShoe from '../containers/ShowShoe'
import About from '../components/About'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Divider, Header } from 'semantic-ui-react'












class App extends Component {


  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Header as='h1' textAlign='center'>
            Soccer Shop
            <Divider hidden />
          </Header>
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/shoes" component={Shoes}/>
            <Route exact path="/shoes/new" component={ShoeForm}/>
            <Route exact path="/shoes/:shoeId" component={ShowShoe} />
            <Route exact path="/about" component={About}/>
            </Switch>
          </div>
        </Router>
      );
    }
  }




export default App;
