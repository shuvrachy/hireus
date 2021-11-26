import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Members from '../Members/Members';
import './Main.css';

const Main = () => {
// States
    const [members, setMembers] = useState([]);
    const [cart, setCart] = useState([]);


//UseEffect
    useEffect(() => {
    fetch('./members.JSON')
    .then(res => res.json())
    .then(data => setMembers(data));
  }, []);

  const handleAddToCart = (person) => {
    const newCart = [...cart, person];
    setCart(newCart);
  }


    return (
        <div className="main-container">
            <div className="member-container ">
                {
                    members.map(member => <Members 
                        key={member.Id} 
                        member={member}
                        handleAddToCart = {handleAddToCart}
                        ></Members> )
                }

            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Main;