import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState, CartItem } from '../../types/cartTypes';

const initialState: CartState = {
    items: [],
    total: 0,
    discountedTotal: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCartItems(state, action: PayloadAction<CartItem[]>) {
            state.items = action.payload;
            state.total = state.items.reduce((total, item) => total + item.total, 0);
            state.discountedTotal = state.items.reduce((total, item) => total + item.discountedPrice, 0);
        },
        updateQuantity(state, action: PayloadAction<{ id: number; quantity: number }>) {
            const { id, quantity } = action.payload;
            const item = state.items.find(item => item.id === id);
            if (item) {
                item.quantity = quantity;
                item.total = item.price * item.quantity;
                item.discountedPrice = (item.price - (item.price * item.discountPercentage / 100)) * item.quantity;
            }
            state.total = state.items.reduce((total, item) => total + item.total, 0);
            state.discountedTotal = state.items.reduce((total, item) => total + item.discountedPrice, 0);
        },
        removeFromCart(state, action: PayloadAction<number>) {
            state.items = state.items.filter(item => item.id !== action.payload);
            state.total = state.items.reduce((total, item) => total + item.total, 0);
            state.discountedTotal = state.items.reduce((total, item) => total + item.discountedPrice, 0);
        },
    },
});

export const { setCartItems, updateQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;