import React, { Component } from 'react'
import ShoeCard from '../components/ShoeCard';
import ShoeForm from './ShoeForm';
import { connect } from 'react-redux';
import { getShoes } from '../actions/shoes';
import './Shoes.css';
import { Link } from 'react-router-dom';
import { Sticky, Menu, Divider } from 'semantic-ui-react'




class Shoes extends Component {

  componentDidMount() {
    this.props.getShoes()
  }


  render() {
    return(
      <div className="ShoeContainer">
      <Sticky>
        <Menu attached='top' tabular>
          <Menu.Item
            as={Link} to='/'
            name='home'
            color='orange'
            onClick={this.handleMenuClick}
          />
      </Menu>
      </Sticky>
       <Divider hidden />
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

export default connect(mapStateToProps, { getShoes })(Shoes);
