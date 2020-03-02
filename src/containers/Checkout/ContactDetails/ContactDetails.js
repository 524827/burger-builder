import React, { Component } from 'react';
import {connect } from 'react-redux';
import { Form, Col, Button, Container, Card } from 'react-bootstrap';

import axios from '../../../axios';
import classes from './ContactDetails.css'
import * as orders from '../../../store/actions/index';
import withErrorHandler from '../../../hoc/withErrorHandler/WithErrorHandler';

class ContactDetails extends Component{

  state = {
    formData: {
      firstName: {
        value: '',
        validation:{
          required: true,
          minLength: 5,
          maxLength:10
        },
        valid: false
      },
      lastName:{
        value: '',
        validation:{
          required: true,
          minLength: 5,
          maxLength:10
        },
        valid: false
      },
      mobile_no: {
        value: '',
        validation:{
          required: true,
          minLength: 5,
          maxLength:10
        },
        valid: false
      },
      emailId:{
        value: '',
        validation:{
          required: true,
          minLength: 5,
          maxLength:10
        },
        valid: false
      },
      street: {
        value: '',
        validation:{
          required: true,
          minLength: 5,
          maxLength:10
        },
        valid: false
      },
      zipCode: {
        value: '',
        validation:{
          required: true,
          minLength: 5,
          maxLength:10
        },
        valid: false
      },
      state: {
        value: '',
        validation:{
          required: true,
        },
        valid: false
      }
    },
    validated: false
  }


  handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      this.props.onOrderBurger(this.state.formData);
    }

    this.setState({
      validated: true
    });
  };

  orderHandler = (event) => {
    console.log(event);
  /*   event.preventDefault();
    console.log(event);
     let formData = new FormData(event.target);
    let contactDetails = {};
    formData.forEach((res,key) => {
      contactDetails[key] = res;
    })
    console.log(formData);
    const data = {
      ingredients: this.props.ings,
      price: this.props.price,
      customer: {
        name: 'namdev',
        mobile_no: '7674638564',
        emailId: 'namdevjagtap@gmail.com',
        address: {
          street: 'trambak road',
          zipCode: '422001',
          state: 'maharashtra',
          country: 'india',
        },
      },
    };
     axios
      .post('customers/ingredients', data)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err)
      }); */
  }

  checkValidition = (value, rules) => {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    return isValid;

  }

  handleChanged = (event) => {
    console.log(event.target.value);
  }

  getFormData = (event, inputElement) => {
    const updatedForm = {
      ...this.state.formData
    }
     const newFormData = {
      ...updatedForm[inputElement]
     };
    newFormData['value'] = event.target.value;
    newFormData['valid'] = this.checkValidition( newFormData.value,newFormData.validation)
    updatedForm[inputElement] = newFormData;
    this.setState({
     formData: updatedForm
    });
  }

  render() {
    return (
      <Container>
        <Card className={classes.FormCard}>
        <h1>Enter Your Contact Data</h1>
          <h4>Your Total Amount is:{this.props.price}</h4>
          </Card>
  <Card className={classes.FormCard}>
  <Form noValidate validated={this.state.validated} onSubmit={(e) => this.handleSubmit(e)}>
   <Form.Row>
    <Form.Group as={Col} controlId="formFirstName">
      <Form.Label>First Name</Form.Label>
                <Form.Control value={this.state.firstName}
                  onChange={event => this.getFormData(event, 'firstName')}
                  type="text" placeholder="Enter Your Firstname"
                  required pattern="[a-zA-Z]+"
                  maxLength={this.state.formData.firstName.validation.maxLength}
                  minLength={this.state.formData.firstName.validation.minLength}/>
          <Form.Control.Feedback type="valid">
            Looks Good
       </Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
            Please provide a valid Name.
       </Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} controlId="formLastName">
       <Form.Label>Last Name</Form.Label>
       <Form.Control type="text" placeholder="Enter Your Lastname" required
       value={this.state.lastName}
       onChange={event => this.getFormData(event, 'lastName')}/>
      </Form.Group>
    </Form.Row>

    <Form.Row>
     <Form.Group as={Col} controlId="FormMobileNo">
      <Form.Label>Mobile Number</Form.Label>
      <Form.Control placeholder="Enter Your Mobile Number" required
      value={this.state.Mobile_no}
      onChange={event => this.getFormData(event, 'mobile_no')}/>
     </Form.Group>

     <Form.Group as={Col} controlId="formEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter Your Email" required
      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
      value={this.state.email}
       onChange={event => this.getFormData(event, 'emailId')}/>
     </Form.Group>
    </Form.Row>
    <Form.Row>
     <Form.Group as={Col} controlId="FormStreet">
      <Form.Label>Street</Form.Label>
      <Form.Control type="text" placeholder="Enter Street" required
      value={this.state.street}
      onChange={event => this.getFormData(event, 'street')}/>
     </Form.Group>

     <Form.Group as={Col} controlId="formZipCode">
      <Form.Label>ZipCode</Form.Label>
      <Form.Control type="text" placeholder="Enter ZipCode" required
      value={this.state.zipcode}
      onChange={event => this.getFormData(event, 'zipCode')}/>
     </Form.Group>
    </Form.Row>
<Form-Row>
  <Col md="6">
  <Form.Group controlId="formState">
  <Form.Label>State</Form.Label>
      <Form.Control required as="select" onChange={(event)=> this.getFormData(event,'state')}>
       <option value=''>Select State...</option>
        <option>Maharashtra</option>
        <option>Karnataka</option>
        <option>Tamilnadu</option>
        <option>Kerala</option>
      </Form.Control>
    </Form.Group>
    </Col>
  </Form-Row>
  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" required/>
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Card>
</Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onOrderBurger:(orderData)=>dispatch(orders.purchaseBurderStart(orderData))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(ContactDetails, axios));


