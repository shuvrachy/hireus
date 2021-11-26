import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props
    let total = 0;
    for(const member of cart) {
        total = total + member.salary;
    }
    
   
        
    return (
        <div className="cart">
            <h2><i class="fas fa-user"></i> Members Added : <span>{props.cart.length}</span></h2>
            <h2> Total Cost : <span>${total}</span> </h2>
            <h3>
                <ol>
                    {
                        cart.map(cart => <li>{cart.name}</li>)
                   }
                </ol>
            </h3>
            
        </div>
    );
};

export default Cart;