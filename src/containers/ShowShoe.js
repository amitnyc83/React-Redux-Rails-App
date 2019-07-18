import React, { Component } from 'react';
import { getShoe } from '../actions/shoes';
import { connect } from 'react-redux';
import ShoeCard from '../components/ShoeCard';
import Shoes from './Shoes'


class ShowShoe extends Component {


  componentDidMount() {
    this.props.getShoe(this.props.match.params.shoeId)
  }


  render() {
    let shoe = this.props.shoe[0]
    return (
      <div className='showShoe'>
        <div>
        <h2 className="shoeName">{shoe.name}</h2>
        <h3><p>Name: {shoe.name}</p></h3>
        </div>
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
