import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  'Salad',
  'Bacon',
  'Cheese',
  'Meat',
];

const buildControls = (props) => {
  let BuildControls = controls.map((cntrl, index) => {
    return (
      <BuildControl
        handleAddIngredient = { props.handleAddIngredient }
        handleReduceIngredient = { props.handleReduceIngredient }
        label = { cntrl } key = { index }
        disabled = { props.disabledInfo[cntrl] }
      />
    );
  })
  return (
    <div className={ classes.BuildControls }>
      <p>Price: <strong>Kes.{ props.burgerPrice.toFixed(2) }</strong> </p>
      { BuildControls }
      <button
        className = { classes.OrderButton }
        disabled = { !props.purchasable }
        onClick = { props.readyToPurchaseHandler }
        >ORDER NOW</button>
    </div>
  );
}

export default buildControls;
