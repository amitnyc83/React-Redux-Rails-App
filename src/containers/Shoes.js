import React, { Component } from 'react'
import ShoeCard from '../components/ShoeCard';
import ShoeForm from './ShoeForm';
import './Shoes.css';




class Shoes extends Component {



  render() {
    return(
      <div className="ShoeContainer">
       <h1>Shoes</h1>
       {this.props.shoes.map(shoe => <ShoeCard key={shoe.id} shoe={shoe} />)}
       <ShoeForm />
      </div>
    )
  }
}


export default Shoes;
