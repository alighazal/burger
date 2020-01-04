import React from 'react'
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css'


const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const BuildControls = (props) => {

    return (
   
        <div className = "BuildControls">
        <p>burger price <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map (  ctrls => (
                <BuildControl 
                key = {ctrls.label} 
                label = {ctrls.label}
                added = {() => props.ingredientAdded(ctrls.type)}
                removed = {() => props.ingredientRemoved (ctrls.type)}
                disabled = {props.disabled[ctrls.type]}
                />
            )
        )}
        <button  className = "OrderButton"  disabled = {!props.purchasable}> Order Now</button>
        </div>
    );

} 

export default BuildControls;