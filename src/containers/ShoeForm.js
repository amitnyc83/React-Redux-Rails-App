import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateShoeFormData } from '../actions/shoeForm';

class ShoeForm extends Component {


  handleOnChange = event => {
    const { name, value } = event.target;
    const currentShoeFormData = Object.assign({}, this.props.shoeFormData, {
      [name]: value
    })
    this.props.updateShoeFormData(currentShoeFormData)
  }

  render() {
    const { name, brand, price, img_url, description } = this.props.shoeFormData
    return(
      <div>
        Add A New Shoe To The Inventory
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="name"
              value={name}
              />
          </div>
          <div>
            <label htmlFor="brand">Brand:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="brand"
              value={brand}
              />
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              onChange={this.handleOnChange}
              name="price"
              value={price}
              />
          </div>
          <div>
            <label htmlFor="img_url">Img_url:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="img_url"
              value={img_url}
              />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="description"
              value={description}
              />
          </div>
        </form>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    shoeFormData: state.shoeFormData
  }
}

export default connect(mapStateToProps, { updateShoeFormData })(ShoeForm);
