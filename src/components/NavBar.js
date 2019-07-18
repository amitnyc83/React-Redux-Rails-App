import React from 'react';
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react';


const NavBar = () => {
  return (
    <div>
      <Menu>
        <div>
          <h3 className='item'>Soccer Shop</h3>
        </div>
        <Link to='/' className='item'>
          Home
        </Link>
        <Link to='/shoes' className='item'>
          View Collection
        </Link>
        <Link to='/shoes/new' className='item'>
          Add A Shoe
        </Link>
        <Link to='/about' className='item'>
          About Us
        </Link>
      </Menu>
    </div>
  )
}

export default NavBar;
