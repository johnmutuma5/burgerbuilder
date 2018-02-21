import React from 'react';
import classes from './Backdrop.css';

const backdrop = (props) => {
  const visibility = props.visible? "Visible": "Hidden";

  return (
    <div
      className = { [classes.Backdrop, classes[visibility]].join(' ') }
      onClick = { props.click } >
    </div>
  );
}

export default backdrop;
