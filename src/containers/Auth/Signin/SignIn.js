import React, { Component } from 'react';
import { Form, Col, Button, Container, Card, Row } from 'react-bootstrap';
import { connect} from 'react-redux';

import classes from './SignIn.css';
import { NavLink } from 'react-router-dom';
import * as actions from '../../../store/actions/index';
import withErrorHandler from '../../../hoc/withErrorHandler/WithErrorHandler';
import axios from '../../../axios';
import * as validation from '../../../shared/validation';
class SignIn extends Component{

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
   this.props.onUserLogin(this.state.formData);
   this.props.history.push({ pathname: '/' });
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
    <Form.Label column sm="2">
      Email
    </Form.Label>
    <Col sm="10">
       <Form.Control
         onChange={event => this.getFormData(event, 'email')}
         type="text" placeholder="Enter Your Email"
         required
         pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
        <Form.Control.Feedback type="valid">
            Looks Good
      </Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
            Please provide a valid Name.
      </Form.Control.Feedback>
      </Col>
    </Form.Group>
    <Form.Group as={Row} controlId="formPlaintextPassword">
      <Form.Label column sm="2">
        Password
      </Form.Label>
      <Col sm="10">
     <Form.Control type="text" placeholder="Enter Your password" required
       onChange={event => this.getFormData(event, 'password')}/>
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
   <p className={classes.SignUp}>
       Don't have a account  <NavLink exact to="/signup">
        sign up
      </NavLink>
   </p>
   </Form>
 </Card>
</Container>
  );
 }
}





// dispatch actions
const mapDispatchToProps = (dispatch) => {
  return {
    onUserLogin: (userData) => dispatch(actions.userLoginStart(userData)),
  }
}


export default connect(null,mapDispatchToProps)( withErrorHandler(SignIn, axios) );