import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import ToggleMenuButton from '../../UI/ToggleMenuButton/ToggleMenuButton';

const toolbar = (props) => {
  return (
    <header className = { classes.Toolbar }>
      <ToggleMenuButton clicked = { props.toggleMenuHandler }/>
      <div className = { classes.Logo}>
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
}

export default toolbar;
