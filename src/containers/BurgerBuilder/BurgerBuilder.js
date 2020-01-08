import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import classes from './BurgerBuilder.css';
import axios from '../../axios';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/WithErrorHandler'

// ingredients base price
const INGREDIENT_PRICES = {
  salad: 5,
  cheese: 10,
  meat: 3,
  bacon: 7,
};

class BurgerBuilder extends Component {
  state = {
    prizes: [],
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },
    purchasable: false,
    purchasing: false,
    totalPrice: 50,
    loader: false,
    error: false
  };

  componentDidMount() {
   /*  axios.get('customers').then(response => {
      // this.setState({ prizes: response.data.data.prizes });
    }); */
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
    this.setState({
      purchasable: sum > 0,
    });
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
  addIngredientHandler = type => {
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
  };

  /**
   * @param - ingredient type
   * @function rempveIngredientHandler
   * function for remove ingredient into burger
   */
  reomoveIngredientHandler = type => {
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
  };

  handleSaveIgredients = () => {
    this.setState({
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
        this.setState({
          loader: false,
          error:false
        });
      })
      .catch(err => {
        console.log('error')
        this.setState({
          loader: false,
          error:true
        });
      });
  };

  /**
   * @function hideModal
   * use to close Modal
   */
  hideModal = () => {
    this.setState({
      purchasing:false
    })
  }

  render() {
    // check if ingredient are available or not
    const disableInfo = { ...this.state.ingredients };
    for (let keys in disableInfo) {
      disableInfo[keys] = disableInfo[keys] <= 0;
    }

    let orderSummary = (
      <OrderSummary
        ingredients={this.state.ingredients}
        click={() => this.handleSaveIgredients()}
        price={this.state.totalPrice}
        closedModal = {()=>this.hideModal()}
      />
    );
    if (this.state.loader) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        {this.state.error ? null : <Modal
          show={this.state.purchasing}
          hideModal={() => this.hideModal()}>
          {orderSummary}
        </Modal>}
        <div className={classes.Burger}>
          <Burger ingredients={this.state.ingredients} />
        </div>
        <div>
          <BuildControls
            prizes={this.state.prizes}
            ingredientAdded={this.addIngredientHandler}
            ingredientRemove={this.reomoveIngredientHandler}
            disableInfo={disableInfo}
            purchaseHandler={() => this.purchaseHandler()}
            purchasable={this.state.purchasable}
            currentPrice={this.state.totalPrice}
          />
        </div>
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios) ;
