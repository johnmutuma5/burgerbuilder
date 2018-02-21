import React from 'react';
import classes from './LoadingError.css';

const loadingSuccess = (props) => {
  return (
    <div className={ classes.ErrorIcon }>
        <svg height="50" width="50">
          <line x1='10' y1='10' x2='40' y2='40'/>
          <line x1='10' y1='40' x2='40' y2='10'/>
        </svg>
        <strong>{ props.children }</strong>
    </div>
  );
}

export default loadingSuccess;
