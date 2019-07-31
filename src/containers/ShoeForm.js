import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateShoeFormData } from '../actions/shoeForm';
import { createShoe } from '../actions/shoes';
import { Form, Button, Message } from 'semantic-ui-react';
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
      <div>
        <Message
          attached
          header='Add A New Shoe To The Inventory'
          content='Fill out the form below to add a new shoe to the collection'
        />
        <Form onSubmit={this.handleonSubmit}>
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
        <Button color='blue'>Add New Shoe</Button>
        </Form>
      </div>
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
