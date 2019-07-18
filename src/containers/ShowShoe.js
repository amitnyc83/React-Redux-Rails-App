import React, { Component } from 'react';
import { getShoe } from '../actions/shoes';
import { connect } from 'react-redux';
import ShoeForm from './ShoeForm'
import ShoeCard from '../components/ShoeCard';
import Shoes from './Shoes'


class ShowShoe extends Component {
  constructor(props) {
    super(props)

    this.state = {
      shoe: {shoe: ''}
    }
  }



  componentDidMount() {
    this.props.getShoe(this.props.match.params.shoeId)
  }


  render() {
    const shoe = this.props.shoe
    return (
      <div key={shoe.id} className='ShoeCard'>
        <img className="ShoeImage" src={shoe.img_url} alt={shoe.name}/>
        <h3>{shoe.name}</h3>
        <h4>{shoe.brand}</h4>
        <p>Price: ${shoe.price}</p>
        <p>Description: {shoe.description}</p>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return ({
    shoe: state.shoes
  })
}


export default connect(mapStateToProps, { getShoe })(ShowShoe);
