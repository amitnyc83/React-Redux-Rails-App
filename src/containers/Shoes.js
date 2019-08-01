import React, { Component } from 'react'
import { connect } from 'react-redux';
import ShoeCard from '../components/ShoeCard';
import ShoeForm from '../containers/ShoeForm';
import ShowShoe from '../containers/ShowShoe';
import { getShoes } from '../actions/shoes';
import { Switch, Route } from 'react-router-dom';
import { Card } from 'semantic-ui-react';







class Shoes extends Component {

  componentDidMount() {
    this.props.getShoes()
  }


  render() {
    const { match } = this.props;
    return(
      <div>
        <Switch>
          <Route exact path={match.url}
            render = {() =>
            <Card.Group itesPerRow={3}>
              {this.props.shoes.map((shoe, id) => <ShoeCard key={id} shoe={shoe} />)}
            </Card.Group>
          }
          />
        <Route exact path="/shoes/new" component={ShoeForm} />
        <Route
          path="/shoes/:shoeId"
          component={ShowShoe}
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
