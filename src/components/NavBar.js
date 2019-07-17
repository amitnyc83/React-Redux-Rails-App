import React from 'react';
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <div className="ui inverted fixed menu">
     <div><h3 className='item'>Soccer Shop</h3></div>
     <Link to='/' className='item'>
       Home
     </Link>
     <Link to='/shoes' className='item'>
       Add A Shoe
     </Link>
     <Link to='/about' className='item'>
       About Us
     </Link>
    </div>
  )
}

export default NavBar;
