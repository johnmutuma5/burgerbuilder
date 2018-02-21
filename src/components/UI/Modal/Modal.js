import React, { Component } from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';
import Spinner from '../Spinner/Spinner';

class Modal extends Component {
  // constructor (props) {
  //   super(props);
  // }

  shouldComponentUpdate (nextProps, nextState) {
    return nextProps.showModal !== this.props.showModal ||
            nextProps.loading !== this.props.loading ||
            nextProps.loadingSuccessful !== this.props.loadingSuccessful ||
            nextProps.loadingError !== this.props.loadingError;
  }
  componentDidUpdate () {
    // ?
  }

  render () {
    const visibility = this.props.showModal?"Visible":"Hidden";
    const loading = this.props.loading ? "Loading": null;

    let modalContent = this.props.children;

    const spinner =   <Spinner
        success = { this.props.loadingSuccessful }
        successMsg = { this.props.loadingSuccessMsg }
        error = { this.props.loadingError }
        erroMsg = { this.props.loadingErrorMsg }
        />

    if (loading)
      modalContent = spinner;


    return (
      <Aux>
        <Backdrop
          visible = { this.props.showModal }
          click = { this.props.handleBackdropClick }
        />
        <div className = { [classes.Modal, classes[visibility], classes[loading]].join(' ') }
        >
          { modalContent }
        </div>
      </Aux>
    );
  }
}


export default Modal;
