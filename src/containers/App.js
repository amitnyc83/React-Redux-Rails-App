import React, { Component } from 'react';
import './App.css'
import Shoes from './Shoes'

// const API_URL = process.env.REACT_APP_API_URL;




class App extends Component {

  constructor(props) {
    super(props)

    this.state ={
      shoes: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/shoes')
    .then(response => response.json())
    .then(shoes => this.setState({ shoes }))
  }


  render() {
   console.log(this.state)
    return (
      <div className="App">
        <Shoes shoes={this.state.shoes}/>
      </div>
    );
  }
}




export default App;
