import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateShoeFormData } from '../actions/shoeForm';
import { createShoe } from '../actions/shoes';
import { Button, Form } from 'semantic-ui-react';



class ShoeForm extends Component {


  handleOnChange = event => {
    const { name, value } = event.target;
    const currentShoeFormData = Object.assign({}, this.props.shoeFormData, {
      [name]: value
    })
    this.props.updateShoeFormData(currentShoeFormData)
  }


  handleonSubmit = event => {
    event.preventDefault()
    this.props.createShoe(this.props.shoeFormData)
  }

  render() {
    const { name, brand, price, img_url, description } = this.props.shoeFormData
    return(
      <div>
        <Form onSubmit={this.handleonSubmit}>
        Add A New Shoe To The Inventory
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="textbox"
              onChange={this.handleOnChange}
              name="name"
              value={name}
              />
          </div>
          <div>
            <label htmlFor="brand">Brand:</label>
            <input
              type="textbox"
              onChange={this.handleOnChange}
              name="brand"
              value={brand}
              />
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <input
              type="numberbox"
              onChange={this.handleOnChange}
              name="price"
              value={price}
              />
          </div>
          <div>
            <label htmlFor="img_url">Img_url:</label>
            <input
              type="textbox"
              onChange={this.handleOnChange}
              name="img_url"
              value={img_url}
              />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <input
              type="textarea"
              onChange={this.handleOnChange}
              name="description"
              value={description}
              />
          </div>
          <br></br>
          <Button className="ui button" type="submit">Add New Shoe</Button>
        </Form>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    shoeFormData: state.shoeFormData
  }
}

export default connect(mapStateToProps, { updateShoeFormData, createShoe })(ShoeForm);
