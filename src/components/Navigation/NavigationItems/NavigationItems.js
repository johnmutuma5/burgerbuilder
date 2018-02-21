import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
  return (
      <ul className = { classes.NavigationItems }>
        <NavigationItem active link = "/"> Burger builder </NavigationItem>
        <NavigationItem link = "/orders"> My orders </NavigationItem>
        <NavigationItem link = "/checkout"> Checkout </NavigationItem>
      </ul>
  );
};

export default navigationItems;
