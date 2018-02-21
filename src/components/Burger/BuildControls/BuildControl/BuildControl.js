import React from 'react';
import classes from './BuildControl.css';


const buildControl = (props) => {
  return (
    <div className = { classes.BuildControl }>
      <div className = { classes.Label }>{ props.label }</div>

      <button
        onClick = {(event) => (props.handleReduceIngredient(props.label, event)) }
        className = { classes.Less }
        id = { 'reduce'+props.label }
        disabled = { props.disabled }
      >Reduce</button>

      <button
        onClick = {(event) => (props.handleAddIngredient(props.label, event)) }
        className = { classes.More }
      >Add</button>

    </div>
  );
}

export default buildControl;
