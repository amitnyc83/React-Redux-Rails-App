import React from 'react';


const ShoeCard = ({ shoe }) => (
  <div key={shoe.id} className="ShoeCard">
    <a href={`shoes/${shoe.id}`}>
   <img className="ShoeImage" src={shoe.img_url} alt={shoe.name}/>
   <h3>{shoe.name}</h3>
   <h4>{shoe.brand}</h4>
   <p>Price: ${shoe.price}</p>
   <p>Description: {shoe.description}</p>
   </a>
  </div>
)


export default ShoeCard;
