import React from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components /Burger/Burger'

class BurgerBuilder extends React.Component {

    state = {
        ingredients : {
           // bread: 1,
            meat: 0,
            cheese: 0,
            bacon:0,
            salad: 0        
        }
    }

    render ()
        {
            return(
                <Aux>
                   <Burger  ingredients = {this.state.ingredients} />
                    <div>burger controller</div>
                </Aux>
            );
           
       }
}

export default BurgerBuilder;