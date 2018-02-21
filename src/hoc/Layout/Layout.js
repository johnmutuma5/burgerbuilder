import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component  {
  constructor (props) {
    super(props);
    this.state = {
      sideDrawerOpen: false
    };
  }

  toggleSideDrawerHandler () {
      this.setState((prevState, props) => {
        return (
          {sideDrawerOpen: !prevState.sideDrawerOpen}
        );
      }
    );
  }


  render () {
    return (
      <Aux>
        <Toolbar toggleMenuHandler = { this.toggleSideDrawerHandler.bind(this) }/>

        <SideDrawer
          open = { this.state.sideDrawerOpen }
          closeSideDrawerHandler = { this.toggleSideDrawerHandler.bind(this) }
        />

        <main className={ classes.Content }>
          { this.props.children }
        </main>
      </Aux>
    );
  }
};


export default Layout;
