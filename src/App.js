import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect} from 'react-redux';

import asyncComponent from './hoc/asyncComponent/asyncCompoent';
import Layout from './hoc/Layouts/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logout from './containers/Auth/Logout';


const asyncCheckout = asyncComponent(() => {
  return import('./containers/Checkout/Checkout');
});

const asyncOrders = asyncComponent(() => {
  return import('./containers/Orders/Orders');
});

const asyncAuth = asyncComponent(() => {
  return import('./containers/Auth/Signin/SignIn');
});

const asyncRegister = asyncComponent(() => {
  return import('./containers/Auth/Signup/SignUp');
});


class App extends Component{
  render() {
    let route = (
      <Switch>
        <Route path="/login" component={asyncAuth} />
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/signup" component={asyncRegister} />
        <Redirect to ="/" />
      </Switch>
    );

    if (this.props.isLogin) {
      route = (
        <Switch>
        <Route path="/checkout" component={asyncCheckout} />
        <Route path="/orders" component={asyncOrders} />
        <Route path="/logout" component={Logout} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
        </Switch>
        );
      }

      return (
      <div>
        <Layout>
          {route}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.authentication.isLogin
  }
}

export default connect(mapStateToProps,null) (App);

