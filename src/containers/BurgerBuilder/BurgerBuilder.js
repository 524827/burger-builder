import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import classes from './BurgerBuilder.css';
import axios from '../../axios';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/WithErrorHandler'
import * as actions from '../../store/actions/index'

// ingredients base price
class BurgerBuilder extends Component {
  state = {
    purchasable: false,
    purchasing: false,
    loader: false,
  };

  componentDidMount() {
    this.props.onInitIngredients();
   this.props.onPurchasedInit()
  }

  /**
   *@function purchasable()
   * @param {} ingredients
   * This function check weather ingredient count is greater than 0
   * if ingredient is less than 0 then order botton is disable otherwise order botton is enable
   */
  puchasableState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igkeys => {
        return ingredients[igkeys];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    return sum > 0;

  }

  /**
   * @function purchaseHandler
   * This function send customer order details data to server
   */
  purchaseHandler() {
    this.setState({ purchasing: true }); // set true forn open Modal
    if (!this.props.isLogin) {
      this.props.history.push({ pathname: '/login' });
    }
  }

  /**
   * @function handleSaveIgredients()
   * function for handle ingredient
   */
  handleSaveIgredients = () => {
    this.props.history.push({
      pathname: '/checkout',
    });
  }

  /**
   * @function hideModal
   * use to close Modal
   */
  hideModal = () => {
    this.setState({
      purchasing: false
    });
  }

  render() {
    // check if ingredient are available or not
    const disableInfo = { ...this.props.ings };
    for (let keys in disableInfo) {
      disableInfo[keys] = disableInfo[keys] <= 0;
    }

    let orderSummary = (
      <OrderSummary
        ingredients={this.props.ings}
        click={() => this.handleSaveIgredients()}
        price={this.props.tPrice}
        closedModal = {()=>this.hideModal()}
      />
    );
    if (this.state.loader) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        {this.props.error ? null : <Modal
          show={this.state.purchasing}
          hideModal={() => this.hideModal()}>
          {orderSummary}
        </Modal>}
        <div className={classes.Burger}>
          <Burger ingredients={this.props.ings} />
        </div>
        <div>
          <BuildControls
            prizes={this.state.prizes}
            ingredientAdded={this.props.onIngredientAdd}
            ingredientRemove={this.props.onIngredientReomoved}
            disableInfo={disableInfo}
            purchaseHandler={() => this.purchaseHandler()}
            purchasable={this.puchasableState(this.props.ings)}
            currentPrice={this.props.tPrice}
          />
        </div>
      </Aux>
    );
  }
}

// map state to props
const mapStateToProps = (state) => {
  console.log(state.burgerBuilder);
  return {
    ings: state.burgerBuilder.ingredients,
    tPrice: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error,
    isLogin: state.authentication.isLogin
  }
}

// dispatch actions
const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdd: (ingName) => dispatch(actions.addIngredient(ingName)),
    onIngredientReomoved: (ingName) => dispatch(actions.removedIngredient(ingName)),
    onInitIngredients: () => dispatch(actions.initIngredients()),
    onPurchasedInit: () => dispatch(actions.purchaseInit())
}
}
export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
