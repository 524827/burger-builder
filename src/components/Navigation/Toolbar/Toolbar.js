import React from 'react';
import classes from './Toolbar.css'
import BurgerLogo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
import DrowerToggle from '../SideDrower/DrowerToggle/DrowerToggle';

const Toolbar = (props) => {
  return <header className={classes.Toolbar}>
    <DrowerToggle clicked={props.clicked} />
    <div className = {classes.Logo}>
      <BurgerLogo />
      </div>
    <nav className={classes.DesktopOnly}>
        <NavigationItems/>
    </nav>
</header>
}

export default Toolbar;