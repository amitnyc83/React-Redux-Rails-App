import React, { Component } from 'react'
import ShoeCard from '../components/ShoeCard';
import ShoeForm from './ShoeForm';
import { connect } from 'react-redux';
import './Shoes.css';




class Shoes extends Component {

  componentDidMount() {
    
  }


  render() {
    return(
      <div className="ShoeContainer">
       <h1>Shoes</h1>
       <ShoeForm />
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

export default connect(mapStateToProps)(Shoes);
