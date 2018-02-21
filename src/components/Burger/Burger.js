import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const burger = (props) => {
  //props: ingredients,
  let ingredientKeys = Object.keys(props.ingredients);

  let wrappedIngredients = ingredientKeys.map(ingKey => {
      let ingredientRepeatArray = [];
      let ingRepeatCount = props.ingredients[ingKey];

      for (let ingIndex = 0; ingIndex < ingRepeatCount; ++ingIndex) {
        let ingredient = <BurgerIngredient key = { ingKey + (ingIndex+1) } ingredientName= { ingKey } />;
        ingredientRepeatArray.push(ingredient);
      }
      return ingredientRepeatArray;
  });

  wrappedIngredients = wrappedIngredients.reduce((arr, nextArray) => {
    return arr.concat(nextArray);
  });

  if (wrappedIngredients.length ===0) {
    wrappedIngredients = <p>Start adding ingredients now!</p>;
  }

  return (
    <div className = { classes.Burger }>
      <BurgerIngredient ingredientName='BreadTop'/>
      { wrappedIngredients }
      <BurgerIngredient ingredientName='BreadBottom'/>
    </div>
  )
}


export default burger;
