import React from 'react';
import classes from './ToggleMenuButton.css';

const toggleMenuButton = (props) => {
  return (
    <div
      onClick = { props.clicked }
      className = { classes.ToggleMenuButton }>
      <div></div>
      <div></div>
      <div></div>      
    </div>
  );
}

export default toggleMenuButton;
