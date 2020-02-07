import React from 'react';
import Toast from 'react-bootstrap/Toast';

const toast = (props) => {

  console.log(props);

  return (
    <div
  aria-live="polite"
  aria-atomic="true"
  style={{
    position: 'relative',
    minHeight: '100px',
  }}>
    <Toast style={{position: 'absolute',left:0,bottom:0}} show={props.show}  delay={2000} autohide>
    <Toast.Header>
      <img
        src="holder.js/20x20?text=%20"
        className="rounded mr-2"
        alt=""
      />
      <strong className="mr-auto">Bootstrap</strong>
      <small>11 mins ago</small>
    </Toast.Header>
    <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
    </Toast>
  </div>);
    }

export default toast;