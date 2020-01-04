import React from 'react'
import Aux from '../../../hoc/Aux';

const OrderSummary = (props) => {

    const ingredientSummary = props.ingredients;

    const details = Object.keys(ingredientSummary).map (
        el => ( <li key = {el}>  {el} : {ingredientSummary[el]} </li>)
    )

    return (
    <Aux>
        <h3> order summary</h3>
        <p>details</p>
        <ul>
            {details}
        </ul>
    </Aux>
    );

}

export default OrderSummary ;