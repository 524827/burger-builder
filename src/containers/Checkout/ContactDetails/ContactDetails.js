import React, { Component } from 'react';
import { Form, Col, Button, Container, Card } from 'react-bootstrap';
import axios from '../../../axios'
import classes from './ContactDetails.css'

class ContactDetails extends Component{

  state = {
    name: '',
    mobile_no: '',
    mailId: '',
    address: {
      street: '',
      zipCode: '',
      state: '',
    },
  }

  orderHandler = (event) => {
    event.preventDefault();
    console.log(event);
    /* let formData = new FormData(event.target);
    let contactDetails = {};
    formData.forEach((res,key) => {
      contactDetails[key] = res;
    })
    console.log(formData); */
    const data = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'namdev',
        mobile_no: '7674638564',
        mailId: 'namdevjagtap@gmail.com',
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
  <Form noValidate onSubmit={this.orderHandler}>
   <Form.Row>
    <Form.Group as={Col} controlId="formFirstName">
      <Form.Label>First Name</Form.Label>
       <Form.Control type="text" placeholder="Enter Your Firstname" />
      </Form.Group>

      <Form.Group as={Col} controlId="formLastName">
       <Form.Label>Last Name</Form.Label>
       <Form.Control type="text" placeholder="Enter Your Lastname" />
      </Form.Group>
    </Form.Row>

    <Form.Row>
     <Form.Group as={Col} controlId="FormMobileNo">
      <Form.Label>Mobile Number</Form.Label>
      <Form.Control placeholder="Enter Your Mobile Number" />
     </Form.Group>

     <Form.Group as={Col} controlId="formEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter Your Email" />
     </Form.Group>
    </Form.Row>
    <Form.Row>
     <Form.Group as={Col} controlId="FormStreet">
      <Form.Label>Street</Form.Label>
      <Form.Control type="text" placeholder="Enter Street" />
     </Form.Group>

     <Form.Group as={Col} controlId="formZipCode">
      <Form.Label>ZipCode</Form.Label>
      <Form.Control type="text" placeholder="Enter ZipCode" />
     </Form.Group>
    </Form.Row>
<Form-Row>
  <Col md="6">
  <Form.Group controlId="formState">
  <Form.Label>State</Form.Label>
      <Form.Control as="select">
       <option defaultValue="DEFAULT" disabled>Select State...</option>
        <option>Maharashtra</option>
        <option>Karnataka</option>
        <option>Tamilnadu</option>
        <option>Kerala</option>
      </Form.Control>
    </Form.Group>
    </Col>
  </Form-Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
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

export default ContactDetails;

