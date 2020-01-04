import React from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENTS_PRICES = {
    salad : 0.5,
    cheese : 1,
    meat : 2,
    bacon : .8
}


class BurgerBuilder extends React.Component {

    state = {
        ingredients : {
            meat: 0,
            cheese: 0,
            bacon:0,
            salad: 0        
        },
        totalPrice: 0,
        purchasable : false,
        purchasing: false
    }

    updatePurchaseState (ingredients) {

        const sum = Object.keys(ingredients).map(
                i => {
                    return ingredients[i];
                }
              ).reduce ((sum, el) => {
                  return  sum + el;
              }, 0);

        const updatedPurchaseState = (sum) > 0;
        this.setState ({purchasable: updatedPurchaseState});

    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState ({totalPrice: newPrice, ingredients: updatedIngredients});  
        this.updatePurchaseState (updatedIngredients);
    };

    removeIngredientHandler = (type) => {

        const oldCount = this.state.ingredients[type];
        if (oldCount > 0 ) {
            const updatedCount = oldCount - 1;
            const updatedIngredients = {
                ...this.state.ingredients
            };
            updatedIngredients[type] = updatedCount;
            const priceReduction = INGREDIENTS_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - priceReduction;
            this.setState ({totalPrice: newPrice, ingredients: updatedIngredients});  
           this.updatePurchaseState (updatedIngredients);
        }
        

    };

    updatePurchasingState = () => {
        this.setState ({purchasing: true});
    }

    cancelPurchasingState = () => {
        this.setState ({purchasing: false});
    }
    continuePurchasing = () => {
        alert("yess!")
    }




    render ()
        {
            const disabledInfo  = {...this.state.ingredients};
            for (let k in disabledInfo){
                disabledInfo[k] = disabledInfo[k] <= 0;
            }

            return(
                <Aux>
                    {
                    this.state.purchasing ?
                        <Modal show = {this.state.purchasing}
                        clicked = {this.cancelPurchasingState} >
                            <OrderSummary ingredients = {this.state.ingredients}
                            cancelled = {this.cancelPurchasingState}
                            continue = {this.continuePurchasing}
                            />
                        </Modal>: null
                    }
                   <Burger  ingredients = {this.state.ingredients} />
                    <BuildControls  
                        purchasable = {this.state.purchasable}
                        price = {this.state.totalPrice}
                        ingredientAdded = {this.addIngredientHandler}
                        ingredientRemoved = {this.removeIngredientHandler}
                        disabled = {disabledInfo} 
                        purchasing = {this.updatePurchasingState}
                        />
                </Aux>
            );
           
       }
}

export default BurgerBuilder;