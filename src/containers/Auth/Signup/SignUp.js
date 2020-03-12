import React, { Component } from 'react';
import { Form, Col, Button, Container, Card, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

import classes from './SignUp.css';
import * as actions from '../../../store/actions/index';
import * as validation from '../../../shared/validation';

class SignUp extends Component{

 state = {
  formData: {
   email: {
    value: '',
    validation: {
     required: true,
    },
    valid: false
   },

   password: {
    value: '',
    validation: {
     required: true,
    },
    valid: false
   },
   confirmPassword: {
    value: '',
    validation: {
     required: true,
    },
    valid: false
   }
  },
  validated: false
 }



/**
 * @function handleSubmit - function for send form data to server
 * @param event - event object
 */
handleSubmit = (event) => {
 event.preventDefault();
 const form = event.currentTarget;
 if (form.checkValidity() === false) {
   event.stopPropagation();
 } else {
   console.log(this.state.formData);
   this.props.onUserSignUp(this.state.formData);
 }

 this.setState({
   validated: true
 });
};

 /**
 * @function getFormData - function for get form data
 * @param event - event object
 * @param inputElement - contain input element name
 */
getFormData = (event, inputElement) => {
 const updatedForm = {
   ...this.state.formData
 }
  const newFormData = {
   ...updatedForm[inputElement]
  };
 newFormData['value'] = event.target.value;
 newFormData['valid'] = validation.checkValidition( newFormData.value,newFormData.validation)
 updatedForm[inputElement] = newFormData;
 this.setState({
  formData: updatedForm
 });
}


 render() {
  return (
<Container>
 <Card className={classes.FormCard}>
  <Form noValidate validated={this.state.validated} onSubmit={(e) => this.handleSubmit(e)}>
   <Form.Group as={Row} controlId="formPlaintextEmail">
    <Form.Label column sm="3">
      Email
    </Form.Label>
    <Col sm="9">
       <Form.Control
         onChange={event => this.getFormData(event, 'email')}
         type="text" placeholder="Enter Your Email"
         required
         pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
        <Form.Control.Feedback type="valid">
            Looks Good
      </Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
            Please provide a valid Email.
      </Form.Control.Feedback>
      </Col>
    </Form.Group>
    <Form.Group as={Row} controlId="formPlaintextPassword">
      <Form.Label column sm="3">
        Password
      </Form.Label>
      <Col sm="9">
     <Form.Control type="text" placeholder="Enter Your Password" required
       onChange={event => this.getFormData(event, 'password')}/>
     </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formPlaintextPassword">
      <Form.Label column sm="3">
        confirm password
      </Form.Label>
      <Col sm="9">
     <Form.Control type="text" placeholder="Confirm Your Password" required
       onChange={event => this.getFormData(event, 'confirmPassword')}/>
     </Col>
      </Form.Group>
   <div className={classes.SignInBtn}>
    <Button variant="primary" type="submit">
      Submit
    </Button>
    <Button variant="danger">
    Cancel
    </Button>
   </div>
   </Form>
 </Card>
</Container>
  );
 }
}


// dispatch actions
const mapDispatchToProps = (dispatch) => {
  return {
    onUserSignUp: (userData) => dispatch(actions.userSignUpStart(userData)),
  }
}

export default connect(null,mapDispatchToProps) (SignUp);