import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartItems } from './CartAPI';
import { setCartItems } from './CartSlice';
import { RootState } from '../../app/store';
import CartItem from './CartItem';

const CartList: React.FC = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    useEffect(() => {
        async function loadCartItems() {
            const items = await fetchCartItems();
            dispatch(setCartItems(items));
        }
        loadCartItems();
    }, [dispatch]);

    return (
        <div>
            {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
            ))}
        </div>
    );
};

export default CartList;