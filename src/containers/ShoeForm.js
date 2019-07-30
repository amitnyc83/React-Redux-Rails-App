import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateShoeFormData } from '../actions/shoeForm';
import { createShoe } from '../actions/shoes';
import { Form } from 'semantic-ui-react';
import FormErrors from '../components/FormErrors'



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
     const { createShoe, shoeFormData, history } = this.props;
     createShoe(shoeFormData, history);
  }

  render() {
    const { name, brand, price, img_url, description } = this.props.shoeFormData;
    return(
      <Form onSubmit={this.handleonSubmit}>
        Add A New Shoe To The Inventory
        { this.props.errors === true ? <FormErrors /> : null }
        <Form.Group widths='equal'>
          <Form.Input
            fluid label='Name'
            onChange={this.handleOnChange}
            placeholder='name'
            value={name}
          />
         <Form.Input
           fluid label='Brand'
           onChange={this.handleOnChange}
           placeholder='brand'
           value={brand}
          />
          <Form.Input
           fluid label='Price'
           onChange={this.handleOnChange}
           placeholder='price'
           value={price}
          />
          <Form.Input
            fluid label='Image_url'
            onChange={this.handleOnChange}
            placeholder='img_url'
            value={img_url}
          />
        </Form.Group>
        <Form.TextArea label='Description' placeholder='Tell us more about this shoe...' value={description}/>
        <Form.Button>Add New Shoe</Form.Button>
      </Form>
    )
  }
}


const mapStateToProps = state => {
  return {
    shoeFormData: state.shoeFormData,
    errors: state.errors
  }
}

export default connect(mapStateToProps, { updateShoeFormData, createShoe })(ShoeForm);
