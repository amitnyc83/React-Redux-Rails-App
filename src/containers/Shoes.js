import React, { Component } from 'react'
import { connect } from 'react-redux';
import ShoeCard from '../components/ShoeCard';
import ShoeForm from '../containers/ShoeForm';
import ShowShoe from '../containers/ShowShoe';
import { getShoes } from '../actions/shoes';
import { Switch, Route } from 'react-router-dom';
import { Card } from 'semantic-ui-react';







class Shoes extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedShoeBrand:''
    };
  }

  componentDidMount() {
    this.props.getShoes()
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const { match } = this.props;
    return(
      <div>
        <form>
          <h3>Search Bar:</h3>
          <input
            name="selectedShoeBrand"
            type="text"
            placeholder='search by brand'
            onChange={this.handleChange}
            value={this.state.selectedShoeBrand}
            />
        </form>
        <br></br>
        <Switch>
          <Route exact path={match.url}
            render = {() =>
            <Card.Group itemsPerRow={4}>
             {this.state.selectedShoeBrand == '' ? this.props.shoes.map((shoe, id) => <ShoeCard key={id} shoe={shoe} />) :
              this.props.shoes.filter(shoe => shoe.brand.toLowerCase() === this.state.selectedShoeBrand.toLowerCase()).map((shoe, id) => <ShoeCard key={id} shoe={shoe} />)}
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
