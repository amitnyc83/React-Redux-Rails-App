import React, { Component } from 'react'
import ShoeCard from '../components/ShoeCard';
import { connect } from 'react-redux';
import { getShoes } from '../actions/shoes';
import { Switch, Route } from 'react-router-dom';
import './Shoes.css';






class Shoes extends Component {

  componentDidMount() {
    this.props.getShoes()
  }


  render() {
    const { shoes, match } = this.props;
    return(
      <div>
        <Switch>
          <Route exact path={match.url}
            render = {() =>
            <div className="ShoeContainer">
              {this.props.shoes.map(shoe => <ShoeCard key={shoe.id} shoe={shoe} />)}
            </div>
          }
          />
        </Switch>
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
