import React, { useEffect, useState } from 'react';
import useProducts from '../../Hooks/useProducts';
import { addToDb, getStoreCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([]);

    // To store the data in the local-storage previously clicked by the user.
    useEffect(() => {
        const storedCart = getStoreCart();
        const savedCart = [];

        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }

        setCart(savedCart);

    }, [products])

    const handleAddToCart = (selectedProduct) => {
        // console.log(product);
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        // const newCart = [...cart, selectedProduct];   //copy previous value of the cart array and add the new value "product"
        setCart(newCart);
        addToDb(selectedProduct.id)
    }


    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/orders'>
                        <button className='review-button'>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;