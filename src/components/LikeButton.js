import React, { Component } from 'react';



class LikeButton extends Component {
  render(){
    return(
      <div>
      <button onClick={this.props.likeShoe}>Likes {this.props.shoe.likes}</button>
      </div>
    )
  }
}


export default LikeButton;
