import React, { Component } from 'react'
import ShoeCard from '../components/ShoeCard';
import ShoeForm from './ShoeForm';
import { connect } from 'react-redux';
import { getShoes } from '../actions/shoes';
import './Shoes.css';






class Shoes extends Component {

  componentDidMount() {
    this.props.getShoes()
  }


  render() {
    return(
      <div className="ShoeContainer">
       {this.props.shoes.map(shoe => <ShoeCard key={shoe.id} shoe={shoe} />)}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return ({
    shoes: state.shoes
  })
}

export default connect(mapStateToProps, { getShoes })(Shoes);
