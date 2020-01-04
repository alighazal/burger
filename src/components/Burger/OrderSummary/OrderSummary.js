import React from 'react'
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button'

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
        <Button btnType = "Danger" clicked = {props.cancelled}>cancel</Button>
        <Button btnType = "Success" clicked = {props.continue}>continue</Button>
    </Aux>
    );

}

export default OrderSummary ;