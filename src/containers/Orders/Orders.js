import React, { Component } from "react";
import Order from "../../components/Order/Order";
import axios from '../../axios';
import ErrorHandler from "../../components/ErrorHandler/ErrorHandler";
import {withRouter } from 'react-router-dom';

class Orders extends Component{

  state = {
   orderDetails: null,
   isError: false,
   errorMsg: null
 }

 componentDidMount(){
   this.getCustumerDetails();
}

  refreshHandler = () => {
    this.getCustumerDetails();
  }

  backHandler = () => {
    this.props.history.push('/');
  }

  getCustumerDetails = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const params = {
      user: user.user,
    };
    axios
   .get('customers/user-orders',{params})
      .then(response => {
        const orderDetails = [];
        for (let key in response.data.result) {
          orderDetails.push({
            ...response.data.result[key],
            id:key
          });
        }
        console.log(orderDetails);
        this.setState({
          orderDetails: orderDetails
        });

   }).catch(error => {
    this.setState({
      isError: true,
      errorMsg: error.message
    });
   });
  }


  render() {
  if (this.state.isError) {
    return <ErrorHandler
      refreshHandler={this.refreshHandler}
      backHandler={this.backHandler}
      errorMsg={this.state.errorMsg} />
 }
  return (
    <div>
      {
        this.state.orderDetails ? this.state.orderDetails.map((order,index) =>
        <Order key={order._id} ingredients={order.ingredients} price={order.price}/>
        ): null
      }

   </div>
  );
 }
}

export default withRouter(Orders);