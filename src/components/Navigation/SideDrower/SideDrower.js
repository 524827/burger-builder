import React from 'react';
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrower.css';
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Aux/Aux';

const SideDrower = (props) => {
  let attachClasses = [classes.SideDrower, classes.Close];
  if (props.open) {
    attachClasses = [classes.SideDrower, classes.Open]
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.close}/>
    <div className={attachClasses.join(' ')}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
      </div>
  </Aux>
  );
}

export default SideDrower;