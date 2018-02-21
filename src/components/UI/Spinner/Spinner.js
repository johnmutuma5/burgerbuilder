import React from 'react';
import classes from './Spinner.css';
import Loading from './Loading/Loading';
import LoadingSuccess from './LoadingSuccess/LoadingSuccess';
import LoadingError from './LoadingError/LoadingError';

const spinner = (props) => {

  let spinnerGraphic = <Loading />;

  if (props.success)
    spinnerGraphic = <LoadingSuccess> { props.successMsg } </LoadingSuccess>;

  if (props.error)
    spinnerGraphic = <LoadingError> { props.erroMsg } </LoadingError>;

  return (
    <div className = { classes.Spinner }>
        { spinnerGraphic }
    </div>
  );
}

export default spinner;
