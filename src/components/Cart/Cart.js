import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    // console.log(cart);
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }

    // Tax calculate considering tax as 10%
    const Tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + Tax;

    return (
        <div className='cart'>
            <h4 className='cart-heading'>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping} </p>
            <p>Tax: ${Tax}</p>
            <h3>Grand Total: ${grandTotal} </h3>
            {props.children}
        </div>
    );
};

export default Cart;