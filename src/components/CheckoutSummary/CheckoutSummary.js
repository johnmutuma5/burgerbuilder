import React from 'react';
import classes from './CheckoutSummary.css';
import Burger from '../Burger/Burger';
import Button from '../UI/Button/Button';


const CheckoutSummary = (props) => {
  return (
    <div className = { classes.CheckoutSummary }>
      <h3>We hope that it tastes good!</h3>
      <Burger ingredients = { props.ingredients } />
      <Button btnType = "Danger" click >CANCEL</Button >
      <Button btnType = "Success" click >CONTINUE</Button>
    </div>
  );
}

export default CheckoutSummary;
