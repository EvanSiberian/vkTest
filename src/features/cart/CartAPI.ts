import axios from 'axios';
import { CartItem } from '../../types/cartTypes';

export const fetchCartItems = async (): Promise<CartItem[]> => {
    try {
        const response = await axios.get('https://dummyjson.com/carts/1');
        return response.data.products;
    } catch (error) {
        throw error;
    }
};
