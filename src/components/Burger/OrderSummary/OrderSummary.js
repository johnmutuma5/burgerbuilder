import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  // this could be a functional component. It need not be a class based component

  // componentDidUpdate () {
  //   console.log("[OrderSummary] updated!");
  // }

  render () {
    const orderItems = Object.keys(this.props.orderItems)
    .map((ingKey) => {
      if (this.props.orderItems[ingKey] > 0)
        return (
          <li key = {ingKey}> { ingKey }: { this.props.orderItems[ingKey] } </li>
        );
      return null;
    })
    .filter(orderItem => orderItem); // filter out the nulls

    return (
      <Aux>
        <h3> Your Order </h3>
        <p> A delicious burger containing:  </p>
        <ul>
            { orderItems }
        </ul>
        <p>Total Price: <strong>Kes.{ this.props.burgerPrice.toFixed(2) }</strong></p>
        <p>Continue to purchase? </p>
        <Button click = { this.props.handleUndoReadyToPurchase } btnType = 'Danger'>CANCEL</Button>
        <Button click = { this.props.handleContinueToPurhcase } btnType = 'Success'>CONTINUE</Button>
      </Aux>
    );
  }
}

export default OrderSummary;
