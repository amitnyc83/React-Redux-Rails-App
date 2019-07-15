import React, { Component } from 'react';
import './App.css'
import Shoes from './Shoes'


const API_URL = process.env.REACT_APP_API_URL;




class App extends Component {


  componentDidMount() {
    fetch(`${API_URL}/shoes`)
    .then(response => response.json())
    .then(shoes => this.setState({ shoes }))
  }


  render() {
   console.log(this.state)
    return (
      <div className="App">
        <Shoes />
      </div>
    );
  }
}




export default App;
