import React from 'react';
import classes from './SideDrawer.css';
import Logo from '../../Logo/Logo';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';

import NavigationItems from '../NavigationItems/NavigationItems';

const sideDrawer = (props) => {

  const chainedClass = props.open ? "Open": "Closed";

  return (
    <Aux>
      <Backdrop visible = { props.open } click = { props.closeSideDrawerHandler }/>
      <div className = { [classes.SideDrawer, classes[chainedClass]].join(' ') }>
        <div className = { classes.Logo }>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
