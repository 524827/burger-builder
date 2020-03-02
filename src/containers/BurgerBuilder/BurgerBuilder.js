import React, { Component } from 'react';

import {connect} from 'react-redux';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import classes from './BurgerBuilder.css';
import axios from '../../axios';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/WithErrorHandler'
import * as burgerBuilder from '../../store/actions/index'

// ingredients base price
class BurgerBuilder extends Component {
  state = {
    prizes: [],
    purchasable: false,
    purchasing: false,
    totalPrice: 50,
    loader: false,
  };

  componentDidMount() {
   /*  axios.get('customers').then(response => {
      // this.setState({ prizes: response.data.data.prizes });
    }); */
    this.props.onInitIngredients();
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
  }

  /**
   * @param - ingredient type
   * @function addIngredientHandler
   * function for add ingredient in burger
   */
  /* addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredient = {
      ...this.state.ingredients,
    };
    updatedIngredient[type] = updatedCount;
    const priceAdditions = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAdditions;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredient });
    this.puchasableState(updatedIngredient);
  }; */

  /**
   * @param - ingredient type
   * @function rempveIngredientHandler
   * function for remove ingredient into burger
   */
  /* reomoveIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredient = {
      ...this.state.ingredients,
    };
    updatedIngredient[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredient });
    this.puchasableState(updatedIngredient);
  }; */

  /**
   * @function handleSaveIgredients()
   * function for handle ingredient
   */
  handleSaveIgredients = () => {
    this.props.history.push({
      pathname: '/checkout',
    });
    /*  this.setState({
      loader: true,
      purchasing:false
    });
    const data = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
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
        this.setState({
          loader: false,
          error:false
        });
        let queryParam = [];
        for (let i in this.state.ingredients) {
          queryParam.push(encodeURIComponent(i)+ '=' +encodeURIComponent(this.state.ingredients[i]));
        }
        queryParam.push('price=' + this.state.totalPrice);
       const queryString = queryParam.join('&');
        this.props.history.push({
          pathname: '/checkout',
          search:'?'+ queryString
        })
      })
      .catch(err => {
        console.log(err)
        this.setState({
          loader: false,
          error:true
        });
      }); */
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

const mapStateToProps = (state) => {
  console.log(state.burgerBuilder);
  return {
    ings: state.burgerBuilder.ingredients,
    tPrice: state.totalPrice,
    error: state.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdd: (ingName) => dispatch(burgerBuilder.addIngredient(ingName)),
    onIngredientReomoved: (ingName) => dispatch(burgerBuilder.removedIngredient(ingName)),
    onInitIngredients:()=> dispatch(burgerBuilder.initIngredients()),
}
}
export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
