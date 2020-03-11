import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = () =>
  (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/">Burger Bulder</NavigationItem>
      <NavigationItem link="/orders">Orders</NavigationItem>
      <NavigationItem link="/signin">Login</NavigationItem>
    </ul>
  );

export default NavigationItems;