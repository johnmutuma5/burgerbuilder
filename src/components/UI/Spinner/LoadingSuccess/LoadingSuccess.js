import React from 'react';
import classes from './LoadingSuccess.css';

const loadingSuccess = (props) => {
  return (
    <div className={ classes.SuccessIcon }>
        <svg height="50" width="60">
          <polyline points="5 25, 20 40, 55 5"/>
        </svg>
        <strong>{ props.children }</strong>
    </div>
  );
}

export default loadingSuccess;
