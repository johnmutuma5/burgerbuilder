import React, { Component } from 'react';
import classes from './Checkout.css';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
  constructor (props) {
    super(props);
    this.state = {
      ingredients: {
        Bacon: 1,
        Cheese: 1,
        Meat: 1,
        Salad: 1
      }
    }
  }

  render () {
    return (
      <div className = { classes.Checkout }>
          <CheckoutSummary ingredients = { this.state.ingredients } />
      </div>
    );
  }
}

export default Checkout;
