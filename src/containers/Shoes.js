import React, { Component } from 'react'
import './Shoes.css';

const Shoes = (props) => (
  <div className="ShoeContainer">
   <h1>Shoes</h1>
   {props.shoes.map(shoe =>
      <div className="ShoeCard">
       <img className="ShoeImage" src={shoe.img_url} alt={shoe.name}/>
       <h3>{shoe.name}</h3>
       <h4>{shoe.brand}</h4>
       <p>Price: ${shoe.price}</p>
       <p>Description: {shoe.description}</p>
      </div>
    )}
  </div>
)


export default Shoes;
