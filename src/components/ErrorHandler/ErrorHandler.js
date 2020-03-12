import React from 'react';
import classes from './ErrorHandler.css'
import { Button } from 'react-bootstrap';
import errorImg from '../../assets/images/error-500.png'


const errorHandler = (props) => {

 return (
  <div className={classes.ErrorHandler}>
      <div>
      <img src={errorImg} alt="errImg"/>
      </div>
      <div>
        <h4>Something went wrong!</h4>
      </div>
     <div>
       <h5>{props.errorMsg}</h5>
     </div>
     <div>
    <Button variant="link" onClick={props.refreshHandler}>Refresh</Button>
    <Button variant="link" onClick={props.backHandler}>Back to home</Button>
     </div>
     </div>
 );
}

export default errorHandler;