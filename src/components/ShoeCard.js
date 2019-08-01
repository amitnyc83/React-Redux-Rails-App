import React, { Component } from 'react';
import { connect } from 'react-redux';
import { likeShoe } from '../actions/shoes';




class ShoeCard extends Component {
  render(){
    const { shoe } = this.props;

    return(
      <div key={shoe.id} className="ShoeCard">
        <a href={`/shoes/${shoe.id}`}>
        <img className="ShoeImage" src={shoe.img_url} alt={shoe.name} />
        <h3>{shoe.name}</h3>
        <h4>{shoe.brand}</h4>
        <p>Price: ${shoe.price}</p>
         <p>Description: {shoe.description}</p>
        </a>
        <br></br>
        <button onClick={() => {this.props.likeShoe(shoe)}}>Like</button>{this.props.shoe.likes}
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    shoes: state.shoes
  }
}





export default connect(mapStateToProps, { likeShoe })(ShoeCard);
