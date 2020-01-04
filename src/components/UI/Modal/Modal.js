import React from 'react'
import Aux from '../../../hoc/Aux'
import './Modal.css'
import Backdrop from '../Backdrop/Backdrop'

const modal = (props) => (
    <Aux>
        <Backdrop show = {props.show} clicked = {props.clicked} />
        <div className = "Modal"> {props.children} </div>
    </Aux>

)

export default modal