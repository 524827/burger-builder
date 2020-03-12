import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem'
import { connect } from 'react-redux';

const NavigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/">Burger Builder</NavigationItem>
      <NavigationItem link="/orders">Orders</NavigationItem>
      {props.isLogin ?<NavigationItem link="/logout">Logout</NavigationItem>
                    : <NavigationItem link="/login">Login</NavigationItem>}
    </ul>);
};
const mapStateToProps = (state) => {
  return {
      isLogin: state.authentication.isLogin
    }
  }

export default connect(mapStateToProps)(NavigationItems);