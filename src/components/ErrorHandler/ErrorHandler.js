import React from 'react';
import classes from './ErrorHandler.css'
import { Button } from 'react-bootstrap';


const errorHandler = (props) => {
 console.log(props);
 const handleBack = () => {

 }
 return (
  <div className={classes.ErrorHandler}>
      <div className={classes.emoji} >
      <span role="img">&#128577;</span>
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