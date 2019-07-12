import React from 'react';

const ShoeCard = ({ shoe }) => (
  <div key={shoe.id} className="ShoeCard">
   <img className="ShoeImage" src={shoe.img_url} alt={shoe.name}/>
   <h3>{shoe.name}</h3>
   <h4>{shoe.brand}</h4>
   <p>Price: ${shoe.price}</p>
   <p>Description: {shoe.description}</p>
  </div>
)


export default ShoeCard;
