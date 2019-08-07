import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getShoe } from '../actions/shoes';
import { likeShoe } from '../actions/shoes';
import { deleteShoe } from '../actions/shoes';
import LikeButton from '../components/LikeButton';
import Comments from './Comments';






class ShowShoe extends Component {
  constructor(props){
    super(props);
    this.state = {
      comment: '',
      comments: []
    };
  }

  handleChange = event => {
    this.setState({
      comment: event.target.value
    });
  }



  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      comment: '',
      comments: [...this.state.comments, this.state.comment]
    })
  }

  // resetState = () => this.setState({
  //   comment: ''
  // })



  componentDidMount() {
    this.props.getShoe(this.props.match.params.shoeId)
  }

  handleOnClick =() => {
    this.props.likeShoe(this.props.shoe[0])
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
          {shoe ? <LikeButton shoe={shoe} likeShoe={this.handleOnClick} /> : 'Error'}
          <br></br>
          <form onSubmit={this.handleSubmit}>
            <input
              type='text'
              placeholder='add a comment'
              onChange={this.handleChange}
              value={this.state.comment}
            />
          <br></br>
          <button type='submit'>Submit</button>
          </form>
          <Comments comments={this.state.comments} />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return ({
    shoe: state.shoes
  })
}


export default connect(mapStateToProps, { deleteShoe, getShoe, likeShoe })(ShowShoe);
