import React, { Component } from 'react';
import { getShoe } from '../actions/shoes';
import { deleteShoe } from '../actions/shoes';
import { connect } from 'react-redux';


class ShowShoe extends Component {


  componentDidMount() {
    this.props.getShoe(this.props.match.params.shoeId)
  }




  render() {
    let shoe = this.props.shoe[0];
    const { deleteShoe, history } = this.props;


    return (
      <div className='ShoeContainer'>
        {shoe ? (
        <div>
        <img className="ShoeImage" src={shoe.img_url} alt={shoe.name}/>
        <h3>{shoe.name}</h3>
        <h4>{shoe.brand}</h4>
        <p>Price: ${shoe.price}</p>
        <p>Description: {shoe.description}</p>
        </div>
      ) : (
        <p>Loading....</p>
      )}
          <br></br>
          <button onClick={() => deleteShoe(shoe.id, history)}>DELETE</button>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return ({
    shoe: state.shoes
  })
}


export default connect(mapStateToProps, { deleteShoe, getShoe })(ShowShoe);
