import React, { Component } from 'react';

import classes from './NavigationItem.css';
import { NavLink } from 'react-router-dom';



class NavigationItem extends Component{

  render() {

    return (
      <li className={classes.NavigationItem}>
       <NavLink exact to={this.props.link} activeClassName={classes.active}>
            {this.props.children}
        </NavLink>
      </li>
    );
}
}
export default NavigationItem;