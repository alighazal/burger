import React from 'react'
import './Burger.css'

import BurgerIngredients from  './BurgerIngredients/BurgerIngredients'

const burger = (props) => {

    let enterIngredientMessage = "please enter ingredients";
    let numberOfIngredients = 0;
    let ingredientsArr = [];
    let allIngredients = Object.keys(props.ingredients).map( key => {
        return [String(key),  props.ingredients[key]];
        }
    );  
    
    allIngredients.map (
        el => {
            for (let i = 0; i <  el[1]; i++){
                ingredientsArr.push(<BurgerIngredients key = {el[0] + i } type = {el[0]}/>)
                numberOfIngredients++;
            }

        }
    );


    console.log(allIngredients);
    console.log(ingredientsArr);



    return (
        <div className = "Burger">
            <BurgerIngredients  type = "bread-top" />
            {numberOfIngredients === 0 ? 
                <p>{enterIngredientMessage}</p>
                : null    
            }
            {ingredientsArr}
            <BurgerIngredients  type = "bread-bottom" />

        </div>
    );

}

export default burger;