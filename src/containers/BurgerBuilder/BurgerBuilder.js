import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import ajax from './BurgerBuilderRequests';
import Spinner from '../../components/UI/Spinner/Spinner';

const INGREDIENT_PRICES = {
  Salad: 20,
  Bacon: 55,
  Cheese: 55,
  Meat: 45
};

class BurgerBuilder extends Component {
  constructor (props) {
    super(props)
    this.state = {
      // ingredients: {
      //   Salad: 0,
      //   Bacon: 0,
      //   Cheese: 0,
      //   Meat: 0,
      // },
      ingredients: null,
      totalPrice: 25,
      readyToPurchase: false,
      loading: false,
      purchaseComplete: false,
      purchaseError: false
    }
  }

  componentDidMount () {
    ajax.get ('/ingredients.json') // returns promise
    .then (function (res) {
      this.setState( (prevState, props) => {
        return {
          ingredients: res
        }
      });
    }.bind(this))
    .catch ();
  }

  handleAddIngredient(ingredient, event) {
    // let currentIngredients = Object.assign({}, this.state.ingredients);
    let currentIngredients = {...this.state.ingredients};
    let currentPrice = this.state.totalPrice;

    currentIngredients[ingredient]++;
    currentPrice+=INGREDIENT_PRICES[ingredient];

    if (currentIngredients[ingredient] > 0) {
      let reduceButton = document.getElementById('reduce'+ingredient);
      reduceButton.disabled = false;
    }
    this.setState((prevState, props) => {
        return ( // a javascript object
          {
            ingredients: currentIngredients,
            totalPrice: currentPrice
          }
        );
      }
    );
  }


  handleReduceIngredient(ingredient, event) {
    // let currentIngredients = Object.assign({}, this.state.ingredients);
    let currentIngredients = {...this.state.ingredients};
    let currentPrice = this.state.totalPrice;

    if (currentIngredients[ingredient]>0)
      --currentIngredients[ingredient];
      currentPrice-=INGREDIENT_PRICES[ingredient];

    this.setState((prevState, props) => {
        return ( // a javascript object
          {
            ingredients: currentIngredients,
            totalPrice: currentPrice
          }
        );
      }
    );
  }

  readyToPurchaseHandler () {
    this.setState((prevState, props) => (
        {
          readyToPurchase: true,
        }
      )
    );
  }

  handleUndoReadyToPurchase () {
    this.setState((prevState, props) => (
      {
        readyToPurchase: false,
        loading: false,
        purchaseComplete: false
      }
    ));
  }

  handleContinueToPurhcase () {
    // this.setState({loading: true});
    //
    // const data = {
    //   user: "Lazuli",
    //   ingredients: this.state.ingredients,
    //   price: this.state.totalPrice,
    //   deliveryMode: 'fastest'
    // }
    //
    // ajax.post ('/orders.json', data) // returns a promise
    // .then(function (res) {
    //   this.setState(
    //     {
    //       purchaseComplete: true
    //     }
    //   );
    // }.bind(this))
    // .catch(function (rej) {
    //   console.error(rej);
    //   this.setState(
    //     {
    //       purchaseError: true
    //     }
    //   );
    // }.bind(this))
    this.props.history.push("/checkout");
  }

  render () {
    const disabledInfo = {...this.state.ingredients };
    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0;
    }

    const purchasable = Object.keys(disabledInfo).map( (ingKey) => {
      return disabledInfo[ingKey];
    }).includes(false); // check if any reduceIngredient button is active signalling that the burger is not empty
    const burgerIngredients = {...this.state.ingredients};

    let orderSummary = (
      <OrderSummary
        orderItems = { burgerIngredients }
        burgerPrice = { this.state.totalPrice }
        handleUndoReadyToPurchase = { this.handleUndoReadyToPurchase.bind(this) }
        handleContinueToPurhcase = { this.handleContinueToPurhcase.bind(this) } />
    );

    let theBurger = <Spinner />;
    // let theBurger = "BurgerPlaceHolder";
    if (this.state.ingredients)
      theBurger = <Burger ingredients = { burgerIngredients }/>;

    return (
      <Aux>
        <Modal
          showModal = { this.state.readyToPurchase }
          handleBackdropClick = { this.handleUndoReadyToPurchase.bind(this) }
          loading = { this.state.loading }
          loadingSuccessful = { this.state.purchaseComplete }
          loadingSuccessMsg = { "Purchase Successful!" }
          loadingError = { this.state.purchaseError }
          loadingErrorMsg = { "Purchase Unsuccessful!" }
        >
          { orderSummary }
        </Modal>


        { theBurger }
        <BuildControls
          handleAddIngredient = { this.handleAddIngredient.bind(this) }
          handleReduceIngredient = { this.handleReduceIngredient.bind(this) }
          readyToPurchaseHandler = { this.readyToPurchaseHandler.bind(this) }
          disabledInfo = { disabledInfo }
          burgerPrice = { this.state.totalPrice }
          purchasable = { purchasable }
        />
      </Aux>
    )
  };
}

export default BurgerBuilder;
