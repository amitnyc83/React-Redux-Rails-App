import React, { Component } from 'react';
import './App.css'
import Shoes from './Shoes'

const shoes = [
  {
    name: "Tiempo",
    brand: "Nike",
    price: 89.99,
    img_url: "https://www.imagehandler.net/?iset=0108&img=A1024621000&fmt=jpg&w=300&h=300&iindex=0088&c=999&cmp=100",
    description: "A Hyperstability outsole guarantees you some of the best traction possible."
  },
  {
    name: "Mercury",
    brand: "Nike",
    price: 109.99,
    img_url: "https://www.imagehandler.net/?iset=0108&img=A1020562000&fmt=jpg&w=300&h=300&iindex=0088&c=999&cmp=100",
    description: "Soft synthetic leather upper. Partial lace cover. Firm ground outsole"
  },
  {
    name: "Nemeziz",
    brand: "Adidas",
    price: 179.99,
    img_url: "https://www.imagehandler.net/?iset=0108&img=A1026271000&fmt=jpg&w=300&h=300&iindex=0088&c=999&cmp=100",
    description: "The adidas Nemeziz line has always focused on agility. Let your game do the talking."
  }
]


class App extends Component {
  render() {
    return (
      <div className="App">
      <Shoes shoes={shoes}/>
    </div>
  );
  }
}


export default App;
