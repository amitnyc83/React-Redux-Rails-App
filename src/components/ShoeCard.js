import React, { Component } from 'react';
import { connect } from 'react-redux';
import { likeShoe } from '../actions/shoes';
import {Card, Icon, Image, Divider } from 'semantic-ui-react';
import '../containers/Shoes.css';



class ShoeCard extends Component {
  render(){
    const { shoe } = this.props;

    return(
      <Card>
        <div key={shoe.id} >
          <a href={`/shoes/${shoe.id}`}>

            <Image className="ShoeImage" src={shoe.img_url} alt={shoe.name} />
            <Card.Content>
              <Card.Header><h3>{shoe.name}</h3></Card.Header>
              <h4>{shoe.brand}</h4>
              <p>Price: ${shoe.price}</p>
              <Card.Description>
                <div className="ShoeDescription">
                  Description: {shoe.description}
                </div>
              </Card.Description>
            </Card.Content>
          </a>
          <Divider hidden />
          <Card.Content extra>
            <Icon name='like' />
            <button onClick={() => {this.props.likeShoe(shoe)}}>Like</button>{this.props.shoe.likes}
            </Card.Content>
          </div>
        </Card>
      )
    }
  }






const mapStateToProps = state => {
  return {
    shoes: state.shoes
  }
}





export default connect(mapStateToProps, { likeShoe })(ShoeCard);
