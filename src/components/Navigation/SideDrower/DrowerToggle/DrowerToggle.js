import React from 'react';
import classes from './DrowerToggle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'


const DrowerToggle = (props) => {
  return <div className={classes.DrowerToggle} onClick={props.clicked}>
    <div>
      <FontAwesomeIcon size="2x" icon={faBars} />
   </div>
  </div>
}

export default DrowerToggle;